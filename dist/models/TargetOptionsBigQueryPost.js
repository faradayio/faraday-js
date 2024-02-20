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
exports.TargetOptionsBigQueryPostToJSON = exports.TargetOptionsBigQueryPostFromJSONTyped = exports.TargetOptionsBigQueryPostFromJSON = void 0;
const runtime_1 = require("../runtime");
function TargetOptionsBigQueryPostFromJSON(json) {
    return TargetOptionsBigQueryPostFromJSONTyped(json, false);
}
exports.TargetOptionsBigQueryPostFromJSON = TargetOptionsBigQueryPostFromJSON;
function TargetOptionsBigQueryPostFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'day_partitioned': !runtime_1.exists(json, 'day_partitioned') ? undefined : json['day_partitioned'],
        'table_name': json['table_name'],
        'type': json['type'],
        'upsert': !runtime_1.exists(json, 'upsert') ? undefined : json['upsert'],
    };
}
exports.TargetOptionsBigQueryPostFromJSONTyped = TargetOptionsBigQueryPostFromJSONTyped;
function TargetOptionsBigQueryPostToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'day_partitioned': value.day_partitioned,
        'table_name': value.table_name,
        'type': value.type,
        'upsert': value.upsert,
    };
}
exports.TargetOptionsBigQueryPostToJSON = TargetOptionsBigQueryPostToJSON;