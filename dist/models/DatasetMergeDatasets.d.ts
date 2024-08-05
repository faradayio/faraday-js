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
 * @interface DatasetMergeDatasets
 */
export interface DatasetMergeDatasets {
    /**
     * The ID of the parent merge dataset.
     * @type {string}
     * @memberof DatasetMergeDatasets
     */
    dataset_id: string;
    /**
     * The column from this dataset used to join with the parent merge dataset.
     * @type {string}
     * @memberof DatasetMergeDatasets
     */
    join_column: string;
}
export declare function DatasetMergeDatasetsFromJSON(json: any): DatasetMergeDatasets;
export declare function DatasetMergeDatasetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetMergeDatasets;
export declare function DatasetMergeDatasetsToJSON(value?: DatasetMergeDatasets | null): any;