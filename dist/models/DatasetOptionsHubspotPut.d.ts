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
 * (Parameters used to PUT a value of the `DatasetOptionsHubspot` type.)
 *
 * HubSpot dataset options
 * @export
 * @interface DatasetOptionsHubspotPut
 */
export interface DatasetOptionsHubspotPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsHubspotPut
     */
    type: string;
}
export declare function DatasetOptionsHubspotPutFromJSON(json: any): DatasetOptionsHubspotPut;
export declare function DatasetOptionsHubspotPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsHubspotPut;
export declare function DatasetOptionsHubspotPutToJSON(value?: DatasetOptionsHubspotPut | null): any;
