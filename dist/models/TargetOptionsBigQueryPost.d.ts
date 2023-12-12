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
 * (Parameters used to POST a new value of the `TargetOptionsBigQuery` type.)
 *
 * BigQuery target options
 * @export
 * @interface TargetOptionsBigQueryPost
 */
export interface TargetOptionsBigQueryPost {
    /**
     * Date-based partitioning allows the data to be <a href ="https://cloud.google.com/bigquery/docs/partitioned-tables#date_timestamp_partitioned_tables">partitioned by date</a>. This will appear as a `fdy_batch_date` column.
     * @type {boolean}
     * @memberof TargetOptionsBigQueryPost
     */
    day_partitioned?: boolean;
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsBigQueryPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsBigQueryPost
     */
    type: string;
    /**
     * Currently only supported on Referenced targets for GCP BigQuery, upsert allows Faraday to write multiple times to the same table from different Targets. It will use the reference_key_column on the referenced Dataset.
     * @type {boolean}
     * @memberof TargetOptionsBigQueryPost
     */
    upsert?: boolean;
}
export declare function TargetOptionsBigQueryPostFromJSON(json: any): TargetOptionsBigQueryPost;
export declare function TargetOptionsBigQueryPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsBigQueryPost;
export declare function TargetOptionsBigQueryPostToJSON(value?: TargetOptionsBigQueryPost | null): any;
