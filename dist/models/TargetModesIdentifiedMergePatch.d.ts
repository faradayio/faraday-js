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
 * (Parameters used to PATCH the `TargetModesIdentified` type.)
 *
 * Suitable for direct mail and canvassing.
 * @export
 * @interface TargetModesIdentifiedMergePatch
 */
export interface TargetModesIdentifiedMergePatch {
    /**
     *
     * @type {TargetAggregateIdentified}
     * @memberof TargetModesIdentifiedMergePatch
     */
    aggregate?: TargetAggregateIdentified;
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesIdentifiedMergePatch
     */
    mode: string;
    /**
     *
     * @type {TargetTransformPresetIdentified}
     * @memberof TargetModesIdentifiedMergePatch
     */
    transform_preset?: TargetTransformPresetIdentified | null;
}
export declare function TargetModesIdentifiedMergePatchFromJSON(json: any): TargetModesIdentifiedMergePatch;
export declare function TargetModesIdentifiedMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetModesIdentifiedMergePatch;
export declare function TargetModesIdentifiedMergePatchToJSON(value?: TargetModesIdentifiedMergePatch | null): any;
