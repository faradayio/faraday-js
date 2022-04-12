/* tslint:disable */
/* eslint-disable */
/**
 * Faraday REST API
 * The [Faraday](https://faraday.ai) SDK makes it easy to predict customer behavior using a simple API.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Information about how to extract personally identifiable information (name, contact, address) from the rows 
 * in a dataset. 
 * 
 * At least one value must be provided.
 * @export
 * @interface IdentitySet
 */
export interface IdentitySet {
    /**
     * 
     * @type {string}
     * @memberof IdentitySet
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentitySet
     */
    email?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof IdentitySet
     */
    houseNumberAndStreet?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof IdentitySet
     */
    personFirstName?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentitySet
     */
    personLastName?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentitySet
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentitySet
     */
    postcode?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentitySet
     */
    state?: string;
}

export function IdentitySetFromJSON(json: any): IdentitySet {
    return IdentitySetFromJSONTyped(json, false);
}

export function IdentitySetFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentitySet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'city': !exists(json, 'city') ? undefined : json['city'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'houseNumberAndStreet': !exists(json, 'house_number_and_street') ? undefined : json['house_number_and_street'],
        'personFirstName': !exists(json, 'person_first_name') ? undefined : json['person_first_name'],
        'personLastName': !exists(json, 'person_last_name') ? undefined : json['person_last_name'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'postcode': !exists(json, 'postcode') ? undefined : json['postcode'],
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}

export function IdentitySetToJSON(value?: IdentitySet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'city': value.city,
        'email': value.email,
        'house_number_and_street': value.houseNumberAndStreet,
        'person_first_name': value.personFirstName,
        'person_last_name': value.personLastName,
        'phone': value.phone,
        'postcode': value.postcode,
        'state': value.state,
    };
}

