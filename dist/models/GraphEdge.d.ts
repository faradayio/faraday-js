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
import { ResourceType } from './ResourceType';
/**
 * An edge in the dependency graph.
 * @export
 * @interface GraphEdge
 */
export interface GraphEdge {
    /**
     * the id of the resource that depends on the upstream resource
     * @type {string}
     * @memberof GraphEdge
     */
    downstream_id?: string;
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
    downstream_literate?: string;
    /**
     *
     * @type {ResourceStatus}
     * @memberof GraphEdge
     */
    downstream_status?: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {Date}
     * @memberof GraphEdge
     */
    downstream_status_changed_at?: Date;
    /**
     *
     * @type {ResourceType}
     * @memberof GraphEdge
     */
    downstream_type?: ResourceType;
    /**
     * the id of the resource that is depended on by the downstream resource
     * @type {string}
     * @memberof GraphEdge
     */
    upstream_id?: string;
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
    upstream_literate?: string;
    /**
     *
     * @type {ResourceStatus}
     * @memberof GraphEdge
     */
    upstream_status?: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {Date}
     * @memberof GraphEdge
     */
    upstream_status_changed_at?: Date;
    /**
     *
     * @type {ResourceType}
     * @memberof GraphEdge
     */
    upstream_type?: ResourceType;
}
export declare function GraphEdgeFromJSON(json: any): GraphEdge;
export declare function GraphEdgeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphEdge;
export declare function GraphEdgeToJSON(value?: GraphEdge | null): any;
