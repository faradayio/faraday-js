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
 * (Parameters used to PUT a value of the `ConnectionOptionsMerge` type.)
 *
 * Merge Dataset connection options
 * @export
 * @interface ConnectionOptionsMergePut
 */
export interface ConnectionOptionsMergePut {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsMergePut
     */
    type: string;
}
export declare function ConnectionOptionsMergePutFromJSON(json: any): ConnectionOptionsMergePut;
export declare function ConnectionOptionsMergePutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsMergePut;
export declare function ConnectionOptionsMergePutToJSON(value?: ConnectionOptionsMergePut | null): any;