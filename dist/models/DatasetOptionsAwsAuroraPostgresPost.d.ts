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
 * (Parameters used to POST a new value of the `DatasetOptionsAwsAuroraPostgres` type.)
 *
 * AWS Aurora Postgres dataset options
 * @export
 * @interface DatasetOptionsAwsAuroraPostgresPost
 */
export interface DatasetOptionsAwsAuroraPostgresPost {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsAuroraPostgresPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsAuroraPostgresPost
     */
    type: string;
}
export declare function DatasetOptionsAwsAuroraPostgresPostFromJSON(json: any): DatasetOptionsAwsAuroraPostgresPost;
export declare function DatasetOptionsAwsAuroraPostgresPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsAwsAuroraPostgresPost;
export declare function DatasetOptionsAwsAuroraPostgresPostToJSON(value?: DatasetOptionsAwsAuroraPostgresPost | null): any;
