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
 * (Parameters used to PATCH the `ConnectionOptionsKlaviyo` type.)
 *
 * Klaviyo connection options
 * @export
 * @interface ConnectionOptionsKlaviyoMergePatch
 */
export interface ConnectionOptionsKlaviyoMergePatch {
    /**
     * API Key for the Klaviyo connection
     * @type {string}
     * @memberof ConnectionOptionsKlaviyoMergePatch
     */
    api_key?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsKlaviyoMergePatch
     */
    type: string;
}
export declare function ConnectionOptionsKlaviyoMergePatchFromJSON(json: any): ConnectionOptionsKlaviyoMergePatch;
export declare function ConnectionOptionsKlaviyoMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsKlaviyoMergePatch;
export declare function ConnectionOptionsKlaviyoMergePatchToJSON(value?: ConnectionOptionsKlaviyoMergePatch | null): any;