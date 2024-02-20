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
 * RDS (SQL Server) dataset options
 * @export
 * @interface DatasetOptionsAwsRdsSqlServer
 */
export interface DatasetOptionsAwsRdsSqlServer {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsRdsSqlServer
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsRdsSqlServer
     */
    type: string;
}
export declare function DatasetOptionsAwsRdsSqlServerFromJSON(json: any): DatasetOptionsAwsRdsSqlServer;
export declare function DatasetOptionsAwsRdsSqlServerFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsAwsRdsSqlServer;
export declare function DatasetOptionsAwsRdsSqlServerToJSON(value?: DatasetOptionsAwsRdsSqlServer | null): any;