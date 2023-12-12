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
 * (Parameters used to PUT a value of the `TargetOptionsGcpCloudSqlSqlServer` type.)
 *
 * Google Cloud SQL (SQL Server) target options
 * @export
 * @interface TargetOptionsGcpCloudSqlSqlServerPut
 */
export interface TargetOptionsGcpCloudSqlSqlServerPut {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlSqlServerPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlSqlServerPut
     */
    type: string;
}
export declare function TargetOptionsGcpCloudSqlSqlServerPutFromJSON(json: any): TargetOptionsGcpCloudSqlSqlServerPut;
export declare function TargetOptionsGcpCloudSqlSqlServerPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsGcpCloudSqlSqlServerPut;
export declare function TargetOptionsGcpCloudSqlSqlServerPutToJSON(value?: TargetOptionsGcpCloudSqlSqlServerPut | null): any;
