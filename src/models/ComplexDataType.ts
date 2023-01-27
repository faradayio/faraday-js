/* tslint:disable */
/* eslint-disable */
/**
 * Faraday REST API
 * The [Faraday](https://faraday.ai) SDK makes it easy to predict customer behavior using a simple API.
 *
 *
 *
 * NOTE: This file was modified manually. There is a bug in the openapi-generator, which until patched,
 * cannot handle `oneOf` both a primitive and object type. Here we are manually overriding the issue.
 */

import {
  ComplexDataTypeOneOf,
  ComplexDataTypeOneOfFromJSON,
  ComplexDataTypeOneOfFromJSONTyped,
  ComplexDataTypeOneOfToJSON,
} from "./ComplexDataTypeOneOf";
import {
  PrimitiveDataType,
  PrimitiveDataTypeFromJSON,
  PrimitiveDataTypeFromJSONTyped,
  PrimitiveDataTypeToJSON,
} from "./PrimitiveDataType";

/**
 * @type ComplexDataType
 * The data type of a column in table, or of a trait. Types are expressed using a subset of
 * [Avro](https://avro.apache.org/docs/current/spec.html). Possible values include all the types
 * in `PrimitiveDataType`, plus more complex types like dates, timestamps and JSON.
 * @export
 */
export type ComplexDataType = ComplexDataTypeOneOf | PrimitiveDataType;

export function ComplexDataTypeFromJSON(json: any): ComplexDataType {
  if (json === undefined || json === null) {
    return json;
  }
  // if json is an object we have a complex data type
  if (typeof json === "object") {
    return ComplexDataTypeOneOfFromJSON(json);
  }

  // else we have a primitive data type
  return PrimitiveDataTypeFromJSON(json);
}

export function ComplexDataTypeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ComplexDataType {
  if (json === undefined || json === null) {
    return json;
  }
  // if json is an object we have a complex data type
  if (typeof json === "object") {
    return ComplexDataTypeOneOfFromJSONTyped(json, true);
  }

  // else we have a primitive data type
  return PrimitiveDataTypeFromJSONTyped(json, true);
}

export function ComplexDataTypeToJSON(value?: ComplexDataType | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }

  if (typeof value === "object") {
    return ComplexDataTypeOneOfToJSON(value);
  }

  return PrimitiveDataTypeToJSON(value);
}
