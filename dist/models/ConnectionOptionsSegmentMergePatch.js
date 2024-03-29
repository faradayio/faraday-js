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
exports.ConnectionOptionsSegmentMergePatchToJSON = exports.ConnectionOptionsSegmentMergePatchFromJSONTyped = exports.ConnectionOptionsSegmentMergePatchFromJSON = void 0;
const runtime_1 = require("../runtime");
function ConnectionOptionsSegmentMergePatchFromJSON(json) {
    return ConnectionOptionsSegmentMergePatchFromJSONTyped(json, false);
}
exports.ConnectionOptionsSegmentMergePatchFromJSON = ConnectionOptionsSegmentMergePatchFromJSON;
function ConnectionOptionsSegmentMergePatchFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'api_key': !runtime_1.exists(json, 'api_key') ? undefined : json['api_key'],
        'type': json['type'],
    };
}
exports.ConnectionOptionsSegmentMergePatchFromJSONTyped = ConnectionOptionsSegmentMergePatchFromJSONTyped;
function ConnectionOptionsSegmentMergePatchToJSON(value) {
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
exports.ConnectionOptionsSegmentMergePatchToJSON = ConnectionOptionsSegmentMergePatchToJSON;
