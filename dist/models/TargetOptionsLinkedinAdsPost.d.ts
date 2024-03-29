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
 * (Parameters used to POST a new value of the `TargetOptionsLinkedinAds` type.)
 *
 * LinkedIn Ads target options
 * @export
 * @interface TargetOptionsLinkedinAdsPost
 */
export interface TargetOptionsLinkedinAdsPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsLinkedinAdsPost
     */
    type: string;
}
export declare function TargetOptionsLinkedinAdsPostFromJSON(json: any): TargetOptionsLinkedinAdsPost;
export declare function TargetOptionsLinkedinAdsPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsLinkedinAdsPost;
export declare function TargetOptionsLinkedinAdsPostToJSON(value?: TargetOptionsLinkedinAdsPost | null): any;
