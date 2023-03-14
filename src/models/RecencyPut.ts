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
    RecencyOccurrence,
    RecencyOccurrenceFromJSON,
    RecencyOccurrenceFromJSONTyped,
    RecencyOccurrenceToJSON,
} from './RecencyOccurrence';

/**
 * (Parameters used to PUT a value of the `Recency` type.)
 * 
 * Basing cohort on recency of event
 * @export
 * @interface RecencyPut
 */
export interface RecencyPut {
    /**
     * Event must have occurred no more than N days ago
     * @type {number}
     * @memberof RecencyPut
     */
    max_days?: number;
    /**
     * Event must have occurred at least N days ago
     * @type {number}
     * @memberof RecencyPut
     */
    min_days?: number;
    /**
     * 
     * @type {RecencyOccurrence}
     * @memberof RecencyPut
     */
    occurrence: RecencyOccurrence;
}

export function RecencyPutFromJSON(json: any): RecencyPut {
    return RecencyPutFromJSONTyped(json, false);
}

export function RecencyPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecencyPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'max_days': !exists(json, 'max_days') ? undefined : json['max_days'],
        'min_days': !exists(json, 'min_days') ? undefined : json['min_days'],
        'occurrence': RecencyOccurrenceFromJSON(json['occurrence']),
    };
}

export function RecencyPutToJSON(value?: RecencyPut | null): any {
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

