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
    CohortTrait,
    CohortTraitFromJSON,
    CohortTraitFromJSONTyped,
    CohortTraitToJSON,
} from './CohortTrait';

/**
 * (Parameters used to PUT a value of the `Cohort` type.)
 * 
 * A specific group of people, such as "Customers" or "Subscription customers".
 * @export
 * @interface CohortPut
 */
export interface CohortPut {
    /**
     * Max count for this cohort's config
     * @type {number}
     * @memberof CohortPut
     */
    max_count?: number;
    /**
     * Max value for this cohort's config
     * @type {number}
     * @memberof CohortPut
     */
    max_value?: number;
    /**
     * Min count for this cohort's config
     * @type {number}
     * @memberof CohortPut
     */
    min_count?: number;
    /**
     * Min value for this cohort's config
     * @type {number}
     * @memberof CohortPut
     */
    min_value?: number;
    /**
     * Human-readable label for this cohort.
     * @type {string}
     * @memberof CohortPut
     */
    name?: string;
    /**
     * List of traits to filter cohort membership
     * @type {Array<CohortTrait>}
     * @memberof CohortPut
     */
    traits?: Array<CohortTrait>;
}

export function CohortPutFromJSON(json: any): CohortPut {
    return CohortPutFromJSONTyped(json, false);
}

export function CohortPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): CohortPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'max_count': !exists(json, 'max_count') ? undefined : json['max_count'],
        'max_value': !exists(json, 'max_value') ? undefined : json['max_value'],
        'min_count': !exists(json, 'min_count') ? undefined : json['min_count'],
        'min_value': !exists(json, 'min_value') ? undefined : json['min_value'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'traits': !exists(json, 'traits') ? undefined : ((json['traits'] as Array<any>).map(CohortTraitFromJSON)),
    };
}

export function CohortPutToJSON(value?: CohortPut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'max_count': value.max_count,
        'max_value': value.max_value,
        'min_count': value.min_count,
        'min_value': value.min_value,
        'name': value.name,
        'traits': value.traits === undefined ? undefined : ((value.traits as Array<any>).map(CohortTraitToJSON)),
    };
}

