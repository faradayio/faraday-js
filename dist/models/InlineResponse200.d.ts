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
 * A target preview response.
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * A human-readable status message.
     * @type {string}
     * @memberof InlineResponse200
     */
    message: string;
    /**
     * The Target UUID.
     * @type {string}
     * @memberof InlineResponse200
     */
    target_id: string;
}
export declare function InlineResponse200FromJSON(json: any): InlineResponse200;
export declare function InlineResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse200;
export declare function InlineResponse200ToJSON(value?: InlineResponse200 | null): any;
