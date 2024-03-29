/* tslint:disable */
/* eslint-disable */
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
 *   * default: Faraday default hashed representation
 *   * linkedin: Hashed upload format for Linkedin
 *   * taboola: Hashed upload format for Taboola
 *   * snapchat: Hashed upload format for Snapchat
 *   * tiktok: Hashed upload format for Tiktok
 *   * pinterest: Hashed upload format for Pinterest
 *   * youtube: Hashed upload format for Youtube
 *   * google_ads: Hashed upload format for Google Ads
 *   * facebook: Hashed upload format for Facebook
 * 
 * If not specified `default` is used.
 * @export
 * @enum {string}
 */
export enum TargetTransformPresetHashed {
    Default = 'default',
    Linkedin = 'linkedin',
    Taboola = 'taboola',
    Snapchat = 'snapchat',
    Tiktok = 'tiktok',
    Pinterest = 'pinterest',
    Youtube = 'youtube',
    GoogleAds = 'google_ads',
    Facebook = 'facebook'
}

export function TargetTransformPresetHashedFromJSON(json: any): TargetTransformPresetHashed {
    return TargetTransformPresetHashedFromJSONTyped(json, false);
}

export function TargetTransformPresetHashedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetTransformPresetHashed {
    return json as TargetTransformPresetHashed;
}

export function TargetTransformPresetHashedToJSON(value?: TargetTransformPresetHashed | null): any {
    return value as any;
}

