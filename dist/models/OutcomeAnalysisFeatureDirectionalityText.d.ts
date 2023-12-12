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
 * Directionality of a text feature
 * @export
 * @interface OutcomeAnalysisFeatureDirectionalityText
 */
export interface OutcomeAnalysisFeatureDirectionalityText {
    /**
     *
     * @type {string}
     * @memberof OutcomeAnalysisFeatureDirectionalityText
     */
    data_type: string;
    /**
     * The percentage of data that falls in that particular bin.
     * @type {number}
     * @memberof OutcomeAnalysisFeatureDirectionalityText
     */
    density: number;
    /**
     * The impact the feature has on the outcome.
     * @type {number}
     * @memberof OutcomeAnalysisFeatureDirectionalityText
     */
    impact: number;
    /**
     *
     * @type {string}
     * @memberof OutcomeAnalysisFeatureDirectionalityText
     */
    value: string;
}
export declare function OutcomeAnalysisFeatureDirectionalityTextFromJSON(json: any): OutcomeAnalysisFeatureDirectionalityText;
export declare function OutcomeAnalysisFeatureDirectionalityTextFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutcomeAnalysisFeatureDirectionalityText;
export declare function OutcomeAnalysisFeatureDirectionalityTextToJSON(value?: OutcomeAnalysisFeatureDirectionalityText | null): any;
