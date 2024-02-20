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
exports.TargetOptionsHubspotToJSON = exports.TargetOptionsHubspotFromJSONTyped = exports.TargetOptionsHubspotFromJSON = void 0;
function TargetOptionsHubspotFromJSON(json) {
    return TargetOptionsHubspotFromJSONTyped(json, false);
}
exports.TargetOptionsHubspotFromJSON = TargetOptionsHubspotFromJSON;
function TargetOptionsHubspotFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
    };
}
exports.TargetOptionsHubspotFromJSONTyped = TargetOptionsHubspotFromJSONTyped;
function TargetOptionsHubspotToJSON(value) {
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
exports.TargetOptionsHubspotToJSON = TargetOptionsHubspotToJSON;