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
 * (Parameters used to POST a new value of the `ScopePayload` type.)
 * 
 * The data to include for each person in this scope.
 * @export
 * @interface ScopePayloadPost
 */
export interface ScopePayloadPost {
    /**
     * Include additional attributes from Faraday's Internal Graph (FIG).
     * @type {Array<string>}
     * @memberof ScopePayloadPost
     */
    attributes?: Array<string>;
    /**
     * Specify a list of cohort membership(s) to include. The list can include any cohort, not just those in `population.cohort_ids`.
     * @type {Array<string>}
     * @memberof ScopePayloadPost
     */
    cohort_ids?: Array<string>;
    /**
     * Include the propensity score(s) from the specified outcome(s).
     * @type {Array<string>}
     * @memberof ScopePayloadPost
     */
    outcome_ids?: Array<string>;
    /**
     * Include the persona assignment(s) from the specified persona set(s).
     * @type {Array<string>}
     * @memberof ScopePayloadPost
     */
    persona_set_ids?: Array<string>;
}

export function ScopePayloadPostFromJSON(json: any): ScopePayloadPost {
    return ScopePayloadPostFromJSONTyped(json, false);
}

export function ScopePayloadPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScopePayloadPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
        'cohort_ids': !exists(json, 'cohort_ids') ? undefined : json['cohort_ids'],
        'outcome_ids': !exists(json, 'outcome_ids') ? undefined : json['outcome_ids'],
        'persona_set_ids': !exists(json, 'persona_set_ids') ? undefined : json['persona_set_ids'],
    };
}

export function ScopePayloadPostToJSON(value?: ScopePayloadPost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributes': value.attributes,
        'cohort_ids': value.cohort_ids,
        'outcome_ids': value.outcome_ids,
        'persona_set_ids': value.persona_set_ids,
    };
}

