/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $RangeError = $util.global.RangeError, $TypeError = $util.global.TypeError, $String = $util.global.String, $Number = $util.global.Number, $parseInt = $util.global.parseInt, $BigInt = $util.global.BigInt, $Boolean = $util.global.Boolean, $Array = $util.global.Array;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const execution = $root.execution = (() => {

    /**
     * Namespace execution.
     * @exports execution
     * @namespace
     */
    const execution = {};

    execution.RunRequest = (function() {

        /**
         * Properties of a RunRequest.
         * @typedef {Object} execution.RunRequest.$Properties
         * @property {string|null} [language] RunRequest language
         * @property {string|null} [code] RunRequest code
         * @property {string|null} [input] RunRequest input
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a RunRequest.
         * @memberof execution
         * @interface IRunRequest
         * @augments execution.RunRequest.$Properties
         * @deprecated Use execution.RunRequest.$Properties instead.
         */

        /**
         * Shape of a RunRequest.
         * @typedef {execution.RunRequest.$Properties} execution.RunRequest.$Shape
         */

        /**
         * Constructs a new RunRequest.
         * @memberof execution
         * @classdesc Represents a RunRequest.
         * @constructor
         * @param {execution.RunRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const RunRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * RunRequest language.
         * @member {string} language
         * @memberof execution.RunRequest
         * @instance
         */
        RunRequest.prototype.language = "";

        /**
         * RunRequest code.
         * @member {string} code
         * @memberof execution.RunRequest
         * @instance
         */
        RunRequest.prototype.code = "";

        /**
         * RunRequest input.
         * @member {string} input
         * @memberof execution.RunRequest
         * @instance
         */
        RunRequest.prototype.input = "";

        /**
         * Creates a new RunRequest instance using the specified properties.
         * @function create
         * @memberof execution.RunRequest
         * @static
         * @param {execution.RunRequest.$Properties=} [properties] Properties to set
         * @returns {execution.RunRequest} RunRequest instance
         * @type {{
         *   (properties: execution.RunRequest.$Shape): execution.RunRequest & execution.RunRequest.$Shape;
         *   (properties?: execution.RunRequest.$Properties): execution.RunRequest;
         * }}
         */
        RunRequest.create = function(properties) {
            return new RunRequest(properties);
        };

        /**
         * Encodes the specified RunRequest message. Does not implicitly {@link execution.RunRequest.verify|verify} messages.
         * @function encode
         * @memberof execution.RunRequest
         * @static
         * @param {execution.RunRequest.$Properties} message RunRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RunRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.language != null && $Object.hasOwnProperty.call(message, "language") && message.language !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.language);
            if (message.code != null && $Object.hasOwnProperty.call(message, "code") && message.code !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.code);
            if (message.input != null && $Object.hasOwnProperty.call(message, "input") && message.input !== "")
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.input);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified RunRequest message, length delimited. Does not implicitly {@link execution.RunRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof execution.RunRequest
         * @static
         * @param {execution.RunRequest.$Properties} message RunRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RunRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a RunRequest message from the specified reader or buffer.
         * @function decode
         * @memberof execution.RunRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {execution.RunRequest & execution.RunRequest.$Shape} RunRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RunRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.execution.RunRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.language = value;
                        else
                            delete message.language;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.code = value;
                        else
                            delete message.code;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.input = value;
                        else
                            delete message.input;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a RunRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof execution.RunRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {execution.RunRequest & execution.RunRequest.$Shape} RunRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RunRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RunRequest message.
         * @function verify
         * @memberof execution.RunRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RunRequest.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.language != null && $Object.hasOwnProperty.call(message, "language"))
                if (!$util.isString(message.language))
                    return "language: string expected";
            if (message.code != null && $Object.hasOwnProperty.call(message, "code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.input != null && $Object.hasOwnProperty.call(message, "input"))
                if (!$util.isString(message.input))
                    return "input: string expected";
            return null;
        };

        /**
         * Creates a RunRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof execution.RunRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {execution.RunRequest} RunRequest
         */
        RunRequest.fromObject = function (object, _depth) {
            if (object instanceof $root.execution.RunRequest)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".execution.RunRequest: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.execution.RunRequest();
            if (object.language != null)
                if (typeof object.language !== "string" || object.language.length)
                    message.language = $String(object.language);
            if (object.code != null)
                if (typeof object.code !== "string" || object.code.length)
                    message.code = $String(object.code);
            if (object.input != null)
                if (typeof object.input !== "string" || object.input.length)
                    message.input = $String(object.input);
            return message;
        };

        /**
         * Creates a plain object from a RunRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof execution.RunRequest
         * @static
         * @param {execution.RunRequest} message RunRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RunRequest.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.language = "";
                object.code = "";
                object.input = "";
            }
            if (message.language != null && $Object.hasOwnProperty.call(message, "language"))
                object.language = message.language;
            if (message.code != null && $Object.hasOwnProperty.call(message, "code"))
                object.code = message.code;
            if (message.input != null && $Object.hasOwnProperty.call(message, "input"))
                object.input = message.input;
            return object;
        };

        /**
         * Converts this RunRequest to JSON.
         * @function toJSON
         * @memberof execution.RunRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RunRequest.prototype.toJSON = function() {
            return RunRequest.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for RunRequest
         * @function getTypeUrl
         * @memberof execution.RunRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        RunRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/execution.RunRequest";
        };

        return RunRequest;
    })();

    execution.ExecutionResult = (function() {

        /**
         * Properties of an ExecutionResult.
         * @typedef {Object} execution.ExecutionResult.$Properties
         * @property {string|null} [status] ExecutionResult status
         * @property {string|null} [stdout] ExecutionResult stdout
         * @property {string|null} [stderr] ExecutionResult stderr
         * @property {number|Long|null} [executionTimeMs] ExecutionResult executionTimeMs
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an ExecutionResult.
         * @memberof execution
         * @interface IExecutionResult
         * @augments execution.ExecutionResult.$Properties
         * @deprecated Use execution.ExecutionResult.$Properties instead.
         */

        /**
         * Shape of an ExecutionResult.
         * @typedef {execution.ExecutionResult.$Properties} execution.ExecutionResult.$Shape
         */

        /**
         * Constructs a new ExecutionResult.
         * @memberof execution
         * @classdesc Represents an ExecutionResult.
         * @constructor
         * @param {execution.ExecutionResult.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const ExecutionResult = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ExecutionResult status.
         * @member {string} status
         * @memberof execution.ExecutionResult
         * @instance
         */
        ExecutionResult.prototype.status = "";

        /**
         * ExecutionResult stdout.
         * @member {string} stdout
         * @memberof execution.ExecutionResult
         * @instance
         */
        ExecutionResult.prototype.stdout = "";

        /**
         * ExecutionResult stderr.
         * @member {string} stderr
         * @memberof execution.ExecutionResult
         * @instance
         */
        ExecutionResult.prototype.stderr = "";

        /**
         * ExecutionResult executionTimeMs.
         * @member {number|Long} executionTimeMs
         * @memberof execution.ExecutionResult
         * @instance
         */
        ExecutionResult.prototype.executionTimeMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ExecutionResult instance using the specified properties.
         * @function create
         * @memberof execution.ExecutionResult
         * @static
         * @param {execution.ExecutionResult.$Properties=} [properties] Properties to set
         * @returns {execution.ExecutionResult} ExecutionResult instance
         * @type {{
         *   (properties: execution.ExecutionResult.$Shape): execution.ExecutionResult & execution.ExecutionResult.$Shape;
         *   (properties?: execution.ExecutionResult.$Properties): execution.ExecutionResult;
         * }}
         */
        ExecutionResult.create = function(properties) {
            return new ExecutionResult(properties);
        };

        /**
         * Encodes the specified ExecutionResult message. Does not implicitly {@link execution.ExecutionResult.verify|verify} messages.
         * @function encode
         * @memberof execution.ExecutionResult
         * @static
         * @param {execution.ExecutionResult.$Properties} message ExecutionResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExecutionResult.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.status != null && $Object.hasOwnProperty.call(message, "status") && message.status !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.status);
            if (message.stdout != null && $Object.hasOwnProperty.call(message, "stdout") && message.stdout !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.stdout);
            if (message.stderr != null && $Object.hasOwnProperty.call(message, "stderr") && message.stderr !== "")
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.stderr);
            if (message.executionTimeMs != null && $Object.hasOwnProperty.call(message, "executionTimeMs") && (typeof message.executionTimeMs === "object" ? message.executionTimeMs.low || message.executionTimeMs.high : message.executionTimeMs !== 0))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.executionTimeMs);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ExecutionResult message, length delimited. Does not implicitly {@link execution.ExecutionResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof execution.ExecutionResult
         * @static
         * @param {execution.ExecutionResult.$Properties} message ExecutionResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExecutionResult.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes an ExecutionResult message from the specified reader or buffer.
         * @function decode
         * @memberof execution.ExecutionResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {execution.ExecutionResult & execution.ExecutionResult.$Shape} ExecutionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExecutionResult.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.execution.ExecutionResult();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.status = value;
                        else
                            delete message.status;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.stdout = value;
                        else
                            delete message.stdout;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.stderr = value;
                        else
                            delete message.stderr;
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.executionTimeMs = value;
                        else
                            delete message.executionTimeMs;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an ExecutionResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof execution.ExecutionResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {execution.ExecutionResult & execution.ExecutionResult.$Shape} ExecutionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExecutionResult.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExecutionResult message.
         * @function verify
         * @memberof execution.ExecutionResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExecutionResult.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            if (message.stdout != null && $Object.hasOwnProperty.call(message, "stdout"))
                if (!$util.isString(message.stdout))
                    return "stdout: string expected";
            if (message.stderr != null && $Object.hasOwnProperty.call(message, "stderr"))
                if (!$util.isString(message.stderr))
                    return "stderr: string expected";
            if (message.executionTimeMs != null && $Object.hasOwnProperty.call(message, "executionTimeMs"))
                if (!$util.isInteger(message.executionTimeMs) && !(message.executionTimeMs && $util.isInteger(message.executionTimeMs.low) && $util.isInteger(message.executionTimeMs.high)))
                    return "executionTimeMs: integer|Long expected";
            return null;
        };

        /**
         * Creates an ExecutionResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof execution.ExecutionResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {execution.ExecutionResult} ExecutionResult
         */
        ExecutionResult.fromObject = function (object, _depth) {
            if (object instanceof $root.execution.ExecutionResult)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".execution.ExecutionResult: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.execution.ExecutionResult();
            if (object.status != null)
                if (typeof object.status !== "string" || object.status.length)
                    message.status = $String(object.status);
            if (object.stdout != null)
                if (typeof object.stdout !== "string" || object.stdout.length)
                    message.stdout = $String(object.stdout);
            if (object.stderr != null)
                if (typeof object.stderr !== "string" || object.stderr.length)
                    message.stderr = $String(object.stderr);
            if (object.executionTimeMs != null)
                if (typeof object.executionTimeMs === "object" ? object.executionTimeMs.low || object.executionTimeMs.high : $Number(object.executionTimeMs) !== 0)
                    if ($util.Long)
                        message.executionTimeMs = $util.Long.fromValue(object.executionTimeMs, false);
                    else if (typeof object.executionTimeMs === "string")
                        message.executionTimeMs = $parseInt(object.executionTimeMs, 10);
                    else if (typeof object.executionTimeMs === "number")
                        message.executionTimeMs = object.executionTimeMs;
                    else if (typeof object.executionTimeMs === "object")
                        message.executionTimeMs = new $util.LongBits(object.executionTimeMs.low >>> 0, object.executionTimeMs.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an ExecutionResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof execution.ExecutionResult
         * @static
         * @param {execution.ExecutionResult} message ExecutionResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExecutionResult.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.status = "";
                object.stdout = "";
                object.stderr = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.executionTimeMs = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                } else
                    object.executionTimeMs = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
            }
            if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                object.status = message.status;
            if (message.stdout != null && $Object.hasOwnProperty.call(message, "stdout"))
                object.stdout = message.stdout;
            if (message.stderr != null && $Object.hasOwnProperty.call(message, "stderr"))
                object.stderr = message.stderr;
            if (message.executionTimeMs != null && $Object.hasOwnProperty.call(message, "executionTimeMs"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.executionTimeMs = typeof message.executionTimeMs === "number" ? $BigInt(message.executionTimeMs) : $util.Long.fromBits(message.executionTimeMs.low >>> 0, message.executionTimeMs.high >>> 0, false).toBigInt();
                else if (typeof message.executionTimeMs === "number")
                    object.executionTimeMs = options.longs === $String ? $String(message.executionTimeMs) : message.executionTimeMs;
                else
                    object.executionTimeMs = options.longs === $String ? $util.Long.prototype.toString.call(message.executionTimeMs) : options.longs === $Number ? new $util.LongBits(message.executionTimeMs.low >>> 0, message.executionTimeMs.high >>> 0).toNumber() : message.executionTimeMs;
            return object;
        };

        /**
         * Converts this ExecutionResult to JSON.
         * @function toJSON
         * @memberof execution.ExecutionResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExecutionResult.prototype.toJSON = function() {
            return ExecutionResult.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ExecutionResult
         * @function getTypeUrl
         * @memberof execution.ExecutionResult
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ExecutionResult.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/execution.ExecutionResult";
        };

        return ExecutionResult;
    })();

    execution.CaseResult = (function() {

        /**
         * Properties of a CaseResult.
         * @typedef {Object} execution.CaseResult.$Properties
         * @property {number|null} [caseNumber] CaseResult caseNumber
         * @property {boolean|null} [passed] CaseResult passed
         * @property {string|null} [expected] CaseResult expected
         * @property {string|null} [actual] CaseResult actual
         * @property {string|null} [executionStatus] CaseResult executionStatus
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a CaseResult.
         * @memberof execution
         * @interface ICaseResult
         * @augments execution.CaseResult.$Properties
         * @deprecated Use execution.CaseResult.$Properties instead.
         */

        /**
         * Shape of a CaseResult.
         * @typedef {execution.CaseResult.$Properties} execution.CaseResult.$Shape
         */

        /**
         * Constructs a new CaseResult.
         * @memberof execution
         * @classdesc Represents a CaseResult.
         * @constructor
         * @param {execution.CaseResult.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const CaseResult = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * CaseResult caseNumber.
         * @member {number} caseNumber
         * @memberof execution.CaseResult
         * @instance
         */
        CaseResult.prototype.caseNumber = 0;

        /**
         * CaseResult passed.
         * @member {boolean} passed
         * @memberof execution.CaseResult
         * @instance
         */
        CaseResult.prototype.passed = false;

        /**
         * CaseResult expected.
         * @member {string} expected
         * @memberof execution.CaseResult
         * @instance
         */
        CaseResult.prototype.expected = "";

        /**
         * CaseResult actual.
         * @member {string} actual
         * @memberof execution.CaseResult
         * @instance
         */
        CaseResult.prototype.actual = "";

        /**
         * CaseResult executionStatus.
         * @member {string} executionStatus
         * @memberof execution.CaseResult
         * @instance
         */
        CaseResult.prototype.executionStatus = "";

        /**
         * Creates a new CaseResult instance using the specified properties.
         * @function create
         * @memberof execution.CaseResult
         * @static
         * @param {execution.CaseResult.$Properties=} [properties] Properties to set
         * @returns {execution.CaseResult} CaseResult instance
         * @type {{
         *   (properties: execution.CaseResult.$Shape): execution.CaseResult & execution.CaseResult.$Shape;
         *   (properties?: execution.CaseResult.$Properties): execution.CaseResult;
         * }}
         */
        CaseResult.create = function(properties) {
            return new CaseResult(properties);
        };

        /**
         * Encodes the specified CaseResult message. Does not implicitly {@link execution.CaseResult.verify|verify} messages.
         * @function encode
         * @memberof execution.CaseResult
         * @static
         * @param {execution.CaseResult.$Properties} message CaseResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CaseResult.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.caseNumber != null && $Object.hasOwnProperty.call(message, "caseNumber") && message.caseNumber !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.caseNumber);
            if (message.passed != null && $Object.hasOwnProperty.call(message, "passed") && message.passed !== false)
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.passed);
            if (message.expected != null && $Object.hasOwnProperty.call(message, "expected") && message.expected !== "")
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.expected);
            if (message.actual != null && $Object.hasOwnProperty.call(message, "actual") && message.actual !== "")
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.actual);
            if (message.executionStatus != null && $Object.hasOwnProperty.call(message, "executionStatus") && message.executionStatus !== "")
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.executionStatus);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified CaseResult message, length delimited. Does not implicitly {@link execution.CaseResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof execution.CaseResult
         * @static
         * @param {execution.CaseResult.$Properties} message CaseResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CaseResult.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a CaseResult message from the specified reader or buffer.
         * @function decode
         * @memberof execution.CaseResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {execution.CaseResult & execution.CaseResult.$Shape} CaseResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CaseResult.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.execution.CaseResult();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.caseNumber = value;
                        else
                            delete message.caseNumber;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.passed = value;
                        else
                            delete message.passed;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.expected = value;
                        else
                            delete message.expected;
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.actual = value;
                        else
                            delete message.actual;
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.executionStatus = value;
                        else
                            delete message.executionStatus;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a CaseResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof execution.CaseResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {execution.CaseResult & execution.CaseResult.$Shape} CaseResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CaseResult.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CaseResult message.
         * @function verify
         * @memberof execution.CaseResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CaseResult.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.caseNumber != null && $Object.hasOwnProperty.call(message, "caseNumber"))
                if (!$util.isInteger(message.caseNumber))
                    return "caseNumber: integer expected";
            if (message.passed != null && $Object.hasOwnProperty.call(message, "passed"))
                if (typeof message.passed !== "boolean")
                    return "passed: boolean expected";
            if (message.expected != null && $Object.hasOwnProperty.call(message, "expected"))
                if (!$util.isString(message.expected))
                    return "expected: string expected";
            if (message.actual != null && $Object.hasOwnProperty.call(message, "actual"))
                if (!$util.isString(message.actual))
                    return "actual: string expected";
            if (message.executionStatus != null && $Object.hasOwnProperty.call(message, "executionStatus"))
                if (!$util.isString(message.executionStatus))
                    return "executionStatus: string expected";
            return null;
        };

        /**
         * Creates a CaseResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof execution.CaseResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {execution.CaseResult} CaseResult
         */
        CaseResult.fromObject = function (object, _depth) {
            if (object instanceof $root.execution.CaseResult)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".execution.CaseResult: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.execution.CaseResult();
            if (object.caseNumber != null)
                if ($Number(object.caseNumber) !== 0)
                    message.caseNumber = object.caseNumber | 0;
            if (object.passed != null)
                if (object.passed)
                    message.passed = $Boolean(object.passed);
            if (object.expected != null)
                if (typeof object.expected !== "string" || object.expected.length)
                    message.expected = $String(object.expected);
            if (object.actual != null)
                if (typeof object.actual !== "string" || object.actual.length)
                    message.actual = $String(object.actual);
            if (object.executionStatus != null)
                if (typeof object.executionStatus !== "string" || object.executionStatus.length)
                    message.executionStatus = $String(object.executionStatus);
            return message;
        };

        /**
         * Creates a plain object from a CaseResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof execution.CaseResult
         * @static
         * @param {execution.CaseResult} message CaseResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CaseResult.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.caseNumber = 0;
                object.passed = false;
                object.expected = "";
                object.actual = "";
                object.executionStatus = "";
            }
            if (message.caseNumber != null && $Object.hasOwnProperty.call(message, "caseNumber"))
                object.caseNumber = message.caseNumber;
            if (message.passed != null && $Object.hasOwnProperty.call(message, "passed"))
                object.passed = message.passed;
            if (message.expected != null && $Object.hasOwnProperty.call(message, "expected"))
                object.expected = message.expected;
            if (message.actual != null && $Object.hasOwnProperty.call(message, "actual"))
                object.actual = message.actual;
            if (message.executionStatus != null && $Object.hasOwnProperty.call(message, "executionStatus"))
                object.executionStatus = message.executionStatus;
            return object;
        };

        /**
         * Converts this CaseResult to JSON.
         * @function toJSON
         * @memberof execution.CaseResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CaseResult.prototype.toJSON = function() {
            return CaseResult.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for CaseResult
         * @function getTypeUrl
         * @memberof execution.CaseResult
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        CaseResult.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/execution.CaseResult";
        };

        return CaseResult;
    })();

    execution.SubmissionResponse = (function() {

        /**
         * Properties of a SubmissionResponse.
         * @typedef {Object} execution.SubmissionResponse.$Properties
         * @property {string|null} [status] SubmissionResponse status
         * @property {Array.<execution.CaseResult.$Properties>|null} [results] SubmissionResponse results
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a SubmissionResponse.
         * @memberof execution
         * @interface ISubmissionResponse
         * @augments execution.SubmissionResponse.$Properties
         * @deprecated Use execution.SubmissionResponse.$Properties instead.
         */

        /**
         * Shape of a SubmissionResponse.
         * @typedef {execution.SubmissionResponse.$Properties} execution.SubmissionResponse.$Shape
         */

        /**
         * Constructs a new SubmissionResponse.
         * @memberof execution
         * @classdesc Represents a SubmissionResponse.
         * @constructor
         * @param {execution.SubmissionResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const SubmissionResponse = function (properties) {
            this.results = [];
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * SubmissionResponse status.
         * @member {string} status
         * @memberof execution.SubmissionResponse
         * @instance
         */
        SubmissionResponse.prototype.status = "";

        /**
         * SubmissionResponse results.
         * @member {Array.<execution.CaseResult.$Properties>} results
         * @memberof execution.SubmissionResponse
         * @instance
         */
        SubmissionResponse.prototype.results = $util.emptyArray;

        /**
         * Creates a new SubmissionResponse instance using the specified properties.
         * @function create
         * @memberof execution.SubmissionResponse
         * @static
         * @param {execution.SubmissionResponse.$Properties=} [properties] Properties to set
         * @returns {execution.SubmissionResponse} SubmissionResponse instance
         * @type {{
         *   (properties: execution.SubmissionResponse.$Shape): execution.SubmissionResponse & execution.SubmissionResponse.$Shape;
         *   (properties?: execution.SubmissionResponse.$Properties): execution.SubmissionResponse;
         * }}
         */
        SubmissionResponse.create = function(properties) {
            return new SubmissionResponse(properties);
        };

        /**
         * Encodes the specified SubmissionResponse message. Does not implicitly {@link execution.SubmissionResponse.verify|verify} messages.
         * @function encode
         * @memberof execution.SubmissionResponse
         * @static
         * @param {execution.SubmissionResponse.$Properties} message SubmissionResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubmissionResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.status != null && $Object.hasOwnProperty.call(message, "status") && message.status !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.status);
            if (message.results != null && message.results.length)
                for (let i = 0; i < message.results.length; ++i)
                    $root.execution.CaseResult.encode(message.results[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified SubmissionResponse message, length delimited. Does not implicitly {@link execution.SubmissionResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof execution.SubmissionResponse
         * @static
         * @param {execution.SubmissionResponse.$Properties} message SubmissionResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubmissionResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a SubmissionResponse message from the specified reader or buffer.
         * @function decode
         * @memberof execution.SubmissionResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {execution.SubmissionResponse & execution.SubmissionResponse.$Shape} SubmissionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubmissionResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.execution.SubmissionResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.status = value;
                        else
                            delete message.status;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if (!(message.results && message.results.length))
                            message.results = [];
                        message.results.push($root.execution.CaseResult.decode(reader, reader.uint32(), $undefined, _depth + 1));
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a SubmissionResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof execution.SubmissionResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {execution.SubmissionResponse & execution.SubmissionResponse.$Shape} SubmissionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubmissionResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SubmissionResponse message.
         * @function verify
         * @memberof execution.SubmissionResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SubmissionResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            if (message.results != null && $Object.hasOwnProperty.call(message, "results")) {
                if (!$Array.isArray(message.results))
                    return "results: array expected";
                for (let i = 0; i < message.results.length; ++i) {
                    let error = $root.execution.CaseResult.verify(message.results[i], _depth + 1);
                    if (error)
                        return "results." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SubmissionResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof execution.SubmissionResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {execution.SubmissionResponse} SubmissionResponse
         */
        SubmissionResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.execution.SubmissionResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".execution.SubmissionResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.execution.SubmissionResponse();
            if (object.status != null)
                if (typeof object.status !== "string" || object.status.length)
                    message.status = $String(object.status);
            if (object.results) {
                if (!$Array.isArray(object.results))
                    throw $TypeError(".execution.SubmissionResponse.results: array expected");
                message.results = $Array(object.results.length);
                for (let i = 0; i < object.results.length; ++i) {
                    if (!$util.isObject(object.results[i]))
                        throw $TypeError(".execution.SubmissionResponse.results: object expected");
                    message.results[i] = $root.execution.CaseResult.fromObject(object.results[i], _depth + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SubmissionResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof execution.SubmissionResponse
         * @static
         * @param {execution.SubmissionResponse} message SubmissionResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubmissionResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.results = [];
            if (options.defaults)
                object.status = "";
            if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                object.status = message.status;
            if (message.results && message.results.length) {
                object.results = $Array(message.results.length);
                for (let j = 0; j < message.results.length; ++j)
                    object.results[j] = $root.execution.CaseResult.toObject(message.results[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this SubmissionResponse to JSON.
         * @function toJSON
         * @memberof execution.SubmissionResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubmissionResponse.prototype.toJSON = function() {
            return SubmissionResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for SubmissionResponse
         * @function getTypeUrl
         * @memberof execution.SubmissionResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        SubmissionResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/execution.SubmissionResponse";
        };

        return SubmissionResponse;
    })();

    return execution;
})();

export const problemmanagement = $root.problemmanagement = (() => {

    /**
     * Namespace problemmanagement.
     * @exports problemmanagement
     * @namespace
     */
    const problemmanagement = {};

    /**
     * Difficulty enum.
     * @name problemmanagement.Difficulty
     * @enum {number}
     * @property {number} EASY=0 EASY value
     * @property {number} MEDIUM=1 MEDIUM value
     * @property {number} HARD=2 HARD value
     */
    problemmanagement.Difficulty = (function() {
        const valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "EASY"] = 0;
        values[valuesById[1] = "MEDIUM"] = 1;
        values[valuesById[2] = "HARD"] = 2;
        return values;
    })();

    /**
     * Language enum.
     * @name problemmanagement.Language
     * @enum {number}
     * @property {number} PYTHON=0 PYTHON value
     * @property {number} JAVA=1 JAVA value
     * @property {number} C=2 C value
     * @property {number} CPP=3 CPP value
     */
    problemmanagement.Language = (function() {
        const valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "PYTHON"] = 0;
        values[valuesById[1] = "JAVA"] = 1;
        values[valuesById[2] = "C"] = 2;
        values[valuesById[3] = "CPP"] = 3;
        return values;
    })();

    problemmanagement.TestCase = (function() {

        /**
         * Properties of a TestCase.
         * @typedef {Object} problemmanagement.TestCase.$Properties
         * @property {string|null} [id] TestCase id
         * @property {string|null} [problemId] TestCase problemId
         * @property {string|null} [input] TestCase input
         * @property {string|null} [expectedOutput] TestCase expectedOutput
         * @property {boolean|null} [hidden] TestCase hidden
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a TestCase.
         * @memberof problemmanagement
         * @interface ITestCase
         * @augments problemmanagement.TestCase.$Properties
         * @deprecated Use problemmanagement.TestCase.$Properties instead.
         */

        /**
         * Shape of a TestCase.
         * @typedef {problemmanagement.TestCase.$Properties} problemmanagement.TestCase.$Shape
         */

        /**
         * Constructs a new TestCase.
         * @memberof problemmanagement
         * @classdesc Represents a TestCase.
         * @constructor
         * @param {problemmanagement.TestCase.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const TestCase = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * TestCase id.
         * @member {string} id
         * @memberof problemmanagement.TestCase
         * @instance
         */
        TestCase.prototype.id = "";

        /**
         * TestCase problemId.
         * @member {string} problemId
         * @memberof problemmanagement.TestCase
         * @instance
         */
        TestCase.prototype.problemId = "";

        /**
         * TestCase input.
         * @member {string} input
         * @memberof problemmanagement.TestCase
         * @instance
         */
        TestCase.prototype.input = "";

        /**
         * TestCase expectedOutput.
         * @member {string} expectedOutput
         * @memberof problemmanagement.TestCase
         * @instance
         */
        TestCase.prototype.expectedOutput = "";

        /**
         * TestCase hidden.
         * @member {boolean} hidden
         * @memberof problemmanagement.TestCase
         * @instance
         */
        TestCase.prototype.hidden = false;

        /**
         * Creates a new TestCase instance using the specified properties.
         * @function create
         * @memberof problemmanagement.TestCase
         * @static
         * @param {problemmanagement.TestCase.$Properties=} [properties] Properties to set
         * @returns {problemmanagement.TestCase} TestCase instance
         * @type {{
         *   (properties: problemmanagement.TestCase.$Shape): problemmanagement.TestCase & problemmanagement.TestCase.$Shape;
         *   (properties?: problemmanagement.TestCase.$Properties): problemmanagement.TestCase;
         * }}
         */
        TestCase.create = function(properties) {
            return new TestCase(properties);
        };

        /**
         * Encodes the specified TestCase message. Does not implicitly {@link problemmanagement.TestCase.verify|verify} messages.
         * @function encode
         * @memberof problemmanagement.TestCase
         * @static
         * @param {problemmanagement.TestCase.$Properties} message TestCase message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestCase.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.id != null && $Object.hasOwnProperty.call(message, "id") && message.id !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.problemId != null && $Object.hasOwnProperty.call(message, "problemId") && message.problemId !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.problemId);
            if (message.input != null && $Object.hasOwnProperty.call(message, "input") && message.input !== "")
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.input);
            if (message.expectedOutput != null && $Object.hasOwnProperty.call(message, "expectedOutput") && message.expectedOutput !== "")
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.expectedOutput);
            if (message.hidden != null && $Object.hasOwnProperty.call(message, "hidden") && message.hidden !== false)
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.hidden);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified TestCase message, length delimited. Does not implicitly {@link problemmanagement.TestCase.verify|verify} messages.
         * @function encodeDelimited
         * @memberof problemmanagement.TestCase
         * @static
         * @param {problemmanagement.TestCase.$Properties} message TestCase message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestCase.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a TestCase message from the specified reader or buffer.
         * @function decode
         * @memberof problemmanagement.TestCase
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {problemmanagement.TestCase & problemmanagement.TestCase.$Shape} TestCase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestCase.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.problemmanagement.TestCase();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.id = value;
                        else
                            delete message.id;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.problemId = value;
                        else
                            delete message.problemId;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.input = value;
                        else
                            delete message.input;
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.expectedOutput = value;
                        else
                            delete message.expectedOutput;
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.hidden = value;
                        else
                            delete message.hidden;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a TestCase message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof problemmanagement.TestCase
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {problemmanagement.TestCase & problemmanagement.TestCase.$Shape} TestCase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestCase.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TestCase message.
         * @function verify
         * @memberof problemmanagement.TestCase
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TestCase.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.problemId != null && $Object.hasOwnProperty.call(message, "problemId"))
                if (!$util.isString(message.problemId))
                    return "problemId: string expected";
            if (message.input != null && $Object.hasOwnProperty.call(message, "input"))
                if (!$util.isString(message.input))
                    return "input: string expected";
            if (message.expectedOutput != null && $Object.hasOwnProperty.call(message, "expectedOutput"))
                if (!$util.isString(message.expectedOutput))
                    return "expectedOutput: string expected";
            if (message.hidden != null && $Object.hasOwnProperty.call(message, "hidden"))
                if (typeof message.hidden !== "boolean")
                    return "hidden: boolean expected";
            return null;
        };

        /**
         * Creates a TestCase message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof problemmanagement.TestCase
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {problemmanagement.TestCase} TestCase
         */
        TestCase.fromObject = function (object, _depth) {
            if (object instanceof $root.problemmanagement.TestCase)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".problemmanagement.TestCase: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.problemmanagement.TestCase();
            if (object.id != null)
                if (typeof object.id !== "string" || object.id.length)
                    message.id = $String(object.id);
            if (object.problemId != null)
                if (typeof object.problemId !== "string" || object.problemId.length)
                    message.problemId = $String(object.problemId);
            if (object.input != null)
                if (typeof object.input !== "string" || object.input.length)
                    message.input = $String(object.input);
            if (object.expectedOutput != null)
                if (typeof object.expectedOutput !== "string" || object.expectedOutput.length)
                    message.expectedOutput = $String(object.expectedOutput);
            if (object.hidden != null)
                if (object.hidden)
                    message.hidden = $Boolean(object.hidden);
            return message;
        };

        /**
         * Creates a plain object from a TestCase message. Also converts values to other types if specified.
         * @function toObject
         * @memberof problemmanagement.TestCase
         * @static
         * @param {problemmanagement.TestCase} message TestCase
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TestCase.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.problemId = "";
                object.input = "";
                object.expectedOutput = "";
                object.hidden = false;
            }
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                object.id = message.id;
            if (message.problemId != null && $Object.hasOwnProperty.call(message, "problemId"))
                object.problemId = message.problemId;
            if (message.input != null && $Object.hasOwnProperty.call(message, "input"))
                object.input = message.input;
            if (message.expectedOutput != null && $Object.hasOwnProperty.call(message, "expectedOutput"))
                object.expectedOutput = message.expectedOutput;
            if (message.hidden != null && $Object.hasOwnProperty.call(message, "hidden"))
                object.hidden = message.hidden;
            return object;
        };

        /**
         * Converts this TestCase to JSON.
         * @function toJSON
         * @memberof problemmanagement.TestCase
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestCase.prototype.toJSON = function() {
            return TestCase.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for TestCase
         * @function getTypeUrl
         * @memberof problemmanagement.TestCase
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        TestCase.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/problemmanagement.TestCase";
        };

        return TestCase;
    })();

    problemmanagement.Solution = (function() {

        /**
         * Properties of a Solution.
         * @typedef {Object} problemmanagement.Solution.$Properties
         * @property {string|null} [id] Solution id
         * @property {string|null} [problemId] Solution problemId
         * @property {problemmanagement.Language|null} [language] Solution language
         * @property {string|null} [code] Solution code
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Solution.
         * @memberof problemmanagement
         * @interface ISolution
         * @augments problemmanagement.Solution.$Properties
         * @deprecated Use problemmanagement.Solution.$Properties instead.
         */

        /**
         * Shape of a Solution.
         * @typedef {problemmanagement.Solution.$Properties} problemmanagement.Solution.$Shape
         */

        /**
         * Constructs a new Solution.
         * @memberof problemmanagement
         * @classdesc Represents a Solution.
         * @constructor
         * @param {problemmanagement.Solution.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const Solution = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Solution id.
         * @member {string} id
         * @memberof problemmanagement.Solution
         * @instance
         */
        Solution.prototype.id = "";

        /**
         * Solution problemId.
         * @member {string} problemId
         * @memberof problemmanagement.Solution
         * @instance
         */
        Solution.prototype.problemId = "";

        /**
         * Solution language.
         * @member {problemmanagement.Language} language
         * @memberof problemmanagement.Solution
         * @instance
         */
        Solution.prototype.language = 0;

        /**
         * Solution code.
         * @member {string} code
         * @memberof problemmanagement.Solution
         * @instance
         */
        Solution.prototype.code = "";

        /**
         * Creates a new Solution instance using the specified properties.
         * @function create
         * @memberof problemmanagement.Solution
         * @static
         * @param {problemmanagement.Solution.$Properties=} [properties] Properties to set
         * @returns {problemmanagement.Solution} Solution instance
         * @type {{
         *   (properties: problemmanagement.Solution.$Shape): problemmanagement.Solution & problemmanagement.Solution.$Shape;
         *   (properties?: problemmanagement.Solution.$Properties): problemmanagement.Solution;
         * }}
         */
        Solution.create = function(properties) {
            return new Solution(properties);
        };

        /**
         * Encodes the specified Solution message. Does not implicitly {@link problemmanagement.Solution.verify|verify} messages.
         * @function encode
         * @memberof problemmanagement.Solution
         * @static
         * @param {problemmanagement.Solution.$Properties} message Solution message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Solution.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.id != null && $Object.hasOwnProperty.call(message, "id") && message.id !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.problemId != null && $Object.hasOwnProperty.call(message, "problemId") && message.problemId !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.problemId);
            if (message.language != null && $Object.hasOwnProperty.call(message, "language") && message.language !== 0)
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.language);
            if (message.code != null && $Object.hasOwnProperty.call(message, "code") && message.code !== "")
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.code);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Solution message, length delimited. Does not implicitly {@link problemmanagement.Solution.verify|verify} messages.
         * @function encodeDelimited
         * @memberof problemmanagement.Solution
         * @static
         * @param {problemmanagement.Solution.$Properties} message Solution message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Solution.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a Solution message from the specified reader or buffer.
         * @function decode
         * @memberof problemmanagement.Solution
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {problemmanagement.Solution & problemmanagement.Solution.$Shape} Solution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Solution.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.problemmanagement.Solution();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.id = value;
                        else
                            delete message.id;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.problemId = value;
                        else
                            delete message.problemId;
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.language = value;
                        else
                            delete message.language;
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.code = value;
                        else
                            delete message.code;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a Solution message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof problemmanagement.Solution
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {problemmanagement.Solution & problemmanagement.Solution.$Shape} Solution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Solution.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Solution message.
         * @function verify
         * @memberof problemmanagement.Solution
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Solution.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.problemId != null && $Object.hasOwnProperty.call(message, "problemId"))
                if (!$util.isString(message.problemId))
                    return "problemId: string expected";
            if (message.language != null && $Object.hasOwnProperty.call(message, "language"))
                if (typeof message.language !== "number" || (message.language | 0) !== message.language)
                    return "language: enum value expected";
            if (message.code != null && $Object.hasOwnProperty.call(message, "code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            return null;
        };

        /**
         * Creates a Solution message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof problemmanagement.Solution
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {problemmanagement.Solution} Solution
         */
        Solution.fromObject = function (object, _depth) {
            if (object instanceof $root.problemmanagement.Solution)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".problemmanagement.Solution: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.problemmanagement.Solution();
            if (object.id != null)
                if (typeof object.id !== "string" || object.id.length)
                    message.id = $String(object.id);
            if (object.problemId != null)
                if (typeof object.problemId !== "string" || object.problemId.length)
                    message.problemId = $String(object.problemId);
            if (object.language !== 0 && (typeof object.language !== "string" || $root.problemmanagement.Language[object.language] !== 0))
                switch (object.language) {
                case "PYTHON":
                case 0:
                    message.language = 0;
                    break;
                case "JAVA":
                case 1:
                    message.language = 1;
                    break;
                case "C":
                case 2:
                    message.language = 2;
                    break;
                case "CPP":
                case 3:
                    message.language = 3;
                    break;
                default:
                    if (typeof object.language === "number" && (object.language | 0) === object.language)
                        message.language = object.language;
                }
            if (object.code != null)
                if (typeof object.code !== "string" || object.code.length)
                    message.code = $String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a Solution message. Also converts values to other types if specified.
         * @function toObject
         * @memberof problemmanagement.Solution
         * @static
         * @param {problemmanagement.Solution} message Solution
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Solution.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.problemId = "";
                object.language = options.enums === $String ? "PYTHON" : 0;
                object.code = "";
            }
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                object.id = message.id;
            if (message.problemId != null && $Object.hasOwnProperty.call(message, "problemId"))
                object.problemId = message.problemId;
            if (message.language != null && $Object.hasOwnProperty.call(message, "language"))
                object.language = options.enums === $String ? $root.problemmanagement.Language[message.language] === $undefined ? message.language : $root.problemmanagement.Language[message.language] : message.language;
            if (message.code != null && $Object.hasOwnProperty.call(message, "code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this Solution to JSON.
         * @function toJSON
         * @memberof problemmanagement.Solution
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Solution.prototype.toJSON = function() {
            return Solution.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for Solution
         * @function getTypeUrl
         * @memberof problemmanagement.Solution
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Solution.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/problemmanagement.Solution";
        };

        return Solution;
    })();

    problemmanagement.Problem = (function() {

        /**
         * Properties of a Problem.
         * @typedef {Object} problemmanagement.Problem.$Properties
         * @property {string|null} [id] Problem id
         * @property {string|null} [title] Problem title
         * @property {string|null} [slug] Problem slug
         * @property {problemmanagement.Difficulty|null} [difficulty] Problem difficulty
         * @property {string|null} [description] Problem description
         * @property {string|null} [examples] Problem examples
         * @property {string|null} [constraints] Problem constraints
         * @property {string|null} [intuition] Problem intuition
         * @property {string|null} [approach] Problem approach
         * @property {string|null} [timeComplexity] Problem timeComplexity
         * @property {string|null} [spaceComplexity] Problem spaceComplexity
         * @property {Array.<string>|null} [topics] Problem topics
         * @property {Array.<problemmanagement.Solution.$Properties>|null} [solutions] Problem solutions
         * @property {Array.<problemmanagement.TestCase.$Properties>|null} [tests] Problem tests
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Problem.
         * @memberof problemmanagement
         * @interface IProblem
         * @augments problemmanagement.Problem.$Properties
         * @deprecated Use problemmanagement.Problem.$Properties instead.
         */

        /**
         * Shape of a Problem.
         * @typedef {problemmanagement.Problem.$Properties} problemmanagement.Problem.$Shape
         */

        /**
         * Constructs a new Problem.
         * @memberof problemmanagement
         * @classdesc Represents a Problem.
         * @constructor
         * @param {problemmanagement.Problem.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const Problem = function (properties) {
            this.topics = [];
            this.solutions = [];
            this.tests = [];
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Problem id.
         * @member {string} id
         * @memberof problemmanagement.Problem
         * @instance
         */
        Problem.prototype.id = "";

        /**
         * Problem title.
         * @member {string} title
         * @memberof problemmanagement.Problem
         * @instance
         */
        Problem.prototype.title = "";

        /**
         * Problem slug.
         * @member {string} slug
         * @memberof problemmanagement.Problem
         * @instance
         */
        Problem.prototype.slug = "";

        /**
         * Problem difficulty.
         * @member {problemmanagement.Difficulty} difficulty
         * @memberof problemmanagement.Problem
         * @instance
         */
        Problem.prototype.difficulty = 0;

        /**
         * Problem description.
         * @member {string} description
         * @memberof problemmanagement.Problem
         * @instance
         */
        Problem.prototype.description = "";

        /**
         * Problem examples.
         * @member {string} examples
         * @memberof problemmanagement.Problem
         * @instance
         */
        Problem.prototype.examples = "";

        /**
         * Problem constraints.
         * @member {string} constraints
         * @memberof problemmanagement.Problem
         * @instance
         */
        Problem.prototype.constraints = "";

        /**
         * Problem intuition.
         * @member {string} intuition
         * @memberof problemmanagement.Problem
         * @instance
         */
        Problem.prototype.intuition = "";

        /**
         * Problem approach.
         * @member {string} approach
         * @memberof problemmanagement.Problem
         * @instance
         */
        Problem.prototype.approach = "";

        /**
         * Problem timeComplexity.
         * @member {string} timeComplexity
         * @memberof problemmanagement.Problem
         * @instance
         */
        Problem.prototype.timeComplexity = "";

        /**
         * Problem spaceComplexity.
         * @member {string} spaceComplexity
         * @memberof problemmanagement.Problem
         * @instance
         */
        Problem.prototype.spaceComplexity = "";

        /**
         * Problem topics.
         * @member {Array.<string>} topics
         * @memberof problemmanagement.Problem
         * @instance
         */
        Problem.prototype.topics = $util.emptyArray;

        /**
         * Problem solutions.
         * @member {Array.<problemmanagement.Solution.$Properties>} solutions
         * @memberof problemmanagement.Problem
         * @instance
         */
        Problem.prototype.solutions = $util.emptyArray;

        /**
         * Problem tests.
         * @member {Array.<problemmanagement.TestCase.$Properties>} tests
         * @memberof problemmanagement.Problem
         * @instance
         */
        Problem.prototype.tests = $util.emptyArray;

        /**
         * Creates a new Problem instance using the specified properties.
         * @function create
         * @memberof problemmanagement.Problem
         * @static
         * @param {problemmanagement.Problem.$Properties=} [properties] Properties to set
         * @returns {problemmanagement.Problem} Problem instance
         * @type {{
         *   (properties: problemmanagement.Problem.$Shape): problemmanagement.Problem & problemmanagement.Problem.$Shape;
         *   (properties?: problemmanagement.Problem.$Properties): problemmanagement.Problem;
         * }}
         */
        Problem.create = function(properties) {
            return new Problem(properties);
        };

        /**
         * Encodes the specified Problem message. Does not implicitly {@link problemmanagement.Problem.verify|verify} messages.
         * @function encode
         * @memberof problemmanagement.Problem
         * @static
         * @param {problemmanagement.Problem.$Properties} message Problem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Problem.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.id != null && $Object.hasOwnProperty.call(message, "id") && message.id !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.title != null && $Object.hasOwnProperty.call(message, "title") && message.title !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            if (message.slug != null && $Object.hasOwnProperty.call(message, "slug") && message.slug !== "")
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.slug);
            if (message.difficulty != null && $Object.hasOwnProperty.call(message, "difficulty") && message.difficulty !== 0)
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.difficulty);
            if (message.description != null && $Object.hasOwnProperty.call(message, "description") && message.description !== "")
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.description);
            if (message.examples != null && $Object.hasOwnProperty.call(message, "examples") && message.examples !== "")
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.examples);
            if (message.constraints != null && $Object.hasOwnProperty.call(message, "constraints") && message.constraints !== "")
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.constraints);
            if (message.intuition != null && $Object.hasOwnProperty.call(message, "intuition") && message.intuition !== "")
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.intuition);
            if (message.approach != null && $Object.hasOwnProperty.call(message, "approach") && message.approach !== "")
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.approach);
            if (message.timeComplexity != null && $Object.hasOwnProperty.call(message, "timeComplexity") && message.timeComplexity !== "")
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.timeComplexity);
            if (message.spaceComplexity != null && $Object.hasOwnProperty.call(message, "spaceComplexity") && message.spaceComplexity !== "")
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.spaceComplexity);
            if (message.topics != null && message.topics.length)
                for (let i = 0; i < message.topics.length; ++i)
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.topics[i]);
            if (message.solutions != null && message.solutions.length)
                for (let i = 0; i < message.solutions.length; ++i)
                    $root.problemmanagement.Solution.encode(message.solutions[i], writer.uint32(/* id 13, wireType 2 =*/106).fork(), _depth + 1).ldelim();
            if (message.tests != null && message.tests.length)
                for (let i = 0; i < message.tests.length; ++i)
                    $root.problemmanagement.TestCase.encode(message.tests[i], writer.uint32(/* id 14, wireType 2 =*/114).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Problem message, length delimited. Does not implicitly {@link problemmanagement.Problem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof problemmanagement.Problem
         * @static
         * @param {problemmanagement.Problem.$Properties} message Problem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Problem.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a Problem message from the specified reader or buffer.
         * @function decode
         * @memberof problemmanagement.Problem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {problemmanagement.Problem & problemmanagement.Problem.$Shape} Problem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Problem.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.problemmanagement.Problem();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.id = value;
                        else
                            delete message.id;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.title = value;
                        else
                            delete message.title;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.slug = value;
                        else
                            delete message.slug;
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.difficulty = value;
                        else
                            delete message.difficulty;
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.description = value;
                        else
                            delete message.description;
                        continue;
                    }
                case 6: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.examples = value;
                        else
                            delete message.examples;
                        continue;
                    }
                case 7: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.constraints = value;
                        else
                            delete message.constraints;
                        continue;
                    }
                case 8: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.intuition = value;
                        else
                            delete message.intuition;
                        continue;
                    }
                case 9: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.approach = value;
                        else
                            delete message.approach;
                        continue;
                    }
                case 10: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.timeComplexity = value;
                        else
                            delete message.timeComplexity;
                        continue;
                    }
                case 11: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.spaceComplexity = value;
                        else
                            delete message.spaceComplexity;
                        continue;
                    }
                case 12: {
                        if (wireType !== 2)
                            break;
                        if (!(message.topics && message.topics.length))
                            message.topics = [];
                        message.topics.push(reader.stringVerify());
                        continue;
                    }
                case 13: {
                        if (wireType !== 2)
                            break;
                        if (!(message.solutions && message.solutions.length))
                            message.solutions = [];
                        message.solutions.push($root.problemmanagement.Solution.decode(reader, reader.uint32(), $undefined, _depth + 1));
                        continue;
                    }
                case 14: {
                        if (wireType !== 2)
                            break;
                        if (!(message.tests && message.tests.length))
                            message.tests = [];
                        message.tests.push($root.problemmanagement.TestCase.decode(reader, reader.uint32(), $undefined, _depth + 1));
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a Problem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof problemmanagement.Problem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {problemmanagement.Problem & problemmanagement.Problem.$Shape} Problem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Problem.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Problem message.
         * @function verify
         * @memberof problemmanagement.Problem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Problem.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.title != null && $Object.hasOwnProperty.call(message, "title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.slug != null && $Object.hasOwnProperty.call(message, "slug"))
                if (!$util.isString(message.slug))
                    return "slug: string expected";
            if (message.difficulty != null && $Object.hasOwnProperty.call(message, "difficulty"))
                if (typeof message.difficulty !== "number" || (message.difficulty | 0) !== message.difficulty)
                    return "difficulty: enum value expected";
            if (message.description != null && $Object.hasOwnProperty.call(message, "description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.examples != null && $Object.hasOwnProperty.call(message, "examples"))
                if (!$util.isString(message.examples))
                    return "examples: string expected";
            if (message.constraints != null && $Object.hasOwnProperty.call(message, "constraints"))
                if (!$util.isString(message.constraints))
                    return "constraints: string expected";
            if (message.intuition != null && $Object.hasOwnProperty.call(message, "intuition"))
                if (!$util.isString(message.intuition))
                    return "intuition: string expected";
            if (message.approach != null && $Object.hasOwnProperty.call(message, "approach"))
                if (!$util.isString(message.approach))
                    return "approach: string expected";
            if (message.timeComplexity != null && $Object.hasOwnProperty.call(message, "timeComplexity"))
                if (!$util.isString(message.timeComplexity))
                    return "timeComplexity: string expected";
            if (message.spaceComplexity != null && $Object.hasOwnProperty.call(message, "spaceComplexity"))
                if (!$util.isString(message.spaceComplexity))
                    return "spaceComplexity: string expected";
            if (message.topics != null && $Object.hasOwnProperty.call(message, "topics")) {
                if (!$Array.isArray(message.topics))
                    return "topics: array expected";
                for (let i = 0; i < message.topics.length; ++i)
                    if (!$util.isString(message.topics[i]))
                        return "topics: string[] expected";
            }
            if (message.solutions != null && $Object.hasOwnProperty.call(message, "solutions")) {
                if (!$Array.isArray(message.solutions))
                    return "solutions: array expected";
                for (let i = 0; i < message.solutions.length; ++i) {
                    let error = $root.problemmanagement.Solution.verify(message.solutions[i], _depth + 1);
                    if (error)
                        return "solutions." + error;
                }
            }
            if (message.tests != null && $Object.hasOwnProperty.call(message, "tests")) {
                if (!$Array.isArray(message.tests))
                    return "tests: array expected";
                for (let i = 0; i < message.tests.length; ++i) {
                    let error = $root.problemmanagement.TestCase.verify(message.tests[i], _depth + 1);
                    if (error)
                        return "tests." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Problem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof problemmanagement.Problem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {problemmanagement.Problem} Problem
         */
        Problem.fromObject = function (object, _depth) {
            if (object instanceof $root.problemmanagement.Problem)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".problemmanagement.Problem: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.problemmanagement.Problem();
            if (object.id != null)
                if (typeof object.id !== "string" || object.id.length)
                    message.id = $String(object.id);
            if (object.title != null)
                if (typeof object.title !== "string" || object.title.length)
                    message.title = $String(object.title);
            if (object.slug != null)
                if (typeof object.slug !== "string" || object.slug.length)
                    message.slug = $String(object.slug);
            if (object.difficulty !== 0 && (typeof object.difficulty !== "string" || $root.problemmanagement.Difficulty[object.difficulty] !== 0))
                switch (object.difficulty) {
                case "EASY":
                case 0:
                    message.difficulty = 0;
                    break;
                case "MEDIUM":
                case 1:
                    message.difficulty = 1;
                    break;
                case "HARD":
                case 2:
                    message.difficulty = 2;
                    break;
                default:
                    if (typeof object.difficulty === "number" && (object.difficulty | 0) === object.difficulty)
                        message.difficulty = object.difficulty;
                }
            if (object.description != null)
                if (typeof object.description !== "string" || object.description.length)
                    message.description = $String(object.description);
            if (object.examples != null)
                if (typeof object.examples !== "string" || object.examples.length)
                    message.examples = $String(object.examples);
            if (object.constraints != null)
                if (typeof object.constraints !== "string" || object.constraints.length)
                    message.constraints = $String(object.constraints);
            if (object.intuition != null)
                if (typeof object.intuition !== "string" || object.intuition.length)
                    message.intuition = $String(object.intuition);
            if (object.approach != null)
                if (typeof object.approach !== "string" || object.approach.length)
                    message.approach = $String(object.approach);
            if (object.timeComplexity != null)
                if (typeof object.timeComplexity !== "string" || object.timeComplexity.length)
                    message.timeComplexity = $String(object.timeComplexity);
            if (object.spaceComplexity != null)
                if (typeof object.spaceComplexity !== "string" || object.spaceComplexity.length)
                    message.spaceComplexity = $String(object.spaceComplexity);
            if (object.topics) {
                if (!$Array.isArray(object.topics))
                    throw $TypeError(".problemmanagement.Problem.topics: array expected");
                message.topics = $Array(object.topics.length);
                for (let i = 0; i < object.topics.length; ++i)
                    message.topics[i] = $String(object.topics[i]);
            }
            if (object.solutions) {
                if (!$Array.isArray(object.solutions))
                    throw $TypeError(".problemmanagement.Problem.solutions: array expected");
                message.solutions = $Array(object.solutions.length);
                for (let i = 0; i < object.solutions.length; ++i) {
                    if (!$util.isObject(object.solutions[i]))
                        throw $TypeError(".problemmanagement.Problem.solutions: object expected");
                    message.solutions[i] = $root.problemmanagement.Solution.fromObject(object.solutions[i], _depth + 1);
                }
            }
            if (object.tests) {
                if (!$Array.isArray(object.tests))
                    throw $TypeError(".problemmanagement.Problem.tests: array expected");
                message.tests = $Array(object.tests.length);
                for (let i = 0; i < object.tests.length; ++i) {
                    if (!$util.isObject(object.tests[i]))
                        throw $TypeError(".problemmanagement.Problem.tests: object expected");
                    message.tests[i] = $root.problemmanagement.TestCase.fromObject(object.tests[i], _depth + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Problem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof problemmanagement.Problem
         * @static
         * @param {problemmanagement.Problem} message Problem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Problem.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults) {
                object.topics = [];
                object.solutions = [];
                object.tests = [];
            }
            if (options.defaults) {
                object.id = "";
                object.title = "";
                object.slug = "";
                object.difficulty = options.enums === $String ? "EASY" : 0;
                object.description = "";
                object.examples = "";
                object.constraints = "";
                object.intuition = "";
                object.approach = "";
                object.timeComplexity = "";
                object.spaceComplexity = "";
            }
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                object.id = message.id;
            if (message.title != null && $Object.hasOwnProperty.call(message, "title"))
                object.title = message.title;
            if (message.slug != null && $Object.hasOwnProperty.call(message, "slug"))
                object.slug = message.slug;
            if (message.difficulty != null && $Object.hasOwnProperty.call(message, "difficulty"))
                object.difficulty = options.enums === $String ? $root.problemmanagement.Difficulty[message.difficulty] === $undefined ? message.difficulty : $root.problemmanagement.Difficulty[message.difficulty] : message.difficulty;
            if (message.description != null && $Object.hasOwnProperty.call(message, "description"))
                object.description = message.description;
            if (message.examples != null && $Object.hasOwnProperty.call(message, "examples"))
                object.examples = message.examples;
            if (message.constraints != null && $Object.hasOwnProperty.call(message, "constraints"))
                object.constraints = message.constraints;
            if (message.intuition != null && $Object.hasOwnProperty.call(message, "intuition"))
                object.intuition = message.intuition;
            if (message.approach != null && $Object.hasOwnProperty.call(message, "approach"))
                object.approach = message.approach;
            if (message.timeComplexity != null && $Object.hasOwnProperty.call(message, "timeComplexity"))
                object.timeComplexity = message.timeComplexity;
            if (message.spaceComplexity != null && $Object.hasOwnProperty.call(message, "spaceComplexity"))
                object.spaceComplexity = message.spaceComplexity;
            if (message.topics && message.topics.length) {
                object.topics = $Array(message.topics.length);
                for (let j = 0; j < message.topics.length; ++j)
                    object.topics[j] = message.topics[j];
            }
            if (message.solutions && message.solutions.length) {
                object.solutions = $Array(message.solutions.length);
                for (let j = 0; j < message.solutions.length; ++j)
                    object.solutions[j] = $root.problemmanagement.Solution.toObject(message.solutions[j], options, _depth + 1);
            }
            if (message.tests && message.tests.length) {
                object.tests = $Array(message.tests.length);
                for (let j = 0; j < message.tests.length; ++j)
                    object.tests[j] = $root.problemmanagement.TestCase.toObject(message.tests[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this Problem to JSON.
         * @function toJSON
         * @memberof problemmanagement.Problem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Problem.prototype.toJSON = function() {
            return Problem.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for Problem
         * @function getTypeUrl
         * @memberof problemmanagement.Problem
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Problem.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/problemmanagement.Problem";
        };

        return Problem;
    })();

    problemmanagement.ProblemListResponse = (function() {

        /**
         * Properties of a ProblemListResponse.
         * @typedef {Object} problemmanagement.ProblemListResponse.$Properties
         * @property {Array.<problemmanagement.Problem.$Properties>|null} [problems] ProblemListResponse problems
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a ProblemListResponse.
         * @memberof problemmanagement
         * @interface IProblemListResponse
         * @augments problemmanagement.ProblemListResponse.$Properties
         * @deprecated Use problemmanagement.ProblemListResponse.$Properties instead.
         */

        /**
         * Shape of a ProblemListResponse.
         * @typedef {problemmanagement.ProblemListResponse.$Properties} problemmanagement.ProblemListResponse.$Shape
         */

        /**
         * Constructs a new ProblemListResponse.
         * @memberof problemmanagement
         * @classdesc Represents a ProblemListResponse.
         * @constructor
         * @param {problemmanagement.ProblemListResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const ProblemListResponse = function (properties) {
            this.problems = [];
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ProblemListResponse problems.
         * @member {Array.<problemmanagement.Problem.$Properties>} problems
         * @memberof problemmanagement.ProblemListResponse
         * @instance
         */
        ProblemListResponse.prototype.problems = $util.emptyArray;

        /**
         * Creates a new ProblemListResponse instance using the specified properties.
         * @function create
         * @memberof problemmanagement.ProblemListResponse
         * @static
         * @param {problemmanagement.ProblemListResponse.$Properties=} [properties] Properties to set
         * @returns {problemmanagement.ProblemListResponse} ProblemListResponse instance
         * @type {{
         *   (properties: problemmanagement.ProblemListResponse.$Shape): problemmanagement.ProblemListResponse & problemmanagement.ProblemListResponse.$Shape;
         *   (properties?: problemmanagement.ProblemListResponse.$Properties): problemmanagement.ProblemListResponse;
         * }}
         */
        ProblemListResponse.create = function(properties) {
            return new ProblemListResponse(properties);
        };

        /**
         * Encodes the specified ProblemListResponse message. Does not implicitly {@link problemmanagement.ProblemListResponse.verify|verify} messages.
         * @function encode
         * @memberof problemmanagement.ProblemListResponse
         * @static
         * @param {problemmanagement.ProblemListResponse.$Properties} message ProblemListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProblemListResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.problems != null && message.problems.length)
                for (let i = 0; i < message.problems.length; ++i)
                    $root.problemmanagement.Problem.encode(message.problems[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ProblemListResponse message, length delimited. Does not implicitly {@link problemmanagement.ProblemListResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof problemmanagement.ProblemListResponse
         * @static
         * @param {problemmanagement.ProblemListResponse.$Properties} message ProblemListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProblemListResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a ProblemListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof problemmanagement.ProblemListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {problemmanagement.ProblemListResponse & problemmanagement.ProblemListResponse.$Shape} ProblemListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProblemListResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.problemmanagement.ProblemListResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if (!(message.problems && message.problems.length))
                            message.problems = [];
                        message.problems.push($root.problemmanagement.Problem.decode(reader, reader.uint32(), $undefined, _depth + 1));
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a ProblemListResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof problemmanagement.ProblemListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {problemmanagement.ProblemListResponse & problemmanagement.ProblemListResponse.$Shape} ProblemListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProblemListResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProblemListResponse message.
         * @function verify
         * @memberof problemmanagement.ProblemListResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProblemListResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.problems != null && $Object.hasOwnProperty.call(message, "problems")) {
                if (!$Array.isArray(message.problems))
                    return "problems: array expected";
                for (let i = 0; i < message.problems.length; ++i) {
                    let error = $root.problemmanagement.Problem.verify(message.problems[i], _depth + 1);
                    if (error)
                        return "problems." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ProblemListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof problemmanagement.ProblemListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {problemmanagement.ProblemListResponse} ProblemListResponse
         */
        ProblemListResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.problemmanagement.ProblemListResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".problemmanagement.ProblemListResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.problemmanagement.ProblemListResponse();
            if (object.problems) {
                if (!$Array.isArray(object.problems))
                    throw $TypeError(".problemmanagement.ProblemListResponse.problems: array expected");
                message.problems = $Array(object.problems.length);
                for (let i = 0; i < object.problems.length; ++i) {
                    if (!$util.isObject(object.problems[i]))
                        throw $TypeError(".problemmanagement.ProblemListResponse.problems: object expected");
                    message.problems[i] = $root.problemmanagement.Problem.fromObject(object.problems[i], _depth + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ProblemListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof problemmanagement.ProblemListResponse
         * @static
         * @param {problemmanagement.ProblemListResponse} message ProblemListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProblemListResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.problems = [];
            if (message.problems && message.problems.length) {
                object.problems = $Array(message.problems.length);
                for (let j = 0; j < message.problems.length; ++j)
                    object.problems[j] = $root.problemmanagement.Problem.toObject(message.problems[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this ProblemListResponse to JSON.
         * @function toJSON
         * @memberof problemmanagement.ProblemListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProblemListResponse.prototype.toJSON = function() {
            return ProblemListResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ProblemListResponse
         * @function getTypeUrl
         * @memberof problemmanagement.ProblemListResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ProblemListResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/problemmanagement.ProblemListResponse";
        };

        return ProblemListResponse;
    })();

    return problemmanagement;
})();

export {
  $root as default
};
