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
 * Google Cloud SQL (Postgres) dataset options
 * @export
 * @interface DatasetOptionsGcpCloudSqlPostgres
 */
export interface DatasetOptionsGcpCloudSqlPostgres {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlPostgres
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlPostgres
     */
    type: string;
}
export declare function DatasetOptionsGcpCloudSqlPostgresFromJSON(json: any): DatasetOptionsGcpCloudSqlPostgres;
export declare function DatasetOptionsGcpCloudSqlPostgresFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsGcpCloudSqlPostgres;
export declare function DatasetOptionsGcpCloudSqlPostgresToJSON(value?: DatasetOptionsGcpCloudSqlPostgres | null): any;