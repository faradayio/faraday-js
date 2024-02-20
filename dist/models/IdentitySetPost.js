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
exports.IdentitySetPostToJSON = exports.IdentitySetPostFromJSONTyped = exports.IdentitySetPostFromJSON = void 0;
const runtime_1 = require("../runtime");
function IdentitySetPostFromJSON(json) {
    return IdentitySetPostFromJSONTyped(json, false);
}
exports.IdentitySetPostFromJSON = IdentitySetPostFromJSON;
function IdentitySetPostFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'city': !runtime_1.exists(json, 'city') ? undefined : json['city'],
        'email': !runtime_1.exists(json, 'email') ? undefined : json['email'],
        'email_hash': !runtime_1.exists(json, 'email_hash') ? undefined : json['email_hash'],
        'freeform_address': !runtime_1.exists(json, 'freeform_address') ? undefined : json['freeform_address'],
        'house_number_and_street': !runtime_1.exists(json, 'house_number_and_street') ? undefined : json['house_number_and_street'],
        'person_first_name': !runtime_1.exists(json, 'person_first_name') ? undefined : json['person_first_name'],
        'person_full_name': !runtime_1.exists(json, 'person_full_name') ? undefined : json['person_full_name'],
        'person_last_name': !runtime_1.exists(json, 'person_last_name') ? undefined : json['person_last_name'],
        'phone': !runtime_1.exists(json, 'phone') ? undefined : json['phone'],
        'postcode': !runtime_1.exists(json, 'postcode') ? undefined : json['postcode'],
        'state': !runtime_1.exists(json, 'state') ? undefined : json['state'],
    };
}
exports.IdentitySetPostFromJSONTyped = IdentitySetPostFromJSONTyped;
function IdentitySetPostToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'city': value.city,
        'email': value.email,
        'email_hash': value.email_hash,
        'freeform_address': value.freeform_address,
        'house_number_and_street': value.house_number_and_street,
        'person_first_name': value.person_first_name,
        'person_full_name': value.person_full_name,
        'person_last_name': value.person_last_name,
        'phone': value.phone,
        'postcode': value.postcode,
        'state': value.state,
    };
}
exports.IdentitySetPostToJSON = IdentitySetPostToJSON;