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
 * The data to include for each person in this scope.
 * @export
 * @interface ScopePayload
 */
export interface ScopePayload {
    /**
     * Include additional traits.
     * 
     * For traits created through `output_to_traits` via `/datasets`, specify the trait name.
     * 
     * For traits from Faraday's Internal Graph (FIG), specify the name prefixed by `fig/` ex. `fig/age`.
     * @type {Array<string>}
     * @memberof ScopePayload
     */
    attributes?: Array<string>;
    /**
     * Specify a list of cohort membership(s) to include. The list can include any cohort, not just those in `population.cohort_ids`.
     * @type {Array<string>}
     * @memberof ScopePayload
     */
    cohort_ids?: Array<string>;
    /**
     * Opt-in to include prediction explainability.
     * @type {boolean}
     * @memberof ScopePayload
     */
    explainability?: boolean;
    /**
     * Include the propensity score(s) from the specified outcome(s).
     * @type {Array<string>}
     * @memberof ScopePayload
     */
    outcome_ids?: Array<string>;
    /**
     * Include the persona assignment(s) from the specified persona set(s).
     * @type {Array<string>}
     * @memberof ScopePayload
     */
    persona_set_ids?: Array<string>;
    /**
     * Include the recommendation(s) from the specified recommender(s).
     * 
     * This feature is experimental and subject to change. To enable this feature, contact your account manager.
     * @type {Array<string>}
     * @memberof ScopePayload
     */
    recommender_ids?: Array<string>;
}

export function ScopePayloadFromJSON(json: any): ScopePayload {
    return ScopePayloadFromJSONTyped(json, false);
}

export function ScopePayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScopePayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
        'cohort_ids': !exists(json, 'cohort_ids') ? undefined : json['cohort_ids'],
        'explainability': !exists(json, 'explainability') ? undefined : json['explainability'],
        'outcome_ids': !exists(json, 'outcome_ids') ? undefined : json['outcome_ids'],
        'persona_set_ids': !exists(json, 'persona_set_ids') ? undefined : json['persona_set_ids'],
        'recommender_ids': !exists(json, 'recommender_ids') ? undefined : json['recommender_ids'],
    };
}

export function ScopePayloadToJSON(value?: ScopePayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributes': value.attributes,
        'cohort_ids': value.cohort_ids,
        'explainability': value.explainability,
        'outcome_ids': value.outcome_ids,
        'persona_set_ids': value.persona_set_ids,
        'recommender_ids': value.recommender_ids,
    };
}

