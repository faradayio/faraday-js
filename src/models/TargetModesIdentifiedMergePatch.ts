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
 * (Parameters used to PATCH the `TargetModesIdentified` type.)
 * 
 * Identified representation. Suitable for direct mail and canvassing.
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
}

export function TargetModesIdentifiedMergePatchFromJSON(json: any): TargetModesIdentifiedMergePatch {
    return TargetModesIdentifiedMergePatchFromJSONTyped(json, false);
}

export function TargetModesIdentifiedMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetModesIdentifiedMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aggregate': !exists(json, 'aggregate') ? undefined : TargetAggregateIdentifiedFromJSON(json['aggregate']),
        'mode': json['mode'],
    };
}

export function TargetModesIdentifiedMergePatchToJSON(value?: TargetModesIdentifiedMergePatch | null): any {
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

