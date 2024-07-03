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
exports.GraphEdgeToJSON = exports.GraphEdgeFromJSONTyped = exports.GraphEdgeFromJSON = void 0;
const runtime_1 = require("../runtime");
const ResourceStatus_1 = require("./ResourceStatus");
const ResourceType_1 = require("./ResourceType");
function GraphEdgeFromJSON(json) {
    return GraphEdgeFromJSONTyped(json, false);
}
exports.GraphEdgeFromJSON = GraphEdgeFromJSON;
function GraphEdgeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'downstream_id': !runtime_1.exists(json, 'downstream_id') ? undefined : json['downstream_id'],
        'downstream_last_read_input_at': !runtime_1.exists(json, 'downstream_last_read_input_at') ? undefined : (new Date(json['downstream_last_read_input_at'])),
        'downstream_last_updated_config_at': !runtime_1.exists(json, 'downstream_last_updated_config_at') ? undefined : (new Date(json['downstream_last_updated_config_at'])),
        'downstream_last_updated_output_at': !runtime_1.exists(json, 'downstream_last_updated_output_at') ? undefined : (new Date(json['downstream_last_updated_output_at'])),
        'downstream_literate': !runtime_1.exists(json, 'downstream_literate') ? undefined : json['downstream_literate'],
        'downstream_status': !runtime_1.exists(json, 'downstream_status') ? undefined : ResourceStatus_1.ResourceStatusFromJSON(json['downstream_status']),
        'downstream_status_changed_at': !runtime_1.exists(json, 'downstream_status_changed_at') ? undefined : (new Date(json['downstream_status_changed_at'])),
        'downstream_type': !runtime_1.exists(json, 'downstream_type') ? undefined : ResourceType_1.ResourceTypeFromJSON(json['downstream_type']),
        'upstream_id': !runtime_1.exists(json, 'upstream_id') ? undefined : json['upstream_id'],
        'upstream_last_read_input_at': !runtime_1.exists(json, 'upstream_last_read_input_at') ? undefined : (new Date(json['upstream_last_read_input_at'])),
        'upstream_last_updated_config_at': !runtime_1.exists(json, 'upstream_last_updated_config_at') ? undefined : (new Date(json['upstream_last_updated_config_at'])),
        'upstream_last_updated_output_at': !runtime_1.exists(json, 'upstream_last_updated_output_at') ? undefined : (new Date(json['upstream_last_updated_output_at'])),
        'upstream_literate': !runtime_1.exists(json, 'upstream_literate') ? undefined : json['upstream_literate'],
        'upstream_status': !runtime_1.exists(json, 'upstream_status') ? undefined : ResourceStatus_1.ResourceStatusFromJSON(json['upstream_status']),
        'upstream_status_changed_at': !runtime_1.exists(json, 'upstream_status_changed_at') ? undefined : (new Date(json['upstream_status_changed_at'])),
        'upstream_type': !runtime_1.exists(json, 'upstream_type') ? undefined : ResourceType_1.ResourceTypeFromJSON(json['upstream_type']),
    };
}
exports.GraphEdgeFromJSONTyped = GraphEdgeFromJSONTyped;
function GraphEdgeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'downstream_id': value.downstream_id,
        'downstream_last_read_input_at': value.downstream_last_read_input_at === undefined ? undefined : (value.downstream_last_read_input_at.toISOString()),
        'downstream_last_updated_config_at': value.downstream_last_updated_config_at === undefined ? undefined : (value.downstream_last_updated_config_at.toISOString()),
        'downstream_last_updated_output_at': value.downstream_last_updated_output_at === undefined ? undefined : (value.downstream_last_updated_output_at.toISOString()),
        'downstream_literate': value.downstream_literate,
        'downstream_status': ResourceStatus_1.ResourceStatusToJSON(value.downstream_status),
        'downstream_status_changed_at': value.downstream_status_changed_at === undefined ? undefined : (value.downstream_status_changed_at.toISOString()),
        'downstream_type': ResourceType_1.ResourceTypeToJSON(value.downstream_type),
        'upstream_id': value.upstream_id,
        'upstream_last_read_input_at': value.upstream_last_read_input_at === undefined ? undefined : (value.upstream_last_read_input_at.toISOString()),
        'upstream_last_updated_config_at': value.upstream_last_updated_config_at === undefined ? undefined : (value.upstream_last_updated_config_at.toISOString()),
        'upstream_last_updated_output_at': value.upstream_last_updated_output_at === undefined ? undefined : (value.upstream_last_updated_output_at.toISOString()),
        'upstream_literate': value.upstream_literate,
        'upstream_status': ResourceStatus_1.ResourceStatusToJSON(value.upstream_status),
        'upstream_status_changed_at': value.upstream_status_changed_at === undefined ? undefined : (value.upstream_status_changed_at.toISOString()),
        'upstream_type': ResourceType_1.ResourceTypeToJSON(value.upstream_type),
    };
}
exports.GraphEdgeToJSON = GraphEdgeToJSON;
