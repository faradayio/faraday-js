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
 * RDS (SQL Server) target options
 * @export
 * @interface TargetOptionsAwsRdsSqlServer
 */
export interface TargetOptionsAwsRdsSqlServer {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsRdsSqlServer
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsRdsSqlServer
     */
    type: string;
}
export declare function TargetOptionsAwsRdsSqlServerFromJSON(json: any): TargetOptionsAwsRdsSqlServer;
export declare function TargetOptionsAwsRdsSqlServerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsAwsRdsSqlServer;
export declare function TargetOptionsAwsRdsSqlServerToJSON(value?: TargetOptionsAwsRdsSqlServer | null): any;
