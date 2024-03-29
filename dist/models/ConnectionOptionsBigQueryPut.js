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
exports.ConnectionOptionsBigQueryPutToJSON = exports.ConnectionOptionsBigQueryPutFromJSONTyped = exports.ConnectionOptionsBigQueryPutFromJSON = void 0;
function ConnectionOptionsBigQueryPutFromJSON(json) {
    return ConnectionOptionsBigQueryPutFromJSONTyped(json, false);
}
exports.ConnectionOptionsBigQueryPutFromJSON = ConnectionOptionsBigQueryPutFromJSON;
function ConnectionOptionsBigQueryPutFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dataset_name': json['dataset_name'],
        'project_id': json['project_id'],
        'type': json['type'],
    };
}
exports.ConnectionOptionsBigQueryPutFromJSONTyped = ConnectionOptionsBigQueryPutFromJSONTyped;
function ConnectionOptionsBigQueryPutToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dataset_name': value.dataset_name,
        'project_id': value.project_id,
        'type': value.type,
    };
}
exports.ConnectionOptionsBigQueryPutToJSON = ConnectionOptionsBigQueryPutToJSON;
