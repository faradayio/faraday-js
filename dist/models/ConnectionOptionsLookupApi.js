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
exports.ConnectionOptionsLookupApiToJSON = exports.ConnectionOptionsLookupApiFromJSONTyped = exports.ConnectionOptionsLookupApiFromJSON = void 0;
function ConnectionOptionsLookupApiFromJSON(json) {
    return ConnectionOptionsLookupApiFromJSONTyped(json, false);
}
exports.ConnectionOptionsLookupApiFromJSON = ConnectionOptionsLookupApiFromJSON;
function ConnectionOptionsLookupApiFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
    };
}
exports.ConnectionOptionsLookupApiFromJSONTyped = ConnectionOptionsLookupApiFromJSONTyped;
function ConnectionOptionsLookupApiToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
    };
}
exports.ConnectionOptionsLookupApiToJSON = ConnectionOptionsLookupApiToJSON;
