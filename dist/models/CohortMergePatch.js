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
exports.CohortMergePatchToJSON = exports.CohortMergePatchFromJSONTyped = exports.CohortMergePatchFromJSON = void 0;
const runtime_1 = require("../runtime");
const CohortPlaceCondition_1 = require("./CohortPlaceCondition");
const CohortStreamCondition_1 = require("./CohortStreamCondition");
const CohortTrait_1 = require("./CohortTrait");
const RecencyMergePatch_1 = require("./RecencyMergePatch");
function CohortMergePatchFromJSON(json) {
    return CohortMergePatchFromJSONTyped(json, false);
}
exports.CohortMergePatchFromJSON = CohortMergePatchFromJSON;
function CohortMergePatchFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'explore': !runtime_1.exists(json, 'explore') ? undefined : json['explore'],
        'max_count': !runtime_1.exists(json, 'max_count') ? undefined : json['max_count'],
        'max_value': !runtime_1.exists(json, 'max_value') ? undefined : json['max_value'],
        'min_count': !runtime_1.exists(json, 'min_count') ? undefined : json['min_count'],
        'min_value': !runtime_1.exists(json, 'min_value') ? undefined : json['min_value'],
        'name': !runtime_1.exists(json, 'name') ? undefined : json['name'],
        'place_conditions': !runtime_1.exists(json, 'place_conditions') ? undefined : (json['place_conditions'] === null ? null : json['place_conditions'].map(CohortPlaceCondition_1.CohortPlaceConditionFromJSON)),
        'recency': !runtime_1.exists(json, 'recency') ? undefined : RecencyMergePatch_1.RecencyMergePatchFromJSON(json['recency']),
        'stream_conditions': !runtime_1.exists(json, 'stream_conditions') ? undefined : (json['stream_conditions'] === null ? null : json['stream_conditions'].map(CohortStreamCondition_1.CohortStreamConditionFromJSON)),
        'stream_name': !runtime_1.exists(json, 'stream_name') ? undefined : json['stream_name'],
        'traits': !runtime_1.exists(json, 'traits') ? undefined : (json['traits'] === null ? null : json['traits'].map(CohortTrait_1.CohortTraitFromJSON)),
    };
}
exports.CohortMergePatchFromJSONTyped = CohortMergePatchFromJSONTyped;
function CohortMergePatchToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'explore': value.explore,
        'max_count': value.max_count,
        'max_value': value.max_value,
        'min_count': value.min_count,
        'min_value': value.min_value,
        'name': value.name,
        'place_conditions': value.place_conditions === undefined ? undefined : (value.place_conditions === null ? null : value.place_conditions.map(CohortPlaceCondition_1.CohortPlaceConditionToJSON)),
        'recency': RecencyMergePatch_1.RecencyMergePatchToJSON(value.recency),
        'stream_conditions': value.stream_conditions === undefined ? undefined : (value.stream_conditions === null ? null : value.stream_conditions.map(CohortStreamCondition_1.CohortStreamConditionToJSON)),
        'stream_name': value.stream_name,
        'traits': value.traits === undefined ? undefined : (value.traits === null ? null : value.traits.map(CohortTrait_1.CohortTraitToJSON)),
    };
}
exports.CohortMergePatchToJSON = CohortMergePatchToJSON;
