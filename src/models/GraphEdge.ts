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
import {
    ResourceType,
    ResourceTypeFromJSON,
    ResourceTypeFromJSONTyped,
    ResourceTypeToJSON,
} from './ResourceType';

/**
 * An edge in the dependency graph.
 * @export
 * @interface GraphEdge
 */
export interface GraphEdge {
    /**
     * 
     * @type {Date}
     * @memberof GraphEdge
     */
    downstream_archived_at?: Date;
    /**
     * the id of the resource that depends on the upstream resource
     * @type {string}
     * @memberof GraphEdge
     */
    downstream_id: string;
    /**
     * The last time this resource's input was read.
     * @type {Date}
     * @memberof GraphEdge
     */
    downstream_last_read_input_at?: Date;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {Date}
     * @memberof GraphEdge
     */
    downstream_last_updated_config_at?: Date;
    /**
     * The last time this resource successfully built.
     * @type {Date}
     * @memberof GraphEdge
     */
    downstream_last_updated_output_at?: Date;
    /**
     * A more human-consumable version of the name of the downstream resource.
     * @type {string}
     * @memberof GraphEdge
     */
    downstream_literate: string;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof GraphEdge
     */
    downstream_status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {Date}
     * @memberof GraphEdge
     */
    downstream_status_changed_at?: Date;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof GraphEdge
     */
    downstream_status_error?: string;
    /**
     * 
     * @type {ResourceType}
     * @memberof GraphEdge
     */
    downstream_type: ResourceType;
    /**
     * 
     * @type {Date}
     * @memberof GraphEdge
     */
    upstream_archived_at?: Date;
    /**
     * the id of the resource that is depended on by the downstream resource
     * @type {string}
     * @memberof GraphEdge
     */
    upstream_id: string;
    /**
     * The last time this resource's input was read.
     * @type {Date}
     * @memberof GraphEdge
     */
    upstream_last_read_input_at?: Date;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {Date}
     * @memberof GraphEdge
     */
    upstream_last_updated_config_at?: Date;
    /**
     * The last time this resource successfully built.
     * @type {Date}
     * @memberof GraphEdge
     */
    upstream_last_updated_output_at?: Date;
    /**
     * A more human-consumable version of the name of the upstream resource.
     * @type {string}
     * @memberof GraphEdge
     */
    upstream_literate: string;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof GraphEdge
     */
    upstream_status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {Date}
     * @memberof GraphEdge
     */
    upstream_status_changed_at?: Date;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof GraphEdge
     */
    upstream_status_error?: string;
    /**
     * 
     * @type {ResourceType}
     * @memberof GraphEdge
     */
    upstream_type: ResourceType;
}

export function GraphEdgeFromJSON(json: any): GraphEdge {
    return GraphEdgeFromJSONTyped(json, false);
}

export function GraphEdgeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphEdge {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'downstream_archived_at': !exists(json, 'downstream_archived_at') ? undefined : (new Date(json['downstream_archived_at'])),
        'downstream_id': json['downstream_id'],
        'downstream_last_read_input_at': !exists(json, 'downstream_last_read_input_at') ? undefined : (new Date(json['downstream_last_read_input_at'])),
        'downstream_last_updated_config_at': !exists(json, 'downstream_last_updated_config_at') ? undefined : (new Date(json['downstream_last_updated_config_at'])),
        'downstream_last_updated_output_at': !exists(json, 'downstream_last_updated_output_at') ? undefined : (new Date(json['downstream_last_updated_output_at'])),
        'downstream_literate': json['downstream_literate'],
        'downstream_status': ResourceStatusFromJSON(json['downstream_status']),
        'downstream_status_changed_at': !exists(json, 'downstream_status_changed_at') ? undefined : (new Date(json['downstream_status_changed_at'])),
        'downstream_status_error': !exists(json, 'downstream_status_error') ? undefined : json['downstream_status_error'],
        'downstream_type': ResourceTypeFromJSON(json['downstream_type']),
        'upstream_archived_at': !exists(json, 'upstream_archived_at') ? undefined : (new Date(json['upstream_archived_at'])),
        'upstream_id': json['upstream_id'],
        'upstream_last_read_input_at': !exists(json, 'upstream_last_read_input_at') ? undefined : (new Date(json['upstream_last_read_input_at'])),
        'upstream_last_updated_config_at': !exists(json, 'upstream_last_updated_config_at') ? undefined : (new Date(json['upstream_last_updated_config_at'])),
        'upstream_last_updated_output_at': !exists(json, 'upstream_last_updated_output_at') ? undefined : (new Date(json['upstream_last_updated_output_at'])),
        'upstream_literate': json['upstream_literate'],
        'upstream_status': ResourceStatusFromJSON(json['upstream_status']),
        'upstream_status_changed_at': !exists(json, 'upstream_status_changed_at') ? undefined : (new Date(json['upstream_status_changed_at'])),
        'upstream_status_error': !exists(json, 'upstream_status_error') ? undefined : json['upstream_status_error'],
        'upstream_type': ResourceTypeFromJSON(json['upstream_type']),
    };
}

export function GraphEdgeToJSON(value?: GraphEdge | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'downstream_archived_at': value.downstream_archived_at === undefined ? undefined : (value.downstream_archived_at.toISOString()),
        'downstream_id': value.downstream_id,
        'downstream_last_read_input_at': value.downstream_last_read_input_at === undefined ? undefined : (value.downstream_last_read_input_at.toISOString()),
        'downstream_last_updated_config_at': value.downstream_last_updated_config_at === undefined ? undefined : (value.downstream_last_updated_config_at.toISOString()),
        'downstream_last_updated_output_at': value.downstream_last_updated_output_at === undefined ? undefined : (value.downstream_last_updated_output_at.toISOString()),
        'downstream_literate': value.downstream_literate,
        'downstream_status': ResourceStatusToJSON(value.downstream_status),
        'downstream_status_changed_at': value.downstream_status_changed_at === undefined ? undefined : (value.downstream_status_changed_at.toISOString()),
        'downstream_status_error': value.downstream_status_error,
        'downstream_type': ResourceTypeToJSON(value.downstream_type),
        'upstream_archived_at': value.upstream_archived_at === undefined ? undefined : (value.upstream_archived_at.toISOString()),
        'upstream_id': value.upstream_id,
        'upstream_last_read_input_at': value.upstream_last_read_input_at === undefined ? undefined : (value.upstream_last_read_input_at.toISOString()),
        'upstream_last_updated_config_at': value.upstream_last_updated_config_at === undefined ? undefined : (value.upstream_last_updated_config_at.toISOString()),
        'upstream_last_updated_output_at': value.upstream_last_updated_output_at === undefined ? undefined : (value.upstream_last_updated_output_at.toISOString()),
        'upstream_literate': value.upstream_literate,
        'upstream_status': ResourceStatusToJSON(value.upstream_status),
        'upstream_status_changed_at': value.upstream_status_changed_at === undefined ? undefined : (value.upstream_status_changed_at.toISOString()),
        'upstream_status_error': value.upstream_status_error,
        'upstream_type': ResourceTypeToJSON(value.upstream_type),
    };
}

