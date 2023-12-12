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
 * Shopify connection options
 * @export
 * @interface ConnectionOptionsShopify
 */
export interface ConnectionOptionsShopify {
    /**
     * Password for the Shopify connection
     * @type {string}
     * @memberof ConnectionOptionsShopify
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsShopify
     */
    type: string;
    /**
     * Username for the Shopify connection
     * @type {string}
     * @memberof ConnectionOptionsShopify
     */
    username?: string;
}
export declare function ConnectionOptionsShopifyFromJSON(json: any): ConnectionOptionsShopify;
export declare function ConnectionOptionsShopifyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsShopify;
export declare function ConnectionOptionsShopifyToJSON(value?: ConnectionOptionsShopify | null): any;
