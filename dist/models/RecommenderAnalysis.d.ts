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
import { RecommenderAnalysisOverallFeatures } from './RecommenderAnalysisOverallFeatures';
import { RecommenderAnalysisPerformance } from './RecommenderAnalysisPerformance';
/**
 *
 * @export
 * @interface RecommenderAnalysis
 */
export interface RecommenderAnalysis {
    /**
     *
     * @type {RecommenderAnalysisOverallFeatures}
     * @memberof RecommenderAnalysis
     */
    overall_features?: RecommenderAnalysisOverallFeatures;
    /**
     *
     * @type {RecommenderAnalysisPerformance}
     * @memberof RecommenderAnalysis
     */
    performance?: RecommenderAnalysisPerformance;
}
export declare function RecommenderAnalysisFromJSON(json: any): RecommenderAnalysis;
export declare function RecommenderAnalysisFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecommenderAnalysis;
export declare function RecommenderAnalysisToJSON(value?: RecommenderAnalysis | null): any;
