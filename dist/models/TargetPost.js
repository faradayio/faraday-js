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
exports.TargetPostToJSON = exports.TargetPostFromJSONTyped = exports.TargetPostFromJSON = void 0;
const runtime_1 = require("../runtime");
const TargetFilterPost_1 = require("./TargetFilterPost");
const TargetLimitPost_1 = require("./TargetLimitPost");
const TargetModesPost_1 = require("./TargetModesPost");
const TargetOptionsPost_1 = require("./TargetOptionsPost");
const TargetStructureTransformation_1 = require("./TargetStructureTransformation");
function TargetPostFromJSON(json) {
    return TargetPostFromJSONTyped(json, false);
}
exports.TargetPostFromJSON = TargetPostFromJSON;
function TargetPostFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'connection_id': !runtime_1.exists(json, 'connection_id') ? undefined : json['connection_id'],
        'custom_structure': !runtime_1.exists(json, 'custom_structure') ? undefined : (json['custom_structure'].map(TargetStructureTransformation_1.TargetStructureTransformationFromJSON)),
        'filter': !runtime_1.exists(json, 'filter') ? undefined : TargetFilterPost_1.TargetFilterPostFromJSON(json['filter']),
        'human_readable': !runtime_1.exists(json, 'human_readable') ? undefined : json['human_readable'],
        'limit': !runtime_1.exists(json, 'limit') ? undefined : TargetLimitPost_1.TargetLimitPostFromJSON(json['limit']),
        'name': json['name'],
        'options': TargetOptionsPost_1.TargetOptionsPostFromJSON(json['options']),
        'representation': TargetModesPost_1.TargetModesPostFromJSON(json['representation']),
        'scope_id': json['scope_id'],
    };
}
exports.TargetPostFromJSONTyped = TargetPostFromJSONTyped;
function TargetPostToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'connection_id': value.connection_id,
        'custom_structure': value.custom_structure === undefined ? undefined : (value.custom_structure.map(TargetStructureTransformation_1.TargetStructureTransformationToJSON)),
        'filter': TargetFilterPost_1.TargetFilterPostToJSON(value.filter),
        'human_readable': value.human_readable,
        'limit': TargetLimitPost_1.TargetLimitPostToJSON(value.limit),
        'name': value.name,
        'options': TargetOptionsPost_1.TargetOptionsPostToJSON(value.options),
        'representation': TargetModesPost_1.TargetModesPostToJSON(value.representation),
        'scope_id': value.scope_id,
    };
}
exports.TargetPostToJSON = TargetPostToJSON;
