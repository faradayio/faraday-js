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
 * (Parameters used to PATCH the `DatasetOptionsAzureSqlServer` type.)
 *
 * Azure SQL dataset options
 * @export
 * @interface DatasetOptionsAzureSqlServerMergePatch
 */
export interface DatasetOptionsAzureSqlServerMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAzureSqlServerMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAzureSqlServerMergePatch
     */
    type: string;
}
export declare function DatasetOptionsAzureSqlServerMergePatchFromJSON(json: any): DatasetOptionsAzureSqlServerMergePatch;
export declare function DatasetOptionsAzureSqlServerMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsAzureSqlServerMergePatch;
export declare function DatasetOptionsAzureSqlServerMergePatchToJSON(value?: DatasetOptionsAzureSqlServerMergePatch | null): any;
