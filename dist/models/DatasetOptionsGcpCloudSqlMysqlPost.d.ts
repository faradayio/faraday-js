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
 * (Parameters used to POST a new value of the `DatasetOptionsGcpCloudSqlMysql` type.)
 *
 * Google Cloud SQL (MySQL) dataset options
 * @export
 * @interface DatasetOptionsGcpCloudSqlMysqlPost
 */
export interface DatasetOptionsGcpCloudSqlMysqlPost {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlMysqlPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlMysqlPost
     */
    type: string;
}
export declare function DatasetOptionsGcpCloudSqlMysqlPostFromJSON(json: any): DatasetOptionsGcpCloudSqlMysqlPost;
export declare function DatasetOptionsGcpCloudSqlMysqlPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsGcpCloudSqlMysqlPost;
export declare function DatasetOptionsGcpCloudSqlMysqlPostToJSON(value?: DatasetOptionsGcpCloudSqlMysqlPost | null): any;
