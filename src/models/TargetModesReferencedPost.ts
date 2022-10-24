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
/**
 * (Parameters used to POST a new value of the `TargetModesReferenced` type.)
 * 
 * Referenced representation. Suitable for data warehouse integrations.
 * @export
 * @interface TargetModesReferencedPost
 */
export interface TargetModesReferencedPost {
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesReferencedPost
     */
    mode: string;
    /**
     * The referenced dataset ID. This dataset must have a `reference_key_column`.
     * @type {string}
     * @memberof TargetModesReferencedPost
     */
    reference_dataset_id: string;
}

export function TargetModesReferencedPostFromJSON(json: any): TargetModesReferencedPost {
    return TargetModesReferencedPostFromJSONTyped(json, false);
}

export function TargetModesReferencedPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetModesReferencedPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mode': json['mode'],
        'reference_dataset_id': json['reference_dataset_id'],
    };
}

export function TargetModesReferencedPostToJSON(value?: TargetModesReferencedPost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mode': value.mode,
        'reference_dataset_id': value.reference_dataset_id,
    };
}
