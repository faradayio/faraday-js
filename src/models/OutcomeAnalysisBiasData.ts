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
    OutcomeAnalysisBiasDataAgeDistribution,
    OutcomeAnalysisBiasDataAgeDistributionFromJSON,
    OutcomeAnalysisBiasDataAgeDistributionFromJSONTyped,
    OutcomeAnalysisBiasDataAgeDistributionToJSON,
} from './OutcomeAnalysisBiasDataAgeDistribution';
import {
    OutcomeAnalysisBiasDataGenderProportion,
    OutcomeAnalysisBiasDataGenderProportionFromJSON,
    OutcomeAnalysisBiasDataGenderProportionFromJSONTyped,
    OutcomeAnalysisBiasDataGenderProportionToJSON,
} from './OutcomeAnalysisBiasDataGenderProportion';

/**
 * The underlying data used to build an outcome can introduce bias by unevenly representing subpopulations.
 * This bias is measured by comparing distributions of sensitive dimensions across labels.
 * Categorical distributions (e.g. for gender) are compared using proportions.
 * Numeric distributions (e.g. for age) are compared using the Wasserstein distance on the space of empirical distributions.
 * @export
 * @interface OutcomeAnalysisBiasData
 */
export interface OutcomeAnalysisBiasData {
    /**
     * 
     * @type {OutcomeAnalysisBiasDataAgeDistribution}
     * @memberof OutcomeAnalysisBiasData
     */
    age: OutcomeAnalysisBiasDataAgeDistribution;
    /**
     * 
     * @type {OutcomeAnalysisBiasDataGenderProportion}
     * @memberof OutcomeAnalysisBiasData
     */
    gender: OutcomeAnalysisBiasDataGenderProportion;
}

export function OutcomeAnalysisBiasDataFromJSON(json: any): OutcomeAnalysisBiasData {
    return OutcomeAnalysisBiasDataFromJSONTyped(json, false);
}

export function OutcomeAnalysisBiasDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutcomeAnalysisBiasData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'age': OutcomeAnalysisBiasDataAgeDistributionFromJSON(json['age']),
        'gender': OutcomeAnalysisBiasDataGenderProportionFromJSON(json['gender']),
    };
}

export function OutcomeAnalysisBiasDataToJSON(value?: OutcomeAnalysisBiasData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'age': OutcomeAnalysisBiasDataAgeDistributionToJSON(value.age),
        'gender': OutcomeAnalysisBiasDataGenderProportionToJSON(value.gender),
    };
}

