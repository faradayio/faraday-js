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
exports.ScopeMergePatchToJSON = exports.ScopeMergePatchFromJSONTyped = exports.ScopeMergePatchFromJSON = void 0;
const runtime_1 = require("../runtime");
const ScopePayloadMergePatch_1 = require("./ScopePayloadMergePatch");
const ScopePopulationMergePatch_1 = require("./ScopePopulationMergePatch");
function ScopeMergePatchFromJSON(json) {
    return ScopeMergePatchFromJSONTyped(json, false);
}
exports.ScopeMergePatchFromJSON = ScopeMergePatchFromJSON;
function ScopeMergePatchFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !runtime_1.exists(json, 'name') ? undefined : json['name'],
        'payload': !runtime_1.exists(json, 'payload') ? undefined : ScopePayloadMergePatch_1.ScopePayloadMergePatchFromJSON(json['payload']),
        'population': !runtime_1.exists(json, 'population') ? undefined : ScopePopulationMergePatch_1.ScopePopulationMergePatchFromJSON(json['population']),
        'preview': !runtime_1.exists(json, 'preview') ? undefined : json['preview'],
    };
}
exports.ScopeMergePatchFromJSONTyped = ScopeMergePatchFromJSONTyped;
function ScopeMergePatchToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'payload': ScopePayloadMergePatch_1.ScopePayloadMergePatchToJSON(value.payload),
        'population': ScopePopulationMergePatch_1.ScopePopulationMergePatchToJSON(value.population),
        'preview': value.preview,
    };
}
exports.ScopeMergePatchToJSON = ScopeMergePatchToJSON;
