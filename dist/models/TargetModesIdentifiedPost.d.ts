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
import { TargetAggregateIdentified } from './TargetAggregateIdentified';
import { TargetTransformPresetIdentified } from './TargetTransformPresetIdentified';
/**
 * (Parameters used to POST a new value of the `TargetModesIdentified` type.)
 *
 * Suitable for direct mail and canvassing.
 * @export
 * @interface TargetModesIdentifiedPost
 */
export interface TargetModesIdentifiedPost {
    /**
     *
     * @type {TargetAggregateIdentified}
     * @memberof TargetModesIdentifiedPost
     */
    aggregate: TargetAggregateIdentified;
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesIdentifiedPost
     */
    mode: string;
    /**
     *
     * @type {TargetTransformPresetIdentified}
     * @memberof TargetModesIdentifiedPost
     */
    transform_preset?: TargetTransformPresetIdentified;
}
export declare function TargetModesIdentifiedPostFromJSON(json: any): TargetModesIdentifiedPost;
export declare function TargetModesIdentifiedPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetModesIdentifiedPost;
export declare function TargetModesIdentifiedPostToJSON(value?: TargetModesIdentifiedPost | null): any;
