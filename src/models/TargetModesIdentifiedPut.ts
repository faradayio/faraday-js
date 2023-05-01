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
    TargetAggregateIdentified,
    TargetAggregateIdentifiedFromJSON,
    TargetAggregateIdentifiedFromJSONTyped,
    TargetAggregateIdentifiedToJSON,
} from './TargetAggregateIdentified';
import {
    TargetTransformPresetIdentified,
    TargetTransformPresetIdentifiedFromJSON,
    TargetTransformPresetIdentifiedFromJSONTyped,
    TargetTransformPresetIdentifiedToJSON,
} from './TargetTransformPresetIdentified';

/**
 * (Parameters used to PUT a value of the `TargetModesIdentified` type.)
 * 
 * Suitable for direct mail and canvassing.
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
    /**
     * 
     * @type {TargetTransformPresetIdentified}
     * @memberof TargetModesIdentifiedPut
     */
    transform_preset?: TargetTransformPresetIdentified;
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
        'transform_preset': !exists(json, 'transform_preset') ? undefined : TargetTransformPresetIdentifiedFromJSON(json['transform_preset']),
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
        'transform_preset': TargetTransformPresetIdentifiedToJSON(value.transform_preset),
    };
}

