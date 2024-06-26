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
exports.OutcomePredictorsBlockedPutToJSON = exports.OutcomePredictorsBlockedPutFromJSONTyped = exports.OutcomePredictorsBlockedPutFromJSON = void 0;
const runtime_1 = require("../runtime");
function OutcomePredictorsBlockedPutFromJSON(json) {
    return OutcomePredictorsBlockedPutFromJSONTyped(json, false);
}
exports.OutcomePredictorsBlockedPutFromJSON = OutcomePredictorsBlockedPutFromJSON;
function OutcomePredictorsBlockedPutFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'providers': !runtime_1.exists(json, 'providers') ? undefined : json['providers'],
    };
}
exports.OutcomePredictorsBlockedPutFromJSONTyped = OutcomePredictorsBlockedPutFromJSONTyped;
function OutcomePredictorsBlockedPutToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'providers': value.providers,
    };
}
exports.OutcomePredictorsBlockedPutToJSON = OutcomePredictorsBlockedPutToJSON;
