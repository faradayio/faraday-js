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
 * Google Cloud SQL (MySQL) target options
 * @export
 * @interface TargetOptionsGcpCloudSqlMysql
 */
export interface TargetOptionsGcpCloudSqlMysql {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlMysql
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlMysql
     */
    type: string;
}
export declare function TargetOptionsGcpCloudSqlMysqlFromJSON(json: any): TargetOptionsGcpCloudSqlMysql;
export declare function TargetOptionsGcpCloudSqlMysqlFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsGcpCloudSqlMysql;
export declare function TargetOptionsGcpCloudSqlMysqlToJSON(value?: TargetOptionsGcpCloudSqlMysql | null): any;