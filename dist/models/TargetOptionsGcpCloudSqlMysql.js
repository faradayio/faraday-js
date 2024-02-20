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
exports.TargetOptionsGcpCloudSqlMysqlToJSON = exports.TargetOptionsGcpCloudSqlMysqlFromJSONTyped = exports.TargetOptionsGcpCloudSqlMysqlFromJSON = void 0;
function TargetOptionsGcpCloudSqlMysqlFromJSON(json) {
    return TargetOptionsGcpCloudSqlMysqlFromJSONTyped(json, false);
}
exports.TargetOptionsGcpCloudSqlMysqlFromJSON = TargetOptionsGcpCloudSqlMysqlFromJSON;
function TargetOptionsGcpCloudSqlMysqlFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'table_name': json['table_name'],
        'type': json['type'],
    };
}
exports.TargetOptionsGcpCloudSqlMysqlFromJSONTyped = TargetOptionsGcpCloudSqlMysqlFromJSONTyped;
function TargetOptionsGcpCloudSqlMysqlToJSON(value) {
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
exports.TargetOptionsGcpCloudSqlMysqlToJSON = TargetOptionsGcpCloudSqlMysqlToJSON;