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
    AddressInfo,
    AddressInfoFromJSON,
    AddressInfoFromJSONTyped,
    AddressInfoToJSON,
} from './AddressInfo';
import {
    ResourceStatus,
    ResourceStatusFromJSON,
    ResourceStatusFromJSONTyped,
    ResourceStatusToJSON,
} from './ResourceStatus';

/**
 * A geospatial area or set of addresses which can be used as a spatial filter when defining other resources.
 * @export
 * @interface Place
 */
export interface Place {
    /**
     * 
     * @type {Array<AddressInfo>}
     * @memberof Place
     */
    addresses?: Array<AddressInfo>;
    /**
     * When this resource was created.
     * @type {Date}
     * @memberof Place
     */
    created_at: Date;
    /**
     * A GeoJSON Geometry, as defined in the [GeoJSON specification](https://www.rfc-editor.org/rfc/rfc7946#section-3.1)
     * 
     * The longitude and latitude units of this geometry are expected to be in decimal degrees, using the 
     * WGS84 coordinate reference system, also known by the SRID 4326. https://www.rfc-editor.org/rfc/rfc7946#section-4
     * @type {object}
     * @memberof Place
     */
    geojson?: object;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Place
     */
    id: string;
    /**
     * The last time this resource successfully built.
     * @type {Date}
     * @memberof Place
     */
    last_updated_output_at?: Date;
    /**
     * Human-readable label for this place. Names must be unique. Uniqueness is case-insensitive.
     * @type {string}
     * @memberof Place
     */
    name: string;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof Place
     */
    resource_type: string;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof Place
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {Date}
     * @memberof Place
     */
    status_changed_at?: Date;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof Place
     */
    status_error?: string;
    /**
     * When this resource was last updated.
     * @type {Date}
     * @memberof Place
     */
    updated_at: Date;
}

export function PlaceFromJSON(json: any): Place {
    return PlaceFromJSONTyped(json, false);
}

export function PlaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Place {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addresses': !exists(json, 'addresses') ? undefined : ((json['addresses'] as Array<any>).map(AddressInfoFromJSON)),
        'created_at': (new Date(json['created_at'])),
        'geojson': !exists(json, 'geojson') ? undefined : json['geojson'],
        'id': json['id'],
        'last_updated_output_at': !exists(json, 'last_updated_output_at') ? undefined : (new Date(json['last_updated_output_at'])),
        'name': json['name'],
        'resource_type': json['resource_type'],
        'status': ResourceStatusFromJSON(json['status']),
        'status_changed_at': !exists(json, 'status_changed_at') ? undefined : (new Date(json['status_changed_at'])),
        'status_error': !exists(json, 'status_error') ? undefined : json['status_error'],
        'updated_at': (new Date(json['updated_at'])),
    };
}

export function PlaceToJSON(value?: Place | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addresses': value.addresses === undefined ? undefined : ((value.addresses as Array<any>).map(AddressInfoToJSON)),
        'created_at': (value.created_at.toISOString()),
        'geojson': value.geojson,
        'id': value.id,
        'last_updated_output_at': value.last_updated_output_at === undefined ? undefined : (value.last_updated_output_at.toISOString()),
        'name': value.name,
        'resource_type': value.resource_type,
        'status': ResourceStatusToJSON(value.status),
        'status_changed_at': value.status_changed_at === undefined ? undefined : (value.status_changed_at.toISOString()),
        'status_error': value.status_error,
        'updated_at': (value.updated_at.toISOString()),
    };
}
