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
 * (Parameters used to PATCH the `ScopePopulation` type.)
 * 
 * The people to include in a scope. Leave `cohort_ids` empty to include the entire US population.
 * @export
 * @interface ScopePopulationMergePatch
 */
export interface ScopePopulationMergePatch {
    /**
     * Include people from the specified cohorts in this scope.
     * @type {Array<string>}
     * @memberof ScopePopulationMergePatch
     */
    cohort_ids?: Array<string>;
    /**
     * Exclude people from the specified cohorts in this scope.
     * @type {Array<string>}
     * @memberof ScopePopulationMergePatch
     */
    exclusion_cohort_ids?: Array<string> | null;
}

export function ScopePopulationMergePatchFromJSON(json: any): ScopePopulationMergePatch {
    return ScopePopulationMergePatchFromJSONTyped(json, false);
}

export function ScopePopulationMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScopePopulationMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cohort_ids': !exists(json, 'cohort_ids') ? undefined : json['cohort_ids'],
        'exclusion_cohort_ids': !exists(json, 'exclusion_cohort_ids') ? undefined : json['exclusion_cohort_ids'],
    };
}

export function ScopePopulationMergePatchToJSON(value?: ScopePopulationMergePatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cohort_ids': value.cohort_ids,
        'exclusion_cohort_ids': value.exclusion_cohort_ids,
    };
}

