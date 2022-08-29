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
    ConnectionOptions,
    ConnectionOptionsFromJSON,
    ConnectionOptionsFromJSONTyped,
    ConnectionOptionsToJSON,
} from './ConnectionOptions';
import {
    ContentsRow,
    ContentsRowFromJSON,
    ContentsRowFromJSONTyped,
    ContentsRowToJSON,
} from './ContentsRow';
import {
    ResourceStatus,
    ResourceStatusFromJSON,
    ResourceStatusFromJSONTyped,
    ResourceStatusToJSON,
} from './ResourceStatus';

/**
 * Configuration for connecting data between Faraday and an external location.
 * 
 * Connections are required when working with **replication targets**.
 * @export
 * @interface Connection
 */
export interface Connection {
    /**
     * 
     * @type {Array<ContentsRow>}
     * @memberof Connection
     */
    contents?: Array<ContentsRow>;
    /**
     * The error encountered when trying to connect, if any
     * @type {string}
     * @memberof Connection
     */
    contents_error?: string;
    /**
     * When this resource was created.
     * @type {Date}
     * @memberof Connection
     */
    created_at: Date;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Connection
     */
    id: string;
    /**
     * A user-friendly name of the connection.
     * @type {string}
     * @memberof Connection
     */
    name: string;
    /**
     * 
     * @type {ConnectionOptions}
     * @memberof Connection
     */
    options: ConnectionOptions;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof Connection
     */
    resource_type: string;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof Connection
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {Date}
     * @memberof Connection
     */
    status_changed_at?: Date;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof Connection
     */
    status_error?: string;
    /**
     * When this resource was last updated.
     * @type {Date}
     * @memberof Connection
     */
    updated_at: Date;
}

export function ConnectionFromJSON(json: any): Connection {
    return ConnectionFromJSONTyped(json, false);
}

export function ConnectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Connection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contents': !exists(json, 'contents') ? undefined : ((json['contents'] as Array<any>).map(ContentsRowFromJSON)),
        'contents_error': !exists(json, 'contents_error') ? undefined : json['contents_error'],
        'created_at': (new Date(json['created_at'])),
        'id': json['id'],
        'name': json['name'],
        'options': ConnectionOptionsFromJSON(json['options']),
        'resource_type': json['resource_type'],
        'status': ResourceStatusFromJSON(json['status']),
        'status_changed_at': !exists(json, 'status_changed_at') ? undefined : (new Date(json['status_changed_at'])),
        'status_error': !exists(json, 'status_error') ? undefined : json['status_error'],
        'updated_at': (new Date(json['updated_at'])),
    };
}

export function ConnectionToJSON(value?: Connection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contents': value.contents === undefined ? undefined : ((value.contents as Array<any>).map(ContentsRowToJSON)),
        'contents_error': value.contents_error,
        'created_at': (value.created_at.toISOString()),
        'id': value.id,
        'name': value.name,
        'options': ConnectionOptionsToJSON(value.options),
        'resource_type': value.resource_type,
        'status': ResourceStatusToJSON(value.status),
        'status_changed_at': value.status_changed_at === undefined ? undefined : (value.status_changed_at.toISOString()),
        'status_error': value.status_error,
        'updated_at': (value.updated_at.toISOString()),
    };
}

