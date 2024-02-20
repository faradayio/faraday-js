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
exports.TargetLimitPercentileMergePatchToJSON = exports.TargetLimitPercentileMergePatchFromJSONTyped = exports.TargetLimitPercentileMergePatchFromJSON = void 0;
const runtime_1 = require("../runtime");
function TargetLimitPercentileMergePatchFromJSON(json) {
    return TargetLimitPercentileMergePatchFromJSONTyped(json, false);
}
exports.TargetLimitPercentileMergePatchFromJSON = TargetLimitPercentileMergePatchFromJSON;
function TargetLimitPercentileMergePatchFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'method': json['method'],
        'outcome_id': !runtime_1.exists(json, 'outcome_id') ? undefined : json['outcome_id'],
        'percentile_max': !runtime_1.exists(json, 'percentile_max') ? undefined : json['percentile_max'],
        'percentile_min': !runtime_1.exists(json, 'percentile_min') ? undefined : json['percentile_min'],
    };
}
exports.TargetLimitPercentileMergePatchFromJSONTyped = TargetLimitPercentileMergePatchFromJSONTyped;
function TargetLimitPercentileMergePatchToJSON(value) {
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
exports.TargetLimitPercentileMergePatchToJSON = TargetLimitPercentileMergePatchToJSON;