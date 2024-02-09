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
exports.ScopePayloadToJSON = exports.ScopePayloadFromJSONTyped = exports.ScopePayloadFromJSON = void 0;
const runtime_1 = require("../runtime");
function ScopePayloadFromJSON(json) {
    return ScopePayloadFromJSONTyped(json, false);
}
exports.ScopePayloadFromJSON = ScopePayloadFromJSON;
function ScopePayloadFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attributes': !runtime_1.exists(json, 'attributes') ? undefined : json['attributes'],
        'cohort_ids': !runtime_1.exists(json, 'cohort_ids') ? undefined : json['cohort_ids'],
        'explainability': !runtime_1.exists(json, 'explainability') ? undefined : json['explainability'],
        'outcome_ids': !runtime_1.exists(json, 'outcome_ids') ? undefined : json['outcome_ids'],
        'persona_set_ids': !runtime_1.exists(json, 'persona_set_ids') ? undefined : json['persona_set_ids'],
        'recommender_ids': !runtime_1.exists(json, 'recommender_ids') ? undefined : json['recommender_ids'],
    };
}
exports.ScopePayloadFromJSONTyped = ScopePayloadFromJSONTyped;
function ScopePayloadToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attributes': value.attributes,
        'cohort_ids': value.cohort_ids,
        'explainability': value.explainability,
        'outcome_ids': value.outcome_ids,
        'persona_set_ids': value.persona_set_ids,
        'recommender_ids': value.recommender_ids,
    };
}
exports.ScopePayloadToJSON = ScopePayloadToJSON;
