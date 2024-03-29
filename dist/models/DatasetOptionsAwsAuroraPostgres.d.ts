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
 * AWS Aurora Postgres dataset options
 * @export
 * @interface DatasetOptionsAwsAuroraPostgres
 */
export interface DatasetOptionsAwsAuroraPostgres {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsAuroraPostgres
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsAuroraPostgres
     */
    type: string;
}
export declare function DatasetOptionsAwsAuroraPostgresFromJSON(json: any): DatasetOptionsAwsAuroraPostgres;
export declare function DatasetOptionsAwsAuroraPostgresFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsAwsAuroraPostgres;
export declare function DatasetOptionsAwsAuroraPostgresToJSON(value?: DatasetOptionsAwsAuroraPostgres | null): any;
