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
import {
    ResourceStatus,
    ResourceStatusFromJSON,
    ResourceStatusFromJSONTyped,
    ResourceStatusToJSON,
} from './ResourceStatus';

/**
 * A specific group of people, such as "Customers" or "Subscription customers".
 * @export
 * @interface Cohort
 */
export interface Cohort {
    /**
     * When this resource was created.
     * @type {Date}
     * @memberof Cohort
     */
    created_at: Date;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Cohort
     */
    id: string;
    /**
     * Max count for this cohort's config
     * @type {number}
     * @memberof Cohort
     */
    max_count?: number;
    /**
     * Max value for this cohort's config
     * @type {number}
     * @memberof Cohort
     */
    max_value?: number;
    /**
     * Min count for this cohort's config
     * @type {number}
     * @memberof Cohort
     */
    min_count?: number;
    /**
     * Min value for this cohort's config
     * @type {number}
     * @memberof Cohort
     */
    min_value?: number;
    /**
     * Human-readable label for this cohort.
     * @type {string}
     * @memberof Cohort
     */
    name: string;
    /**
     * Count of the population.
     * @type {number}
     * @memberof Cohort
     */
    population_count?: number;
    /**
     * 
     * @type {Recency}
     * @memberof Cohort
     */
    recency?: Recency;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof Cohort
     */
    resource_type: string;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof Cohort
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {Date}
     * @memberof Cohort
     */
    status_changed_at?: Date;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof Cohort
     */
    status_error?: string;
    /**
     * The `name` field of the stream from which to build this cohort.
     * @type {string}
     * @memberof Cohort
     */
    stream_name?: string;
    /**
     * List of traits to filter cohort membership
     * @type {Array<CohortTrait>}
     * @memberof Cohort
     */
    traits?: Array<CohortTrait>;
    /**
     * When this resource was last updated.
     * @type {Date}
     * @memberof Cohort
     */
    updated_at: Date;
}

export function CohortFromJSON(json: any): Cohort {
    return CohortFromJSONTyped(json, false);
}

export function CohortFromJSONTyped(json: any, ignoreDiscriminator: boolean): Cohort {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'created_at': (new Date(json['created_at'])),
        'id': json['id'],
        'max_count': !exists(json, 'max_count') ? undefined : json['max_count'],
        'max_value': !exists(json, 'max_value') ? undefined : json['max_value'],
        'min_count': !exists(json, 'min_count') ? undefined : json['min_count'],
        'min_value': !exists(json, 'min_value') ? undefined : json['min_value'],
        'name': json['name'],
        'population_count': !exists(json, 'population_count') ? undefined : json['population_count'],
        'recency': !exists(json, 'recency') ? undefined : RecencyFromJSON(json['recency']),
        'resource_type': json['resource_type'],
        'status': ResourceStatusFromJSON(json['status']),
        'status_changed_at': !exists(json, 'status_changed_at') ? undefined : (new Date(json['status_changed_at'])),
        'status_error': !exists(json, 'status_error') ? undefined : json['status_error'],
        'stream_name': !exists(json, 'stream_name') ? undefined : json['stream_name'],
        'traits': !exists(json, 'traits') ? undefined : ((json['traits'] as Array<any>).map(CohortTraitFromJSON)),
        'updated_at': (new Date(json['updated_at'])),
    };
}

export function CohortToJSON(value?: Cohort | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_at': (value.created_at.toISOString()),
        'id': value.id,
        'max_count': value.max_count,
        'max_value': value.max_value,
        'min_count': value.min_count,
        'min_value': value.min_value,
        'name': value.name,
        'population_count': value.population_count,
        'recency': RecencyToJSON(value.recency),
        'resource_type': value.resource_type,
        'status': ResourceStatusToJSON(value.status),
        'status_changed_at': value.status_changed_at === undefined ? undefined : (value.status_changed_at.toISOString()),
        'status_error': value.status_error,
        'stream_name': value.stream_name,
        'traits': value.traits === undefined ? undefined : ((value.traits as Array<any>).map(CohortTraitToJSON)),
        'updated_at': (value.updated_at.toISOString()),
    };
}

