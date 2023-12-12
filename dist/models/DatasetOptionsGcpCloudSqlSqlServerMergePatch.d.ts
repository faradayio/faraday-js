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
 * (Parameters used to PATCH the `DatasetOptionsGcpCloudSqlSqlServer` type.)
 *
 * Google Cloud SQL (SQL Server) dataset options
 * @export
 * @interface DatasetOptionsGcpCloudSqlSqlServerMergePatch
 */
export interface DatasetOptionsGcpCloudSqlSqlServerMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlSqlServerMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlSqlServerMergePatch
     */
    type: string;
}
export declare function DatasetOptionsGcpCloudSqlSqlServerMergePatchFromJSON(json: any): DatasetOptionsGcpCloudSqlSqlServerMergePatch;
export declare function DatasetOptionsGcpCloudSqlSqlServerMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsGcpCloudSqlSqlServerMergePatch;
export declare function DatasetOptionsGcpCloudSqlSqlServerMergePatchToJSON(value?: DatasetOptionsGcpCloudSqlSqlServerMergePatch | null): any;
