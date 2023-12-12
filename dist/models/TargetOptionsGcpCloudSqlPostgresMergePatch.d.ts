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
 * (Parameters used to PATCH the `TargetOptionsGcpCloudSqlPostgres` type.)
 *
 * Google Cloud SQL (Postgres) target options
 * @export
 * @interface TargetOptionsGcpCloudSqlPostgresMergePatch
 */
export interface TargetOptionsGcpCloudSqlPostgresMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlPostgresMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlPostgresMergePatch
     */
    type: string;
}
export declare function TargetOptionsGcpCloudSqlPostgresMergePatchFromJSON(json: any): TargetOptionsGcpCloudSqlPostgresMergePatch;
export declare function TargetOptionsGcpCloudSqlPostgresMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsGcpCloudSqlPostgresMergePatch;
export declare function TargetOptionsGcpCloudSqlPostgresMergePatchToJSON(value?: TargetOptionsGcpCloudSqlPostgresMergePatch | null): any;
