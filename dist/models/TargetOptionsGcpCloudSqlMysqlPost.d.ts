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
 * (Parameters used to POST a new value of the `TargetOptionsGcpCloudSqlMysql` type.)
 *
 * Google Cloud SQL (MySQL) target options
 * @export
 * @interface TargetOptionsGcpCloudSqlMysqlPost
 */
export interface TargetOptionsGcpCloudSqlMysqlPost {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlMysqlPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlMysqlPost
     */
    type: string;
}
export declare function TargetOptionsGcpCloudSqlMysqlPostFromJSON(json: any): TargetOptionsGcpCloudSqlMysqlPost;
export declare function TargetOptionsGcpCloudSqlMysqlPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsGcpCloudSqlMysqlPost;
export declare function TargetOptionsGcpCloudSqlMysqlPostToJSON(value?: TargetOptionsGcpCloudSqlMysqlPost | null): any;
