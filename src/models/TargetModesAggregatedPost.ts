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
 * (Parameters used to POST a new value of the `TargetModesAggregated` type.)
 * 
 * Aggregated representation (geographic). Suitable for geo-targeted ad campaigns.
 * @export
 * @interface TargetModesAggregatedPost
 */
export interface TargetModesAggregatedPost {
    /**
     * 
     * @type {TargetAggregateGeographic}
     * @memberof TargetModesAggregatedPost
     */
    aggregate: TargetAggregateGeographic;
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesAggregatedPost
     */
    mode: string;
    /**
     * 
     * @type {TargetTransformPresetAggregated}
     * @memberof TargetModesAggregatedPost
     */
    transform_preset?: TargetTransformPresetAggregated;
}

export function TargetModesAggregatedPostFromJSON(json: any): TargetModesAggregatedPost {
    return TargetModesAggregatedPostFromJSONTyped(json, false);
}

export function TargetModesAggregatedPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetModesAggregatedPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aggregate': TargetAggregateGeographicFromJSON(json['aggregate']),
        'mode': json['mode'],
        'transform_preset': !exists(json, 'transform_preset') ? undefined : TargetTransformPresetAggregatedFromJSON(json['transform_preset']),
    };
}

export function TargetModesAggregatedPostToJSON(value?: TargetModesAggregatedPost | null): any {
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

