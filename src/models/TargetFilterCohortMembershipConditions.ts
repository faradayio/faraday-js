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
/**
 * 
 * @export
 * @interface TargetFilterCohortMembershipConditions
 */
export interface TargetFilterCohortMembershipConditions {
    /**
     * Equal to
     * @type {boolean}
     * @memberof TargetFilterCohortMembershipConditions
     */
    _eq: boolean;
    /**
     * Cohort id to filter on.
     * @type {string}
     * @memberof TargetFilterCohortMembershipConditions
     */
    cohort_id: string;
}

export function TargetFilterCohortMembershipConditionsFromJSON(json: any): TargetFilterCohortMembershipConditions {
    return TargetFilterCohortMembershipConditionsFromJSONTyped(json, false);
}

export function TargetFilterCohortMembershipConditionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetFilterCohortMembershipConditions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_eq': json['_eq'],
        'cohort_id': json['cohort_id'],
    };
}

export function TargetFilterCohortMembershipConditionsToJSON(value?: TargetFilterCohortMembershipConditions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_eq': value._eq,
        'cohort_id': value.cohort_id,
    };
}

