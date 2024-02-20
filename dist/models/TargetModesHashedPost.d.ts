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
 * (Parameters used to POST a new value of the `TargetModesHashed` type.)
 *
 * Suitable for digital acquisition use cases. Not supported by options.type = "lookup_api"
 * @export
 * @interface TargetModesHashedPost
 */
export interface TargetModesHashedPost {
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesHashedPost
     */
    mode: string;
    /**
     *
     * @type {TargetTransformPresetHashed}
     * @memberof TargetModesHashedPost
     */
    transform_preset?: TargetTransformPresetHashed;
}
export declare function TargetModesHashedPostFromJSON(json: any): TargetModesHashedPost;
export declare function TargetModesHashedPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetModesHashedPost;
export declare function TargetModesHashedPostToJSON(value?: TargetModesHashedPost | null): any;