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
exports.ConnectionOptionsTiktokToJSON = exports.ConnectionOptionsTiktokFromJSONTyped = exports.ConnectionOptionsTiktokFromJSON = void 0;
const runtime_1 = require("../runtime");
function ConnectionOptionsTiktokFromJSON(json) {
    return ConnectionOptionsTiktokFromJSONTyped(json, false);
}
exports.ConnectionOptionsTiktokFromJSON = ConnectionOptionsTiktokFromJSON;
function ConnectionOptionsTiktokFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'tiktok_account_id': !runtime_1.exists(json, 'tiktok_account_id') ? undefined : json['tiktok_account_id'],
        'type': json['type'],
    };
}
exports.ConnectionOptionsTiktokFromJSONTyped = ConnectionOptionsTiktokFromJSONTyped;
function ConnectionOptionsTiktokToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'tiktok_account_id': value.tiktok_account_id,
        'type': value.type,
    };
}
exports.ConnectionOptionsTiktokToJSON = ConnectionOptionsTiktokToJSON;
