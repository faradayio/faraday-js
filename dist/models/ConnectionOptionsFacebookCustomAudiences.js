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
exports.ConnectionOptionsFacebookCustomAudiencesToJSON = exports.ConnectionOptionsFacebookCustomAudiencesFromJSONTyped = exports.ConnectionOptionsFacebookCustomAudiencesFromJSON = void 0;
const runtime_1 = require("../runtime");
function ConnectionOptionsFacebookCustomAudiencesFromJSON(json) {
    return ConnectionOptionsFacebookCustomAudiencesFromJSONTyped(json, false);
}
exports.ConnectionOptionsFacebookCustomAudiencesFromJSON = ConnectionOptionsFacebookCustomAudiencesFromJSON;
function ConnectionOptionsFacebookCustomAudiencesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'account_id': json['account_id'],
        'account_literate': !runtime_1.exists(json, 'account_literate') ? undefined : json['account_literate'],
        'type': json['type'],
    };
}
exports.ConnectionOptionsFacebookCustomAudiencesFromJSONTyped = ConnectionOptionsFacebookCustomAudiencesFromJSONTyped;
function ConnectionOptionsFacebookCustomAudiencesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'account_id': value.account_id,
        'account_literate': value.account_literate,
        'type': value.type,
    };
}
exports.ConnectionOptionsFacebookCustomAudiencesToJSON = ConnectionOptionsFacebookCustomAudiencesToJSON;
