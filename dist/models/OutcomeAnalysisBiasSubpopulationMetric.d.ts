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
/**
 *
 * @export
 * @interface OutcomeAnalysisBiasSubpopulationMetric
 */
export interface OutcomeAnalysisBiasSubpopulationMetric {
    /**
     * An interpretation of the metric value for the subpopulation.
     * @type {string}
     * @memberof OutcomeAnalysisBiasSubpopulationMetric
     */
    level: string;
    /**
     * The name of the metric.
     * @type {string}
     * @memberof OutcomeAnalysisBiasSubpopulationMetric
     */
    name: string;
    /**
     * The value of the metric.
     * @type {number}
     * @memberof OutcomeAnalysisBiasSubpopulationMetric
     */
    value: number;
}
export declare function OutcomeAnalysisBiasSubpopulationMetricFromJSON(json: any): OutcomeAnalysisBiasSubpopulationMetric;
export declare function OutcomeAnalysisBiasSubpopulationMetricFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutcomeAnalysisBiasSubpopulationMetric;
export declare function OutcomeAnalysisBiasSubpopulationMetricToJSON(value?: OutcomeAnalysisBiasSubpopulationMetric | null): any;