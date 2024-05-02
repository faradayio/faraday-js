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
exports.OutcomePredictorsMergePatchToJSON = exports.OutcomePredictorsMergePatchFromJSONTyped = exports.OutcomePredictorsMergePatchFromJSON = void 0;
const runtime_1 = require("../runtime");
const OutcomePredictorsBlockedMergePatch_1 = require("./OutcomePredictorsBlockedMergePatch");
function OutcomePredictorsMergePatchFromJSON(json) {
    return OutcomePredictorsMergePatchFromJSONTyped(json, false);
}
exports.OutcomePredictorsMergePatchFromJSON = OutcomePredictorsMergePatchFromJSON;
function OutcomePredictorsMergePatchFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blocked': !runtime_1.exists(json, 'blocked') ? undefined : OutcomePredictorsBlockedMergePatch_1.OutcomePredictorsBlockedMergePatchFromJSON(json['blocked']),
    };
}
exports.OutcomePredictorsMergePatchFromJSONTyped = OutcomePredictorsMergePatchFromJSONTyped;
function OutcomePredictorsMergePatchToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blocked': OutcomePredictorsBlockedMergePatch_1.OutcomePredictorsBlockedMergePatchToJSON(value.blocked),
    };
}
exports.OutcomePredictorsMergePatchToJSON = OutcomePredictorsMergePatchToJSON;
