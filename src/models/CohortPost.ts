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
    CohortTrait,
    CohortTraitFromJSON,
    CohortTraitFromJSONTyped,
    CohortTraitToJSON,
} from './CohortTrait';
import {
    Recency,
    RecencyFromJSON,
    RecencyFromJSONTyped,
    RecencyToJSON,
} from './Recency';

/**
 * (Parameters used to POST a new value of the `Cohort` type.)
 * 
 * A specific group of people, such as "Customers" or "Subscription customers".
 * @export
 * @interface CohortPost
 */
export interface CohortPost {
    /**
     * Max count for this cohort's config
     * @type {number}
     * @memberof CohortPost
     */
    max_count?: number;
    /**
     * Max value for this cohort's config
     * @type {number}
     * @memberof CohortPost
     */
    max_value?: number;
    /**
     * Min count for this cohort's config
     * @type {number}
     * @memberof CohortPost
     */
    min_count?: number;
    /**
     * Min value for this cohort's config
     * @type {number}
     * @memberof CohortPost
     */
    min_value?: number;
    /**
     * Human-readable label for this cohort.
     * @type {string}
     * @memberof CohortPost
     */
    name?: string;
    /**
     * 
     * @type {Recency}
     * @memberof CohortPost
     */
    recency?: Recency;
    /**
     * The `name` field of the stream from which to build this cohort.
     * @type {string}
     * @memberof CohortPost
     */
    stream_name?: string;
    /**
     * List of traits to filter cohort membership
     * @type {Array<CohortTrait>}
     * @memberof CohortPost
     */
    traits?: Array<CohortTrait>;
}

export function CohortPostFromJSON(json: any): CohortPost {
    return CohortPostFromJSONTyped(json, false);
}

export function CohortPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): CohortPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'max_count': !exists(json, 'max_count') ? undefined : json['max_count'],
        'max_value': !exists(json, 'max_value') ? undefined : json['max_value'],
        'min_count': !exists(json, 'min_count') ? undefined : json['min_count'],
        'min_value': !exists(json, 'min_value') ? undefined : json['min_value'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'recency': !exists(json, 'recency') ? undefined : RecencyFromJSON(json['recency']),
        'stream_name': !exists(json, 'stream_name') ? undefined : json['stream_name'],
        'traits': !exists(json, 'traits') ? undefined : ((json['traits'] as Array<any>).map(CohortTraitFromJSON)),
    };
}

export function CohortPostToJSON(value?: CohortPost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'max_count': value.max_count,
        'max_value': value.max_value,
        'min_count': value.min_count,
        'min_value': value.min_value,
        'name': value.name,
        'recency': RecencyToJSON(value.recency),
        'stream_name': value.stream_name,
        'traits': value.traits === undefined ? undefined : ((value.traits as Array<any>).map(CohortTraitToJSON)),
    };
}

