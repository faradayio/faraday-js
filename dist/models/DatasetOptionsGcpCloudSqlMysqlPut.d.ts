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
 * (Parameters used to PUT a value of the `DatasetOptionsGcpCloudSqlMysql` type.)
 *
 * Google Cloud SQL (MySQL) dataset options
 * @export
 * @interface DatasetOptionsGcpCloudSqlMysqlPut
 */
export interface DatasetOptionsGcpCloudSqlMysqlPut {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlMysqlPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlMysqlPut
     */
    type: string;
}
export declare function DatasetOptionsGcpCloudSqlMysqlPutFromJSON(json: any): DatasetOptionsGcpCloudSqlMysqlPut;
export declare function DatasetOptionsGcpCloudSqlMysqlPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsGcpCloudSqlMysqlPut;
export declare function DatasetOptionsGcpCloudSqlMysqlPutToJSON(value?: DatasetOptionsGcpCloudSqlMysqlPut | null): any;
