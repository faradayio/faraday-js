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
exports.ContentsRowToJSON = exports.ContentsRowFromJSONTyped = exports.ContentsRowFromJSON = void 0;
const runtime_1 = require("../runtime");
function ContentsRowFromJSON(json) {
    return ContentsRowFromJSONTyped(json, false);
}
exports.ContentsRowFromJSON = ContentsRowFromJSON;
function ContentsRowFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'object_size': !runtime_1.exists(json, 'object_size') ? undefined : json['object_size'],
        'row_count': !runtime_1.exists(json, 'row_count') ? undefined : json['row_count'],
    };
}
exports.ContentsRowFromJSONTyped = ContentsRowFromJSONTyped;
function ContentsRowToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'object_size': value.object_size,
        'row_count': value.row_count,
    };
}
exports.ContentsRowToJSON = ContentsRowToJSON;
