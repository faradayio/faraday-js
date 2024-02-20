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
 * (Parameters used to PUT a value of the `TargetOptionsAwsRdsMysql` type.)
 *
 * RDS (MySQL) target options
 * @export
 * @interface TargetOptionsAwsRdsMysqlPut
 */
export interface TargetOptionsAwsRdsMysqlPut {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsRdsMysqlPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsRdsMysqlPut
     */
    type: string;
}
export declare function TargetOptionsAwsRdsMysqlPutFromJSON(json: any): TargetOptionsAwsRdsMysqlPut;
export declare function TargetOptionsAwsRdsMysqlPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsAwsRdsMysqlPut;
export declare function TargetOptionsAwsRdsMysqlPutToJSON(value?: TargetOptionsAwsRdsMysqlPut | null): any;