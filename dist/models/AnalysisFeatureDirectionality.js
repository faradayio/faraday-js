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
exports.AnalysisFeatureDirectionalityToJSON = exports.AnalysisFeatureDirectionalityFromJSONTyped = exports.AnalysisFeatureDirectionalityFromJSON = void 0;
const AnalysisFeatureDirectionalityBoolean_1 = require("./AnalysisFeatureDirectionalityBoolean");
const AnalysisFeatureDirectionalityDate_1 = require("./AnalysisFeatureDirectionalityDate");
const AnalysisFeatureDirectionalityNumber_1 = require("./AnalysisFeatureDirectionalityNumber");
const AnalysisFeatureDirectionalityText_1 = require("./AnalysisFeatureDirectionalityText");
function AnalysisFeatureDirectionalityFromJSON(json) {
    return AnalysisFeatureDirectionalityFromJSONTyped(json, false);
}
exports.AnalysisFeatureDirectionalityFromJSON = AnalysisFeatureDirectionalityFromJSON;
function AnalysisFeatureDirectionalityFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['data_type']) {
        case 'boolean':
            return Object.assign(Object.assign({}, AnalysisFeatureDirectionalityBoolean_1.AnalysisFeatureDirectionalityBooleanFromJSONTyped(json, true)), { data_type: 'boolean' });
        case 'date':
            return Object.assign(Object.assign({}, AnalysisFeatureDirectionalityDate_1.AnalysisFeatureDirectionalityDateFromJSONTyped(json, true)), { data_type: 'date' });
        case 'number':
            return Object.assign(Object.assign({}, AnalysisFeatureDirectionalityNumber_1.AnalysisFeatureDirectionalityNumberFromJSONTyped(json, true)), { data_type: 'number' });
        case 'text':
            return Object.assign(Object.assign({}, AnalysisFeatureDirectionalityText_1.AnalysisFeatureDirectionalityTextFromJSONTyped(json, true)), { data_type: 'text' });
        default:
            throw new Error(`No variant of AnalysisFeatureDirectionality exists with 'data_type=${json['data_type']}'`);
    }
}
exports.AnalysisFeatureDirectionalityFromJSONTyped = AnalysisFeatureDirectionalityFromJSONTyped;
function AnalysisFeatureDirectionalityToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['data_type']) {
        case 'boolean':
            return AnalysisFeatureDirectionalityBoolean_1.AnalysisFeatureDirectionalityBooleanToJSON(value);
        case 'date':
            return AnalysisFeatureDirectionalityDate_1.AnalysisFeatureDirectionalityDateToJSON(value);
        case 'number':
            return AnalysisFeatureDirectionalityNumber_1.AnalysisFeatureDirectionalityNumberToJSON(value);
        case 'text':
            return AnalysisFeatureDirectionalityText_1.AnalysisFeatureDirectionalityTextToJSON(value);
        default:
            throw new Error(`No variant of AnalysisFeatureDirectionality exists with 'data_type=${value['data_type']}'`);
    }
}
exports.AnalysisFeatureDirectionalityToJSON = AnalysisFeatureDirectionalityToJSON;
