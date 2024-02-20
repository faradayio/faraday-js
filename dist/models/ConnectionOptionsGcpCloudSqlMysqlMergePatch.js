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
exports.ConnectionOptionsGcpCloudSqlMysqlMergePatchToJSON = exports.ConnectionOptionsGcpCloudSqlMysqlMergePatchFromJSONTyped = exports.ConnectionOptionsGcpCloudSqlMysqlMergePatchFromJSON = void 0;
const runtime_1 = require("../runtime");
function ConnectionOptionsGcpCloudSqlMysqlMergePatchFromJSON(json) {
    return ConnectionOptionsGcpCloudSqlMysqlMergePatchFromJSONTyped(json, false);
}
exports.ConnectionOptionsGcpCloudSqlMysqlMergePatchFromJSON = ConnectionOptionsGcpCloudSqlMysqlMergePatchFromJSON;
function ConnectionOptionsGcpCloudSqlMysqlMergePatchFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'database': !runtime_1.exists(json, 'database') ? undefined : json['database'],
        'instance_connection_name': !runtime_1.exists(json, 'instance_connection_name') ? undefined : json['instance_connection_name'],
        'password': !runtime_1.exists(json, 'password') ? undefined : json['password'],
        'type': json['type'],
        'user': !runtime_1.exists(json, 'user') ? undefined : json['user'],
    };
}
exports.ConnectionOptionsGcpCloudSqlMysqlMergePatchFromJSONTyped = ConnectionOptionsGcpCloudSqlMysqlMergePatchFromJSONTyped;
function ConnectionOptionsGcpCloudSqlMysqlMergePatchToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'database': value.database,
        'instance_connection_name': value.instance_connection_name,
        'password': value.password,
        'type': value.type,
        'user': value.user,
    };
}
exports.ConnectionOptionsGcpCloudSqlMysqlMergePatchToJSON = ConnectionOptionsGcpCloudSqlMysqlMergePatchToJSON;