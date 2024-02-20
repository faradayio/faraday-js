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
 *   * default: Faraday default identified representation
 *   * linkedin: Plaintext upload format for Linkedin
 *   * youtube: Plaintext upload format for Youtube
 *   * klaviyo: Plaintext upload format for Klaviyo
 *   * segment: Plaintext upload format for Segment
 *   * iterable: Plaintext upload format for Iterable
 *   * poplar: Plaintext upload format for Poplar
 *   * salesforce: Plaintext upload format for Salesforce
 *   * hubspot: Plaintext upload format for Hubspot
 *   * liveramp: Plaintext upload format for LiveRamp
 *
 * If not specified `default` is used.
 * @export
 * @enum {string}
 */
export declare enum TargetTransformPresetIdentified {
    Default = "default",
    Linkedin = "linkedin",
    Youtube = "youtube",
    Klaviyo = "klaviyo",
    Segment = "segment",
    Iterable = "iterable",
    Poplar = "poplar",
    Salesforce = "salesforce",
    Hubspot = "hubspot",
    Liveramp = "liveramp"
}
export declare function TargetTransformPresetIdentifiedFromJSON(json: any): TargetTransformPresetIdentified;
export declare function TargetTransformPresetIdentifiedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetTransformPresetIdentified;
export declare function TargetTransformPresetIdentifiedToJSON(value?: TargetTransformPresetIdentified | null): any;