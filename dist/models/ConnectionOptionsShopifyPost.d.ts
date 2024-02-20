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
 * (Parameters used to POST a new value of the `ConnectionOptionsShopify` type.)
 *
 * Shopify connection options
 * @export
 * @interface ConnectionOptionsShopifyPost
 */
export interface ConnectionOptionsShopifyPost {
    /**
     * Password for the Shopify connection
     * @type {string}
     * @memberof ConnectionOptionsShopifyPost
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsShopifyPost
     */
    type: string;
    /**
     * Username for the Shopify connection
     * @type {string}
     * @memberof ConnectionOptionsShopifyPost
     */
    username?: string;
}
export declare function ConnectionOptionsShopifyPostFromJSON(json: any): ConnectionOptionsShopifyPost;
export declare function ConnectionOptionsShopifyPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsShopifyPost;
export declare function ConnectionOptionsShopifyPostToJSON(value?: ConnectionOptionsShopifyPost | null): any;