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
 * (Parameters used to PATCH the `IdentitySet` type.)
 * 
 * Information about how to extract personally identifiable information (name, contact, address) from the rows 
 * in a dataset. 
 * 
 * At least one value must be provided.
 * @export
 * @interface IdentitySetMergePatch
 */
export interface IdentitySetMergePatch {
    /**
     * 
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    city?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    email?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof IdentitySetMergePatch
     */
    house_number_and_street?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    person_first_name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    person_last_name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    phone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    postcode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    state?: string | null;
}

export function IdentitySetMergePatchFromJSON(json: any): IdentitySetMergePatch {
    return IdentitySetMergePatchFromJSONTyped(json, false);
}

export function IdentitySetMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentitySetMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'city': !exists(json, 'city') ? undefined : json['city'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'house_number_and_street': !exists(json, 'house_number_and_street') ? undefined : json['house_number_and_street'],
        'person_first_name': !exists(json, 'person_first_name') ? undefined : json['person_first_name'],
        'person_last_name': !exists(json, 'person_last_name') ? undefined : json['person_last_name'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'postcode': !exists(json, 'postcode') ? undefined : json['postcode'],
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}

export function IdentitySetMergePatchToJSON(value?: IdentitySetMergePatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'city': value.city,
        'email': value.email,
        'house_number_and_street': value.house_number_and_street,
        'person_first_name': value.person_first_name,
        'person_last_name': value.person_last_name,
        'phone': value.phone,
        'postcode': value.postcode,
        'state': value.state,
    };
}
