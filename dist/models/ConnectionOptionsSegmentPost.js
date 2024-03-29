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
exports.ConnectionOptionsSegmentPostToJSON = exports.ConnectionOptionsSegmentPostFromJSONTyped = exports.ConnectionOptionsSegmentPostFromJSON = void 0;
function ConnectionOptionsSegmentPostFromJSON(json) {
    return ConnectionOptionsSegmentPostFromJSONTyped(json, false);
}
exports.ConnectionOptionsSegmentPostFromJSON = ConnectionOptionsSegmentPostFromJSON;
function ConnectionOptionsSegmentPostFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'api_key': json['api_key'],
        'type': json['type'],
    };
}
exports.ConnectionOptionsSegmentPostFromJSONTyped = ConnectionOptionsSegmentPostFromJSONTyped;
function ConnectionOptionsSegmentPostToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'api_key': value.api_key,
        'type': value.type,
    };
}
exports.ConnectionOptionsSegmentPostToJSON = ConnectionOptionsSegmentPostToJSON;
