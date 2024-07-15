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
import { ResourceStatus } from './ResourceStatus';
import { StreamProperties } from './StreamProperties';
/**
 * A stream of events associated with the account.
 * @export
 * @interface Stream
 */
export interface Stream {
    /**
     * If not null, this resource will no longer receive updates, but will still be visable.
     * @type {Date}
     * @memberof Stream
     */
    archived_at?: Date;
    /**
     * When this resource was created.
     * @type {Date}
     * @memberof Stream
     */
    created_at: Date;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Stream
     */
    id: string;
    /**
     * The last time this resource's input was read.
     * @type {Date}
     * @memberof Stream
     */
    last_read_input_at?: Date;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {Date}
     * @memberof Stream
     */
    last_updated_config_at?: Date;
    /**
     * The last time this resource successfully built.
     * @type {Date}
     * @memberof Stream
     */
    last_updated_output_at?: Date;
    /**
     *
     * @type {string}
     * @memberof Stream
     */
    name: string;
    /**
     *
     * @type {StreamProperties}
     * @memberof Stream
     */
    properties?: StreamProperties;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof Stream
     */
    resource_type: string;
    /**
     *
     * @type {ResourceStatus}
     * @memberof Stream
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {Date}
     * @memberof Stream
     */
    status_changed_at?: Date;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof Stream
     */
    status_error?: string;
    /**
     * When this resource was last updated.
     * @type {Date}
     * @memberof Stream
     */
    updated_at: Date;
}
export declare function StreamFromJSON(json: any): Stream;
export declare function StreamFromJSONTyped(json: any, ignoreDiscriminator: boolean): Stream;
export declare function StreamToJSON(value?: Stream | null): any;
