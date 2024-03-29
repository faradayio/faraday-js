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
    TargetTransformPresetReferenced,
    TargetTransformPresetReferencedFromJSON,
    TargetTransformPresetReferencedFromJSONTyped,
    TargetTransformPresetReferencedToJSON,
} from './TargetTransformPresetReferenced';

/**
 * Suitable for data warehouse integrations. Not supported by options.type = "lookup_api"
 * @export
 * @interface TargetModesReferenced
 */
export interface TargetModesReferenced {
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesReferenced
     */
    mode: string;
    /**
     * The referenced dataset ID. This dataset must have a `reference_key_column`.
     * @type {string}
     * @memberof TargetModesReferenced
     */
    reference_dataset_id: string;
    /**
     * 
     * @type {TargetTransformPresetReferenced}
     * @memberof TargetModesReferenced
     */
    transform_preset?: TargetTransformPresetReferenced;
}

export function TargetModesReferencedFromJSON(json: any): TargetModesReferenced {
    return TargetModesReferencedFromJSONTyped(json, false);
}

export function TargetModesReferencedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetModesReferenced {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mode': json['mode'],
        'reference_dataset_id': json['reference_dataset_id'],
        'transform_preset': !exists(json, 'transform_preset') ? undefined : TargetTransformPresetReferencedFromJSON(json['transform_preset']),
    };
}

export function TargetModesReferencedToJSON(value?: TargetModesReferenced | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mode': value.mode,
        'reference_dataset_id': value.reference_dataset_id,
        'transform_preset': TargetTransformPresetReferencedToJSON(value.transform_preset),
    };
}

