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
 * (Parameters used to PUT a value of the `DatasetOptionsClassic` type.)
 *
 * Classic Faraday Sources dataset options
 * @export
 * @interface DatasetOptionsClassicPut
 */
export interface DatasetOptionsClassicPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsClassicPut
     */
    type: string;
}
export declare function DatasetOptionsClassicPutFromJSON(json: any): DatasetOptionsClassicPut;
export declare function DatasetOptionsClassicPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsClassicPut;
export declare function DatasetOptionsClassicPutToJSON(value?: DatasetOptionsClassicPut | null): any;
