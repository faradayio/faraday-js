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
exports.TargetModesToJSON = exports.TargetModesFromJSONTyped = exports.TargetModesFromJSON = void 0;
const TargetModesAggregated_1 = require("./TargetModesAggregated");
const TargetModesHashed_1 = require("./TargetModesHashed");
const TargetModesIdentified_1 = require("./TargetModesIdentified");
const TargetModesReferenced_1 = require("./TargetModesReferenced");
function TargetModesFromJSON(json) {
    return TargetModesFromJSONTyped(json, false);
}
exports.TargetModesFromJSON = TargetModesFromJSON;
function TargetModesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['mode']) {
        case 'aggregated':
            return Object.assign(Object.assign({}, TargetModesAggregated_1.TargetModesAggregatedFromJSONTyped(json, true)), { mode: 'aggregated' });
        case 'hashed':
            return Object.assign(Object.assign({}, TargetModesHashed_1.TargetModesHashedFromJSONTyped(json, true)), { mode: 'hashed' });
        case 'identified':
            return Object.assign(Object.assign({}, TargetModesIdentified_1.TargetModesIdentifiedFromJSONTyped(json, true)), { mode: 'identified' });
        case 'referenced':
            return Object.assign(Object.assign({}, TargetModesReferenced_1.TargetModesReferencedFromJSONTyped(json, true)), { mode: 'referenced' });
        default:
            throw new Error(`No variant of TargetModes exists with 'mode=${json['mode']}'`);
    }
}
exports.TargetModesFromJSONTyped = TargetModesFromJSONTyped;
function TargetModesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['mode']) {
        case 'aggregated':
            return TargetModesAggregated_1.TargetModesAggregatedToJSON(value);
        case 'hashed':
            return TargetModesHashed_1.TargetModesHashedToJSON(value);
        case 'identified':
            return TargetModesIdentified_1.TargetModesIdentifiedToJSON(value);
        case 'referenced':
            return TargetModesReferenced_1.TargetModesReferencedToJSON(value);
        default:
            throw new Error(`No variant of TargetModes exists with 'mode=${value['mode']}'`);
    }
}
exports.TargetModesToJSON = TargetModesToJSON;
