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
 * @interface AnalysisDimensionsTraitBinNumber
 */
export interface AnalysisDimensionsTraitBinNumber {
    /**
     * The numeric total of individuals found within this bin range.
     * @type {number}
     * @memberof AnalysisDimensionsTraitBinNumber
     */
    count: number;
    /**
     * Oridinal dimensions are represented as a list of bins, where each bin is a range from X to Y and a resulting count of individuals that match within that range.
     * @type {string}
     * @memberof AnalysisDimensionsTraitBinNumber
     */
    data_type: string;
    /**
     * The upper range of the bin for this dimension. Max can be null, meaning it is all values above the min range for this bin.
     * @type {number}
     * @memberof AnalysisDimensionsTraitBinNumber
     */
    max?: number;
    /**
     * The starting numeric value this bin is counted by.
     * @type {number}
     * @memberof AnalysisDimensionsTraitBinNumber
     */
    min: number;
    /**
     * The count represented as a percentage based on the sum of counts.
     * @type {number}
     * @memberof AnalysisDimensionsTraitBinNumber
     */
    percent: number;
}
export declare function AnalysisDimensionsTraitBinNumberFromJSON(json: any): AnalysisDimensionsTraitBinNumber;
export declare function AnalysisDimensionsTraitBinNumberFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalysisDimensionsTraitBinNumber;
export declare function AnalysisDimensionsTraitBinNumberToJSON(value?: AnalysisDimensionsTraitBinNumber | null): any;
