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
exports.OutcomePerformanceRocCurvePointToJSON = exports.OutcomePerformanceRocCurvePointFromJSONTyped = exports.OutcomePerformanceRocCurvePointFromJSON = void 0;
function OutcomePerformanceRocCurvePointFromJSON(json) {
    return OutcomePerformanceRocCurvePointFromJSONTyped(json, false);
}
exports.OutcomePerformanceRocCurvePointFromJSON = OutcomePerformanceRocCurvePointFromJSON;
function OutcomePerformanceRocCurvePointFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'x': json['x'],
        'y': json['y'],
    };
}
exports.OutcomePerformanceRocCurvePointFromJSONTyped = OutcomePerformanceRocCurvePointFromJSONTyped;
function OutcomePerformanceRocCurvePointToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'x': value.x,
        'y': value.y,
    };
}
exports.OutcomePerformanceRocCurvePointToJSON = OutcomePerformanceRocCurvePointToJSON;
