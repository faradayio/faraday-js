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
import { TargetLimitPercentilePost } from './TargetLimitPercentilePost';
import { TargetLimitRowCountPost } from './TargetLimitRowCountPost';
/**
 * @type TargetLimitPost
 * Restrict the number of rows exported in a target.
 * - To apply an absolute row limit, use `row_count`.
 * - **Deprecated:** To filter by percentile scores, use `percentile` (use `filter outcome_percentile` instead).
 * Target limits are not supported for targets with options.type = "lookup_api"
 * @export
 */
export declare type TargetLimitPost = {
    method: 'percentile';
} & TargetLimitPercentilePost | {
    method: 'row_count';
} & TargetLimitRowCountPost;
export declare function TargetLimitPostFromJSON(json: any): TargetLimitPost;
export declare function TargetLimitPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetLimitPost;
export declare function TargetLimitPostToJSON(value?: TargetLimitPost | null): any;
