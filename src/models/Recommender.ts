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

/**
 * Recommender resources are used to predict future associations (e.g. future purchase). They are based on an event stream containing all previous associations such as an order event stream or a product rating event stream
 * 
 * This feature is experimental and subject to change. To enable this feature, contact your account manager.
 * @export
 * @interface Recommender
 */
export interface Recommender {
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

export function RecommenderFromJSON(json: any): Recommender {
    return RecommenderFromJSONTyped(json, false);
}

export function RecommenderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Recommender {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'created_at': (new Date(json['created_at'])),
        'id': json['id'],
        'last_read_input_at': !exists(json, 'last_read_input_at') ? undefined : (new Date(json['last_read_input_at'])),
        'last_updated_config_at': !exists(json, 'last_updated_config_at') ? undefined : (new Date(json['last_updated_config_at'])),
        'last_updated_output_at': !exists(json, 'last_updated_output_at') ? undefined : (new Date(json['last_updated_output_at'])),
        'name': json['name'],
        'report_url': !exists(json, 'report_url') ? undefined : json['report_url'],
        'resource_type': json['resource_type'],
        'status': ResourceStatusFromJSON(json['status']),
        'status_changed_at': !exists(json, 'status_changed_at') ? undefined : (new Date(json['status_changed_at'])),
        'status_error': !exists(json, 'status_error') ? undefined : json['status_error'],
        'stream_name': json['stream_name'],
        'stream_property_name': json['stream_property_name'],
        'updated_at': (new Date(json['updated_at'])),
    };
}

export function RecommenderToJSON(value?: Recommender | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_at': (value.created_at.toISOString()),
        'id': value.id,
        'last_read_input_at': value.last_read_input_at === undefined ? undefined : (value.last_read_input_at.toISOString()),
        'last_updated_config_at': value.last_updated_config_at === undefined ? undefined : (value.last_updated_config_at.toISOString()),
        'last_updated_output_at': value.last_updated_output_at === undefined ? undefined : (value.last_updated_output_at.toISOString()),
        'name': value.name,
        'report_url': value.report_url,
        'resource_type': value.resource_type,
        'status': ResourceStatusToJSON(value.status),
        'status_changed_at': value.status_changed_at === undefined ? undefined : (value.status_changed_at.toISOString()),
        'status_error': value.status_error,
        'stream_name': value.stream_name,
        'stream_property_name': value.stream_property_name,
        'updated_at': (value.updated_at.toISOString()),
    };
}

