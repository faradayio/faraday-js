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
exports.TargetOptionsPinterestAdsToJSON = exports.TargetOptionsPinterestAdsFromJSONTyped = exports.TargetOptionsPinterestAdsFromJSON = void 0;
function TargetOptionsPinterestAdsFromJSON(json) {
    return TargetOptionsPinterestAdsFromJSONTyped(json, false);
}
exports.TargetOptionsPinterestAdsFromJSON = TargetOptionsPinterestAdsFromJSON;
function TargetOptionsPinterestAdsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
    };
}
exports.TargetOptionsPinterestAdsFromJSONTyped = TargetOptionsPinterestAdsFromJSONTyped;
function TargetOptionsPinterestAdsToJSON(value) {
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
exports.TargetOptionsPinterestAdsToJSON = TargetOptionsPinterestAdsToJSON;