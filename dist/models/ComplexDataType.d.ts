/**
 * Faraday REST API
 * The [Faraday](https://faraday.ai) SDK makes it easy to predict customer behavior using a simple API.
 *
 *
 *
 * NOTE: This file was modified manually. There is a bug in the openapi-generator, which until patched,
 * cannot handle `oneOf` both a primitive and object type. Here we are manually overriding the issue.
 */
import { ComplexDataTypeOneOf } from "./ComplexDataTypeOneOf";
import { PrimitiveDataType } from "./PrimitiveDataType";
/**
 * @type ComplexDataType
 * The data type of a column in table, or of a trait. Types are expressed using a subset of
 * [Avro](https://avro.apache.org/docs/current/spec.html). Possible values include all the types
 * in `PrimitiveDataType`, plus more complex types like dates, timestamps and JSON.
 * @export
 */
export declare type ComplexDataType = ComplexDataTypeOneOf | PrimitiveDataType;
export declare function ComplexDataTypeFromJSON(json: any): ComplexDataType;
export declare function ComplexDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComplexDataType;
export declare function ComplexDataTypeToJSON(value?: ComplexDataType | null): any;
