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
    DatasetColumn,
    DatasetColumnFromJSON,
    DatasetColumnFromJSONTyped,
    DatasetColumnToJSON,
} from './DatasetColumn';
import {
    DatasetOptions,
    DatasetOptionsFromJSON,
    DatasetOptionsFromJSONTyped,
    DatasetOptionsToJSON,
} from './DatasetOptions';
import {
    DatasetUpdateHistory,
    DatasetUpdateHistoryFromJSON,
    DatasetUpdateHistoryFromJSONTyped,
    DatasetUpdateHistoryToJSON,
} from './DatasetUpdateHistory';
import {
    IdentitySets,
    IdentitySetsFromJSON,
    IdentitySetsFromJSONTyped,
    IdentitySetsToJSON,
} from './IdentitySets';
import {
    OutputToStreams,
    OutputToStreamsFromJSON,
    OutputToStreamsFromJSONTyped,
    OutputToStreamsToJSON,
} from './OutputToStreams';
import {
    OutputToTraits,
    OutputToTraitsFromJSON,
    OutputToTraitsFromJSONTyped,
    OutputToTraitsToJSON,
} from './OutputToTraits';
import {
    ResourceStatus,
    ResourceStatusFromJSON,
    ResourceStatusFromJSONTyped,
    ResourceStatusToJSON,
} from './ResourceStatus';

/**
 * Tabular data describing orders, customers, leads, etc.
 * @export
 * @interface Dataset
 */
export interface Dataset {
    /**
     * If this is a "retrieve" dataset, the UUID of a connection - see <a href="../reference/createconnection">/connections</a> for more detail. 
     * 
     * Only a subset of connection types can be configured for dataset ingestion - see the list available in `options`.
     * 
     * Note that if a `connection_id` is specified, `options` must also be specified.
     * @type {string}
     * @memberof Dataset
     */
    connection_id?: string;
    /**
     * When this resource was created.
     * @type {Date}
     * @memberof Dataset
     */
    created_at: Date;
    /**
     * An array of columns
     * @type {Array<DatasetColumn>}
     * @memberof Dataset
     */
    detected_columns?: Array<DatasetColumn>;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Dataset
     */
    id: string;
    /**
     * The number of unique people identified in this dataset.
     * This can be different from the row_count, for example, in a table of orders.
     * The same person can order multiple things, so there are more rows than identified people.
     * This will only be displayed if the dataset built successfully.
     * @type {number}
     * @memberof Dataset
     */
    identified_count?: number;
    /**
     * 
     * @type {IdentitySets}
     * @memberof Dataset
     */
    identity_sets: IdentitySets;
    /**
     * A column specifying a date associated with a record. After each
     * ingestion, the most recent value from `incremental_column` on any
     * record will be recorded, and during future ingestions, any
     * records with a value older than `incremental_column` will be ignored.
     * 
     * Cannot currently be used with `upsert_columns`. Prefer
     * `upsert_columns` when possible.
     * @type {string}
     * @memberof Dataset
     */
    incremental_column?: string;
    /**
     * An identifying name for this dataset.
     * @type {string}
     * @memberof Dataset
     */
    name: string;
    /**
     * 
     * @type {DatasetOptions}
     * @memberof Dataset
     */
    options: DatasetOptions;
    /**
     * 
     * @type {OutputToStreams}
     * @memberof Dataset
     */
    output_to_streams?: OutputToStreams;
    /**
     * 
     * @type {OutputToTraits}
     * @memberof Dataset
     */
    output_to_traits?: OutputToTraits;
    /**
     * A dataset in preview mode will only detect columns and produce a data preview, but not ingest the data.
     * 
     * Defaults to undefined, which is equivalent to false.
     * @type {boolean}
     * @memberof Dataset
     */
    preview?: boolean;
    /**
     * The name of the column that references an ID from an external system.
     * 
     * Setting this enables export of data via <a href="/reference/createtarget">`/targets`</a> that is keyed on this field.
     * @type {string}
     * @memberof Dataset
     */
    reference_key_column?: string;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof Dataset
     */
    resource_type: string;
    /**
     * The total number of rows in this dataset.
     * This will only be displayed if the dataset built successfully.
     * @type {number}
     * @memberof Dataset
     */
    row_count?: number;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof Dataset
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {Date}
     * @memberof Dataset
     */
    status_changed_at?: Date;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof Dataset
     */
    status_error?: string;
    /**
     * When this resource was last updated.
     * @type {Date}
     * @memberof Dataset
     */
    updated_at: Date;
    /**
     * A list of updates including how many rows were added.
     * 
     * If the dataset updates incrementally, these rows are added to the previous total. If the dataset is overwritten upon every ingestion, then these rows will be the new total row count.
     * @type {Array<DatasetUpdateHistory>}
     * @memberof Dataset
     */
    updates?: Array<DatasetUpdateHistory>;
    /**
     * A column or set of columns that uniquely identify an input row. If
     * multiple rows are ingested with identical values in the columns
     * specified by `upsert_columns`, the newest will be used.
     * 
     * Cannot currently be used with `incremental_column`.
     * 
     * If neither `upsert_columns` nor `incremental_column` are
     * specified, each unique row will be ingested once.
     * @type {Array<string>}
     * @memberof Dataset
     */
    upsert_columns?: Array<string>;
}

export function DatasetFromJSON(json: any): Dataset {
    return DatasetFromJSONTyped(json, false);
}

export function DatasetFromJSONTyped(json: any, ignoreDiscriminator: boolean): Dataset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'connection_id': !exists(json, 'connection_id') ? undefined : json['connection_id'],
        'created_at': (new Date(json['created_at'])),
        'detected_columns': !exists(json, 'detected_columns') ? undefined : ((json['detected_columns'] as Array<any>).map(DatasetColumnFromJSON)),
        'id': json['id'],
        'identified_count': !exists(json, 'identified_count') ? undefined : json['identified_count'],
        'identity_sets': IdentitySetsFromJSON(json['identity_sets']),
        'incremental_column': !exists(json, 'incremental_column') ? undefined : json['incremental_column'],
        'name': json['name'],
        'options': DatasetOptionsFromJSON(json['options']),
        'output_to_streams': !exists(json, 'output_to_streams') ? undefined : OutputToStreamsFromJSON(json['output_to_streams']),
        'output_to_traits': !exists(json, 'output_to_traits') ? undefined : OutputToTraitsFromJSON(json['output_to_traits']),
        'preview': !exists(json, 'preview') ? undefined : json['preview'],
        'reference_key_column': !exists(json, 'reference_key_column') ? undefined : json['reference_key_column'],
        'resource_type': json['resource_type'],
        'row_count': !exists(json, 'row_count') ? undefined : json['row_count'],
        'status': ResourceStatusFromJSON(json['status']),
        'status_changed_at': !exists(json, 'status_changed_at') ? undefined : (new Date(json['status_changed_at'])),
        'status_error': !exists(json, 'status_error') ? undefined : json['status_error'],
        'updated_at': (new Date(json['updated_at'])),
        'updates': !exists(json, 'updates') ? undefined : ((json['updates'] as Array<any>).map(DatasetUpdateHistoryFromJSON)),
        'upsert_columns': !exists(json, 'upsert_columns') ? undefined : json['upsert_columns'],
    };
}

export function DatasetToJSON(value?: Dataset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'connection_id': value.connection_id,
        'created_at': (value.created_at.toISOString()),
        'detected_columns': value.detected_columns === undefined ? undefined : ((value.detected_columns as Array<any>).map(DatasetColumnToJSON)),
        'id': value.id,
        'identified_count': value.identified_count,
        'identity_sets': IdentitySetsToJSON(value.identity_sets),
        'incremental_column': value.incremental_column,
        'name': value.name,
        'options': DatasetOptionsToJSON(value.options),
        'output_to_streams': OutputToStreamsToJSON(value.output_to_streams),
        'output_to_traits': OutputToTraitsToJSON(value.output_to_traits),
        'preview': value.preview,
        'reference_key_column': value.reference_key_column,
        'resource_type': value.resource_type,
        'row_count': value.row_count,
        'status': ResourceStatusToJSON(value.status),
        'status_changed_at': value.status_changed_at === undefined ? undefined : (value.status_changed_at.toISOString()),
        'status_error': value.status_error,
        'updated_at': (value.updated_at.toISOString()),
        'updates': value.updates === undefined ? undefined : ((value.updates as Array<any>).map(DatasetUpdateHistoryToJSON)),
        'upsert_columns': value.upsert_columns,
    };
}

