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
import { TargetTransformPresetHashed } from './TargetTransformPresetHashed';
/**
 * Suitable for digital acquisition use cases. Not supported by options.type = "lookup_api"
 * @export
 * @interface TargetModesHashed
 */
export interface TargetModesHashed {
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesHashed
     */
    mode: string;
    /**
     *
     * @type {TargetTransformPresetHashed}
     * @memberof TargetModesHashed
     */
    transform_preset?: TargetTransformPresetHashed;
}
export declare function TargetModesHashedFromJSON(json: any): TargetModesHashed;
export declare function TargetModesHashedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetModesHashed;
export declare function TargetModesHashedToJSON(value?: TargetModesHashed | null): any;