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
exports.ConnectionMergePatchToJSON = exports.ConnectionMergePatchFromJSONTyped = exports.ConnectionMergePatchFromJSON = void 0;
const runtime_1 = require("../runtime");
const ConnectionOptionsMergePatch_1 = require("./ConnectionOptionsMergePatch");
function ConnectionMergePatchFromJSON(json) {
    return ConnectionMergePatchFromJSONTyped(json, false);
}
exports.ConnectionMergePatchFromJSON = ConnectionMergePatchFromJSON;
function ConnectionMergePatchFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !runtime_1.exists(json, 'name') ? undefined : json['name'],
        'options': !runtime_1.exists(json, 'options') ? undefined : ConnectionOptionsMergePatch_1.ConnectionOptionsMergePatchFromJSON(json['options']),
    };
}
exports.ConnectionMergePatchFromJSONTyped = ConnectionMergePatchFromJSONTyped;
function ConnectionMergePatchToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'options': ConnectionOptionsMergePatch_1.ConnectionOptionsMergePatchToJSON(value.options),
    };
}
exports.ConnectionMergePatchToJSON = ConnectionMergePatchToJSON;