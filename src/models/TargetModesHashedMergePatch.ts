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
    TargetTransformPresetHashed,
    TargetTransformPresetHashedFromJSON,
    TargetTransformPresetHashedFromJSONTyped,
    TargetTransformPresetHashedToJSON,
} from './TargetTransformPresetHashed';

/**
 * (Parameters used to PATCH the `TargetModesHashed` type.)
 * 
 * Suitable for digital acquisition use cases. Not supported by options.type = "lookup_api"
 * @export
 * @interface TargetModesHashedMergePatch
 */
export interface TargetModesHashedMergePatch {
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesHashedMergePatch
     */
    mode: string;
    /**
     * 
     * @type {TargetTransformPresetHashed}
     * @memberof TargetModesHashedMergePatch
     */
    transform_preset?: TargetTransformPresetHashed | null;
}

export function TargetModesHashedMergePatchFromJSON(json: any): TargetModesHashedMergePatch {
    return TargetModesHashedMergePatchFromJSONTyped(json, false);
}

export function TargetModesHashedMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetModesHashedMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mode': json['mode'],
        'transform_preset': !exists(json, 'transform_preset') ? undefined : TargetTransformPresetHashedFromJSON(json['transform_preset']),
    };
}

export function TargetModesHashedMergePatchToJSON(value?: TargetModesHashedMergePatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mode': value.mode,
        'transform_preset': TargetTransformPresetHashedToJSON(value.transform_preset),
    };
}

