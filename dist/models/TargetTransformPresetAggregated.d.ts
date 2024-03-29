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
 * One of:
 *   * default: Faraday default aggregated representation
 *   * google_ads: Aggregated upload format for Google Ads
 *
 * If not specified `default` is used.
 * @export
 * @enum {string}
 */
export declare enum TargetTransformPresetAggregated {
    Default = "default",
    GoogleAds = "google_ads"
}
export declare function TargetTransformPresetAggregatedFromJSON(json: any): TargetTransformPresetAggregated;
export declare function TargetTransformPresetAggregatedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetTransformPresetAggregated;
export declare function TargetTransformPresetAggregatedToJSON(value?: TargetTransformPresetAggregated | null): any;
