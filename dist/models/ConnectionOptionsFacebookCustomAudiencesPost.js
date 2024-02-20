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
exports.ConnectionOptionsFacebookCustomAudiencesPostToJSON = exports.ConnectionOptionsFacebookCustomAudiencesPostFromJSONTyped = exports.ConnectionOptionsFacebookCustomAudiencesPostFromJSON = void 0;
const runtime_1 = require("../runtime");
function ConnectionOptionsFacebookCustomAudiencesPostFromJSON(json) {
    return ConnectionOptionsFacebookCustomAudiencesPostFromJSONTyped(json, false);
}
exports.ConnectionOptionsFacebookCustomAudiencesPostFromJSON = ConnectionOptionsFacebookCustomAudiencesPostFromJSON;
function ConnectionOptionsFacebookCustomAudiencesPostFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'account_id': json['account_id'],
        'account_literate': !runtime_1.exists(json, 'account_literate') ? undefined : json['account_literate'],
        'type': json['type'],
    };
}
exports.ConnectionOptionsFacebookCustomAudiencesPostFromJSONTyped = ConnectionOptionsFacebookCustomAudiencesPostFromJSONTyped;
function ConnectionOptionsFacebookCustomAudiencesPostToJSON(value) {
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
exports.ConnectionOptionsFacebookCustomAudiencesPostToJSON = ConnectionOptionsFacebookCustomAudiencesPostToJSON;