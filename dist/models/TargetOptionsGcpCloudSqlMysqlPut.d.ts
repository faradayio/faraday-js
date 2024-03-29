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
 * (Parameters used to PUT a value of the `TargetOptionsGcpCloudSqlMysql` type.)
 *
 * Google Cloud SQL (MySQL) target options
 * @export
 * @interface TargetOptionsGcpCloudSqlMysqlPut
 */
export interface TargetOptionsGcpCloudSqlMysqlPut {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlMysqlPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlMysqlPut
     */
    type: string;
}
export declare function TargetOptionsGcpCloudSqlMysqlPutFromJSON(json: any): TargetOptionsGcpCloudSqlMysqlPut;
export declare function TargetOptionsGcpCloudSqlMysqlPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsGcpCloudSqlMysqlPut;
export declare function TargetOptionsGcpCloudSqlMysqlPutToJSON(value?: TargetOptionsGcpCloudSqlMysqlPut | null): any;
