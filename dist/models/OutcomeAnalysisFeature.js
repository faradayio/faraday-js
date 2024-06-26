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
exports.OutcomeAnalysisFeatureToJSON = exports.OutcomeAnalysisFeatureFromJSONTyped = exports.OutcomeAnalysisFeatureFromJSON = void 0;
const AnalysisFeatureDirectionality_1 = require("./AnalysisFeatureDirectionality");
function OutcomeAnalysisFeatureFromJSON(json) {
    return OutcomeAnalysisFeatureFromJSONTyped(json, false);
}
exports.OutcomeAnalysisFeatureFromJSON = OutcomeAnalysisFeatureFromJSON;
function OutcomeAnalysisFeatureFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'directionality': (json['directionality'].map(AnalysisFeatureDirectionality_1.AnalysisFeatureDirectionalityFromJSON)),
        'importance': json['importance'],
        'literate': json['literate'],
        'name': json['name'],
    };
}
exports.OutcomeAnalysisFeatureFromJSONTyped = OutcomeAnalysisFeatureFromJSONTyped;
function OutcomeAnalysisFeatureToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'directionality': (value.directionality.map(AnalysisFeatureDirectionality_1.AnalysisFeatureDirectionalityToJSON)),
        'importance': value.importance,
        'literate': value.literate,
        'name': value.name,
    };
}
exports.OutcomeAnalysisFeatureToJSON = OutcomeAnalysisFeatureToJSON;
