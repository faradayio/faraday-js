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
exports.DataMapPostToJSON = exports.DataMapPostFromJSONTyped = exports.DataMapPostFromJSON = void 0;
const runtime_1 = require("../runtime");
const DataMapColumnPost_1 = require("./DataMapColumnPost");
function DataMapPostFromJSON(json) {
    return DataMapPostFromJSONTyped(json, false);
}
exports.DataMapPostFromJSON = DataMapPostFromJSON;
function DataMapPostFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return Object.assign(Object.assign({}, json), { 'datetime': !runtime_1.exists(json, 'datetime') ? undefined : DataMapColumnPost_1.DataMapColumnPostFromJSON(json['datetime']) });
}
exports.DataMapPostFromJSONTyped = DataMapPostFromJSONTyped;
function DataMapPostToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return Object.assign(Object.assign({}, value), { 'datetime': DataMapColumnPost_1.DataMapColumnPostToJSON(value.datetime) });
}
exports.DataMapPostToJSON = DataMapPostToJSON;