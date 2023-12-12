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
exports.DatasetOptionsSqlServerMergePatchToJSON = exports.DatasetOptionsSqlServerMergePatchFromJSONTyped = exports.DatasetOptionsSqlServerMergePatchFromJSON = void 0;
const runtime_1 = require("../runtime");
function DatasetOptionsSqlServerMergePatchFromJSON(json) {
    return DatasetOptionsSqlServerMergePatchFromJSONTyped(json, false);
}
exports.DatasetOptionsSqlServerMergePatchFromJSON = DatasetOptionsSqlServerMergePatchFromJSON;
function DatasetOptionsSqlServerMergePatchFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'table_name': !runtime_1.exists(json, 'table_name') ? undefined : json['table_name'],
        'type': json['type'],
    };
}
exports.DatasetOptionsSqlServerMergePatchFromJSONTyped = DatasetOptionsSqlServerMergePatchFromJSONTyped;
function DatasetOptionsSqlServerMergePatchToJSON(value) {
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
exports.DatasetOptionsSqlServerMergePatchToJSON = DatasetOptionsSqlServerMergePatchToJSON;
