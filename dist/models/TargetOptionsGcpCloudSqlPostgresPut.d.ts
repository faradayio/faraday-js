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
 * (Parameters used to PUT a value of the `TargetOptionsGcpCloudSqlPostgres` type.)
 *
 * Google Cloud SQL (Postgres) target options
 * @export
 * @interface TargetOptionsGcpCloudSqlPostgresPut
 */
export interface TargetOptionsGcpCloudSqlPostgresPut {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlPostgresPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlPostgresPut
     */
    type: string;
}
export declare function TargetOptionsGcpCloudSqlPostgresPutFromJSON(json: any): TargetOptionsGcpCloudSqlPostgresPut;
export declare function TargetOptionsGcpCloudSqlPostgresPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsGcpCloudSqlPostgresPut;
export declare function TargetOptionsGcpCloudSqlPostgresPutToJSON(value?: TargetOptionsGcpCloudSqlPostgresPut | null): any;
