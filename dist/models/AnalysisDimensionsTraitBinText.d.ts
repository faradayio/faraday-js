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
 * @interface AnalysisDimensionsTraitBinText
 */
export interface AnalysisDimensionsTraitBinText {
    /**
     * The numeric total of individuals found by this category.
     * @type {number}
     * @memberof AnalysisDimensionsTraitBinText
     */
    count: number;
    /**
     * Text dimensions are represented as a list of bins, where each bin is a single category (from a list of categories for the given trait) and a resulting count that is the individuals found that match the category.
     * @type {string}
     * @memberof AnalysisDimensionsTraitBinText
     */
    data_type: string;
    /**
     * The count represented as a percentage based on the sum of counts.
     * @type {number}
     * @memberof AnalysisDimensionsTraitBinText
     */
    percent: number;
    /**
     * The category used to count individuals by.
     * @type {string}
     * @memberof AnalysisDimensionsTraitBinText
     */
    value: string;
}
export declare function AnalysisDimensionsTraitBinTextFromJSON(json: any): AnalysisDimensionsTraitBinText;
export declare function AnalysisDimensionsTraitBinTextFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalysisDimensionsTraitBinText;
export declare function AnalysisDimensionsTraitBinTextToJSON(value?: AnalysisDimensionsTraitBinText | null): any;
