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
import { DatasetOptionsMergeMerge } from './DatasetOptionsMergeMerge';
/**
 * (Parameters used to POST a new value of the `DatasetOptionsMerge` type.)
 *
 * Merge Dataset dataset options
 * @export
 * @interface DatasetOptionsMergePost
 */
export interface DatasetOptionsMergePost {
    /**
     * Which datasets should be merged, and what is the join column
     * @type {Array<DatasetOptionsMergeMerge>}
     * @memberof DatasetOptionsMergePost
     */
    merge: Array<DatasetOptionsMergeMerge>;
    /**
     * If true, automatically move identity_sets, output_to_streams, and output_to_traits from input source tables to the merge dataset.
     * @type {boolean}
     * @memberof DatasetOptionsMergePost
     */
    migrate?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsMergePost
     */
    type: string;
}
export declare function DatasetOptionsMergePostFromJSON(json: any): DatasetOptionsMergePost;
export declare function DatasetOptionsMergePostFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsMergePost;
export declare function DatasetOptionsMergePostToJSON(value?: DatasetOptionsMergePost | null): any;
