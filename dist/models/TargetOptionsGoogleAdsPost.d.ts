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
 * (Parameters used to POST a new value of the `TargetOptionsGoogleAds` type.)
 *
 * Google Ads target options
 * @export
 * @interface TargetOptionsGoogleAdsPost
 */
export interface TargetOptionsGoogleAdsPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGoogleAdsPost
     */
    type: string;
}
export declare function TargetOptionsGoogleAdsPostFromJSON(json: any): TargetOptionsGoogleAdsPost;
export declare function TargetOptionsGoogleAdsPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsGoogleAdsPost;
export declare function TargetOptionsGoogleAdsPostToJSON(value?: TargetOptionsGoogleAdsPost | null): any;
