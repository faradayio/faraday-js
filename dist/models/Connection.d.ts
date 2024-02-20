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
import { ConnectionOptions } from './ConnectionOptions';
import { ContentsRow } from './ContentsRow';
import { ResourceStatus } from './ResourceStatus';
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
export declare enum ConnectionDirectionalityEnum {
    Bidirectional = "bidirectional",
    SourceOnly = "source_only",
    DestinationOnly = "destination_only"
}
export declare function ConnectionFromJSON(json: any): Connection;
export declare function ConnectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Connection;
export declare function ConnectionToJSON(value?: Connection | null): any;