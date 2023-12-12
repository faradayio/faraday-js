"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Faraday REST API
 * The [Faraday](https://faraday.ai) API makes it easy to predict customer behavior programmatically.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@faraday.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetOptionsPostgresPutToJSON = exports.DatasetOptionsPostgresPutFromJSONTyped = exports.DatasetOptionsPostgresPutFromJSON = void 0;
function DatasetOptionsPostgresPutFromJSON(json) {
    return DatasetOptionsPostgresPutFromJSONTyped(json, false);
}
exports.DatasetOptionsPostgresPutFromJSON = DatasetOptionsPostgresPutFromJSON;
function DatasetOptionsPostgresPutFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'table_name': json['table_name'],
        'type': json['type'],
    };
}
exports.DatasetOptionsPostgresPutFromJSONTyped = DatasetOptionsPostgresPutFromJSONTyped;
function DatasetOptionsPostgresPutToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'table_name': value.table_name,
        'type': value.type,
    };
}
exports.DatasetOptionsPostgresPutToJSON = DatasetOptionsPostgresPutToJSON;
