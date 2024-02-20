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
exports.ConnectionOptionsGcpCloudSqlPostgresPostToJSON = exports.ConnectionOptionsGcpCloudSqlPostgresPostFromJSONTyped = exports.ConnectionOptionsGcpCloudSqlPostgresPostFromJSON = void 0;
function ConnectionOptionsGcpCloudSqlPostgresPostFromJSON(json) {
    return ConnectionOptionsGcpCloudSqlPostgresPostFromJSONTyped(json, false);
}
exports.ConnectionOptionsGcpCloudSqlPostgresPostFromJSON = ConnectionOptionsGcpCloudSqlPostgresPostFromJSON;
function ConnectionOptionsGcpCloudSqlPostgresPostFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'database': json['database'],
        'instance_connection_name': json['instance_connection_name'],
        'password': json['password'],
        'schema': json['schema'],
        'type': json['type'],
        'user': json['user'],
    };
}
exports.ConnectionOptionsGcpCloudSqlPostgresPostFromJSONTyped = ConnectionOptionsGcpCloudSqlPostgresPostFromJSONTyped;
function ConnectionOptionsGcpCloudSqlPostgresPostToJSON(value) {
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
        'schema': value.schema,
        'type': value.type,
        'user': value.user,
    };
}
exports.ConnectionOptionsGcpCloudSqlPostgresPostToJSON = ConnectionOptionsGcpCloudSqlPostgresPostToJSON;