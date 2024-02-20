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
 * Suitable for geo-targeted ad campaigns. Not supported by options.type = "lookup_api".
 * @export
 * @interface TargetModesAggregated
 */
export interface TargetModesAggregated {
    /**
     *
     * @type {TargetAggregateGeographic}
     * @memberof TargetModesAggregated
     */
    aggregate: TargetAggregateGeographic;
    /**
     * Include the geometry of the geographic area in the target output.
     * @type {boolean}
     * @memberof TargetModesAggregated
     */
    include_geometry?: boolean;
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesAggregated
     */
    mode: string;
    /**
     *
     * @type {TargetTransformPresetAggregated}
     * @memberof TargetModesAggregated
     */
    transform_preset?: TargetTransformPresetAggregated;
}
export declare function TargetModesAggregatedFromJSON(json: any): TargetModesAggregated;
export declare function TargetModesAggregatedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetModesAggregated;
export declare function TargetModesAggregatedToJSON(value?: TargetModesAggregated | null): any;