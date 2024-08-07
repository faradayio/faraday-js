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
     * If not null, this resource will no longer receive updates, but will still be visable.
     * @type {Date}
     * @memberof Connection
     */
    archived_at?: Date;
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
     * Whether the connection can be used as a source (for datasets), a destination (for targets), or both.
     * @type {string}
     * @memberof Connection
     */
    directionality: ConnectionDirectionalityEnum;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Connection
     */
    id: string;
    /**
     * The last time this resource's input was read.
     * @type {Date}
     * @memberof Connection
     */
    last_read_input_at?: Date;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {Date}
     * @memberof Connection
     */
    last_updated_config_at?: Date;
    /**
     * The last time this resource successfully built.
     * @type {Date}
     * @memberof Connection
     */
    last_updated_output_at?: Date;
    /**
     * A managed connection requires special configuration from a Faraday admin, and is read-only.
     * @type {boolean}
     * @memberof Connection
     */
    managed?: boolean;
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

/**
* @export
* @enum {string}
*/
export enum ConnectionDirectionalityEnum {
    Bidirectional = 'bidirectional',
    SourceOnly = 'source_only',
    DestinationOnly = 'destination_only'
}

export function ConnectionFromJSON(json: any): Connection {
    return ConnectionFromJSONTyped(json, false);
}

export function ConnectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Connection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'archived_at': !exists(json, 'archived_at') ? undefined : (new Date(json['archived_at'])),
        'contents': !exists(json, 'contents') ? undefined : ((json['contents'] as Array<any>).map(ContentsRowFromJSON)),
        'contents_error': !exists(json, 'contents_error') ? undefined : json['contents_error'],
        'created_at': (new Date(json['created_at'])),
        'directionality': json['directionality'],
        'id': json['id'],
        'last_read_input_at': !exists(json, 'last_read_input_at') ? undefined : (new Date(json['last_read_input_at'])),
        'last_updated_config_at': !exists(json, 'last_updated_config_at') ? undefined : (new Date(json['last_updated_config_at'])),
        'last_updated_output_at': !exists(json, 'last_updated_output_at') ? undefined : (new Date(json['last_updated_output_at'])),
        'managed': !exists(json, 'managed') ? undefined : json['managed'],
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
        
        'archived_at': value.archived_at === undefined ? undefined : (value.archived_at.toISOString()),
        'contents': value.contents === undefined ? undefined : ((value.contents as Array<any>).map(ContentsRowToJSON)),
        'contents_error': value.contents_error,
        'created_at': (value.created_at.toISOString()),
        'directionality': value.directionality,
        'id': value.id,
        'last_read_input_at': value.last_read_input_at === undefined ? undefined : (value.last_read_input_at.toISOString()),
        'last_updated_config_at': value.last_updated_config_at === undefined ? undefined : (value.last_updated_config_at.toISOString()),
        'last_updated_output_at': value.last_updated_output_at === undefined ? undefined : (value.last_updated_output_at.toISOString()),
        'managed': value.managed,
        'name': value.name,
        'options': ConnectionOptionsToJSON(value.options),
        'resource_type': value.resource_type,
        'status': ResourceStatusToJSON(value.status),
        'status_changed_at': value.status_changed_at === undefined ? undefined : (value.status_changed_at.toISOString()),
        'status_error': value.status_error,
        'updated_at': (value.updated_at.toISOString()),
    };
}

