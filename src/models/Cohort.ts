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
    CohortPlaceCondition,
    CohortPlaceConditionFromJSON,
    CohortPlaceConditionFromJSONTyped,
    CohortPlaceConditionToJSON,
} from './CohortPlaceCondition';
import {
    CohortStreamCondition,
    CohortStreamConditionFromJSON,
    CohortStreamConditionFromJSONTyped,
    CohortStreamConditionToJSON,
} from './CohortStreamCondition';
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
     * A Managed Cohort.
     * @type {boolean}
     * @memberof Cohort
     */
    classic?: boolean;
    /**
     * When this resource was created.
     * @type {Date}
     * @memberof Cohort
     */
    created_at: Date;
    /**
     * Whether to show the Cohort in Explore, the map view on https://app.faraday.ai.
     * 
     * This will slow down Cohort builds.
     * @type {boolean}
     * @memberof Cohort
     */
    explore?: boolean;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Cohort
     */
    id: string;
    /**
     * The last time this resource successfully built.
     * @type {Date}
     * @memberof Cohort
     */
    last_updated_output_at?: Date;
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
     * List of places to use to spatially filter Cohort membership.
     * @type {Array<CohortPlaceCondition>}
     * @memberof Cohort
     */
    place_conditions?: Array<CohortPlaceCondition>;
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
     * List of stream properties to filter cohort membership on. The stream properties must be for the same stream set as the cohort `stream_name`.
     * @type {Array<CohortStreamCondition>}
     * @memberof Cohort
     */
    stream_conditions?: Array<CohortStreamCondition>;
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
        
        'classic': !exists(json, 'classic') ? undefined : json['classic'],
        'created_at': (new Date(json['created_at'])),
        'explore': !exists(json, 'explore') ? undefined : json['explore'],
        'id': json['id'],
        'last_updated_output_at': !exists(json, 'last_updated_output_at') ? undefined : (new Date(json['last_updated_output_at'])),
        'max_count': !exists(json, 'max_count') ? undefined : json['max_count'],
        'max_value': !exists(json, 'max_value') ? undefined : json['max_value'],
        'min_count': !exists(json, 'min_count') ? undefined : json['min_count'],
        'min_value': !exists(json, 'min_value') ? undefined : json['min_value'],
        'name': json['name'],
        'place_conditions': !exists(json, 'place_conditions') ? undefined : ((json['place_conditions'] as Array<any>).map(CohortPlaceConditionFromJSON)),
        'population_count': !exists(json, 'population_count') ? undefined : json['population_count'],
        'recency': !exists(json, 'recency') ? undefined : RecencyFromJSON(json['recency']),
        'resource_type': json['resource_type'],
        'status': ResourceStatusFromJSON(json['status']),
        'status_changed_at': !exists(json, 'status_changed_at') ? undefined : (new Date(json['status_changed_at'])),
        'status_error': !exists(json, 'status_error') ? undefined : json['status_error'],
        'stream_conditions': !exists(json, 'stream_conditions') ? undefined : ((json['stream_conditions'] as Array<any>).map(CohortStreamConditionFromJSON)),
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
        
        'classic': value.classic,
        'created_at': (value.created_at.toISOString()),
        'explore': value.explore,
        'id': value.id,
        'last_updated_output_at': value.last_updated_output_at === undefined ? undefined : (value.last_updated_output_at.toISOString()),
        'max_count': value.max_count,
        'max_value': value.max_value,
        'min_count': value.min_count,
        'min_value': value.min_value,
        'name': value.name,
        'place_conditions': value.place_conditions === undefined ? undefined : ((value.place_conditions as Array<any>).map(CohortPlaceConditionToJSON)),
        'population_count': value.population_count,
        'recency': RecencyToJSON(value.recency),
        'resource_type': value.resource_type,
        'status': ResourceStatusToJSON(value.status),
        'status_changed_at': value.status_changed_at === undefined ? undefined : (value.status_changed_at.toISOString()),
        'status_error': value.status_error,
        'stream_conditions': value.stream_conditions === undefined ? undefined : ((value.stream_conditions as Array<any>).map(CohortStreamConditionToJSON)),
        'stream_name': value.stream_name,
        'traits': value.traits === undefined ? undefined : ((value.traits as Array<any>).map(CohortTraitToJSON)),
        'updated_at': (value.updated_at.toISOString()),
    };
}

