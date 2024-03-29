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
exports.TargetPutToJSON = exports.TargetPutFromJSONTyped = exports.TargetPutFromJSON = void 0;
const runtime_1 = require("../runtime");
const TargetFilterPut_1 = require("./TargetFilterPut");
const TargetLimitPut_1 = require("./TargetLimitPut");
const TargetModesPut_1 = require("./TargetModesPut");
const TargetOptionsPut_1 = require("./TargetOptionsPut");
const TargetStructureTransformation_1 = require("./TargetStructureTransformation");
function TargetPutFromJSON(json) {
    return TargetPutFromJSONTyped(json, false);
}
exports.TargetPutFromJSON = TargetPutFromJSON;
function TargetPutFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'connection_id': !runtime_1.exists(json, 'connection_id') ? undefined : json['connection_id'],
        'custom_structure': !runtime_1.exists(json, 'custom_structure') ? undefined : (json['custom_structure'].map(TargetStructureTransformation_1.TargetStructureTransformationFromJSON)),
        'filter': !runtime_1.exists(json, 'filter') ? undefined : TargetFilterPut_1.TargetFilterPutFromJSON(json['filter']),
        'human_readable': !runtime_1.exists(json, 'human_readable') ? undefined : json['human_readable'],
        'limit': !runtime_1.exists(json, 'limit') ? undefined : TargetLimitPut_1.TargetLimitPutFromJSON(json['limit']),
        'name': json['name'],
        'options': TargetOptionsPut_1.TargetOptionsPutFromJSON(json['options']),
        'payload_map': !runtime_1.exists(json, 'payload_map') ? undefined : json['payload_map'],
        'representation': TargetModesPut_1.TargetModesPutFromJSON(json['representation']),
    };
}
exports.TargetPutFromJSONTyped = TargetPutFromJSONTyped;
function TargetPutToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'connection_id': value.connection_id,
        'custom_structure': value.custom_structure === undefined ? undefined : (value.custom_structure.map(TargetStructureTransformation_1.TargetStructureTransformationToJSON)),
        'filter': TargetFilterPut_1.TargetFilterPutToJSON(value.filter),
        'human_readable': value.human_readable,
        'limit': TargetLimitPut_1.TargetLimitPutToJSON(value.limit),
        'name': value.name,
        'options': TargetOptionsPut_1.TargetOptionsPutToJSON(value.options),
        'payload_map': value.payload_map,
        'representation': TargetModesPut_1.TargetModesPutToJSON(value.representation),
    };
}
exports.TargetPutToJSON = TargetPutToJSON;
