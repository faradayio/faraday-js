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
exports.TargetModesPutToJSON = exports.TargetModesPutFromJSONTyped = exports.TargetModesPutFromJSON = void 0;
const TargetModesAggregatedPut_1 = require("./TargetModesAggregatedPut");
const TargetModesHashedPut_1 = require("./TargetModesHashedPut");
const TargetModesIdentifiedPut_1 = require("./TargetModesIdentifiedPut");
const TargetModesReferencedPut_1 = require("./TargetModesReferencedPut");
function TargetModesPutFromJSON(json) {
    return TargetModesPutFromJSONTyped(json, false);
}
exports.TargetModesPutFromJSON = TargetModesPutFromJSON;
function TargetModesPutFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['mode']) {
        case 'aggregated':
            return Object.assign(Object.assign({}, TargetModesAggregatedPut_1.TargetModesAggregatedPutFromJSONTyped(json, true)), { mode: 'aggregated' });
        case 'hashed':
            return Object.assign(Object.assign({}, TargetModesHashedPut_1.TargetModesHashedPutFromJSONTyped(json, true)), { mode: 'hashed' });
        case 'identified':
            return Object.assign(Object.assign({}, TargetModesIdentifiedPut_1.TargetModesIdentifiedPutFromJSONTyped(json, true)), { mode: 'identified' });
        case 'referenced':
            return Object.assign(Object.assign({}, TargetModesReferencedPut_1.TargetModesReferencedPutFromJSONTyped(json, true)), { mode: 'referenced' });
        default:
            throw new Error(`No variant of TargetModesPut exists with 'mode=${json['mode']}'`);
    }
}
exports.TargetModesPutFromJSONTyped = TargetModesPutFromJSONTyped;
function TargetModesPutToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['mode']) {
        case 'aggregated':
            return TargetModesAggregatedPut_1.TargetModesAggregatedPutToJSON(value);
        case 'hashed':
            return TargetModesHashedPut_1.TargetModesHashedPutToJSON(value);
        case 'identified':
            return TargetModesIdentifiedPut_1.TargetModesIdentifiedPutToJSON(value);
        case 'referenced':
            return TargetModesReferencedPut_1.TargetModesReferencedPutToJSON(value);
        default:
            throw new Error(`No variant of TargetModesPut exists with 'mode=${value['mode']}'`);
    }
}
exports.TargetModesPutToJSON = TargetModesPutToJSON;
