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
 * (Parameters used to PUT a value of the `DatasetOptionsGcpCloudSqlSqlServer` type.)
 *
 * Google Cloud SQL (SQL Server) dataset options
 * @export
 * @interface DatasetOptionsGcpCloudSqlSqlServerPut
 */
export interface DatasetOptionsGcpCloudSqlSqlServerPut {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlSqlServerPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlSqlServerPut
     */
    type: string;
}
export declare function DatasetOptionsGcpCloudSqlSqlServerPutFromJSON(json: any): DatasetOptionsGcpCloudSqlSqlServerPut;
export declare function DatasetOptionsGcpCloudSqlSqlServerPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsGcpCloudSqlSqlServerPut;
export declare function DatasetOptionsGcpCloudSqlSqlServerPutToJSON(value?: DatasetOptionsGcpCloudSqlSqlServerPut | null): any;
