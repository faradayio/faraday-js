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
exports.ArchiveConfigToJSON = exports.ArchiveConfigFromJSONTyped = exports.ArchiveConfigFromJSON = void 0;
const runtime_1 = require("../runtime");
function ArchiveConfigFromJSON(json) {
    return ArchiveConfigFromJSONTyped(json, false);
}
exports.ArchiveConfigFromJSON = ArchiveConfigFromJSON;
function ArchiveConfigFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cascade_to': !runtime_1.exists(json, 'cascade_to') ? undefined : json['cascade_to'],
        'cascade_to_all': !runtime_1.exists(json, 'cascade_to_all') ? undefined : json['cascade_to_all'],
    };
}
exports.ArchiveConfigFromJSONTyped = ArchiveConfigFromJSONTyped;
function ArchiveConfigToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cascade_to': value.cascade_to,
        'cascade_to_all': value.cascade_to_all,
    };
}
exports.ArchiveConfigToJSON = ArchiveConfigToJSON;