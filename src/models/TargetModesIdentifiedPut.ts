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
    TargetAggregateIdentified,
    TargetAggregateIdentifiedFromJSON,
    TargetAggregateIdentifiedFromJSONTyped,
    TargetAggregateIdentifiedToJSON,
} from './TargetAggregateIdentified';

/**
 * (Parameters used to PUT a value of the `TargetModesIdentified` type.)
 * 
 * Identified representation. Suitable for direct mail and canvassing.
 * @export
 * @interface TargetModesIdentifiedPut
 */
export interface TargetModesIdentifiedPut {
    /**
     * 
     * @type {TargetAggregateIdentified}
     * @memberof TargetModesIdentifiedPut
     */
    aggregate: TargetAggregateIdentified;
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesIdentifiedPut
     */
    mode: string;
}

export function TargetModesIdentifiedPutFromJSON(json: any): TargetModesIdentifiedPut {
    return TargetModesIdentifiedPutFromJSONTyped(json, false);
}

export function TargetModesIdentifiedPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetModesIdentifiedPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aggregate': TargetAggregateIdentifiedFromJSON(json['aggregate']),
        'mode': json['mode'],
    };
}

export function TargetModesIdentifiedPutToJSON(value?: TargetModesIdentifiedPut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aggregate': TargetAggregateIdentifiedToJSON(value.aggregate),
        'mode': value.mode,
    };
}

