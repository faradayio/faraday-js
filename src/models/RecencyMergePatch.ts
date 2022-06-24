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
    RecencyOccurrence,
    RecencyOccurrenceFromJSON,
    RecencyOccurrenceFromJSONTyped,
    RecencyOccurrenceToJSON,
} from './RecencyOccurrence';

/**
 * (Parameters used to PATCH the `Recency` type.)
 * 
 * Basing cohort on recency of event
 * @export
 * @interface RecencyMergePatch
 */
export interface RecencyMergePatch {
    /**
     * Event must have occurred no more than N days ago
     * @type {number}
     * @memberof RecencyMergePatch
     */
    max_days?: number | null;
    /**
     * Event must have occurred at least N days ago
     * @type {number}
     * @memberof RecencyMergePatch
     */
    min_days?: number | null;
    /**
     * 
     * @type {RecencyOccurrence}
     * @memberof RecencyMergePatch
     */
    occurrence?: RecencyOccurrence;
}

export function RecencyMergePatchFromJSON(json: any): RecencyMergePatch {
    return RecencyMergePatchFromJSONTyped(json, false);
}

export function RecencyMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecencyMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'max_days': !exists(json, 'max_days') ? undefined : json['max_days'],
        'min_days': !exists(json, 'min_days') ? undefined : json['min_days'],
        'occurrence': !exists(json, 'occurrence') ? undefined : RecencyOccurrenceFromJSON(json['occurrence']),
    };
}

export function RecencyMergePatchToJSON(value?: RecencyMergePatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'max_days': value.max_days,
        'min_days': value.min_days,
        'occurrence': RecencyOccurrenceToJSON(value.occurrence),
    };
}

