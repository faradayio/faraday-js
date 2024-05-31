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
 * @interface DatasetStreamCondition
 */
export interface DatasetStreamCondition {
    /**
     * Equal to
     * @type {string}
     * @memberof DatasetStreamCondition
     */
    _eq?: string;
    /**
     * Greater than
     * @type {number}
     * @memberof DatasetStreamCondition
     */
    _gt?: number;
    /**
     * Greater than or equal to
     * @type {number}
     * @memberof DatasetStreamCondition
     */
    _gte?: number;
    /**
     * Value is one of
     * @type {Array<string>}
     * @memberof DatasetStreamCondition
     */
    _in?: Array<string>;
    /**
     * Less than
     * @type {number}
     * @memberof DatasetStreamCondition
     */
    _lt?: number;
    /**
     * Less than or equal to
     * @type {number}
     * @memberof DatasetStreamCondition
     */
    _lte?: number;
    /**
     * Value contains a match to the regex (re2) expression provided. For an exact regex match, use the ^ and $ characters as specified by the (re2 documentation)[https://github.com/google/re2/wiki/Syntax].
     * @type {string}
     * @memberof DatasetStreamCondition
     */
    _matches?: string;
    /**
     * Not equal to
     * @type {string}
     * @memberof DatasetStreamCondition
     */
    _neq?: string;
    /**
     * Value is not one of
     * @type {Array<string>}
     * @memberof DatasetStreamCondition
     */
    _nin?: Array<string>;
    /**
     * Value is not null
     * @type {boolean}
     * @memberof DatasetStreamCondition
     */
    _nnull?: boolean;
    /**
     * Value is null (nulls are otherwise excluded)
     * @type {boolean}
     * @memberof DatasetStreamCondition
     */
    _null?: boolean;
    /**
     * The column in the dataset that should be filtered on
     * @type {string}
     * @memberof DatasetStreamCondition
     */
    column_name: string;
    /**
     * Optional conditions are unioned together, when combined they define events that meet either condition.
     * @type {boolean}
     * @memberof DatasetStreamCondition
     */
    optional?: boolean;
}
export declare function DatasetStreamConditionFromJSON(json: any): DatasetStreamCondition;
export declare function DatasetStreamConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetStreamCondition;
export declare function DatasetStreamConditionToJSON(value?: DatasetStreamCondition | null): any;
