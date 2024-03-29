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
exports.ScopePutToJSON = exports.ScopePutFromJSONTyped = exports.ScopePutFromJSON = void 0;
const ScopePayloadPut_1 = require("./ScopePayloadPut");
const ScopePopulationPut_1 = require("./ScopePopulationPut");
function ScopePutFromJSON(json) {
    return ScopePutFromJSONTyped(json, false);
}
exports.ScopePutFromJSON = ScopePutFromJSON;
function ScopePutFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'payload': ScopePayloadPut_1.ScopePayloadPutFromJSON(json['payload']),
        'population': ScopePopulationPut_1.ScopePopulationPutFromJSON(json['population']),
        'preview': json['preview'],
    };
}
exports.ScopePutFromJSONTyped = ScopePutFromJSONTyped;
function ScopePutToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'payload': ScopePayloadPut_1.ScopePayloadPutToJSON(value.payload),
        'population': ScopePopulationPut_1.ScopePopulationPutToJSON(value.population),
        'preview': value.preview,
    };
}
exports.ScopePutToJSON = ScopePutToJSON;
