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
    TargetFilter,
    TargetFilterFromJSON,
    TargetFilterFromJSONTyped,
    TargetFilterToJSON,
} from './TargetFilter';
import {
    TargetLimit,
    TargetLimitFromJSON,
    TargetLimitFromJSONTyped,
    TargetLimitToJSON,
} from './TargetLimit';
import {
    TargetModes,
    TargetModesFromJSON,
    TargetModesFromJSONTyped,
    TargetModesToJSON,
} from './TargetModes';
import {
    TargetOptions,
    TargetOptionsFromJSON,
    TargetOptionsFromJSONTyped,
    TargetOptionsToJSON,
} from './TargetOptions';
import {
    TargetStructureTransformation,
    TargetStructureTransformationFromJSON,
    TargetStructureTransformationFromJSONTyped,
    TargetStructureTransformationToJSON,
} from './TargetStructureTransformation';

/**
 * Instructions on how to export output data defined by a scope.
 * 
 * There are three types of targets:
 * <table>
 * <thead>
 * <tr><th>Target type</th><th>Description</th><th>API requirement</th></tr>
 * </thead>
 * <tbody>
 * <tr><td><strong>Publication</strong></td><td>Faraday <em>hosts</em> your predictions for convenient retrieval as needed.</td><td>Specify a <code>type</code> of <code>hosted_csv</code> in <code>options</code>. Omit <code>connection_id</code>.</td></tr>
 * <tr><td><strong>Replication</strong></td><td>Faraday copies your predictions to systems <em>you</em> control. You may then push them to third parties like Facebook, Google Ads, etc.</td><td>Specify a valid <code>connection_id</code> and the corresponding <code>type</code> of the connection in <code>options</code>.</td></tr>
 * <tr><td><strong>Managed</strong></td><td>Faraday manages a push to third parties like Facebook, Google Ads, and more.</td><td>Must be on an enterprise plan. Contact Customer Success to set up.</td></tr>
 * </tbody>
 * </table>
 * @export
 * @interface Target
 */
export interface Target {
    /**
     * If this is a replication (externally-hosted) target, the UUID of a connection - see <a href="https://faraday.ai/developers/reference/createconnection">/connections</a> for more detail. 
     * 
     * If this is not a replication target, omit this parameter.
     * @type {string}
     * @memberof Target
     */
    connection_id?: string;
    /**
     * When this resource was created.
     * @type {Date}
     * @memberof Target
     */
    created_at: Date;
    /**
     * By default, targets include all columns in <a href="https://faraday.ai/developers/reference/createtargetpreview">the target preview</a>, with no name changes.
     * 
     * Users may use this parameter to specify their own set of "structure transformations" to override the default selection, order, and name of exported columns.
     * 
     * The shape of this parameter is an array of objects where the order of the columns to export is given by the order of the array. Each item represents a 1:1 mapping of scope input column to target output column. Only those columns specified here are emitted in the target output.
     * @type {Array<TargetStructureTransformation>}
     * @memberof Target
     */
    custom_structure?: Array<TargetStructureTransformation>;
    /**
     * 
     * @type {TargetFilter}
     * @memberof Target
     */
    filter?: TargetFilter;
    /**
     * Final structure of the target export. This is only included in the response if the target is built.
     * @type {Array<TargetStructureTransformation>}
     * @memberof Target
     */
    final_structure?: Array<TargetStructureTransformation>;
    /**
     * By default, column names are exported in a machine-readable format with underscored uuids. 
     * 
     * Setting this to `true` replaces ids with literates in the exported column names.
     * @type {boolean}
     * @memberof Target
     */
    human_readable?: boolean;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Target
     */
    id: string;
    /**
     * The last time this resource's input was read.
     * @type {Date}
     * @memberof Target
     */
    last_read_input_at?: Date;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {Date}
     * @memberof Target
     */
    last_updated_config_at?: Date;
    /**
     * The last time this resource successfully built.
     * @type {Date}
     * @memberof Target
     */
    last_updated_output_at?: Date;
    /**
     * 
     * @type {TargetLimit}
     * @memberof Target
     */
    limit?: TargetLimit;
    /**
     * A managed target requires special configuration from a Faraday admin, and is read-only.
     * @type {boolean}
     * @memberof Target
     */
    managed?: boolean;
    /**
     * A user-friendly name of the target.
     * @type {string}
     * @memberof Target
     */
    name: string;
    /**
     * 
     * @type {TargetOptions}
     * @memberof Target
     */
    options: TargetOptions;
    /**
     * **Deprecated: use `custom_structure`.**
     * 
     * By default, targets include all columns in <a href="https://faraday.ai/developers/reference/createtargetpreview">the target preview</a>, with no name changes.
     * This parameter is an override of the default that enables an explicit mapping of columns that should be included in the target export, along with the exported column name.
     * Each key is the name the column originally had, and each value is the desired name.
     * Example:
     * ```
     * {
     *   "person_first_name": "first_name",
     *   "person_last_name": "last_name",
     *   "city": "city"
     * }
     * ```
     * In the example above, the target will only include the "first_name", "last_name", and "city" columns.
     * @type {{ [key: string]: string; }}
     * @memberof Target
     */
    payload_map?: { [key: string]: string; };
    /**
     * 
     * @type {TargetModes}
     * @memberof Target
     */
    representation: TargetModes;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof Target
     */
    resource_type: string;
    /**
     * The UUID of a scope - see <a href="https://faraday.ai/developers/reference/createscope">/scopes</a> for more detail.
     * @type {string}
     * @memberof Target
     */
    scope_id: string;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof Target
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {Date}
     * @memberof Target
     */
    status_changed_at?: Date;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof Target
     */
    status_error?: string;
    /**
     * When this resource was last updated.
     * @type {Date}
     * @memberof Target
     */
    updated_at: Date;
}

export function TargetFromJSON(json: any): Target {
    return TargetFromJSONTyped(json, false);
}

export function TargetFromJSONTyped(json: any, ignoreDiscriminator: boolean): Target {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'connection_id': !exists(json, 'connection_id') ? undefined : json['connection_id'],
        'created_at': (new Date(json['created_at'])),
        'custom_structure': !exists(json, 'custom_structure') ? undefined : ((json['custom_structure'] as Array<any>).map(TargetStructureTransformationFromJSON)),
        'filter': !exists(json, 'filter') ? undefined : TargetFilterFromJSON(json['filter']),
        'final_structure': !exists(json, 'final_structure') ? undefined : ((json['final_structure'] as Array<any>).map(TargetStructureTransformationFromJSON)),
        'human_readable': !exists(json, 'human_readable') ? undefined : json['human_readable'],
        'id': json['id'],
        'last_read_input_at': !exists(json, 'last_read_input_at') ? undefined : (new Date(json['last_read_input_at'])),
        'last_updated_config_at': !exists(json, 'last_updated_config_at') ? undefined : (new Date(json['last_updated_config_at'])),
        'last_updated_output_at': !exists(json, 'last_updated_output_at') ? undefined : (new Date(json['last_updated_output_at'])),
        'limit': !exists(json, 'limit') ? undefined : TargetLimitFromJSON(json['limit']),
        'managed': !exists(json, 'managed') ? undefined : json['managed'],
        'name': json['name'],
        'options': TargetOptionsFromJSON(json['options']),
        'payload_map': !exists(json, 'payload_map') ? undefined : json['payload_map'],
        'representation': TargetModesFromJSON(json['representation']),
        'resource_type': json['resource_type'],
        'scope_id': json['scope_id'],
        'status': ResourceStatusFromJSON(json['status']),
        'status_changed_at': !exists(json, 'status_changed_at') ? undefined : (new Date(json['status_changed_at'])),
        'status_error': !exists(json, 'status_error') ? undefined : json['status_error'],
        'updated_at': (new Date(json['updated_at'])),
    };
}

export function TargetToJSON(value?: Target | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'connection_id': value.connection_id,
        'created_at': (value.created_at.toISOString()),
        'custom_structure': value.custom_structure === undefined ? undefined : ((value.custom_structure as Array<any>).map(TargetStructureTransformationToJSON)),
        'filter': TargetFilterToJSON(value.filter),
        'final_structure': value.final_structure === undefined ? undefined : ((value.final_structure as Array<any>).map(TargetStructureTransformationToJSON)),
        'human_readable': value.human_readable,
        'id': value.id,
        'last_read_input_at': value.last_read_input_at === undefined ? undefined : (value.last_read_input_at.toISOString()),
        'last_updated_config_at': value.last_updated_config_at === undefined ? undefined : (value.last_updated_config_at.toISOString()),
        'last_updated_output_at': value.last_updated_output_at === undefined ? undefined : (value.last_updated_output_at.toISOString()),
        'limit': TargetLimitToJSON(value.limit),
        'managed': value.managed,
        'name': value.name,
        'options': TargetOptionsToJSON(value.options),
        'payload_map': value.payload_map,
        'representation': TargetModesToJSON(value.representation),
        'resource_type': value.resource_type,
        'scope_id': value.scope_id,
        'status': ResourceStatusToJSON(value.status),
        'status_changed_at': value.status_changed_at === undefined ? undefined : (value.status_changed_at.toISOString()),
        'status_error': value.status_error,
        'updated_at': (value.updated_at.toISOString()),
    };
}

