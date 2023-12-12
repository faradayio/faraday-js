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
 * (Parameters used to PUT a value of the `TargetModesAggregated` type.)
 *
 * Suitable for geo-targeted ad campaigns. Not supported by options.type = "lookup_api".
 * @export
 * @interface TargetModesAggregatedPut
 */
export interface TargetModesAggregatedPut {
    /**
     *
     * @type {TargetAggregateGeographic}
     * @memberof TargetModesAggregatedPut
     */
    aggregate: TargetAggregateGeographic;
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesAggregatedPut
     */
    mode: string;
    /**
     *
     * @type {TargetTransformPresetAggregated}
     * @memberof TargetModesAggregatedPut
     */
    transform_preset?: TargetTransformPresetAggregated;
}
export declare function TargetModesAggregatedPutFromJSON(json: any): TargetModesAggregatedPut;
export declare function TargetModesAggregatedPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetModesAggregatedPut;
export declare function TargetModesAggregatedPutToJSON(value?: TargetModesAggregatedPut | null): any;
