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
exports.OutcomeAnalysisFeatureDirectionalityNumberToJSON = exports.OutcomeAnalysisFeatureDirectionalityNumberFromJSONTyped = exports.OutcomeAnalysisFeatureDirectionalityNumberFromJSON = void 0;
const runtime_1 = require("../runtime");
function OutcomeAnalysisFeatureDirectionalityNumberFromJSON(json) {
    return OutcomeAnalysisFeatureDirectionalityNumberFromJSONTyped(json, false);
}
exports.OutcomeAnalysisFeatureDirectionalityNumberFromJSON = OutcomeAnalysisFeatureDirectionalityNumberFromJSON;
function OutcomeAnalysisFeatureDirectionalityNumberFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data_type': json['data_type'],
        'density': json['density'],
        'impact': json['impact'],
        'max': !runtime_1.exists(json, 'max') ? undefined : json['max'],
        'min': json['min'],
    };
}
exports.OutcomeAnalysisFeatureDirectionalityNumberFromJSONTyped = OutcomeAnalysisFeatureDirectionalityNumberFromJSONTyped;
function OutcomeAnalysisFeatureDirectionalityNumberToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data_type': value.data_type,
        'density': value.density,
        'impact': value.impact,
        'max': value.max,
        'min': value.min,
    };
}
exports.OutcomeAnalysisFeatureDirectionalityNumberToJSON = OutcomeAnalysisFeatureDirectionalityNumberToJSON;
