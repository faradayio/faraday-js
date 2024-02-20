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
exports.AnalysisDimensionsTraitBinTextToJSON = exports.AnalysisDimensionsTraitBinTextFromJSONTyped = exports.AnalysisDimensionsTraitBinTextFromJSON = void 0;
function AnalysisDimensionsTraitBinTextFromJSON(json) {
    return AnalysisDimensionsTraitBinTextFromJSONTyped(json, false);
}
exports.AnalysisDimensionsTraitBinTextFromJSON = AnalysisDimensionsTraitBinTextFromJSON;
function AnalysisDimensionsTraitBinTextFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': json['count'],
        'data_type': json['data_type'],
        'percent': json['percent'],
        'value': json['value'],
    };
}
exports.AnalysisDimensionsTraitBinTextFromJSONTyped = AnalysisDimensionsTraitBinTextFromJSONTyped;
function AnalysisDimensionsTraitBinTextToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'data_type': value.data_type,
        'percent': value.percent,
        'value': value.value,
    };
}
exports.AnalysisDimensionsTraitBinTextToJSON = AnalysisDimensionsTraitBinTextToJSON;