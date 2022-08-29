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
 * Aggregated representation (geographic). Suitable for geo-targeted ad campaigns.
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
     * The replication mode
     * @type {string}
     * @memberof TargetModesAggregated
     */
    mode: string;
}

export function TargetModesAggregatedFromJSON(json: any): TargetModesAggregated {
    return TargetModesAggregatedFromJSONTyped(json, false);
}

export function TargetModesAggregatedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetModesAggregated {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aggregate': TargetAggregateGeographicFromJSON(json['aggregate']),
        'mode': json['mode'],
    };
}

export function TargetModesAggregatedToJSON(value?: TargetModesAggregated | null): any {
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

