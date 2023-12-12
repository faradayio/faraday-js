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
exports.DatasetOptionsBigQueryToJSON = exports.DatasetOptionsBigQueryFromJSONTyped = exports.DatasetOptionsBigQueryFromJSON = void 0;
function DatasetOptionsBigQueryFromJSON(json) {
    return DatasetOptionsBigQueryFromJSONTyped(json, false);
}
exports.DatasetOptionsBigQueryFromJSON = DatasetOptionsBigQueryFromJSON;
function DatasetOptionsBigQueryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'table_name': json['table_name'],
        'type': json['type'],
    };
}
exports.DatasetOptionsBigQueryFromJSONTyped = DatasetOptionsBigQueryFromJSONTyped;
function DatasetOptionsBigQueryToJSON(value) {
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
exports.DatasetOptionsBigQueryToJSON = DatasetOptionsBigQueryToJSON;
