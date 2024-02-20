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
exports.StreamPropertyInputFromDatasetsToJSON = exports.StreamPropertyInputFromDatasetsFromJSONTyped = exports.StreamPropertyInputFromDatasetsFromJSON = void 0;
function StreamPropertyInputFromDatasetsFromJSON(json) {
    return StreamPropertyInputFromDatasetsFromJSONTyped(json, false);
}
exports.StreamPropertyInputFromDatasetsFromJSON = StreamPropertyInputFromDatasetsFromJSON;
function StreamPropertyInputFromDatasetsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'column_name': json['column_name'],
        'dataset_id': json['dataset_id'],
    };
}
exports.StreamPropertyInputFromDatasetsFromJSONTyped = StreamPropertyInputFromDatasetsFromJSONTyped;
function StreamPropertyInputFromDatasetsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'column_name': value.column_name,
        'dataset_id': value.dataset_id,
    };
}
exports.StreamPropertyInputFromDatasetsToJSON = StreamPropertyInputFromDatasetsToJSON;