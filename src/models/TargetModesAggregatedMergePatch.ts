/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import {
    TargetAggregateGeographic,
    TargetAggregateGeographicFromJSON,
    TargetAggregateGeographicFromJSONTyped,
    TargetAggregateGeographicToJSON,
} from './TargetAggregateGeographic';
import {
    TargetTransformPresetAggregated,
    TargetTransformPresetAggregatedFromJSON,
    TargetTransformPresetAggregatedFromJSONTyped,
    TargetTransformPresetAggregatedToJSON,
} from './TargetTransformPresetAggregated';

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

export function TargetModesAggregatedMergePatchFromJSON(json: any): TargetModesAggregatedMergePatch {
    return TargetModesAggregatedMergePatchFromJSONTyped(json, false);
}

export function TargetModesAggregatedMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetModesAggregatedMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aggregate': !exists(json, 'aggregate') ? undefined : TargetAggregateGeographicFromJSON(json['aggregate']),
        'mode': json['mode'],
        'transform_preset': !exists(json, 'transform_preset') ? undefined : TargetTransformPresetAggregatedFromJSON(json['transform_preset']),
    };
}

export function TargetModesAggregatedMergePatchToJSON(value?: TargetModesAggregatedMergePatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aggregate': TargetAggregateGeographicToJSON(value.aggregate),
        'mode': value.mode,
        'transform_preset': TargetTransformPresetAggregatedToJSON(value.transform_preset),
    };
}

