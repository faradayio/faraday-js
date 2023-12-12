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
exports.ConnectionOptionsGcpGcsCsvPostToJSON = exports.ConnectionOptionsGcpGcsCsvPostFromJSONTyped = exports.ConnectionOptionsGcpGcsCsvPostFromJSON = void 0;
function ConnectionOptionsGcpGcsCsvPostFromJSON(json) {
    return ConnectionOptionsGcpGcsCsvPostFromJSONTyped(json, false);
}
exports.ConnectionOptionsGcpGcsCsvPostFromJSON = ConnectionOptionsGcpGcsCsvPostFromJSON;
function ConnectionOptionsGcpGcsCsvPostFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bucket_name': json['bucket_name'],
        'project_id': json['project_id'],
        'type': json['type'],
    };
}
exports.ConnectionOptionsGcpGcsCsvPostFromJSONTyped = ConnectionOptionsGcpGcsCsvPostFromJSONTyped;
function ConnectionOptionsGcpGcsCsvPostToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bucket_name': value.bucket_name,
        'project_id': value.project_id,
        'type': value.type,
    };
}
exports.ConnectionOptionsGcpGcsCsvPostToJSON = ConnectionOptionsGcpGcsCsvPostToJSON;
