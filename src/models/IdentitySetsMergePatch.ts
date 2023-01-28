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
import {
    IdentitySetMergePatch,
    IdentitySetMergePatchFromJSON,
    IdentitySetMergePatchFromJSONTyped,
    IdentitySetMergePatchToJSON,
} from './IdentitySetMergePatch';

/**
 * (Parameters used to PATCH the `IdentitySets` type.)
 * 
 * A mapping of {identity set name} (ex. shipping) -> {identity set object}. 
 * 
 * Describes all the logical groupings of personally-identifiable information present in the dataset.
 * 
 * Identity set objects map canonical names to dataset column names. The following keys are supported:
 *   * `email`
 *   * `email_hash`
 *   * `phone`
 *   * `person_full_name`
 *   * `person_last_name`
 *   * `person_first_name`
 *   * `house_number_and_street`
 *   * `city`
 *   * `state`
 *   * `postcode`
 *   * `freeform_address`
 * 
 * All keys must correspond to a single column name except `house_number_and_street` which must be an array of column names.
 * @export
 * @interface IdentitySetsMergePatch
 */
export interface IdentitySetsMergePatch {
    [key: string]: IdentitySetMergePatch;
}

export function IdentitySetsMergePatchFromJSON(json: any): IdentitySetsMergePatch {
    return IdentitySetsMergePatchFromJSONTyped(json, false);
}

export function IdentitySetsMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentitySetsMergePatch {
    return json;
}

export function IdentitySetsMergePatchToJSON(value?: IdentitySetsMergePatch | null): any {
    return value;
}

