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
 * (Parameters used to PUT a value of the `ConnectionOptionsLinkedinAds` type.)
 *
 * LinkedIn Ads connection options
 * @export
 * @interface ConnectionOptionsLinkedinAdsPut
 */
export interface ConnectionOptionsLinkedinAdsPut {
    /**
     * Password for the LinkedIn Ads connection
     * @type {string}
     * @memberof ConnectionOptionsLinkedinAdsPut
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsLinkedinAdsPut
     */
    type: string;
    /**
     * Username for the LinkedIn Ads connection
     * @type {string}
     * @memberof ConnectionOptionsLinkedinAdsPut
     */
    username?: string;
}
export declare function ConnectionOptionsLinkedinAdsPutFromJSON(json: any): ConnectionOptionsLinkedinAdsPut;
export declare function ConnectionOptionsLinkedinAdsPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsLinkedinAdsPut;
export declare function ConnectionOptionsLinkedinAdsPutToJSON(value?: ConnectionOptionsLinkedinAdsPut | null): any;
