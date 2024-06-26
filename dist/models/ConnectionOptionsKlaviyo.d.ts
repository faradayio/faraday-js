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
 * Klaviyo connection options
 * @export
 * @interface ConnectionOptionsKlaviyo
 */
export interface ConnectionOptionsKlaviyo {
    /**
     * The public API key associated with your account. Also referred to as the Site ID.
     * @type {string}
     * @memberof ConnectionOptionsKlaviyo
     */
    api_key: string;
    /**
     * A private API key associated with your account. These can be generated as needed using Klaviyo's settings pages.
     * @type {string}
     * @memberof ConnectionOptionsKlaviyo
     */
    private_api_key: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsKlaviyo
     */
    type: string;
}
export declare function ConnectionOptionsKlaviyoFromJSON(json: any): ConnectionOptionsKlaviyo;
export declare function ConnectionOptionsKlaviyoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsKlaviyo;
export declare function ConnectionOptionsKlaviyoToJSON(value?: ConnectionOptionsKlaviyo | null): any;
