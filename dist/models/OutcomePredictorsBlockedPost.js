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
exports.OutcomePredictorsBlockedPostToJSON = exports.OutcomePredictorsBlockedPostFromJSONTyped = exports.OutcomePredictorsBlockedPostFromJSON = void 0;
const runtime_1 = require("../runtime");
function OutcomePredictorsBlockedPostFromJSON(json) {
    return OutcomePredictorsBlockedPostFromJSONTyped(json, false);
}
exports.OutcomePredictorsBlockedPostFromJSON = OutcomePredictorsBlockedPostFromJSON;
function OutcomePredictorsBlockedPostFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'providers': !runtime_1.exists(json, 'providers') ? undefined : json['providers'],
    };
}
exports.OutcomePredictorsBlockedPostFromJSONTyped = OutcomePredictorsBlockedPostFromJSONTyped;
function OutcomePredictorsBlockedPostToJSON(value) {
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
exports.OutcomePredictorsBlockedPostToJSON = OutcomePredictorsBlockedPostToJSON;