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
exports.TargetOptionsLookupApiToJSON = exports.TargetOptionsLookupApiFromJSONTyped = exports.TargetOptionsLookupApiFromJSON = void 0;
const runtime_1 = require("../runtime");
function TargetOptionsLookupApiFromJSON(json) {
    return TargetOptionsLookupApiFromJSONTyped(json, false);
}
exports.TargetOptionsLookupApiFromJSON = TargetOptionsLookupApiFromJSON;
function TargetOptionsLookupApiFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'output_url': !runtime_1.exists(json, 'output_url') ? undefined : json['output_url'],
        'type': json['type'],
    };
}
exports.TargetOptionsLookupApiFromJSONTyped = TargetOptionsLookupApiFromJSONTyped;
function TargetOptionsLookupApiToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'output_url': value.output_url,
        'type': value.type,
    };
}
exports.TargetOptionsLookupApiToJSON = TargetOptionsLookupApiToJSON;
