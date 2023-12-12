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
 * (Parameters used to PATCH the `TargetOptionsAwsRdsSqlServer` type.)
 *
 * RDS (SQL Server) target options
 * @export
 * @interface TargetOptionsAwsRdsSqlServerMergePatch
 */
export interface TargetOptionsAwsRdsSqlServerMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsRdsSqlServerMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsRdsSqlServerMergePatch
     */
    type: string;
}
export declare function TargetOptionsAwsRdsSqlServerMergePatchFromJSON(json: any): TargetOptionsAwsRdsSqlServerMergePatch;
export declare function TargetOptionsAwsRdsSqlServerMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsAwsRdsSqlServerMergePatch;
export declare function TargetOptionsAwsRdsSqlServerMergePatchToJSON(value?: TargetOptionsAwsRdsSqlServerMergePatch | null): any;
