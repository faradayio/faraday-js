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
exports.ConnectionOptionsTheTradeDeskPutToJSON = exports.ConnectionOptionsTheTradeDeskPutFromJSONTyped = exports.ConnectionOptionsTheTradeDeskPutFromJSON = void 0;
const runtime_1 = require("../runtime");
function ConnectionOptionsTheTradeDeskPutFromJSON(json) {
    return ConnectionOptionsTheTradeDeskPutFromJSONTyped(json, false);
}
exports.ConnectionOptionsTheTradeDeskPutFromJSON = ConnectionOptionsTheTradeDeskPutFromJSON;
function ConnectionOptionsTheTradeDeskPutFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'advertiser_id': json['advertiser_id'],
        'api_key': json['api_key'],
        'environment': !runtime_1.exists(json, 'environment') ? undefined : json['environment'],
        'type': json['type'],
    };
}
exports.ConnectionOptionsTheTradeDeskPutFromJSONTyped = ConnectionOptionsTheTradeDeskPutFromJSONTyped;
function ConnectionOptionsTheTradeDeskPutToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'advertiser_id': value.advertiser_id,
        'api_key': value.api_key,
        'environment': value.environment,
        'type': value.type,
    };
}
exports.ConnectionOptionsTheTradeDeskPutToJSON = ConnectionOptionsTheTradeDeskPutToJSON;