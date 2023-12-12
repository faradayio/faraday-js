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
exports.TargetLimitPercentileToJSON = exports.TargetLimitPercentileFromJSONTyped = exports.TargetLimitPercentileFromJSON = void 0;
function TargetLimitPercentileFromJSON(json) {
    return TargetLimitPercentileFromJSONTyped(json, false);
}
exports.TargetLimitPercentileFromJSON = TargetLimitPercentileFromJSON;
function TargetLimitPercentileFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'method': json['method'],
        'outcome_id': json['outcome_id'],
        'percentile_max': json['percentile_max'],
        'percentile_min': json['percentile_min'],
    };
}
exports.TargetLimitPercentileFromJSONTyped = TargetLimitPercentileFromJSONTyped;
function TargetLimitPercentileToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'method': value.method,
        'outcome_id': value.outcome_id,
        'percentile_max': value.percentile_max,
        'percentile_min': value.percentile_min,
    };
}
exports.TargetLimitPercentileToJSON = TargetLimitPercentileToJSON;
