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
exports.RecommenderAnalysisOverallFeaturesToJSON = exports.RecommenderAnalysisOverallFeaturesFromJSONTyped = exports.RecommenderAnalysisOverallFeaturesFromJSON = void 0;
const runtime_1 = require("../runtime");
const RecommenderFeatureData_1 = require("./RecommenderFeatureData");
function RecommenderAnalysisOverallFeaturesFromJSON(json) {
    return RecommenderAnalysisOverallFeaturesFromJSONTyped(json, false);
}
exports.RecommenderAnalysisOverallFeaturesFromJSON = RecommenderAnalysisOverallFeaturesFromJSON;
function RecommenderAnalysisOverallFeaturesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'new_and_recognized_individuals': !runtime_1.exists(json, 'new_and_recognized_individuals') ? undefined : (json['new_and_recognized_individuals'].map(RecommenderFeatureData_1.RecommenderFeatureDataFromJSON)),
        'new_and_unrecognized_individuals': !runtime_1.exists(json, 'new_and_unrecognized_individuals') ? undefined : (json['new_and_unrecognized_individuals'].map(RecommenderFeatureData_1.RecommenderFeatureDataFromJSON)),
        'repeat_and_recognized_individuals': !runtime_1.exists(json, 'repeat_and_recognized_individuals') ? undefined : (json['repeat_and_recognized_individuals'].map(RecommenderFeatureData_1.RecommenderFeatureDataFromJSON)),
        'repeat_and_unrecognized_individuals': !runtime_1.exists(json, 'repeat_and_unrecognized_individuals') ? undefined : (json['repeat_and_unrecognized_individuals'].map(RecommenderFeatureData_1.RecommenderFeatureDataFromJSON)),
    };
}
exports.RecommenderAnalysisOverallFeaturesFromJSONTyped = RecommenderAnalysisOverallFeaturesFromJSONTyped;
function RecommenderAnalysisOverallFeaturesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'new_and_recognized_individuals': value.new_and_recognized_individuals === undefined ? undefined : (value.new_and_recognized_individuals.map(RecommenderFeatureData_1.RecommenderFeatureDataToJSON)),
        'new_and_unrecognized_individuals': value.new_and_unrecognized_individuals === undefined ? undefined : (value.new_and_unrecognized_individuals.map(RecommenderFeatureData_1.RecommenderFeatureDataToJSON)),
        'repeat_and_recognized_individuals': value.repeat_and_recognized_individuals === undefined ? undefined : (value.repeat_and_recognized_individuals.map(RecommenderFeatureData_1.RecommenderFeatureDataToJSON)),
        'repeat_and_unrecognized_individuals': value.repeat_and_unrecognized_individuals === undefined ? undefined : (value.repeat_and_unrecognized_individuals.map(RecommenderFeatureData_1.RecommenderFeatureDataToJSON)),
    };
}
exports.RecommenderAnalysisOverallFeaturesToJSON = RecommenderAnalysisOverallFeaturesToJSON;
