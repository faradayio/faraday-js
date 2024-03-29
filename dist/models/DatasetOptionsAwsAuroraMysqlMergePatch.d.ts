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
 * (Parameters used to PATCH the `DatasetOptionsAwsAuroraMysql` type.)
 *
 * Aurora (MySQL) dataset options
 * @export
 * @interface DatasetOptionsAwsAuroraMysqlMergePatch
 */
export interface DatasetOptionsAwsAuroraMysqlMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsAuroraMysqlMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsAuroraMysqlMergePatch
     */
    type: string;
}
export declare function DatasetOptionsAwsAuroraMysqlMergePatchFromJSON(json: any): DatasetOptionsAwsAuroraMysqlMergePatch;
export declare function DatasetOptionsAwsAuroraMysqlMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsAwsAuroraMysqlMergePatch;
export declare function DatasetOptionsAwsAuroraMysqlMergePatchToJSON(value?: DatasetOptionsAwsAuroraMysqlMergePatch | null): any;
