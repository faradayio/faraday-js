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
exports.TargetModesAggregatedPostToJSON = exports.TargetModesAggregatedPostFromJSONTyped = exports.TargetModesAggregatedPostFromJSON = void 0;
const runtime_1 = require("../runtime");
const TargetAggregateGeographic_1 = require("./TargetAggregateGeographic");
const TargetTransformPresetAggregated_1 = require("./TargetTransformPresetAggregated");
function TargetModesAggregatedPostFromJSON(json) {
    return TargetModesAggregatedPostFromJSONTyped(json, false);
}
exports.TargetModesAggregatedPostFromJSON = TargetModesAggregatedPostFromJSON;
function TargetModesAggregatedPostFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'aggregate': TargetAggregateGeographic_1.TargetAggregateGeographicFromJSON(json['aggregate']),
        'mode': json['mode'],
        'transform_preset': !runtime_1.exists(json, 'transform_preset') ? undefined : TargetTransformPresetAggregated_1.TargetTransformPresetAggregatedFromJSON(json['transform_preset']),
    };
}
exports.TargetModesAggregatedPostFromJSONTyped = TargetModesAggregatedPostFromJSONTyped;
function TargetModesAggregatedPostToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'aggregate': TargetAggregateGeographic_1.TargetAggregateGeographicToJSON(value.aggregate),
        'mode': value.mode,
        'transform_preset': TargetTransformPresetAggregated_1.TargetTransformPresetAggregatedToJSON(value.transform_preset),
    };
}
exports.TargetModesAggregatedPostToJSON = TargetModesAggregatedPostToJSON;
