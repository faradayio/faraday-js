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
exports.ConnectionOptionsSnowflakePostToJSON = exports.ConnectionOptionsSnowflakePostFromJSONTyped = exports.ConnectionOptionsSnowflakePostFromJSON = void 0;
const runtime_1 = require("../runtime");
function ConnectionOptionsSnowflakePostFromJSON(json) {
    return ConnectionOptionsSnowflakePostFromJSONTyped(json, false);
}
exports.ConnectionOptionsSnowflakePostFromJSON = ConnectionOptionsSnowflakePostFromJSON;
function ConnectionOptionsSnowflakePostFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'account_name': !runtime_1.exists(json, 'account_name') ? undefined : json['account_name'],
        'database': json['database'],
        'legacy_account_locator': !runtime_1.exists(json, 'legacy_account_locator') ? undefined : json['legacy_account_locator'],
        'organization_name': !runtime_1.exists(json, 'organization_name') ? undefined : json['organization_name'],
        'role': json['role'],
        'schema': json['schema'],
        'type': json['type'],
        'user': json['user'],
        'warehouse': json['warehouse'],
    };
}
exports.ConnectionOptionsSnowflakePostFromJSONTyped = ConnectionOptionsSnowflakePostFromJSONTyped;
function ConnectionOptionsSnowflakePostToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'account_name': value.account_name,
        'database': value.database,
        'legacy_account_locator': value.legacy_account_locator,
        'organization_name': value.organization_name,
        'role': value.role,
        'schema': value.schema,
        'type': value.type,
        'user': value.user,
        'warehouse': value.warehouse,
    };
}
exports.ConnectionOptionsSnowflakePostToJSON = ConnectionOptionsSnowflakePostToJSON;
