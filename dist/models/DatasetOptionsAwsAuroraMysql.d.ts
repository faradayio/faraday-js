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
 * Aurora (MySQL) dataset options
 * @export
 * @interface DatasetOptionsAwsAuroraMysql
 */
export interface DatasetOptionsAwsAuroraMysql {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsAuroraMysql
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsAuroraMysql
     */
    type: string;
}
export declare function DatasetOptionsAwsAuroraMysqlFromJSON(json: any): DatasetOptionsAwsAuroraMysql;
export declare function DatasetOptionsAwsAuroraMysqlFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsAwsAuroraMysql;
export declare function DatasetOptionsAwsAuroraMysqlToJSON(value?: DatasetOptionsAwsAuroraMysql | null): any;