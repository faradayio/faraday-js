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
exports.ConnectionOptionsSegmentPutToJSON = exports.ConnectionOptionsSegmentPutFromJSONTyped = exports.ConnectionOptionsSegmentPutFromJSON = void 0;
function ConnectionOptionsSegmentPutFromJSON(json) {
    return ConnectionOptionsSegmentPutFromJSONTyped(json, false);
}
exports.ConnectionOptionsSegmentPutFromJSON = ConnectionOptionsSegmentPutFromJSON;
function ConnectionOptionsSegmentPutFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'api_key': json['api_key'],
        'type': json['type'],
    };
}
exports.ConnectionOptionsSegmentPutFromJSONTyped = ConnectionOptionsSegmentPutFromJSONTyped;
function ConnectionOptionsSegmentPutToJSON(value) {
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
exports.ConnectionOptionsSegmentPutToJSON = ConnectionOptionsSegmentPutToJSON;
