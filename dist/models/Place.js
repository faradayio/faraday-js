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
exports.PlaceToJSON = exports.PlaceFromJSONTyped = exports.PlaceFromJSON = void 0;
const runtime_1 = require("../runtime");
const AddressInfo_1 = require("./AddressInfo");
const ResourceStatus_1 = require("./ResourceStatus");
function PlaceFromJSON(json) {
    return PlaceFromJSONTyped(json, false);
}
exports.PlaceFromJSON = PlaceFromJSON;
function PlaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addresses': !runtime_1.exists(json, 'addresses') ? undefined : (json['addresses'].map(AddressInfo_1.AddressInfoFromJSON)),
        'created_at': (new Date(json['created_at'])),
        'geojson': !runtime_1.exists(json, 'geojson') ? undefined : json['geojson'],
        'id': json['id'],
        'last_read_input_at': !runtime_1.exists(json, 'last_read_input_at') ? undefined : (new Date(json['last_read_input_at'])),
        'last_updated_config_at': !runtime_1.exists(json, 'last_updated_config_at') ? undefined : (new Date(json['last_updated_config_at'])),
        'last_updated_output_at': !runtime_1.exists(json, 'last_updated_output_at') ? undefined : (new Date(json['last_updated_output_at'])),
        'name': json['name'],
        'resource_type': json['resource_type'],
        'status': ResourceStatus_1.ResourceStatusFromJSON(json['status']),
        'status_changed_at': !runtime_1.exists(json, 'status_changed_at') ? undefined : (new Date(json['status_changed_at'])),
        'status_error': !runtime_1.exists(json, 'status_error') ? undefined : json['status_error'],
        'updated_at': (new Date(json['updated_at'])),
    };
}
exports.PlaceFromJSONTyped = PlaceFromJSONTyped;
function PlaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'addresses': value.addresses === undefined ? undefined : (value.addresses.map(AddressInfo_1.AddressInfoToJSON)),
        'created_at': (value.created_at.toISOString()),
        'geojson': value.geojson,
        'id': value.id,
        'last_read_input_at': value.last_read_input_at === undefined ? undefined : (value.last_read_input_at.toISOString()),
        'last_updated_config_at': value.last_updated_config_at === undefined ? undefined : (value.last_updated_config_at.toISOString()),
        'last_updated_output_at': value.last_updated_output_at === undefined ? undefined : (value.last_updated_output_at.toISOString()),
        'name': value.name,
        'resource_type': value.resource_type,
        'status': ResourceStatus_1.ResourceStatusToJSON(value.status),
        'status_changed_at': value.status_changed_at === undefined ? undefined : (value.status_changed_at.toISOString()),
        'status_error': value.status_error,
        'updated_at': (value.updated_at.toISOString()),
    };
}
exports.PlaceToJSON = PlaceToJSON;
