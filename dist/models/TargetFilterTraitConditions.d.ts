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
 * @interface TargetFilterTraitConditions
 */
export interface TargetFilterTraitConditions {
    /**
     * Equal to
     * @type {string}
     * @memberof TargetFilterTraitConditions
     */
    _eq?: string;
    /**
     * Greater than
     * @type {number}
     * @memberof TargetFilterTraitConditions
     */
    _gt?: number;
    /**
     * Greater than or equal to
     * @type {number}
     * @memberof TargetFilterTraitConditions
     */
    _gte?: number;
    /**
     * Value is one of
     * @type {Array<string>}
     * @memberof TargetFilterTraitConditions
     */
    _in?: Array<string>;
    /**
     * Less than
     * @type {number}
     * @memberof TargetFilterTraitConditions
     */
    _lt?: number;
    /**
     * Less than or equal to
     * @type {number}
     * @memberof TargetFilterTraitConditions
     */
    _lte?: number;
    /**
     * Value contains a match to the regex (re2) expression provided. For an exact regex match, use the ^ and $ characters as specified by the (re2 documentation)[https://github.com/google/re2/wiki/Syntax].
     * @type {string}
     * @memberof TargetFilterTraitConditions
     */
    _matches?: string;
    /**
     * Not equal to
     * @type {string}
     * @memberof TargetFilterTraitConditions
     */
    _neq?: string;
    /**
     * Value is not one of
     * @type {Array<string>}
     * @memberof TargetFilterTraitConditions
     */
    _nin?: Array<string>;
    /**
     * Value is not null
     * @type {boolean}
     * @memberof TargetFilterTraitConditions
     */
    _nnull?: boolean;
    /**
     * Value is null (nulls are otherwise excluded)
     * @type {boolean}
     * @memberof TargetFilterTraitConditions
     */
    _null?: boolean;
    /**
     * The name of the trait.
     * @type {string}
     * @memberof TargetFilterTraitConditions
     */
    name: string;
}
export declare function TargetFilterTraitConditionsFromJSON(json: any): TargetFilterTraitConditions;
export declare function TargetFilterTraitConditionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetFilterTraitConditions;
export declare function TargetFilterTraitConditionsToJSON(value?: TargetFilterTraitConditions | null): any;
