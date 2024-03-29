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
exports.OutcomePerformanceLiftCurvePointToJSON = exports.OutcomePerformanceLiftCurvePointFromJSONTyped = exports.OutcomePerformanceLiftCurvePointFromJSON = void 0;
function OutcomePerformanceLiftCurvePointFromJSON(json) {
    return OutcomePerformanceLiftCurvePointFromJSONTyped(json, false);
}
exports.OutcomePerformanceLiftCurvePointFromJSON = OutcomePerformanceLiftCurvePointFromJSON;
function OutcomePerformanceLiftCurvePointFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'x': json['x'],
        'y': json['y'],
        'y_max': json['y_max'],
        'y_min': json['y_min'],
    };
}
exports.OutcomePerformanceLiftCurvePointFromJSONTyped = OutcomePerformanceLiftCurvePointFromJSONTyped;
function OutcomePerformanceLiftCurvePointToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'x': value.x,
        'y': value.y,
        'y_max': value.y_max,
        'y_min': value.y_min,
    };
}
exports.OutcomePerformanceLiftCurvePointToJSON = OutcomePerformanceLiftCurvePointToJSON;
