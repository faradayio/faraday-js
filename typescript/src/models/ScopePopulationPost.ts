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
 * 
 * @export
 * @interface ScopePopulationPost
 */
export interface ScopePopulationPost {
    /**
     * 
     * @type {Array<string>}
     * @memberof ScopePopulationPost
     */
    cohortIds: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ScopePopulationPost
     */
    exclusionCohortIds?: Array<string>;
}

export function ScopePopulationPostFromJSON(json: any): ScopePopulationPost {
    return ScopePopulationPostFromJSONTyped(json, false);
}

export function ScopePopulationPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScopePopulationPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cohortIds': json['cohort_ids'],
        'exclusionCohortIds': !exists(json, 'exclusion_cohort_ids') ? undefined : json['exclusion_cohort_ids'],
    };
}

export function ScopePopulationPostToJSON(value?: ScopePopulationPost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cohort_ids': value.cohortIds,
        'exclusion_cohort_ids': value.exclusionCohortIds,
    };
}

