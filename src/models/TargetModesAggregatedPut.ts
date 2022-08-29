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
 * (Parameters used to PUT a value of the `TargetModesAggregated` type.)
 * 
 * Aggregated representation (geographic). Suitable for geo-targeted ad campaigns.
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
}

export function TargetModesAggregatedPutFromJSON(json: any): TargetModesAggregatedPut {
    return TargetModesAggregatedPutFromJSONTyped(json, false);
}

export function TargetModesAggregatedPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetModesAggregatedPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aggregate': TargetAggregateGeographicFromJSON(json['aggregate']),
        'mode': json['mode'],
    };
}

export function TargetModesAggregatedPutToJSON(value?: TargetModesAggregatedPut | null): any {
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

