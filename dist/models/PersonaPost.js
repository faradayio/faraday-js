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
exports.PersonaPostToJSON = exports.PersonaPostFromJSONTyped = exports.PersonaPostFromJSON = void 0;
function PersonaPostFromJSON(json) {
    return PersonaPostFromJSONTyped(json, false);
}
exports.PersonaPostFromJSON = PersonaPostFromJSON;
function PersonaPostFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
    };
}
exports.PersonaPostFromJSONTyped = PersonaPostFromJSONTyped;
function PersonaPostToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
    };
}
exports.PersonaPostToJSON = PersonaPostToJSON;
