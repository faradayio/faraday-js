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
 * Redshift Serverless dataset options
 * @export
 * @interface DatasetOptionsAwsRedshiftServerless
 */
export interface DatasetOptionsAwsRedshiftServerless {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsRedshiftServerless
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsRedshiftServerless
     */
    type: string;
}
export declare function DatasetOptionsAwsRedshiftServerlessFromJSON(json: any): DatasetOptionsAwsRedshiftServerless;
export declare function DatasetOptionsAwsRedshiftServerlessFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsAwsRedshiftServerless;
export declare function DatasetOptionsAwsRedshiftServerlessToJSON(value?: DatasetOptionsAwsRedshiftServerless | null): any;