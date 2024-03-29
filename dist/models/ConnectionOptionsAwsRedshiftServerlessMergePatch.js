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
exports.ConnectionOptionsAwsRedshiftServerlessMergePatchToJSON = exports.ConnectionOptionsAwsRedshiftServerlessMergePatchFromJSONTyped = exports.ConnectionOptionsAwsRedshiftServerlessMergePatchFromJSON = void 0;
const runtime_1 = require("../runtime");
function ConnectionOptionsAwsRedshiftServerlessMergePatchFromJSON(json) {
    return ConnectionOptionsAwsRedshiftServerlessMergePatchFromJSONTyped(json, false);
}
exports.ConnectionOptionsAwsRedshiftServerlessMergePatchFromJSON = ConnectionOptionsAwsRedshiftServerlessMergePatchFromJSON;
function ConnectionOptionsAwsRedshiftServerlessMergePatchFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'aws_region': !runtime_1.exists(json, 'aws_region') ? undefined : json['aws_region'],
        'database': !runtime_1.exists(json, 'database') ? undefined : json['database'],
        'host': !runtime_1.exists(json, 'host') ? undefined : json['host'],
        'load_balancer': !runtime_1.exists(json, 'load_balancer') ? undefined : json['load_balancer'],
        'password': !runtime_1.exists(json, 'password') ? undefined : json['password'],
        'port': !runtime_1.exists(json, 'port') ? undefined : json['port'],
        'schema': !runtime_1.exists(json, 'schema') ? undefined : json['schema'],
        'ssh_bastion': !runtime_1.exists(json, 'ssh_bastion') ? undefined : json['ssh_bastion'],
        'type': json['type'],
        'user': !runtime_1.exists(json, 'user') ? undefined : json['user'],
    };
}
exports.ConnectionOptionsAwsRedshiftServerlessMergePatchFromJSONTyped = ConnectionOptionsAwsRedshiftServerlessMergePatchFromJSONTyped;
function ConnectionOptionsAwsRedshiftServerlessMergePatchToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'aws_region': value.aws_region,
        'database': value.database,
        'host': value.host,
        'load_balancer': value.load_balancer,
        'password': value.password,
        'port': value.port,
        'schema': value.schema,
        'ssh_bastion': value.ssh_bastion,
        'type': value.type,
        'user': value.user,
    };
}
exports.ConnectionOptionsAwsRedshiftServerlessMergePatchToJSON = ConnectionOptionsAwsRedshiftServerlessMergePatchToJSON;
