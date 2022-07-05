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
 * Basing cohort on recency of event
 * @export
 * @interface Recency
 */
export interface Recency {
    /**
     * Event must have occurred no more than N days ago
     * @type {number}
     * @memberof Recency
     */
    max_days?: number;
    /**
     * Event must have occurred at least N days ago
     * @type {number}
     * @memberof Recency
     */
    min_days?: number;
    /**
     * 
     * @type {RecencyOccurrence}
     * @memberof Recency
     */
    occurrence: RecencyOccurrence;
}

export function RecencyFromJSON(json: any): Recency {
    return RecencyFromJSONTyped(json, false);
}

export function RecencyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Recency {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'max_days': !exists(json, 'max_days') ? undefined : json['max_days'],
        'min_days': !exists(json, 'min_days') ? undefined : json['min_days'],
        'occurrence': RecencyOccurrenceFromJSON(json['occurrence']),
    };
}

export function RecencyToJSON(value?: Recency | null): any {
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
