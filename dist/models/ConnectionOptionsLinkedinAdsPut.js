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
exports.ConnectionOptionsLinkedinAdsPutToJSON = exports.ConnectionOptionsLinkedinAdsPutFromJSONTyped = exports.ConnectionOptionsLinkedinAdsPutFromJSON = void 0;
const runtime_1 = require("../runtime");
function ConnectionOptionsLinkedinAdsPutFromJSON(json) {
    return ConnectionOptionsLinkedinAdsPutFromJSONTyped(json, false);
}
exports.ConnectionOptionsLinkedinAdsPutFromJSON = ConnectionOptionsLinkedinAdsPutFromJSON;
function ConnectionOptionsLinkedinAdsPutFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'password': !runtime_1.exists(json, 'password') ? undefined : json['password'],
        'type': json['type'],
        'username': !runtime_1.exists(json, 'username') ? undefined : json['username'],
    };
}
exports.ConnectionOptionsLinkedinAdsPutFromJSONTyped = ConnectionOptionsLinkedinAdsPutFromJSONTyped;
function ConnectionOptionsLinkedinAdsPutToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'password': value.password,
        'type': value.type,
        'username': value.username,
    };
}
exports.ConnectionOptionsLinkedinAdsPutToJSON = ConnectionOptionsLinkedinAdsPutToJSON;