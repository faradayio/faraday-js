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
 * Google Cloud SQL (MySQL) dataset options
 * @export
 * @interface DatasetOptionsGcpCloudSqlMysql
 */
export interface DatasetOptionsGcpCloudSqlMysql {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlMysql
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlMysql
     */
    type: string;
}
export declare function DatasetOptionsGcpCloudSqlMysqlFromJSON(json: any): DatasetOptionsGcpCloudSqlMysql;
export declare function DatasetOptionsGcpCloudSqlMysqlFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsGcpCloudSqlMysql;
export declare function DatasetOptionsGcpCloudSqlMysqlToJSON(value?: DatasetOptionsGcpCloudSqlMysql | null): any;
