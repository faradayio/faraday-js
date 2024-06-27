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
exports.ConnectionOptionsKlaviyoToJSON = exports.ConnectionOptionsKlaviyoFromJSONTyped = exports.ConnectionOptionsKlaviyoFromJSON = void 0;
const runtime_1 = require("../runtime");
function ConnectionOptionsKlaviyoFromJSON(json) {
    return ConnectionOptionsKlaviyoFromJSONTyped(json, false);
}
exports.ConnectionOptionsKlaviyoFromJSON = ConnectionOptionsKlaviyoFromJSON;
function ConnectionOptionsKlaviyoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'api_key': !runtime_1.exists(json, 'api_key') ? undefined : json['api_key'],
        'private_api_key': !runtime_1.exists(json, 'private_api_key') ? undefined : json['private_api_key'],
        'type': json['type'],
    };
}
exports.ConnectionOptionsKlaviyoFromJSONTyped = ConnectionOptionsKlaviyoFromJSONTyped;
function ConnectionOptionsKlaviyoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'api_key': value.api_key,
        'private_api_key': value.private_api_key,
        'type': value.type,
    };
}
exports.ConnectionOptionsKlaviyoToJSON = ConnectionOptionsKlaviyoToJSON;
