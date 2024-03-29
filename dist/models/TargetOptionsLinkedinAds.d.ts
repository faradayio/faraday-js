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
 * LinkedIn Ads target options
 * @export
 * @interface TargetOptionsLinkedinAds
 */
export interface TargetOptionsLinkedinAds {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsLinkedinAds
     */
    type: string;
}
export declare function TargetOptionsLinkedinAdsFromJSON(json: any): TargetOptionsLinkedinAds;
export declare function TargetOptionsLinkedinAdsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsLinkedinAds;
export declare function TargetOptionsLinkedinAdsToJSON(value?: TargetOptionsLinkedinAds | null): any;
