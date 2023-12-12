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
import { TargetFilterCohortMembershipConditions } from './TargetFilterCohortMembershipConditions';
import { TargetFilterOutcomePercentileConditions } from './TargetFilterOutcomePercentileConditions';
import { TargetFilterOutcomeProbabilityConditions } from './TargetFilterOutcomeProbabilityConditions';
import { TargetFilterOutcomeScoreConditions } from './TargetFilterOutcomeScoreConditions';
import { TargetFilterPersonaSetPersonaIdConditions } from './TargetFilterPersonaSetPersonaIdConditions';
import { TargetFilterTraitConditions } from './TargetFilterTraitConditions';
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
export declare function TargetFilterPutFromJSON(json: any): TargetFilterPut;
export declare function TargetFilterPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetFilterPut;
export declare function TargetFilterPutToJSON(value?: TargetFilterPut | null): any;
