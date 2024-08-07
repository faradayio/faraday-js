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
exports.TargetLookupRequestToJSON = exports.TargetLookupRequestFromJSONTyped = exports.TargetLookupRequestFromJSON = void 0;
const runtime_1 = require("../runtime");
const LookupApiIdentitySets_1 = require("./LookupApiIdentitySets");
function TargetLookupRequestFromJSON(json) {
    return TargetLookupRequestFromJSONTyped(json, false);
}
exports.TargetLookupRequestFromJSON = TargetLookupRequestFromJSON;
function TargetLookupRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'identity_sets': !runtime_1.exists(json, 'identity_sets') ? undefined : (json['identity_sets'].map(LookupApiIdentitySets_1.LookupApiIdentitySetsFromJSON)),
        'city': !runtime_1.exists(json, 'city') ? undefined : json['city'],
        'email': !runtime_1.exists(json, 'email') ? undefined : json['email'],
        'email_hash': !runtime_1.exists(json, 'email_hash') ? undefined : json['email_hash'],
        'house_number_and_street': !runtime_1.exists(json, 'house_number_and_street') ? undefined : json['house_number_and_street'],
        'latitude': !runtime_1.exists(json, 'latitude') ? undefined : json['latitude'],
        'longitude': !runtime_1.exists(json, 'longitude') ? undefined : json['longitude'],
        'person_first_name': !runtime_1.exists(json, 'person_first_name') ? undefined : json['person_first_name'],
        'person_last_name': !runtime_1.exists(json, 'person_last_name') ? undefined : json['person_last_name'],
        'phone': !runtime_1.exists(json, 'phone') ? undefined : json['phone'],
        'postcode': !runtime_1.exists(json, 'postcode') ? undefined : json['postcode'],
        'search_radius': !runtime_1.exists(json, 'search_radius') ? undefined : json['search_radius'],
        'state': !runtime_1.exists(json, 'state') ? undefined : json['state'],
    };
}
exports.TargetLookupRequestFromJSONTyped = TargetLookupRequestFromJSONTyped;
function TargetLookupRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'identity_sets': value.identity_sets === undefined ? undefined : (value.identity_sets.map(LookupApiIdentitySets_1.LookupApiIdentitySetsToJSON)),
        'city': value.city,
        'email': value.email,
        'email_hash': value.email_hash,
        'house_number_and_street': value.house_number_and_street,
        'latitude': value.latitude,
        'longitude': value.longitude,
        'person_first_name': value.person_first_name,
        'person_last_name': value.person_last_name,
        'phone': value.phone,
        'postcode': value.postcode,
        'search_radius': value.search_radius,
        'state': value.state,
    };
}
exports.TargetLookupRequestToJSON = TargetLookupRequestToJSON;
