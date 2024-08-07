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
/**
 * Recommender resources are used to predict future associations (e.g. future purchase). They are based on an event stream containing all previous associations such as an order event stream or a product rating event stream
 *
 * This feature is experimental and subject to change. To enable this feature, contact your account manager.
 * @export
 * @interface Recommender
 */
export interface Recommender {
    /**
     * If not null, this resource will no longer receive updates, but will still be visable.
     * @type {Date}
     * @memberof Recommender
     */
    archived_at?: Date;
    /**
     * When this resource was created.
     * @type {Date}
     * @memberof Recommender
     */
    created_at: Date;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Recommender
     */
    id: string;
    /**
     * The last time this resource's input was read.
     * @type {Date}
     * @memberof Recommender
     */
    last_read_input_at?: Date;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {Date}
     * @memberof Recommender
     */
    last_updated_config_at?: Date;
    /**
     * The last time this resource successfully built.
     * @type {Date}
     * @memberof Recommender
     */
    last_updated_output_at?: Date;
    /**
     * Human-readable label for this recommender. Each recommender must have a unique name.
     * @type {string}
     * @memberof Recommender
     */
    name: string;
    /**
     * URL of an HTML report containing information such as the objective of the model, performance, and important features.
     * @type {string}
     * @memberof Recommender
     */
    report_url?: string;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof Recommender
     */
    resource_type: string;
    /**
     *
     * @type {ResourceStatus}
     * @memberof Recommender
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {Date}
     * @memberof Recommender
     */
    status_changed_at?: Date;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof Recommender
     */
    status_error?: string;
    /**
     * Name of the stream to use for recommendations
     * @type {string}
     * @memberof Recommender
     */
    stream_name: string;
    /**
     * Name of the stream property
     * @type {string}
     * @memberof Recommender
     */
    stream_property_name: string;
    /**
     * When this resource was last updated.
     * @type {Date}
     * @memberof Recommender
     */
    updated_at: Date;
}
export declare function RecommenderFromJSON(json: any): Recommender;
export declare function RecommenderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Recommender;
export declare function RecommenderToJSON(value?: Recommender | null): any;
