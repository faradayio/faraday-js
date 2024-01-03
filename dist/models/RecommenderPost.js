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
exports.RecommenderPostToJSON = exports.RecommenderPostFromJSONTyped = exports.RecommenderPostFromJSON = void 0;
function RecommenderPostFromJSON(json) {
    return RecommenderPostFromJSONTyped(json, false);
}
exports.RecommenderPostFromJSON = RecommenderPostFromJSON;
function RecommenderPostFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'stream_name': json['stream_name'],
        'stream_property_name': json['stream_property_name'],
    };
}
exports.RecommenderPostFromJSONTyped = RecommenderPostFromJSONTyped;
function RecommenderPostToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'stream_name': value.stream_name,
        'stream_property_name': value.stream_property_name,
    };
}
exports.RecommenderPostToJSON = RecommenderPostToJSON;
