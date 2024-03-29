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
 * (Parameters used to PUT a value of the `DatasetOptionsSnowflake` type.)
 *
 * Snowflake dataset options
 * @export
 * @interface DatasetOptionsSnowflakePut
 */
export interface DatasetOptionsSnowflakePut {
    /**
     * If the table was created with case sensitive columns, this setting may be required.
     * @type {boolean}
     * @memberof DatasetOptionsSnowflakePut
     */
    case_sensitive_columns?: boolean;
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsSnowflakePut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSnowflakePut
     */
    type: string;
}
export declare function DatasetOptionsSnowflakePutFromJSON(json: any): DatasetOptionsSnowflakePut;
export declare function DatasetOptionsSnowflakePutFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsSnowflakePut;
export declare function DatasetOptionsSnowflakePutToJSON(value?: DatasetOptionsSnowflakePut | null): any;
