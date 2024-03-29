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
 * (Parameters used to PATCH the `TargetLimitRowCount` type.)
 *
 * Restrict the number of rows exported in a target by specifying an absolute row limit. Equivalent to `LIMIT` in SQL.
 *
 * If an outcome is specified, the results are sorted by score before taking the limit. Otherwise the ordering is random.
 * @export
 * @interface TargetLimitRowCountMergePatch
 */
export interface TargetLimitRowCountMergePatch {
    /**
     * When an `outcome_id` is given, this parameter sets the sort direction: for the "top" scores, specify `descending`. For the "bottom" scores, specify `ascending`.
     *
     * If not specified, defaults to `descending`.
     * @type {string}
     * @memberof TargetLimitRowCountMergePatch
     */
    direction?: TargetLimitRowCountMergePatchDirectionEnum;
    /**
     * The limit method
     * @type {string}
     * @memberof TargetLimitRowCountMergePatch
     */
    method: string;
    /**
     * Use the ranking suggested by the outcome's scores.
     * @type {string}
     * @memberof TargetLimitRowCountMergePatch
     */
    outcome_id?: string | null;
    /**
     * Specify a whole number to restrict the target to a specific number of records.
     * @type {number}
     * @memberof TargetLimitRowCountMergePatch
     */
    threshold?: number;
}
/**
* @export
* @enum {string}
*/
export declare enum TargetLimitRowCountMergePatchDirectionEnum {
    Ascending = "ascending",
    Descending = "descending"
}
export declare function TargetLimitRowCountMergePatchFromJSON(json: any): TargetLimitRowCountMergePatch;
export declare function TargetLimitRowCountMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetLimitRowCountMergePatch;
export declare function TargetLimitRowCountMergePatchToJSON(value?: TargetLimitRowCountMergePatch | null): any;
