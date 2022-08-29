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

/**
 * (Parameters used to PATCH the `TargetModesAggregated` type.)
 * 
 * Aggregated representation (geographic). Suitable for geo-targeted ad campaigns.
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
    };
}

