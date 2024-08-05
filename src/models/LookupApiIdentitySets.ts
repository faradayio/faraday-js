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

import { exists, mapValues } from '../runtime';
import {
    LookupApiIdentifiers,
    LookupApiIdentifiersFromJSON,
    LookupApiIdentifiersFromJSONTyped,
    LookupApiIdentifiersToJSON,
} from './LookupApiIdentifiers';

/**
 * 
 * @export
 * @interface LookupApiIdentitySets
 */
export interface LookupApiIdentitySets {
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentitySets
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentitySets
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentitySets
     */
    email_hash?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentitySets
     */
    house_number_and_street?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentitySets
     */
    latitude?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentitySets
     */
    longitude?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentitySets
     */
    person_first_name?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentitySets
     */
    person_last_name?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentitySets
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentitySets
     */
    postcode?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentitySets
     */
    search_radius?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentitySets
     */
    state?: string;
}

export function LookupApiIdentitySetsFromJSON(json: any): LookupApiIdentitySets {
    return LookupApiIdentitySetsFromJSONTyped(json, false);
}

export function LookupApiIdentitySetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LookupApiIdentitySets {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'city': !exists(json, 'city') ? undefined : json['city'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'email_hash': !exists(json, 'email_hash') ? undefined : json['email_hash'],
        'house_number_and_street': !exists(json, 'house_number_and_street') ? undefined : json['house_number_and_street'],
        'latitude': !exists(json, 'latitude') ? undefined : json['latitude'],
        'longitude': !exists(json, 'longitude') ? undefined : json['longitude'],
        'person_first_name': !exists(json, 'person_first_name') ? undefined : json['person_first_name'],
        'person_last_name': !exists(json, 'person_last_name') ? undefined : json['person_last_name'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'postcode': !exists(json, 'postcode') ? undefined : json['postcode'],
        'search_radius': !exists(json, 'search_radius') ? undefined : json['search_radius'],
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}

export function LookupApiIdentitySetsToJSON(value?: LookupApiIdentitySets | null): any {
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
