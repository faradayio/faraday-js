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
 * @interface TargetFilterOutcomePercentileConditions
 */
export interface TargetFilterOutcomePercentileConditions {
    /**
     * Equal to
     * @type {number}
     * @memberof TargetFilterOutcomePercentileConditions
     */
    _eq?: number;
    /**
     * Greater than
     * @type {number}
     * @memberof TargetFilterOutcomePercentileConditions
     */
    _gt?: number;
    /**
     * Greater than or equal to
     * @type {number}
     * @memberof TargetFilterOutcomePercentileConditions
     */
    _gte?: number;
    /**
     * Less than
     * @type {number}
     * @memberof TargetFilterOutcomePercentileConditions
     */
    _lt?: number;
    /**
     * Less than or equal to
     * @type {number}
     * @memberof TargetFilterOutcomePercentileConditions
     */
    _lte?: number;
    /**
     * Value is not null
     * @type {boolean}
     * @memberof TargetFilterOutcomePercentileConditions
     */
    _nnull?: boolean;
    /**
     * Value is null
     * @type {boolean}
     * @memberof TargetFilterOutcomePercentileConditions
     */
    _null?: boolean;
    /**
     * Outcome id to filter on.
     * @type {string}
     * @memberof TargetFilterOutcomePercentileConditions
     */
    outcome_id: string;
}
export declare function TargetFilterOutcomePercentileConditionsFromJSON(json: any): TargetFilterOutcomePercentileConditions;
export declare function TargetFilterOutcomePercentileConditionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetFilterOutcomePercentileConditions;
export declare function TargetFilterOutcomePercentileConditionsToJSON(value?: TargetFilterOutcomePercentileConditions | null): any;
