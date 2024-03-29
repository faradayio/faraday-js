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
import { OutcomeAnalysisBias } from './OutcomeAnalysisBias';
import { OutcomeAnalysisOverallFeatures } from './OutcomeAnalysisOverallFeatures';
import { OutcomeAnalysisOverallPerformance } from './OutcomeAnalysisOverallPerformance';
import { OutcomeAnalysisTenureFeatures } from './OutcomeAnalysisTenureFeatures';
import { OutcomeAnalysisTenurePerformances } from './OutcomeAnalysisTenurePerformances';
/**
 * Analysis metrics for an outcome. Includes model performance, bias, feature importances, etc.
 *
 * Most of the outcome analytics are grouped by data source (e.g. recognized_individuals) they were derived from.
 *
 * - Recognized individuals: The set of individuals that have been matched with Faraday's Identity Graph.
 *
 * In the future, we may expand the list of data sources.
 * @export
 * @interface OutcomeAnalysis
 */
export interface OutcomeAnalysis {
    /**
     *
     * @type {OutcomeAnalysisBias}
     * @memberof OutcomeAnalysis
     */
    bias?: OutcomeAnalysisBias;
    /**
     *
     * @type {OutcomeAnalysisOverallFeatures}
     * @memberof OutcomeAnalysis
     */
    overall_features: OutcomeAnalysisOverallFeatures;
    /**
     *
     * @type {OutcomeAnalysisOverallPerformance}
     * @memberof OutcomeAnalysis
     */
    overall_performance: OutcomeAnalysisOverallPerformance;
    /**
     *
     * @type {OutcomeAnalysisTenureFeatures}
     * @memberof OutcomeAnalysis
     */
    tenure_features?: OutcomeAnalysisTenureFeatures;
    /**
     *
     * @type {OutcomeAnalysisTenurePerformances}
     * @memberof OutcomeAnalysis
     */
    tenure_performances?: OutcomeAnalysisTenurePerformances;
}
export declare function OutcomeAnalysisFromJSON(json: any): OutcomeAnalysis;
export declare function OutcomeAnalysisFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutcomeAnalysis;
export declare function OutcomeAnalysisToJSON(value?: OutcomeAnalysis | null): any;
