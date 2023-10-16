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
    OutcomePerformanceModel,
    OutcomePerformanceModelFromJSON,
    OutcomePerformanceModelFromJSONTyped,
    OutcomePerformanceModelToJSON,
} from './OutcomePerformanceModel';

/**
 * 
 * @export
 * @interface OutcomeAnalysisOverallPerformance
 */
export interface OutcomeAnalysisOverallPerformance {
    /**
     * 
     * @type {OutcomePerformanceModel}
     * @memberof OutcomeAnalysisOverallPerformance
     */
    recognized_individuals: OutcomePerformanceModel;
}

export function OutcomeAnalysisOverallPerformanceFromJSON(json: any): OutcomeAnalysisOverallPerformance {
    return OutcomeAnalysisOverallPerformanceFromJSONTyped(json, false);
}

export function OutcomeAnalysisOverallPerformanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutcomeAnalysisOverallPerformance {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'recognized_individuals': OutcomePerformanceModelFromJSON(json['recognized_individuals']),
    };
}

export function OutcomeAnalysisOverallPerformanceToJSON(value?: OutcomeAnalysisOverallPerformance | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'recognized_individuals': OutcomePerformanceModelToJSON(value.recognized_individuals),
    };
}
