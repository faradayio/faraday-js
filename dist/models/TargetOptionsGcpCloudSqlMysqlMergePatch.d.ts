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
 * (Parameters used to PATCH the `TargetOptionsGcpCloudSqlMysql` type.)
 *
 * Google Cloud SQL (MySQL) target options
 * @export
 * @interface TargetOptionsGcpCloudSqlMysqlMergePatch
 */
export interface TargetOptionsGcpCloudSqlMysqlMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlMysqlMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlMysqlMergePatch
     */
    type: string;
}
export declare function TargetOptionsGcpCloudSqlMysqlMergePatchFromJSON(json: any): TargetOptionsGcpCloudSqlMysqlMergePatch;
export declare function TargetOptionsGcpCloudSqlMysqlMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsGcpCloudSqlMysqlMergePatch;
export declare function TargetOptionsGcpCloudSqlMysqlMergePatchToJSON(value?: TargetOptionsGcpCloudSqlMysqlMergePatch | null): any;
