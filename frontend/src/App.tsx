import { useEffect, useState } from 'react'
import { BookOpen, Code2, Filter, Plus, Search, Trash2, Play, Send, Save, Eye, EyeOff, ChevronDown, ChevronRight, X } from 'lucide-react'
import Editor from '@monaco-editor/react'
import ReactMarkdown from 'react-markdown'
import { api } from './lib/api'
import { execution, problemmanagement } from './proto/compiled.js'

// Using the generated protobuf enums
const DifficultyEnum = problemmanagement.Difficulty;
const LanguageEnum = problemmanagement.Language;

type DifficultyString = 'EASY' | 'MEDIUM' | 'HARD';
type LanguageString = 'PYTHON' | 'JAVA' | 'C' | 'CPP';
type TestCaseDraft = { id: string; input: string; expectedOutput: string; hidden: boolean };

const emptyForm = { 
  title: '', 
  difficulty: 'MEDIUM' as DifficultyString, 
  description: '', 
  examples: '', 
  constraints: '', 
  intuition: '', 
  approach: '', 
  timeComplexity: 'O(n)', 
  spaceComplexity: 'O(1)', 
  topics: '' 
}

const starter = {
  PYTHON: 'def solve():\n    pass\n\nif __name__ == "__main__":\n    solve()\n',
  JAVA: 'import java.io.*;\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // write your solution\n    }\n}\n',
  C: '#include <stdio.h>\n\nint main(void) {\n    // write your solution\n    return 0;\n}\n',
  CPP: '#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    // write your solution\n    return 0;\n}\n'
}

function App() {
  const [problems, setProblems] = useState<problemmanagement.IProblem[]>([]);
  const [selected, setSelected] = useState<problemmanagement.IProblem | null>(null);
  const [query, setQuery] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [mode, setMode] = useState<'study' | 'editor'>('study');
  const [language, setLanguage] = useState<LanguageString>('PYTHON');
  const [code, setCode] = useState(starter.PYTHON);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<execution.IExecutionResult | null>(null);
  const [showIntuition, setShowIntuition] = useState(false);
  const [showApproach, setShowApproach] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<any>(emptyForm);
  const [testCases, setTestCases] = useState<TestCaseDraft[]>([]);
  const [saving, setSaving] = useState(false);

  const addTestCase = () => setTestCases(tc => [...tc, { id: '', input: '', expectedOutput: '', hidden: false }]);
  const updateTestCase = (index: number, patch: Partial<TestCaseDraft>) =>
    setTestCases(tc => tc.map((t, i) => (i === index ? { ...t, ...patch } : t)));
  const removeTestCase = (index: number) => setTestCases(tc => tc.filter((_, i) => i !== index));

  const load = () => {
    // Note: GET requests don't have a body, so we just decode the response
    api.get('/problems', { params: { q: query || undefined, difficulty: difficulty || undefined } })
      .then(r => {
        const decoded = problemmanagement.ProblemListResponse.decode(new Uint8Array(r.data));
        setProblems(decoded.problems || []);
      })
      .catch(console.error);
  };

  useEffect(() => { load() }, [query, difficulty]);

  const open = (id: string) => {
    api.get(`/problems/${id}`)
      .then(r => {
        const decoded = problemmanagement.Problem.decode(new Uint8Array(r.data));
        setSelected(decoded);
        const s = decoded.solutions?.find(x => x.language === LanguageEnum[language]);
        setCode(s?.code || starter[language]);
        setMode('study');
        setShowIntuition(false); setShowApproach(false); setShowSolution(false);
      })
      .catch(console.error);
  };

  const changeLang = (l: LanguageString) => {
    setLanguage(l);
    const s = selected?.solutions?.find(x => x.language === LanguageEnum[l]);
    setCode(s?.code || starter[l]);
    setOutput(null);
  };

  const saveSolution = async () => {
    if (!selected) return;
    setSaving(true);
    try {
      const payload = problemmanagement.Problem.create({
        ...selected,
        solutions: [
          ...(selected.solutions || []).filter(s => s.language !== LanguageEnum[language]),
          { language: LanguageEnum[language], code }
        ]
      });
      
      const buffer = problemmanagement.Problem.encode(payload).finish();
      const r = await api.put(`/problems/${selected.id}`, buffer);
      const decoded = problemmanagement.Problem.decode(new Uint8Array(r.data));
      
      setSelected(decoded);
      setOutput({ status: 'SAVED', stdout: 'Solution saved to problem vault.', stderr: '', executionTimeMs: 0 });
    } catch (e: any) {
      setOutput({ status: 'ERROR', stdout: '', stderr: 'Failed to save solution', executionTimeMs: 0 });
    } finally {
      setSaving(false);
    }
  };

  const run = async () => {
    setSaving(true);
    try {
      const payload = execution.RunRequest.create({ language: language.toLowerCase(), code, input });
      const buffer = execution.RunRequest.encode(payload).finish();
      
      const r = await api.post('/execute/run', buffer);
      const decoded = execution.ExecutionResult.decode(new Uint8Array(r.data));
      setOutput(decoded);
    } catch (e: any) {
      setOutput({ status: 'ERROR', stdout: '', stderr: 'Execution network failed', executionTimeMs: 0 });
    } finally {
      setSaving(false);
    }
  };

  const submit = async () => {
    if (!selected) return;
    setSaving(true);
    try {
      const payload = execution.RunRequest.create({ language: language.toLowerCase(), code });
      const buffer = execution.RunRequest.encode(payload).finish();

      const r = await api.post(`/execute/submit/${selected.id}`, buffer);
      const decoded = execution.SubmissionResponse.decode(new Uint8Array(r.data));
      
      // Temporary raw dump of results for the UI
      setOutput({ status: decoded.status, stdout: JSON.stringify(decoded.results, null, 2), stderr: '', executionTimeMs: 0 });
    } catch (e: any) {
      setOutput({ status: 'ERROR', stdout: '', stderr: 'Submission network failed', executionTimeMs: 0 });
    } finally {
      setSaving(false);
    }
  };

  const create = async () => {
    setSaving(true);
    try {
      const payload = problemmanagement.Problem.create({
        ...form,
        difficulty: DifficultyEnum[form.difficulty as keyof typeof DifficultyEnum],
        topics: form.topics.split(',').map((x: string) => x.trim()).filter(Boolean),
        // This form never touches saved solutions, so carry the existing ones through
        // untouched when editing — otherwise they'd be wiped by the backend's sync.
        solutions: editingId ? (selected?.solutions || []) : [],
        tests: testCases
          .filter(t => t.input.trim() !== '' || t.expectedOutput.trim() !== '')
          .map(t => ({ id: t.id, input: t.input, expectedOutput: t.expectedOutput, hidden: t.hidden }))
      });
      
      const buffer = problemmanagement.Problem.encode(payload).finish();
      
      let r;
      if (editingId) {
        r = await api.put(`/problems/${editingId}`, buffer);
      } else {
        r = await api.post('/problems', buffer);
      }
      
      const decoded = problemmanagement.Problem.decode(new Uint8Array(r.data));
      setShowForm(false);
      setForm(emptyForm);
      setEditingId(null);
      await load();
      if (decoded.id) open(decoded.id);
    } finally {
      setSaving(false);
    }
  };

  const remove = async () => {
    if (!selected || !confirm('Delete this problem?')) return;
    await api.delete('/problems/' + selected.id);
    setSelected(null);
    await load();
  };

  // UI Rendering remains unchanged
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand"><div className="logo">DS</div><div><strong>Personal DSA</strong><span>your own problem vault</span></div></div>
        <button className="new-btn" onClick={() => { setEditingId(null); setForm(emptyForm); setTestCases([]); setShowForm(true) }}><Plus size={18} /> New Problem</button>
        <div className="search"><Search size={16} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search problems..." /></div>
        <div className="filters">
          <Filter size={15} />
          <select value={difficulty} onChange={e => setDifficulty(e.target.value)}>
            <option value="">All difficulty</option>
            <option value="EASY">Easy</option>
            <option value="MEDIUM">Medium</option>
            <option value="HARD">Hard</option>
          </select>
        </div>
        <div className="problem-list">
          {problems.map(p => (
            <button className={'problem-row ' + (selected?.id === p.id ? 'active' : '')} key={p.id} onClick={() => p.id && open(p.id)}>
              <div><b>{p.title}</b>
                <div className="tags">{p.topics?.slice(0, 3).map(t => <span key={t}>{t}</span>)}</div>
              </div>
              <span className={'difficulty ' + (p.difficulty === DifficultyEnum.EASY ? 'easy' : p.difficulty === DifficultyEnum.HARD ? 'hard' : 'medium')}>
                {p.difficulty === DifficultyEnum.EASY ? 'Easy' : p.difficulty === DifficultyEnum.HARD ? 'Hard' : 'Medium'}
              </span>
            </button>
          ))}
        </div>
      </aside>
      <main className="main">
        {!selected ? <div className="empty"><BookOpen size={54} /><h1>Your DSA notebook</h1><p>Add problems, write the intuition and approach, then practice the solution in your browser.</p><button className="new-btn" onClick={() => setShowForm(true)}><Plus size={18} /> Create your first problem</button></div> : <>
          <header className="topbar">
            <div>
              <div className="breadcrumb">Problems / {selected.title}</div>
              <div className="titleline">
                <h1>{selected.title}</h1>
                <span className={'difficulty ' + (selected.difficulty === DifficultyEnum.EASY ? 'easy' : selected.difficulty === DifficultyEnum.HARD ? 'hard' : 'medium')}>
                  {selected.difficulty === DifficultyEnum.EASY ? 'Easy' : selected.difficulty === DifficultyEnum.HARD ? 'Hard' : 'Medium'}
                </span>
                {selected.topics?.map(t => <span className="topic" key={t}>{t}</span>)}
              </div>
            </div>
            <div className="actions">
              <button title="Delete" className="icon-btn danger" onClick={remove}><Trash2 size={18} /></button>
              <button className="tab" onClick={() => {
                setEditingId(selected.id || null);
                setForm({
                  title: selected.title,
                  difficulty: selected.difficulty === DifficultyEnum.EASY ? 'EASY' : selected.difficulty === DifficultyEnum.HARD ? 'HARD' : 'MEDIUM',
                  description: selected.description,
                  examples: selected.examples,
                  constraints: selected.constraints,
                  intuition: selected.intuition,
                  approach: selected.approach,
                  timeComplexity: selected.timeComplexity,
                  spaceComplexity: selected.spaceComplexity,
                  topics: selected.topics?.join(', ') || ''
                });
                setTestCases((selected.tests || []).map(t => ({
                  id: t.id || '',
                  input: t.input || '',
                  expectedOutput: t.expectedOutput || '',
                  hidden: !!t.hidden
                })));
                setShowForm(true);
              }}><Save size={16} /> Edit</button>
              <button className={'tab ' + (mode === 'study' ? 'selected' : '')} onClick={() => setMode('study')}><BookOpen size={16} /> Study</button>
              <button className={'tab ' + (mode === 'editor' ? 'selected' : '')} onClick={() => setMode('editor')}><Code2 size={16} /> Practice</button>
            </div>
          </header>
          <div className="content">
            {mode === 'study' ? <Study p={selected} onPractice={() => setMode('editor')} showIntuition={showIntuition} setShowIntuition={setShowIntuition} showApproach={showApproach} setShowApproach={setShowApproach} showSolution={showSolution} setShowSolution={setShowSolution} /> : <Practice language={language} changeLang={changeLang} code={code} setCode={setCode} input={input} setInput={setInput} output={output} run={run} submit={submit} save={saveSolution} saving={saving} />}
          </div>
        </>}
      </main>

      {showForm && (
        <div className="modal-backdrop">
          <div className="modal">
            <div className="modal-head"><h2>{editingId ? 'Edit Problem' : 'Create Problem'}</h2><button className="icon-btn" onClick={() => setShowForm(false)}><X size={18} /></button></div>
            <div className="form-grid">
              <label>Title<input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} /></label>
              <label>Difficulty
                <select value={form.difficulty} onChange={e => setForm({ ...form, difficulty: e.target.value })}>
                  <option value="EASY">Easy</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="HARD">Hard</option>
                </select>
              </label>
              <label className="full">Topics<input placeholder="arrays, hash-map, sliding-window" value={form.topics} onChange={e => setForm({ ...form, topics: e.target.value })} /></label>
              {[['Description', 'description'], ['Examples', 'examples'], ['Constraints', 'constraints'], ['Intuition', 'intuition'], ['Approach', 'approach']].map(([label, key]) => (
                <label className="full" key={key}>{label}<textarea value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} placeholder="Markdown supported" /></label>
              ))}
              <label>Time complexity<input value={form.timeComplexity} onChange={e => setForm({ ...form, timeComplexity: e.target.value })} /></label>
              <label>Space complexity<input value={form.spaceComplexity} onChange={e => setForm({ ...form, spaceComplexity: e.target.value })} /></label>
              <div className="full testcases-block">
                <div className="testcases-headrow">
                  <span>Test cases</span>
                  <button type="button" className="tc-add" onClick={addTestCase}><Plus size={14} /> Add test case</button>
                </div>
                {testCases.length === 0 && (
                  <div className="testcases-empty">No test cases yet — Submit needs at least one to grade against.</div>
                )}
                {testCases.map((tc, i) => (
                  <div className="testcase-row" key={i}>
                    <div className="testcase-fields">
                      <textarea placeholder="stdin" value={tc.input} onChange={e => updateTestCase(i, { input: e.target.value })} />
                      <textarea placeholder="expected stdout" value={tc.expectedOutput} onChange={e => updateTestCase(i, { expectedOutput: e.target.value })} />
                    </div>
                    <div className="testcase-meta">
                      <label className="hidden-toggle">
                        <input type="checkbox" checked={tc.hidden} onChange={e => updateTestCase(i, { hidden: e.target.checked })} /> Hidden
                      </label>
                      <button type="button" title="Remove test case" className="icon-btn danger" onClick={() => removeTestCase(i)}><Trash2 size={14} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-actions">
              <button className="secondary" onClick={() => setShowForm(false)}>Cancel</button>
              <button className="primary" disabled={!form.title || saving} onClick={create}><Save size={16} /> {editingId ? 'Save changes' : 'Save problem'}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function Study({ p, onPractice, showIntuition, setShowIntuition, showApproach, setShowApproach, showSolution, setShowSolution }: { p: problemmanagement.IProblem; onPractice: () => void; showIntuition: boolean; setShowIntuition: (v: boolean) => void; showApproach: boolean; setShowApproach: (v: boolean) => void; showSolution: boolean; setShowSolution: (v: boolean) => void }) {
  return (
    <div className="study">
      <section className="card">
        <div className="section-head"><h2>Problem</h2></div>
        <article className="markdown"><ReactMarkdown>{p.description || '_No description yet._'}</ReactMarkdown></article>
        {p.examples && <><div className="subhead">Examples</div><article className="markdown"><ReactMarkdown>{p.examples}</ReactMarkdown></article></>}
        {p.constraints && <><div className="subhead">Constraints</div><article className="markdown"><ReactMarkdown>{p.constraints}</ReactMarkdown></article></>}
      </section>
      <Reveal title="Intuition" open={showIntuition} setOpen={setShowIntuition}><article className="markdown"><ReactMarkdown>{p.intuition || '_No intuition yet._'}</ReactMarkdown></article></Reveal>
      <Reveal title="Approach" open={showApproach} setOpen={setShowApproach}>
        <article className="markdown"><ReactMarkdown>{p.approach || '_No approach yet._'}</ReactMarkdown></article>
        <div className="complexity"><span>Time <b>{p.timeComplexity || ' '}</b></span><span>Space <b>{p.spaceComplexity || ' '}</b></span></div>
      </Reveal>
      <Reveal title="Reveal saved solution" open={showSolution} setOpen={setShowSolution}>
        <pre className="solution-preview">{p.solutions?.find(s => s.language === LanguageEnum.JAVA)?.code || p.solutions?.[0]?.code || 'No solution saved yet.'}</pre>
      </Reveal>
      <button className="practice-cta" onClick={onPractice}>Start practicing <Code2 size={17} /></button>
    </div>
  )
}

function Reveal({ title, open, setOpen, children }: { title: string; open: boolean; setOpen: (v: boolean) => void; children: any }) {
  return (
    <section className={'card reveal ' + (open ? 'open' : '')}>
      <button className="reveal-btn" onClick={() => setOpen(!open)}>
        {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}<h2>{title}</h2>{open ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
      {open && <div className="reveal-body">{children}</div>}
    </section>
  )
}

function Practice({ language, changeLang, code, setCode, input, setInput, output, run, submit, save, saving }: { language: LanguageString; changeLang: (l: LanguageString) => void; code: string; setCode: (v: string) => void; input: string; setInput: (v: string) => void; output: execution.IExecutionResult | null; run: () => void; submit: () => void; save: () => void; saving: boolean }) {
  return (
    <div className="practice">
      <div className="practice-grid">
        <section className="editor-card">
          <div className="editor-toolbar">
            <select value={language} onChange={e => changeLang(e.target.value as LanguageString)}>
              <option value="PYTHON">Python</option>
              <option value="JAVA">Java</option>
              <option value="C">C</option>
              <option value="CPP">C++</option>
            </select>
            <span className="editor-note">Monaco Editor</span>
          </div>
          <div className="editor">
            <Editor height="55vh" language={language === 'CPP' ? 'cpp' : language.toLowerCase()} theme="vs-dark" value={code} onChange={v => setCode(v || '')} options={{ fontSize: 14, minimap: { enabled: false }, automaticLayout: true, scrollBeyondLastLine: false }} />
          </div>
        </section>
        <section className="io-card">
          <div className="io-pane">
            <div className="io-title">Custom input</div>
            <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="stdin"></textarea>
          </div>
          <div className="io-pane">
            <div className="io-title">Output {output?.status && <span className={'status ' + output.status.toLowerCase()}>{output.status}</span>}</div>
            <pre>{output?.stdout || output?.stderr || 'Run your code to see output.'}</pre>
          </div>
        </section>
      </div>
      <div className="practice-actions">
        <button className="secondary" onClick={save}><Save size={16} /> Save solution</button>
        <button className="secondary" disabled={saving} onClick={run}><Play size={16} /> Run</button>
        <button className="primary" disabled={saving} onClick={submit}><Send size={16} /> Submit</button>
      </div>
    </div>
  )
}

export default App