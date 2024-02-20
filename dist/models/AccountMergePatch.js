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
exports.AccountMergePatchToJSON = exports.AccountMergePatchFromJSONTyped = exports.AccountMergePatchFromJSON = void 0;
const runtime_1 = require("../runtime");
function AccountMergePatchFromJSON(json) {
    return AccountMergePatchFromJSONTyped(json, false);
}
exports.AccountMergePatchFromJSON = AccountMergePatchFromJSON;
function AccountMergePatchFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !runtime_1.exists(json, 'name') ? undefined : json['name'],
    };
}
exports.AccountMergePatchFromJSONTyped = AccountMergePatchFromJSONTyped;
function AccountMergePatchToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
    };
}
exports.AccountMergePatchToJSON = AccountMergePatchToJSON;