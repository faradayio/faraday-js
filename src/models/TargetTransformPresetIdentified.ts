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
 *   * default: Faraday default identified representation
 * 
 * If not specified `default` is used.
 * @export
 * @enum {string}
 */
export enum TargetTransformPresetIdentified {
    Default = 'default'
}

export function TargetTransformPresetIdentifiedFromJSON(json: any): TargetTransformPresetIdentified {
    return TargetTransformPresetIdentifiedFromJSONTyped(json, false);
}

export function TargetTransformPresetIdentifiedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetTransformPresetIdentified {
    return json as TargetTransformPresetIdentified;
}

export function TargetTransformPresetIdentifiedToJSON(value?: TargetTransformPresetIdentified | null): any {
    return value as any;
}

