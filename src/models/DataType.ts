/* tslint:disable */
/* eslint-disable */
/**
 * Faraday REST API
 * The [Faraday](https://faraday.ai) SDK makes it easy to predict customer behavior using a simple API.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * The data type of a column in table, or of a trait. Types are expressed using a subset of
 * [Avro](https://avro.apache.org/docs/current/spec.html). Possible values include:
 * 
 * - boolean: A Boolean value.
 * - long: A 64-bit integer.
 * - double: A 64-bit float.
 * - string: A Unicode string, possibly representing categorical data.
 * @export
 * @enum {string}
 */
export enum DataType {
    Boolean = 'boolean',
    Long = 'long',
    Double = 'double',
    String = 'string'
}

export function DataTypeFromJSON(json: any): DataType {
    return DataTypeFromJSONTyped(json, false);
}

export function DataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataType {
    return json as DataType;
}

export function DataTypeToJSON(value?: DataType | null): any {
    return value as any;
}

