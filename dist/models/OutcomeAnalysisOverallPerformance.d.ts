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
import { OutcomePerformanceModel } from './OutcomePerformanceModel';
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
export declare function OutcomeAnalysisOverallPerformanceFromJSON(json: any): OutcomeAnalysisOverallPerformance;
export declare function OutcomeAnalysisOverallPerformanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutcomeAnalysisOverallPerformance;
export declare function OutcomeAnalysisOverallPerformanceToJSON(value?: OutcomeAnalysisOverallPerformance | null): any;
