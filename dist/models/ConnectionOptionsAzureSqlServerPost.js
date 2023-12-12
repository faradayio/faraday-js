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
exports.ConnectionOptionsAzureSqlServerPostToJSON = exports.ConnectionOptionsAzureSqlServerPostFromJSONTyped = exports.ConnectionOptionsAzureSqlServerPostFromJSON = void 0;
const runtime_1 = require("../runtime");
function ConnectionOptionsAzureSqlServerPostFromJSON(json) {
    return ConnectionOptionsAzureSqlServerPostFromJSONTyped(json, false);
}
exports.ConnectionOptionsAzureSqlServerPostFromJSON = ConnectionOptionsAzureSqlServerPostFromJSON;
function ConnectionOptionsAzureSqlServerPostFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'database': json['database'],
        'host': json['host'],
        'load_balancer': !runtime_1.exists(json, 'load_balancer') ? undefined : json['load_balancer'],
        'password': json['password'],
        'port': json['port'],
        'ssh_bastion': !runtime_1.exists(json, 'ssh_bastion') ? undefined : json['ssh_bastion'],
        'type': json['type'],
        'user': json['user'],
    };
}
exports.ConnectionOptionsAzureSqlServerPostFromJSONTyped = ConnectionOptionsAzureSqlServerPostFromJSONTyped;
function ConnectionOptionsAzureSqlServerPostToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'database': value.database,
        'host': value.host,
        'load_balancer': value.load_balancer,
        'password': value.password,
        'port': value.port,
        'ssh_bastion': value.ssh_bastion,
        'type': value.type,
        'user': value.user,
    };
}
exports.ConnectionOptionsAzureSqlServerPostToJSON = ConnectionOptionsAzureSqlServerPostToJSON;
