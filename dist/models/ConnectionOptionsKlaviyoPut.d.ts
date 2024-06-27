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
 * (Parameters used to PUT a value of the `ConnectionOptionsKlaviyo` type.)
 *
 * Klaviyo connection options
 * @export
 * @interface ConnectionOptionsKlaviyoPut
 */
export interface ConnectionOptionsKlaviyoPut {
    /**
     * The public API key associated with your account. Also referred to as the Site ID.
     * @type {string}
     * @memberof ConnectionOptionsKlaviyoPut
     */
    api_key?: string;
    /**
     * A private API key associated with your account. These can be generated as needed using Klaviyo's settings pages.
     * @type {string}
     * @memberof ConnectionOptionsKlaviyoPut
     */
    private_api_key?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsKlaviyoPut
     */
    type: string;
}
export declare function ConnectionOptionsKlaviyoPutFromJSON(json: any): ConnectionOptionsKlaviyoPut;
export declare function ConnectionOptionsKlaviyoPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsKlaviyoPut;
export declare function ConnectionOptionsKlaviyoPutToJSON(value?: ConnectionOptionsKlaviyoPut | null): any;
