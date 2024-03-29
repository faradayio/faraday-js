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
 * Klaviyo dataset options
 * @export
 * @interface DatasetOptionsKlaviyo
 */
export interface DatasetOptionsKlaviyo {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsKlaviyo
     */
    type: string;
}
export declare function DatasetOptionsKlaviyoFromJSON(json: any): DatasetOptionsKlaviyo;
export declare function DatasetOptionsKlaviyoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsKlaviyo;
export declare function DatasetOptionsKlaviyoToJSON(value?: DatasetOptionsKlaviyo | null): any;
