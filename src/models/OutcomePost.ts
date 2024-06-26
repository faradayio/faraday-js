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
    OutcomeBiasMitigation,
    OutcomeBiasMitigationFromJSON,
    OutcomeBiasMitigationFromJSONTyped,
    OutcomeBiasMitigationToJSON,
} from './OutcomeBiasMitigation';
import {
    OutcomePredictorsPost,
    OutcomePredictorsPostFromJSON,
    OutcomePredictorsPostFromJSONTyped,
    OutcomePredictorsPostToJSON,
} from './OutcomePredictorsPost';

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
    /**
     * 
     * @type {OutcomePredictorsPost}
     * @memberof OutcomePost
     */
    predictors?: OutcomePredictorsPost;
}

export function OutcomePostFromJSON(json: any): OutcomePost {
    return OutcomePostFromJSONTyped(json, false);
}

export function OutcomePostFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutcomePost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attainment_cohort_id': json['attainment_cohort_id'],
        'attrition_cohort_id': !exists(json, 'attrition_cohort_id') ? undefined : json['attrition_cohort_id'],
        'bias_mitigation': !exists(json, 'bias_mitigation') ? undefined : OutcomeBiasMitigationFromJSON(json['bias_mitigation']),
        'eligible_cohort_id': !exists(json, 'eligible_cohort_id') ? undefined : json['eligible_cohort_id'],
        'feature_blocklist': !exists(json, 'feature_blocklist') ? undefined : json['feature_blocklist'],
        'name': json['name'],
        'predictors': !exists(json, 'predictors') ? undefined : OutcomePredictorsPostFromJSON(json['predictors']),
    };
}

export function OutcomePostToJSON(value?: OutcomePost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attainment_cohort_id': value.attainment_cohort_id,
        'attrition_cohort_id': value.attrition_cohort_id,
        'bias_mitigation': OutcomeBiasMitigationToJSON(value.bias_mitigation),
        'eligible_cohort_id': value.eligible_cohort_id,
        'feature_blocklist': value.feature_blocklist,
        'name': value.name,
        'predictors': OutcomePredictorsPostToJSON(value.predictors),
    };
}

