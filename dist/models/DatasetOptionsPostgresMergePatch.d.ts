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
 * (Parameters used to PATCH the `DatasetOptionsPostgres` type.)
 *
 * Postgres dataset options
 * @export
 * @interface DatasetOptionsPostgresMergePatch
 */
export interface DatasetOptionsPostgresMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsPostgresMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsPostgresMergePatch
     */
    type: string;
}
export declare function DatasetOptionsPostgresMergePatchFromJSON(json: any): DatasetOptionsPostgresMergePatch;
export declare function DatasetOptionsPostgresMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsPostgresMergePatch;
export declare function DatasetOptionsPostgresMergePatchToJSON(value?: DatasetOptionsPostgresMergePatch | null): any;
