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
exports.CohortAnalysisMembershipDatumToJSON = exports.CohortAnalysisMembershipDatumFromJSONTyped = exports.CohortAnalysisMembershipDatumFromJSON = void 0;
function CohortAnalysisMembershipDatumFromJSON(json) {
    return CohortAnalysisMembershipDatumFromJSONTyped(json, false);
}
exports.CohortAnalysisMembershipDatumFromJSON = CohortAnalysisMembershipDatumFromJSON;
function CohortAnalysisMembershipDatumFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': json['count'],
        'date': (new Date(json['date'])),
    };
}
exports.CohortAnalysisMembershipDatumFromJSONTyped = CohortAnalysisMembershipDatumFromJSONTyped;
function CohortAnalysisMembershipDatumToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'date': (value.date.toISOString().substr(0, 10)),
    };
}
exports.CohortAnalysisMembershipDatumToJSON = CohortAnalysisMembershipDatumToJSON;
