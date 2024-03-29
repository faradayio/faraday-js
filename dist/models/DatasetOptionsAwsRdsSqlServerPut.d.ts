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
 * (Parameters used to PUT a value of the `DatasetOptionsAwsRdsSqlServer` type.)
 *
 * RDS (SQL Server) dataset options
 * @export
 * @interface DatasetOptionsAwsRdsSqlServerPut
 */
export interface DatasetOptionsAwsRdsSqlServerPut {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsRdsSqlServerPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsRdsSqlServerPut
     */
    type: string;
}
export declare function DatasetOptionsAwsRdsSqlServerPutFromJSON(json: any): DatasetOptionsAwsRdsSqlServerPut;
export declare function DatasetOptionsAwsRdsSqlServerPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsAwsRdsSqlServerPut;
export declare function DatasetOptionsAwsRdsSqlServerPutToJSON(value?: DatasetOptionsAwsRdsSqlServerPut | null): any;
