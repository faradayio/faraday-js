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
exports.TargetFilterMergePatchToJSON = exports.TargetFilterMergePatchFromJSONTyped = exports.TargetFilterMergePatchFromJSON = void 0;
const runtime_1 = require("../runtime");
const TargetFilterCohortMembershipConditions_1 = require("./TargetFilterCohortMembershipConditions");
const TargetFilterOutcomePercentileConditions_1 = require("./TargetFilterOutcomePercentileConditions");
const TargetFilterOutcomeProbabilityConditions_1 = require("./TargetFilterOutcomeProbabilityConditions");
const TargetFilterOutcomeScoreConditions_1 = require("./TargetFilterOutcomeScoreConditions");
const TargetFilterPersonaSetPersonaIdConditions_1 = require("./TargetFilterPersonaSetPersonaIdConditions");
const TargetFilterTraitConditions_1 = require("./TargetFilterTraitConditions");
function TargetFilterMergePatchFromJSON(json) {
    return TargetFilterMergePatchFromJSONTyped(json, false);
}
exports.TargetFilterMergePatchFromJSON = TargetFilterMergePatchFromJSON;
function TargetFilterMergePatchFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cohort_membership': !runtime_1.exists(json, 'cohort_membership') ? undefined : (json['cohort_membership'] === null ? null : json['cohort_membership'].map(TargetFilterCohortMembershipConditions_1.TargetFilterCohortMembershipConditionsFromJSON)),
        'outcome_percentile': !runtime_1.exists(json, 'outcome_percentile') ? undefined : (json['outcome_percentile'] === null ? null : json['outcome_percentile'].map(TargetFilterOutcomePercentileConditions_1.TargetFilterOutcomePercentileConditionsFromJSON)),
        'outcome_probability': !runtime_1.exists(json, 'outcome_probability') ? undefined : (json['outcome_probability'] === null ? null : json['outcome_probability'].map(TargetFilterOutcomeProbabilityConditions_1.TargetFilterOutcomeProbabilityConditionsFromJSON)),
        'outcome_score': !runtime_1.exists(json, 'outcome_score') ? undefined : (json['outcome_score'] === null ? null : json['outcome_score'].map(TargetFilterOutcomeScoreConditions_1.TargetFilterOutcomeScoreConditionsFromJSON)),
        'persona': !runtime_1.exists(json, 'persona') ? undefined : (json['persona'] === null ? null : json['persona'].map(TargetFilterPersonaSetPersonaIdConditions_1.TargetFilterPersonaSetPersonaIdConditionsFromJSON)),
        'trait': !runtime_1.exists(json, 'trait') ? undefined : (json['trait'] === null ? null : json['trait'].map(TargetFilterTraitConditions_1.TargetFilterTraitConditionsFromJSON)),
    };
}
exports.TargetFilterMergePatchFromJSONTyped = TargetFilterMergePatchFromJSONTyped;
function TargetFilterMergePatchToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cohort_membership': value.cohort_membership === undefined ? undefined : (value.cohort_membership === null ? null : value.cohort_membership.map(TargetFilterCohortMembershipConditions_1.TargetFilterCohortMembershipConditionsToJSON)),
        'outcome_percentile': value.outcome_percentile === undefined ? undefined : (value.outcome_percentile === null ? null : value.outcome_percentile.map(TargetFilterOutcomePercentileConditions_1.TargetFilterOutcomePercentileConditionsToJSON)),
        'outcome_probability': value.outcome_probability === undefined ? undefined : (value.outcome_probability === null ? null : value.outcome_probability.map(TargetFilterOutcomeProbabilityConditions_1.TargetFilterOutcomeProbabilityConditionsToJSON)),
        'outcome_score': value.outcome_score === undefined ? undefined : (value.outcome_score === null ? null : value.outcome_score.map(TargetFilterOutcomeScoreConditions_1.TargetFilterOutcomeScoreConditionsToJSON)),
        'persona': value.persona === undefined ? undefined : (value.persona === null ? null : value.persona.map(TargetFilterPersonaSetPersonaIdConditions_1.TargetFilterPersonaSetPersonaIdConditionsToJSON)),
        'trait': value.trait === undefined ? undefined : (value.trait === null ? null : value.trait.map(TargetFilterTraitConditions_1.TargetFilterTraitConditionsToJSON)),
    };
}
exports.TargetFilterMergePatchToJSON = TargetFilterMergePatchToJSON;
