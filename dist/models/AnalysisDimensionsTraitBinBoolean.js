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
exports.AnalysisDimensionsTraitBinBooleanToJSON = exports.AnalysisDimensionsTraitBinBooleanFromJSONTyped = exports.AnalysisDimensionsTraitBinBooleanFromJSON = void 0;
const runtime_1 = require("../runtime");
function AnalysisDimensionsTraitBinBooleanFromJSON(json) {
    return AnalysisDimensionsTraitBinBooleanFromJSONTyped(json, false);
}
exports.AnalysisDimensionsTraitBinBooleanFromJSON = AnalysisDimensionsTraitBinBooleanFromJSON;
function AnalysisDimensionsTraitBinBooleanFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': json['count'],
        'data_type': json['data_type'],
        'percent': json['percent'],
        'value': !runtime_1.exists(json, 'value') ? undefined : json['value'],
    };
}
exports.AnalysisDimensionsTraitBinBooleanFromJSONTyped = AnalysisDimensionsTraitBinBooleanFromJSONTyped;
function AnalysisDimensionsTraitBinBooleanToJSON(value) {
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
exports.AnalysisDimensionsTraitBinBooleanToJSON = AnalysisDimensionsTraitBinBooleanToJSON;
