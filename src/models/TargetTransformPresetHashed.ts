/* tslint:disable */
/* eslint-disable */
/**
 * Faraday REST API
 * The [Faraday](https://faraday.ai) SDK makes it easy to predict customer behavior using a simple API.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * One of:
 *   * default: Faraday default hashed representation
 *   * linkedin: Hashed email upload format for Linkedin
 * 
 * If not specified `default` is used.
 * @export
 * @enum {string}
 */
export enum TargetTransformPresetHashed {
    Default = 'default',
    Linkedin = 'linkedin'
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

