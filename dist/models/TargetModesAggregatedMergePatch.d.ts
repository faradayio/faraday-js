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
import { TargetAggregateGeographic } from './TargetAggregateGeographic';
import { TargetTransformPresetAggregated } from './TargetTransformPresetAggregated';
/**
 * (Parameters used to PATCH the `TargetModesAggregated` type.)
 *
 * Suitable for geo-targeted ad campaigns. Not supported by options.type = "lookup_api".
 * @export
 * @interface TargetModesAggregatedMergePatch
 */
export interface TargetModesAggregatedMergePatch {
    /**
     *
     * @type {TargetAggregateGeographic}
     * @memberof TargetModesAggregatedMergePatch
     */
    aggregate?: TargetAggregateGeographic;
    /**
     * Include the geometry of the geographic area in the target output.
     * @type {boolean}
     * @memberof TargetModesAggregatedMergePatch
     */
    include_geometry?: boolean | null;
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesAggregatedMergePatch
     */
    mode: string;
    /**
     *
     * @type {TargetTransformPresetAggregated}
     * @memberof TargetModesAggregatedMergePatch
     */
    transform_preset?: TargetTransformPresetAggregated | null;
}
export declare function TargetModesAggregatedMergePatchFromJSON(json: any): TargetModesAggregatedMergePatch;
export declare function TargetModesAggregatedMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetModesAggregatedMergePatch;
export declare function TargetModesAggregatedMergePatchToJSON(value?: TargetModesAggregatedMergePatch | null): any;