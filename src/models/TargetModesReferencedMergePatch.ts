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
    TargetReferencedReference,
    TargetReferencedReferenceFromJSON,
    TargetReferencedReferenceFromJSONTyped,
    TargetReferencedReferenceToJSON,
} from './TargetReferencedReference';
import {
    TargetTransformPresetReferenced,
    TargetTransformPresetReferencedFromJSON,
    TargetTransformPresetReferencedFromJSONTyped,
    TargetTransformPresetReferencedToJSON,
} from './TargetTransformPresetReferenced';

/**
 * (Parameters used to PATCH the `TargetModesReferenced` type.)
 * 
 * Suitable for data warehouse integrations. Not supported by options.type = "lookup_api"
 * @export
 * @interface TargetModesReferencedMergePatch
 */
export interface TargetModesReferencedMergePatch {
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesReferencedMergePatch
     */
    mode: string;
    /**
     * 
     * @type {TargetReferencedReference}
     * @memberof TargetModesReferencedMergePatch
     */
    reference?: TargetReferencedReference;
    /**
     * **Deprecated:** use reference instead
     * The referenced dataset ID. This dataset must have a `reference_key_column`.
     * @type {string}
     * @memberof TargetModesReferencedMergePatch
     */
    reference_dataset_id?: string | null;
    /**
     * 
     * @type {TargetTransformPresetReferenced}
     * @memberof TargetModesReferencedMergePatch
     */
    transform_preset?: TargetTransformPresetReferenced | null;
}

export function TargetModesReferencedMergePatchFromJSON(json: any): TargetModesReferencedMergePatch {
    return TargetModesReferencedMergePatchFromJSONTyped(json, false);
}

export function TargetModesReferencedMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetModesReferencedMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mode': json['mode'],
        'reference': !exists(json, 'reference') ? undefined : TargetReferencedReferenceFromJSON(json['reference']),
        'reference_dataset_id': !exists(json, 'reference_dataset_id') ? undefined : json['reference_dataset_id'],
        'transform_preset': !exists(json, 'transform_preset') ? undefined : TargetTransformPresetReferencedFromJSON(json['transform_preset']),
    };
}

export function TargetModesReferencedMergePatchToJSON(value?: TargetModesReferencedMergePatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mode': value.mode,
        'reference': TargetReferencedReferenceToJSON(value.reference),
        'reference_dataset_id': value.reference_dataset_id,
        'transform_preset': TargetTransformPresetReferencedToJSON(value.transform_preset),
    };
}

