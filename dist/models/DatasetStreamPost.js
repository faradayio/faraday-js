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
exports.DatasetStreamPostToJSON = exports.DatasetStreamPostFromJSONTyped = exports.DatasetStreamPostFromJSON = void 0;
const runtime_1 = require("../runtime");
const DataMapPost_1 = require("./DataMapPost");
const DatasetStreamCondition_1 = require("./DatasetStreamCondition");
function DatasetStreamPostFromJSON(json) {
    return DatasetStreamPostFromJSONTyped(json, false);
}
exports.DatasetStreamPostFromJSON = DatasetStreamPostFromJSON;
function DatasetStreamPostFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'conditions': !runtime_1.exists(json, 'conditions') ? undefined : (json['conditions'].map(DatasetStreamCondition_1.DatasetStreamConditionFromJSON)),
        'data_map': DataMapPost_1.DataMapPostFromJSON(json['data_map']),
    };
}
exports.DatasetStreamPostFromJSONTyped = DatasetStreamPostFromJSONTyped;
function DatasetStreamPostToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'conditions': value.conditions === undefined ? undefined : (value.conditions.map(DatasetStreamCondition_1.DatasetStreamConditionToJSON)),
        'data_map': DataMapPost_1.DataMapPostToJSON(value.data_map),
    };
}
exports.DatasetStreamPostToJSON = DatasetStreamPostToJSON;
