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
exports.OutcomePredictorsPutToJSON = exports.OutcomePredictorsPutFromJSONTyped = exports.OutcomePredictorsPutFromJSON = void 0;
const runtime_1 = require("../runtime");
const OutcomePredictorsBlockedPut_1 = require("./OutcomePredictorsBlockedPut");
function OutcomePredictorsPutFromJSON(json) {
    return OutcomePredictorsPutFromJSONTyped(json, false);
}
exports.OutcomePredictorsPutFromJSON = OutcomePredictorsPutFromJSON;
function OutcomePredictorsPutFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blocked': !runtime_1.exists(json, 'blocked') ? undefined : OutcomePredictorsBlockedPut_1.OutcomePredictorsBlockedPutFromJSON(json['blocked']),
    };
}
exports.OutcomePredictorsPutFromJSONTyped = OutcomePredictorsPutFromJSONTyped;
function OutcomePredictorsPutToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blocked': OutcomePredictorsBlockedPut_1.OutcomePredictorsBlockedPutToJSON(value.blocked),
    };
}
exports.OutcomePredictorsPutToJSON = OutcomePredictorsPutToJSON;