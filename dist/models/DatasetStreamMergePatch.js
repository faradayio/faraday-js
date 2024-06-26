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
exports.DatasetStreamMergePatchToJSON = exports.DatasetStreamMergePatchFromJSONTyped = exports.DatasetStreamMergePatchFromJSON = void 0;
const runtime_1 = require("../runtime");
const DataMapMergePatch_1 = require("./DataMapMergePatch");
const DatasetStreamCondition_1 = require("./DatasetStreamCondition");
function DatasetStreamMergePatchFromJSON(json) {
    return DatasetStreamMergePatchFromJSONTyped(json, false);
}
exports.DatasetStreamMergePatchFromJSON = DatasetStreamMergePatchFromJSON;
function DatasetStreamMergePatchFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'conditions': !runtime_1.exists(json, 'conditions') ? undefined : (json['conditions'] === null ? null : json['conditions'].map(DatasetStreamCondition_1.DatasetStreamConditionFromJSON)),
        'data_map': !runtime_1.exists(json, 'data_map') ? undefined : DataMapMergePatch_1.DataMapMergePatchFromJSON(json['data_map']),
    };
}
exports.DatasetStreamMergePatchFromJSONTyped = DatasetStreamMergePatchFromJSONTyped;
function DatasetStreamMergePatchToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'conditions': value.conditions === undefined ? undefined : (value.conditions === null ? null : value.conditions.map(DatasetStreamCondition_1.DatasetStreamConditionToJSON)),
        'data_map': DataMapMergePatch_1.DataMapMergePatchToJSON(value.data_map),
    };
}
exports.DatasetStreamMergePatchToJSON = DatasetStreamMergePatchToJSON;
