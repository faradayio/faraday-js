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
    TargetFilterCohortMembershipConditions,
    TargetFilterCohortMembershipConditionsFromJSON,
    TargetFilterCohortMembershipConditionsFromJSONTyped,
    TargetFilterCohortMembershipConditionsToJSON,
} from './TargetFilterCohortMembershipConditions';
import {
    TargetFilterOutcomePercentileConditions,
    TargetFilterOutcomePercentileConditionsFromJSON,
    TargetFilterOutcomePercentileConditionsFromJSONTyped,
    TargetFilterOutcomePercentileConditionsToJSON,
} from './TargetFilterOutcomePercentileConditions';
import {
    TargetFilterOutcomeProbabilityConditions,
    TargetFilterOutcomeProbabilityConditionsFromJSON,
    TargetFilterOutcomeProbabilityConditionsFromJSONTyped,
    TargetFilterOutcomeProbabilityConditionsToJSON,
} from './TargetFilterOutcomeProbabilityConditions';
import {
    TargetFilterOutcomeScoreConditions,
    TargetFilterOutcomeScoreConditionsFromJSON,
    TargetFilterOutcomeScoreConditionsFromJSONTyped,
    TargetFilterOutcomeScoreConditionsToJSON,
} from './TargetFilterOutcomeScoreConditions';
import {
    TargetFilterPersonaSetPersonaIdConditions,
    TargetFilterPersonaSetPersonaIdConditionsFromJSON,
    TargetFilterPersonaSetPersonaIdConditionsFromJSONTyped,
    TargetFilterPersonaSetPersonaIdConditionsToJSON,
} from './TargetFilterPersonaSetPersonaIdConditions';
import {
    TargetFilterTraitConditions,
    TargetFilterTraitConditionsFromJSON,
    TargetFilterTraitConditionsFromJSONTyped,
    TargetFilterTraitConditionsToJSON,
} from './TargetFilterTraitConditions';

/**
 * (Parameters used to PUT a value of the `TargetFilter` type.)
 * 
 * Filter the rows exported in a target using the scope payload elements.
 * - **Deprecated:** To filter by outcome scores, use `outcome_score`.
 * - To filter by outcome probability, use `outcome_probability`.
 * - To filter by outcome percentile, use `outcome_percentile`.
 * - To filter by persona set persona id, use `persona`.
 * - To filter by cohort membership, use `cohort_membership`.
 * - To filter by trait, use `trait`.
 * 
 * Conditions are AND-ed together (like SQL) - each condition applies an additional constraint.
 * 
 * Nulls are excluded unless explicitly requested with `_null: true`.
 * 
 * Target filters are not supported for targets with options.type = "lookup_api".
 * @export
 * @interface TargetFilterPut
 */
export interface TargetFilterPut {
    /**
     * List of conditions to filter cohort membership on.
     * @type {Array<TargetFilterCohortMembershipConditions>}
     * @memberof TargetFilterPut
     */
    cohort_membership?: Array<TargetFilterCohortMembershipConditions>;
    /**
     * List of conditions to filter outcome percentile on.
     * @type {Array<TargetFilterOutcomePercentileConditions>}
     * @memberof TargetFilterPut
     */
    outcome_percentile?: Array<TargetFilterOutcomePercentileConditions>;
    /**
     * List of conditions to filter outcome probability on.
     * @type {Array<TargetFilterOutcomeProbabilityConditions>}
     * @memberof TargetFilterPut
     */
    outcome_probability?: Array<TargetFilterOutcomeProbabilityConditions>;
    /**
     * **Deprecated:** List of conditions to filter outcome score on.
     * @type {Array<TargetFilterOutcomeScoreConditions>}
     * @memberof TargetFilterPut
     */
    outcome_score?: Array<TargetFilterOutcomeScoreConditions>;
    /**
     * List of conditions to filter persona set personid on.
     * @type {Array<TargetFilterPersonaSetPersonaIdConditions>}
     * @memberof TargetFilterPut
     */
    persona?: Array<TargetFilterPersonaSetPersonaIdConditions>;
    /**
     * List of conditions to filter traits.
     * @type {Array<TargetFilterTraitConditions>}
     * @memberof TargetFilterPut
     */
    trait?: Array<TargetFilterTraitConditions>;
}

export function TargetFilterPutFromJSON(json: any): TargetFilterPut {
    return TargetFilterPutFromJSONTyped(json, false);
}

export function TargetFilterPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetFilterPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cohort_membership': !exists(json, 'cohort_membership') ? undefined : ((json['cohort_membership'] as Array<any>).map(TargetFilterCohortMembershipConditionsFromJSON)),
        'outcome_percentile': !exists(json, 'outcome_percentile') ? undefined : ((json['outcome_percentile'] as Array<any>).map(TargetFilterOutcomePercentileConditionsFromJSON)),
        'outcome_probability': !exists(json, 'outcome_probability') ? undefined : ((json['outcome_probability'] as Array<any>).map(TargetFilterOutcomeProbabilityConditionsFromJSON)),
        'outcome_score': !exists(json, 'outcome_score') ? undefined : ((json['outcome_score'] as Array<any>).map(TargetFilterOutcomeScoreConditionsFromJSON)),
        'persona': !exists(json, 'persona') ? undefined : ((json['persona'] as Array<any>).map(TargetFilterPersonaSetPersonaIdConditionsFromJSON)),
        'trait': !exists(json, 'trait') ? undefined : ((json['trait'] as Array<any>).map(TargetFilterTraitConditionsFromJSON)),
    };
}

export function TargetFilterPutToJSON(value?: TargetFilterPut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cohort_membership': value.cohort_membership === undefined ? undefined : ((value.cohort_membership as Array<any>).map(TargetFilterCohortMembershipConditionsToJSON)),
        'outcome_percentile': value.outcome_percentile === undefined ? undefined : ((value.outcome_percentile as Array<any>).map(TargetFilterOutcomePercentileConditionsToJSON)),
        'outcome_probability': value.outcome_probability === undefined ? undefined : ((value.outcome_probability as Array<any>).map(TargetFilterOutcomeProbabilityConditionsToJSON)),
        'outcome_score': value.outcome_score === undefined ? undefined : ((value.outcome_score as Array<any>).map(TargetFilterOutcomeScoreConditionsToJSON)),
        'persona': value.persona === undefined ? undefined : ((value.persona as Array<any>).map(TargetFilterPersonaSetPersonaIdConditionsToJSON)),
        'trait': value.trait === undefined ? undefined : ((value.trait as Array<any>).map(TargetFilterTraitConditionsToJSON)),
    };
}

