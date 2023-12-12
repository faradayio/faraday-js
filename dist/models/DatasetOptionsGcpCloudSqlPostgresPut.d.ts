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
 * (Parameters used to PUT a value of the `DatasetOptionsGcpCloudSqlPostgres` type.)
 *
 * Google Cloud SQL (Postgres) dataset options
 * @export
 * @interface DatasetOptionsGcpCloudSqlPostgresPut
 */
export interface DatasetOptionsGcpCloudSqlPostgresPut {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlPostgresPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlPostgresPut
     */
    type: string;
}
export declare function DatasetOptionsGcpCloudSqlPostgresPutFromJSON(json: any): DatasetOptionsGcpCloudSqlPostgresPut;
export declare function DatasetOptionsGcpCloudSqlPostgresPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsGcpCloudSqlPostgresPut;
export declare function DatasetOptionsGcpCloudSqlPostgresPutToJSON(value?: DatasetOptionsGcpCloudSqlPostgresPut | null): any;
