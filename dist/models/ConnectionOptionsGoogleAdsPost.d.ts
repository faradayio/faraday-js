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
 * (Parameters used to POST a new value of the `ConnectionOptionsGoogleAds` type.)
 *
 * Google Ads connection options
 * @export
 * @interface ConnectionOptionsGoogleAdsPost
 */
export interface ConnectionOptionsGoogleAdsPost {
    /**
     * Customer ID for the Google Ads connection
     * @type {string}
     * @memberof ConnectionOptionsGoogleAdsPost
     */
    customer_id?: string;
    /**
     * Password for the Google Ads connection
     * @type {string}
     * @memberof ConnectionOptionsGoogleAdsPost
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGoogleAdsPost
     */
    type: string;
    /**
     * Username for the Google Ads connection
     * @type {string}
     * @memberof ConnectionOptionsGoogleAdsPost
     */
    username?: string;
}
export declare function ConnectionOptionsGoogleAdsPostFromJSON(json: any): ConnectionOptionsGoogleAdsPost;
export declare function ConnectionOptionsGoogleAdsPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsGoogleAdsPost;
export declare function ConnectionOptionsGoogleAdsPostToJSON(value?: ConnectionOptionsGoogleAdsPost | null): any;
