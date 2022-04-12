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
    createdAt: Date;
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
    maxCount?: number;
    /**
     * Max value for this cohort's config
     * @type {number}
     * @memberof Cohort
     */
    maxValue?: number;
    /**
     * Min count for this cohort's config
     * @type {number}
     * @memberof Cohort
     */
    minCount?: number;
    /**
     * Min value for this cohort's config
     * @type {number}
     * @memberof Cohort
     */
    minValue?: number;
    /**
     * Human-readable label for this cohort.
     * @type {string}
     * @memberof Cohort
     */
    name?: string;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof Cohort
     */
    resourceType: string;
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
    statusChangedAt?: Date;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof Cohort
     */
    statusError?: string;
    /**
     * The `name` field of the stream from which to build this cohort.
     * @type {string}
     * @memberof Cohort
     */
    streamName: string;
    /**
     * When this resource was last updated.
     * @type {Date}
     * @memberof Cohort
     */
    updatedAt: Date;
}

export function CohortFromJSON(json: any): Cohort {
    return CohortFromJSONTyped(json, false);
}

export function CohortFromJSONTyped(json: any, ignoreDiscriminator: boolean): Cohort {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': (new Date(json['created_at'])),
        'id': json['id'],
        'maxCount': !exists(json, 'max_count') ? undefined : json['max_count'],
        'maxValue': !exists(json, 'max_value') ? undefined : json['max_value'],
        'minCount': !exists(json, 'min_count') ? undefined : json['min_count'],
        'minValue': !exists(json, 'min_value') ? undefined : json['min_value'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'resourceType': json['resource_type'],
        'status': ResourceStatusFromJSON(json['status']),
        'statusChangedAt': !exists(json, 'status_changed_at') ? undefined : (new Date(json['status_changed_at'])),
        'statusError': !exists(json, 'status_error') ? undefined : json['status_error'],
        'streamName': json['stream_name'],
        'updatedAt': (new Date(json['updated_at'])),
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
        
        'created_at': (value.createdAt.toISOString()),
        'id': value.id,
        'max_count': value.maxCount,
        'max_value': value.maxValue,
        'min_count': value.minCount,
        'min_value': value.minValue,
        'name': value.name,
        'resource_type': value.resourceType,
        'status': ResourceStatusToJSON(value.status),
        'status_changed_at': value.statusChangedAt === undefined ? undefined : (value.statusChangedAt.toISOString()),
        'status_error': value.statusError,
        'stream_name': value.streamName,
        'updated_at': (value.updatedAt.toISOString()),
    };
}

