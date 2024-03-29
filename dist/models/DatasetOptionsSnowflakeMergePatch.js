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
exports.DatasetOptionsSnowflakeMergePatchToJSON = exports.DatasetOptionsSnowflakeMergePatchFromJSONTyped = exports.DatasetOptionsSnowflakeMergePatchFromJSON = void 0;
const runtime_1 = require("../runtime");
function DatasetOptionsSnowflakeMergePatchFromJSON(json) {
    return DatasetOptionsSnowflakeMergePatchFromJSONTyped(json, false);
}
exports.DatasetOptionsSnowflakeMergePatchFromJSON = DatasetOptionsSnowflakeMergePatchFromJSON;
function DatasetOptionsSnowflakeMergePatchFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'case_sensitive_columns': !runtime_1.exists(json, 'case_sensitive_columns') ? undefined : json['case_sensitive_columns'],
        'table_name': !runtime_1.exists(json, 'table_name') ? undefined : json['table_name'],
        'type': json['type'],
    };
}
exports.DatasetOptionsSnowflakeMergePatchFromJSONTyped = DatasetOptionsSnowflakeMergePatchFromJSONTyped;
function DatasetOptionsSnowflakeMergePatchToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'case_sensitive_columns': value.case_sensitive_columns,
        'table_name': value.table_name,
        'type': value.type,
    };
}
exports.DatasetOptionsSnowflakeMergePatchToJSON = DatasetOptionsSnowflakeMergePatchToJSON;
