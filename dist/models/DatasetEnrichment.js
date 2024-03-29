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
exports.DatasetEnrichmentToJSON = exports.DatasetEnrichmentFromJSONTyped = exports.DatasetEnrichmentFromJSON = void 0;
function DatasetEnrichmentFromJSON(json) {
    return DatasetEnrichmentFromJSONTyped(json, false);
}
exports.DatasetEnrichmentFromJSON = DatasetEnrichmentFromJSON;
function DatasetEnrichmentFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'person': json['person'],
        'residence': json['residence'],
    };
}
exports.DatasetEnrichmentFromJSONTyped = DatasetEnrichmentFromJSONTyped;
function DatasetEnrichmentToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'person': value.person,
        'residence': value.residence,
    };
}
exports.DatasetEnrichmentToJSON = DatasetEnrichmentToJSON;
