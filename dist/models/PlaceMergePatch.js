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
exports.PlaceMergePatchToJSON = exports.PlaceMergePatchFromJSONTyped = exports.PlaceMergePatchFromJSON = void 0;
const runtime_1 = require("../runtime");
const AddressInfo_1 = require("./AddressInfo");
function PlaceMergePatchFromJSON(json) {
    return PlaceMergePatchFromJSONTyped(json, false);
}
exports.PlaceMergePatchFromJSON = PlaceMergePatchFromJSON;
function PlaceMergePatchFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addresses': !runtime_1.exists(json, 'addresses') ? undefined : (json['addresses'] === null ? null : json['addresses'].map(AddressInfo_1.AddressInfoFromJSON)),
        'geojson': !runtime_1.exists(json, 'geojson') ? undefined : json['geojson'],
        'name': !runtime_1.exists(json, 'name') ? undefined : json['name'],
    };
}
exports.PlaceMergePatchFromJSONTyped = PlaceMergePatchFromJSONTyped;
function PlaceMergePatchToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'addresses': value.addresses === undefined ? undefined : (value.addresses === null ? null : value.addresses.map(AddressInfo_1.AddressInfoToJSON)),
        'geojson': value.geojson,
        'name': value.name,
    };
}
exports.PlaceMergePatchToJSON = PlaceMergePatchToJSON;