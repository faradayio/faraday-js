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
import { DatasetColumn } from './DatasetColumn';
import { DatasetEnrichments } from './DatasetEnrichments';
import { DatasetOptions } from './DatasetOptions';
import { DatasetOutputAllColumnsAsTraits } from './DatasetOutputAllColumnsAsTraits';
import { DatasetUpdateHistory } from './DatasetUpdateHistory';
import { IdentitySets } from './IdentitySets';
import { OutputToStreams } from './OutputToStreams';
import { OutputToTraits } from './OutputToTraits';
import { ResourceStatus } from './ResourceStatus';
/**
 * Tabular data describing orders, customers, leads, etc.
 * @export
 * @interface Dataset
 */
export interface Dataset {
    /**
     * If this is a "retrieve" dataset, the UUID of a connection - see <a href="https://faraday.ai/developers/reference/createconnection">/connections</a> for more detail.
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
     *
     * @type {DatasetEnrichments}
     * @memberof Dataset
     */
    enrichment?: DatasetEnrichments;
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
     * The last time this resource's input was read.
     * @type {Date}
     * @memberof Dataset
     */
    last_read_input_at?: Date;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {Date}
     * @memberof Dataset
     */
    last_updated_config_at?: Date;
    /**
     * The last time this resource successfully built.
     * @type {Date}
     * @memberof Dataset
     */
    last_updated_output_at?: Date;
    /**
     * A managed dataset requires special configuration from a Faraday admin, and is read-only.
     * @type {boolean}
     * @memberof Dataset
     */
    managed?: boolean;
    /**
     * **Deprecated**: Use `enrichment` instead.
     *
     * The number of identified people in this dataset that Faraday found a match for in its data.
     * This will only be displayed if the dataset built successfully.
     * @type {number}
     * @memberof Dataset
     */
    matched_count?: number;
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
     * @type {DatasetOutputAllColumnsAsTraits}
     * @memberof Dataset
     */
    output_all_columns_as_traits?: DatasetOutputAllColumnsAsTraits;
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
     * Currently supported:
     *   - 'suppress' - data can be used for modeling but will be excluded from pipelines and deployments (do not contact)
     *   - 'delete' - data can not be used for modeling and will be excluded from pipelines and deployments (delete and do not contact)
     * @type {string}
     * @memberof Dataset
     */
    privacy?: DatasetPrivacyEnum;
    /**
     * **Deprecated:** use reference_key_columns instead
     * The name of the column that references an ID from an external system.
     *
     * Setting this enables export of data via <a href="/reference/createtarget">`/targets`</a> that is keyed on this field.
     * @type {string}
     * @memberof Dataset
     */
    reference_key_column?: string;
    /**
     * The names of columns that reference IDs from an external system.
     *
     * Setting this enables export of data via <a href="/reference/createtarget">`/targets`</a> that is keyed on this field.
     * @type {Array<string>}
     * @memberof Dataset
     */
    reference_key_columns?: Array<string>;
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
     * If supported by the connection, a sample of the data.
     * @type {object}
     * @memberof Dataset
     */
    sample?: object;
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
/**
* @export
* @enum {string}
*/
export declare enum DatasetPrivacyEnum {
    Suppress = "suppress",
    Delete = "delete"
}
export declare function DatasetFromJSON(json: any): Dataset;
export declare function DatasetFromJSONTyped(json: any, ignoreDiscriminator: boolean): Dataset;
export declare function DatasetToJSON(value?: Dataset | null): any;
