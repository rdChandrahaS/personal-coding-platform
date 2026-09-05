import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace execution. */
export namespace execution {

    /**
     * Properties of a RunRequest.
     * @deprecated Use execution.RunRequest.$Properties instead.
     */
    interface IRunRequest extends execution.RunRequest.$Properties {
    }

    /** Represents a RunRequest. */
    class RunRequest {

        /**
         * Constructs a new RunRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: execution.RunRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RunRequest language. */
        language: string;

        /** RunRequest code. */
        code: string;

        /** RunRequest input. */
        input: string;

        /**
         * Creates a new RunRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RunRequest instance
         */
        static create(properties: execution.RunRequest.$Shape): execution.RunRequest & execution.RunRequest.$Shape;
        static create(properties?: execution.RunRequest.$Properties): execution.RunRequest;

        /**
         * Encodes the specified RunRequest message. Does not implicitly {@link execution.RunRequest.verify|verify} messages.
         * @param message RunRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: execution.RunRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RunRequest message, length delimited. Does not implicitly {@link execution.RunRequest.verify|verify} messages.
         * @param message RunRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: execution.RunRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RunRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {execution.RunRequest & execution.RunRequest.$Shape} RunRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): execution.RunRequest & execution.RunRequest.$Shape;

        /**
         * Decodes a RunRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {execution.RunRequest & execution.RunRequest.$Shape} RunRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): execution.RunRequest & execution.RunRequest.$Shape;

        /**
         * Verifies a RunRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RunRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RunRequest
         */
        static fromObject(object: { [k: string]: any }): execution.RunRequest;

        /**
         * Creates a plain object from a RunRequest message. Also converts values to other types if specified.
         * @param message RunRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: execution.RunRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RunRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RunRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RunRequest {

        /** Properties of a RunRequest. */
        interface $Properties {

            /** RunRequest language */
            language?: (string|null);

            /** RunRequest code */
            code?: (string|null);

            /** RunRequest input */
            input?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RunRequest. */
        type $Shape = execution.RunRequest.$Properties;
    }

    /**
     * Properties of an ExecutionResult.
     * @deprecated Use execution.ExecutionResult.$Properties instead.
     */
    interface IExecutionResult extends execution.ExecutionResult.$Properties {
    }

    /** Represents an ExecutionResult. */
    class ExecutionResult {

        /**
         * Constructs a new ExecutionResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: execution.ExecutionResult.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ExecutionResult status. */
        status: string;

        /** ExecutionResult stdout. */
        stdout: string;

        /** ExecutionResult stderr. */
        stderr: string;

        /** ExecutionResult executionTimeMs. */
        executionTimeMs: (number|Long);

        /**
         * Creates a new ExecutionResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExecutionResult instance
         */
        static create(properties: execution.ExecutionResult.$Shape): execution.ExecutionResult & execution.ExecutionResult.$Shape;
        static create(properties?: execution.ExecutionResult.$Properties): execution.ExecutionResult;

        /**
         * Encodes the specified ExecutionResult message. Does not implicitly {@link execution.ExecutionResult.verify|verify} messages.
         * @param message ExecutionResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: execution.ExecutionResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExecutionResult message, length delimited. Does not implicitly {@link execution.ExecutionResult.verify|verify} messages.
         * @param message ExecutionResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: execution.ExecutionResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExecutionResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {execution.ExecutionResult & execution.ExecutionResult.$Shape} ExecutionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): execution.ExecutionResult & execution.ExecutionResult.$Shape;

        /**
         * Decodes an ExecutionResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {execution.ExecutionResult & execution.ExecutionResult.$Shape} ExecutionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): execution.ExecutionResult & execution.ExecutionResult.$Shape;

        /**
         * Verifies an ExecutionResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExecutionResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExecutionResult
         */
        static fromObject(object: { [k: string]: any }): execution.ExecutionResult;

        /**
         * Creates a plain object from an ExecutionResult message. Also converts values to other types if specified.
         * @param message ExecutionResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: execution.ExecutionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExecutionResult to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ExecutionResult
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ExecutionResult {

        /** Properties of an ExecutionResult. */
        interface $Properties {

            /** ExecutionResult status */
            status?: (string|null);

            /** ExecutionResult stdout */
            stdout?: (string|null);

            /** ExecutionResult stderr */
            stderr?: (string|null);

            /** ExecutionResult executionTimeMs */
            executionTimeMs?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an ExecutionResult. */
        type $Shape = execution.ExecutionResult.$Properties;
    }

    /**
     * Properties of a CaseResult.
     * @deprecated Use execution.CaseResult.$Properties instead.
     */
    interface ICaseResult extends execution.CaseResult.$Properties {
    }

    /** Represents a CaseResult. */
    class CaseResult {

        /**
         * Constructs a new CaseResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: execution.CaseResult.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CaseResult caseNumber. */
        caseNumber: number;

        /** CaseResult passed. */
        passed: boolean;

        /** CaseResult expected. */
        expected: string;

        /** CaseResult actual. */
        actual: string;

        /** CaseResult executionStatus. */
        executionStatus: string;

        /**
         * Creates a new CaseResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CaseResult instance
         */
        static create(properties: execution.CaseResult.$Shape): execution.CaseResult & execution.CaseResult.$Shape;
        static create(properties?: execution.CaseResult.$Properties): execution.CaseResult;

        /**
         * Encodes the specified CaseResult message. Does not implicitly {@link execution.CaseResult.verify|verify} messages.
         * @param message CaseResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: execution.CaseResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CaseResult message, length delimited. Does not implicitly {@link execution.CaseResult.verify|verify} messages.
         * @param message CaseResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: execution.CaseResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CaseResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {execution.CaseResult & execution.CaseResult.$Shape} CaseResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): execution.CaseResult & execution.CaseResult.$Shape;

        /**
         * Decodes a CaseResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {execution.CaseResult & execution.CaseResult.$Shape} CaseResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): execution.CaseResult & execution.CaseResult.$Shape;

        /**
         * Verifies a CaseResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CaseResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CaseResult
         */
        static fromObject(object: { [k: string]: any }): execution.CaseResult;

        /**
         * Creates a plain object from a CaseResult message. Also converts values to other types if specified.
         * @param message CaseResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: execution.CaseResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CaseResult to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CaseResult
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CaseResult {

        /** Properties of a CaseResult. */
        interface $Properties {

            /** CaseResult caseNumber */
            caseNumber?: (number|null);

            /** CaseResult passed */
            passed?: (boolean|null);

            /** CaseResult expected */
            expected?: (string|null);

            /** CaseResult actual */
            actual?: (string|null);

            /** CaseResult executionStatus */
            executionStatus?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CaseResult. */
        type $Shape = execution.CaseResult.$Properties;
    }

    /**
     * Properties of a SubmissionResponse.
     * @deprecated Use execution.SubmissionResponse.$Properties instead.
     */
    interface ISubmissionResponse extends execution.SubmissionResponse.$Properties {
    }

    /** Represents a SubmissionResponse. */
    class SubmissionResponse {

        /**
         * Constructs a new SubmissionResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: execution.SubmissionResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SubmissionResponse status. */
        status: string;

        /** SubmissionResponse results. */
        results: execution.CaseResult.$Properties[];

        /**
         * Creates a new SubmissionResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubmissionResponse instance
         */
        static create(properties: execution.SubmissionResponse.$Shape): execution.SubmissionResponse & execution.SubmissionResponse.$Shape;
        static create(properties?: execution.SubmissionResponse.$Properties): execution.SubmissionResponse;

        /**
         * Encodes the specified SubmissionResponse message. Does not implicitly {@link execution.SubmissionResponse.verify|verify} messages.
         * @param message SubmissionResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: execution.SubmissionResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubmissionResponse message, length delimited. Does not implicitly {@link execution.SubmissionResponse.verify|verify} messages.
         * @param message SubmissionResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: execution.SubmissionResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubmissionResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {execution.SubmissionResponse & execution.SubmissionResponse.$Shape} SubmissionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): execution.SubmissionResponse & execution.SubmissionResponse.$Shape;

        /**
         * Decodes a SubmissionResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {execution.SubmissionResponse & execution.SubmissionResponse.$Shape} SubmissionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): execution.SubmissionResponse & execution.SubmissionResponse.$Shape;

        /**
         * Verifies a SubmissionResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubmissionResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubmissionResponse
         */
        static fromObject(object: { [k: string]: any }): execution.SubmissionResponse;

        /**
         * Creates a plain object from a SubmissionResponse message. Also converts values to other types if specified.
         * @param message SubmissionResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: execution.SubmissionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubmissionResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SubmissionResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SubmissionResponse {

        /** Properties of a SubmissionResponse. */
        interface $Properties {

            /** SubmissionResponse status */
            status?: (string|null);

            /** SubmissionResponse results */
            results?: (execution.CaseResult.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SubmissionResponse. */
        type $Shape = execution.SubmissionResponse.$Properties;
    }
}

/** Namespace problemmanagement. */
export namespace problemmanagement {

    /** Difficulty enum. */
    enum Difficulty {

        /** EASY value */
        EASY = 0,

        /** MEDIUM value */
        MEDIUM = 1,

        /** HARD value */
        HARD = 2
    }

    /** Language enum. */
    enum Language {

        /** PYTHON value */
        PYTHON = 0,

        /** JAVA value */
        JAVA = 1,

        /** C value */
        C = 2,

        /** CPP value */
        CPP = 3
    }

    /**
     * Properties of a TestCase.
     * @deprecated Use problemmanagement.TestCase.$Properties instead.
     */
    interface ITestCase extends problemmanagement.TestCase.$Properties {
    }

    /** Represents a TestCase. */
    class TestCase {

        /**
         * Constructs a new TestCase.
         * @param [properties] Properties to set
         */
        constructor(properties?: problemmanagement.TestCase.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** TestCase id. */
        id: string;

        /** TestCase problemId. */
        problemId: string;

        /** TestCase input. */
        input: string;

        /** TestCase expectedOutput. */
        expectedOutput: string;

        /** TestCase hidden. */
        hidden: boolean;

        /**
         * Creates a new TestCase instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TestCase instance
         */
        static create(properties: problemmanagement.TestCase.$Shape): problemmanagement.TestCase & problemmanagement.TestCase.$Shape;
        static create(properties?: problemmanagement.TestCase.$Properties): problemmanagement.TestCase;

        /**
         * Encodes the specified TestCase message. Does not implicitly {@link problemmanagement.TestCase.verify|verify} messages.
         * @param message TestCase message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: problemmanagement.TestCase.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TestCase message, length delimited. Does not implicitly {@link problemmanagement.TestCase.verify|verify} messages.
         * @param message TestCase message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: problemmanagement.TestCase.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TestCase message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {problemmanagement.TestCase & problemmanagement.TestCase.$Shape} TestCase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): problemmanagement.TestCase & problemmanagement.TestCase.$Shape;

        /**
         * Decodes a TestCase message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {problemmanagement.TestCase & problemmanagement.TestCase.$Shape} TestCase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): problemmanagement.TestCase & problemmanagement.TestCase.$Shape;

        /**
         * Verifies a TestCase message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TestCase message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TestCase
         */
        static fromObject(object: { [k: string]: any }): problemmanagement.TestCase;

        /**
         * Creates a plain object from a TestCase message. Also converts values to other types if specified.
         * @param message TestCase
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: problemmanagement.TestCase, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TestCase to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for TestCase
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace TestCase {

        /** Properties of a TestCase. */
        interface $Properties {

            /** TestCase id */
            id?: (string|null);

            /** TestCase problemId */
            problemId?: (string|null);

            /** TestCase input */
            input?: (string|null);

            /** TestCase expectedOutput */
            expectedOutput?: (string|null);

            /** TestCase hidden */
            hidden?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a TestCase. */
        type $Shape = problemmanagement.TestCase.$Properties;
    }

    /**
     * Properties of a Solution.
     * @deprecated Use problemmanagement.Solution.$Properties instead.
     */
    interface ISolution extends problemmanagement.Solution.$Properties {
    }

    /** Represents a Solution. */
    class Solution {

        /**
         * Constructs a new Solution.
         * @param [properties] Properties to set
         */
        constructor(properties?: problemmanagement.Solution.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Solution id. */
        id: string;

        /** Solution problemId. */
        problemId: string;

        /** Solution language. */
        language: problemmanagement.Language;

        /** Solution code. */
        code: string;

        /**
         * Creates a new Solution instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Solution instance
         */
        static create(properties: problemmanagement.Solution.$Shape): problemmanagement.Solution & problemmanagement.Solution.$Shape;
        static create(properties?: problemmanagement.Solution.$Properties): problemmanagement.Solution;

        /**
         * Encodes the specified Solution message. Does not implicitly {@link problemmanagement.Solution.verify|verify} messages.
         * @param message Solution message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: problemmanagement.Solution.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Solution message, length delimited. Does not implicitly {@link problemmanagement.Solution.verify|verify} messages.
         * @param message Solution message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: problemmanagement.Solution.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Solution message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {problemmanagement.Solution & problemmanagement.Solution.$Shape} Solution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): problemmanagement.Solution & problemmanagement.Solution.$Shape;

        /**
         * Decodes a Solution message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {problemmanagement.Solution & problemmanagement.Solution.$Shape} Solution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): problemmanagement.Solution & problemmanagement.Solution.$Shape;

        /**
         * Verifies a Solution message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Solution message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Solution
         */
        static fromObject(object: { [k: string]: any }): problemmanagement.Solution;

        /**
         * Creates a plain object from a Solution message. Also converts values to other types if specified.
         * @param message Solution
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: problemmanagement.Solution, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Solution to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Solution
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Solution {

        /** Properties of a Solution. */
        interface $Properties {

            /** Solution id */
            id?: (string|null);

            /** Solution problemId */
            problemId?: (string|null);

            /** Solution language */
            language?: (problemmanagement.Language|null);

            /** Solution code */
            code?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Solution. */
        type $Shape = problemmanagement.Solution.$Properties;
    }

    /**
     * Properties of a Problem.
     * @deprecated Use problemmanagement.Problem.$Properties instead.
     */
    interface IProblem extends problemmanagement.Problem.$Properties {
    }

    /** Represents a Problem. */
    class Problem {

        /**
         * Constructs a new Problem.
         * @param [properties] Properties to set
         */
        constructor(properties?: problemmanagement.Problem.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Problem id. */
        id: string;

        /** Problem title. */
        title: string;

        /** Problem slug. */
        slug: string;

        /** Problem difficulty. */
        difficulty: problemmanagement.Difficulty;

        /** Problem description. */
        description: string;

        /** Problem examples. */
        examples: string;

        /** Problem constraints. */
        constraints: string;

        /** Problem intuition. */
        intuition: string;

        /** Problem approach. */
        approach: string;

        /** Problem timeComplexity. */
        timeComplexity: string;

        /** Problem spaceComplexity. */
        spaceComplexity: string;

        /** Problem topics. */
        topics: string[];

        /** Problem solutions. */
        solutions: problemmanagement.Solution.$Properties[];

        /** Problem tests. */
        tests: problemmanagement.TestCase.$Properties[];

        /**
         * Creates a new Problem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Problem instance
         */
        static create(properties: problemmanagement.Problem.$Shape): problemmanagement.Problem & problemmanagement.Problem.$Shape;
        static create(properties?: problemmanagement.Problem.$Properties): problemmanagement.Problem;

        /**
         * Encodes the specified Problem message. Does not implicitly {@link problemmanagement.Problem.verify|verify} messages.
         * @param message Problem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: problemmanagement.Problem.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Problem message, length delimited. Does not implicitly {@link problemmanagement.Problem.verify|verify} messages.
         * @param message Problem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: problemmanagement.Problem.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Problem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {problemmanagement.Problem & problemmanagement.Problem.$Shape} Problem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): problemmanagement.Problem & problemmanagement.Problem.$Shape;

        /**
         * Decodes a Problem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {problemmanagement.Problem & problemmanagement.Problem.$Shape} Problem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): problemmanagement.Problem & problemmanagement.Problem.$Shape;

        /**
         * Verifies a Problem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Problem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Problem
         */
        static fromObject(object: { [k: string]: any }): problemmanagement.Problem;

        /**
         * Creates a plain object from a Problem message. Also converts values to other types if specified.
         * @param message Problem
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: problemmanagement.Problem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Problem to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Problem
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Problem {

        /** Properties of a Problem. */
        interface $Properties {

            /** Problem id */
            id?: (string|null);

            /** Problem title */
            title?: (string|null);

            /** Problem slug */
            slug?: (string|null);

            /** Problem difficulty */
            difficulty?: (problemmanagement.Difficulty|null);

            /** Problem description */
            description?: (string|null);

            /** Problem examples */
            examples?: (string|null);

            /** Problem constraints */
            constraints?: (string|null);

            /** Problem intuition */
            intuition?: (string|null);

            /** Problem approach */
            approach?: (string|null);

            /** Problem timeComplexity */
            timeComplexity?: (string|null);

            /** Problem spaceComplexity */
            spaceComplexity?: (string|null);

            /** Problem topics */
            topics?: (string[]|null);

            /** Problem solutions */
            solutions?: (problemmanagement.Solution.$Properties[]|null);

            /** Problem tests */
            tests?: (problemmanagement.TestCase.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Problem. */
        type $Shape = problemmanagement.Problem.$Properties;
    }

    /**
     * Properties of a ProblemListResponse.
     * @deprecated Use problemmanagement.ProblemListResponse.$Properties instead.
     */
    interface IProblemListResponse extends problemmanagement.ProblemListResponse.$Properties {
    }

    /** Represents a ProblemListResponse. */
    class ProblemListResponse {

        /**
         * Constructs a new ProblemListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: problemmanagement.ProblemListResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ProblemListResponse problems. */
        problems: problemmanagement.Problem.$Properties[];

        /**
         * Creates a new ProblemListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProblemListResponse instance
         */
        static create(properties: problemmanagement.ProblemListResponse.$Shape): problemmanagement.ProblemListResponse & problemmanagement.ProblemListResponse.$Shape;
        static create(properties?: problemmanagement.ProblemListResponse.$Properties): problemmanagement.ProblemListResponse;

        /**
         * Encodes the specified ProblemListResponse message. Does not implicitly {@link problemmanagement.ProblemListResponse.verify|verify} messages.
         * @param message ProblemListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: problemmanagement.ProblemListResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProblemListResponse message, length delimited. Does not implicitly {@link problemmanagement.ProblemListResponse.verify|verify} messages.
         * @param message ProblemListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: problemmanagement.ProblemListResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProblemListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {problemmanagement.ProblemListResponse & problemmanagement.ProblemListResponse.$Shape} ProblemListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): problemmanagement.ProblemListResponse & problemmanagement.ProblemListResponse.$Shape;

        /**
         * Decodes a ProblemListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {problemmanagement.ProblemListResponse & problemmanagement.ProblemListResponse.$Shape} ProblemListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): problemmanagement.ProblemListResponse & problemmanagement.ProblemListResponse.$Shape;

        /**
         * Verifies a ProblemListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProblemListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProblemListResponse
         */
        static fromObject(object: { [k: string]: any }): problemmanagement.ProblemListResponse;

        /**
         * Creates a plain object from a ProblemListResponse message. Also converts values to other types if specified.
         * @param message ProblemListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: problemmanagement.ProblemListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProblemListResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ProblemListResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ProblemListResponse {

        /** Properties of a ProblemListResponse. */
        interface $Properties {

            /** ProblemListResponse problems */
            problems?: (problemmanagement.Problem.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ProblemListResponse. */
        type $Shape = problemmanagement.ProblemListResponse.$Properties;
    }
}
