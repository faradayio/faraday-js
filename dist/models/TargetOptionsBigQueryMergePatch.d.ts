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
 * (Parameters used to PATCH the `TargetOptionsBigQuery` type.)
 *
 * BigQuery target options
 * @export
 * @interface TargetOptionsBigQueryMergePatch
 */
export interface TargetOptionsBigQueryMergePatch {
    /**
     * Date-based partitioning allows the data to be <a href ="https://cloud.google.com/bigquery/docs/partitioned-tables#date_timestamp_partitioned_tables">partitioned by date</a>. This will appear as a `fdy_batch_date` column.
     * @type {boolean}
     * @memberof TargetOptionsBigQueryMergePatch
     */
    day_partitioned?: boolean | null;
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsBigQueryMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsBigQueryMergePatch
     */
    type: string;
    /**
     * Currently only supported on Referenced targets for GCP BigQuery, upsert allows Faraday to write multiple times to the same table from different Targets. It will use the reference_key_column on the referenced Dataset.
     * @type {boolean}
     * @memberof TargetOptionsBigQueryMergePatch
     */
    upsert?: boolean | null;
}
export declare function TargetOptionsBigQueryMergePatchFromJSON(json: any): TargetOptionsBigQueryMergePatch;
export declare function TargetOptionsBigQueryMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsBigQueryMergePatch;
export declare function TargetOptionsBigQueryMergePatchToJSON(value?: TargetOptionsBigQueryMergePatch | null): any;