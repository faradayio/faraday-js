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
exports.DatasetStreamToJSON = exports.DatasetStreamFromJSONTyped = exports.DatasetStreamFromJSON = void 0;
const runtime_1 = require("../runtime");
const DataMap_1 = require("./DataMap");
const DatasetStreamCondition_1 = require("./DatasetStreamCondition");
function DatasetStreamFromJSON(json) {
    return DatasetStreamFromJSONTyped(json, false);
}
exports.DatasetStreamFromJSON = DatasetStreamFromJSON;
function DatasetStreamFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'classic': !runtime_1.exists(json, 'classic') ? undefined : json['classic'],
        'conditions': !runtime_1.exists(json, 'conditions') ? undefined : (json['conditions'].map(DatasetStreamCondition_1.DatasetStreamConditionFromJSON)),
        'data_map': DataMap_1.DataMapFromJSON(json['data_map']),
        'stream_id': json['stream_id'],
    };
}
exports.DatasetStreamFromJSONTyped = DatasetStreamFromJSONTyped;
function DatasetStreamToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'classic': value.classic,
        'conditions': value.conditions === undefined ? undefined : (value.conditions.map(DatasetStreamCondition_1.DatasetStreamConditionToJSON)),
        'data_map': DataMap_1.DataMapToJSON(value.data_map),
        'stream_id': value.stream_id,
    };
}
exports.DatasetStreamToJSON = DatasetStreamToJSON;
