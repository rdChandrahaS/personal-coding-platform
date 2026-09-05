export type Difficulty = 'EASY' | 'MEDIUM' | 'HARD'
export type Language = 'PYTHON' | 'JAVA' | 'C' | 'CPP'
export interface Solution { language: Language; code: string }
export interface TestCase { id: number; input: string; expectedOutput: string; hidden: boolean }
export interface ProblemSummary { id:number; title:string; slug:string; difficulty:Difficulty; topics:string[] }
export interface Problem extends ProblemSummary {description:string;examples:string;constraints:string;intuition:string;approach:string;timeComplexity:string;spaceComplexity:string;solutions:Solution[];tests:TestCase[]}
export interface ExecutionResult {status:string;stdout:string;stderr:string;executionTimeMs:number}
