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
import { OutcomeBiasMitigation } from './OutcomeBiasMitigation';
/**
 * (Parameters used to POST a new value of the `Outcome` type.)
 *
 * A business objective describing how likely a group of people are to transition from one cohort to another (for example, from a prospect to a customer).
 * @export
 * @interface OutcomePost
 */
export interface OutcomePost {
    /**
     * A cohort of people who have attained the desired outcome (for example, if predicting transition from prospect to customer, the attainment cohort should be existing customers).
     * @type {string}
     * @memberof OutcomePost
     */
    attainment_cohort_id: string;
    /**
     * A cohort of counterexamples - people who have clearly failed to attain the outcome, as opposed to simply being indeterminate. This cohort is optional.
     * @type {string}
     * @memberof OutcomePost
     */
    attrition_cohort_id?: string;
    /**
     *
     * @type {OutcomeBiasMitigation}
     * @memberof OutcomePost
     */
    bias_mitigation?: OutcomeBiasMitigation;
    /**
     * A cohort of people who could attain or attrite the desired outcome (for example, if predicting transition from prospect to customer, the eligible cohort should be prospects). If no eligible cohort is specified, the model will use the US population as the eligible cohort.
     * @type {string}
     * @memberof OutcomePost
     */
    eligible_cohort_id?: string;
    /**
     * The name of a field or category of fields which should not be considered for this Outcome. Should be used
     * primarily for the purposes of Responsible AI.
     * @type {Array<string>}
     * @memberof OutcomePost
     */
    feature_blocklist?: Array<string>;
    /**
     * Human-readable label for this outcome. Each outcome must have a unique name.
     * @type {string}
     * @memberof OutcomePost
     */
    name: string;
}
export declare function OutcomePostFromJSON(json: any): OutcomePost;
export declare function OutcomePostFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutcomePost;
export declare function OutcomePostToJSON(value?: OutcomePost | null): any;