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
    ResourceStatus,
    ResourceStatusFromJSON,
    ResourceStatusFromJSONTyped,
    ResourceStatusToJSON,
} from './ResourceStatus';

/**
 * Fields shared between all resource types.
 * @export
 * @interface Resource
 */
export interface Resource {
    /**
     * When this resource was created.
     * @type {Date}
     * @memberof Resource
     */
    created_at: Date;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Resource
     */
    id: string;
    /**
     * The last time this resource successfully built.
     * @type {Date}
     * @memberof Resource
     */
    last_updated_output_at?: Date;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof Resource
     */
    resource_type: string;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof Resource
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {Date}
     * @memberof Resource
     */
    status_changed_at?: Date;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof Resource
     */
    status_error?: string;
    /**
     * When this resource was last updated.
     * @type {Date}
     * @memberof Resource
     */
    updated_at: Date;
}

export function ResourceFromJSON(json: any): Resource {
    return ResourceFromJSONTyped(json, false);
}

export function ResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Resource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'created_at': (new Date(json['created_at'])),
        'id': json['id'],
        'last_updated_output_at': !exists(json, 'last_updated_output_at') ? undefined : (new Date(json['last_updated_output_at'])),
        'resource_type': json['resource_type'],
        'status': ResourceStatusFromJSON(json['status']),
        'status_changed_at': !exists(json, 'status_changed_at') ? undefined : (new Date(json['status_changed_at'])),
        'status_error': !exists(json, 'status_error') ? undefined : json['status_error'],
        'updated_at': (new Date(json['updated_at'])),
    };
}

export function ResourceToJSON(value?: Resource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_at': (value.created_at.toISOString()),
        'id': value.id,
        'last_updated_output_at': value.last_updated_output_at === undefined ? undefined : (value.last_updated_output_at.toISOString()),
        'resource_type': value.resource_type,
        'status': ResourceStatusToJSON(value.status),
        'status_changed_at': value.status_changed_at === undefined ? undefined : (value.status_changed_at.toISOString()),
        'status_error': value.status_error,
        'updated_at': (value.updated_at.toISOString()),
    };
}

