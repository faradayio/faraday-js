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
 * (Parameters used to PATCH the `TargetOptionsAwsAuroraMysql` type.)
 *
 * Aurora (MySQL) target options
 * @export
 * @interface TargetOptionsAwsAuroraMysqlMergePatch
 */
export interface TargetOptionsAwsAuroraMysqlMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsAuroraMysqlMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsAuroraMysqlMergePatch
     */
    type: string;
}
export declare function TargetOptionsAwsAuroraMysqlMergePatchFromJSON(json: any): TargetOptionsAwsAuroraMysqlMergePatch;
export declare function TargetOptionsAwsAuroraMysqlMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsAwsAuroraMysqlMergePatch;
export declare function TargetOptionsAwsAuroraMysqlMergePatchToJSON(value?: TargetOptionsAwsAuroraMysqlMergePatch | null): any;
