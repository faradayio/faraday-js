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
 * (Parameters used to POST a new value of the `TargetOptionsSnowflake` type.)
 *
 * Snowflake target options
 * @export
 * @interface TargetOptionsSnowflakePost
 */
export interface TargetOptionsSnowflakePost {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsSnowflakePost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSnowflakePost
     */
    type: string;
    /**
     * Currently only supported on Referenced targets on GCP BigQuery and Snowflake, upsert allows Faraday to write multiple times to the same table from different Targets. It will use the reference_key_column on the referenced Dataset.
     * @type {boolean}
     * @memberof TargetOptionsSnowflakePost
     */
    upsert?: boolean;
}
export declare function TargetOptionsSnowflakePostFromJSON(json: any): TargetOptionsSnowflakePost;
export declare function TargetOptionsSnowflakePostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsSnowflakePost;
export declare function TargetOptionsSnowflakePostToJSON(value?: TargetOptionsSnowflakePost | null): any;