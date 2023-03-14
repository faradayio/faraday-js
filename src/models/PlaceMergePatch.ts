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
    AddressInfo,
    AddressInfoFromJSON,
    AddressInfoFromJSONTyped,
    AddressInfoToJSON,
} from './AddressInfo';

/**
 * (Parameters used to PATCH the `Place` type.)
 * 
 * A geospatial area or set of addresses which can be used as a spatial filter when defining other resources.
 * @export
 * @interface PlaceMergePatch
 */
export interface PlaceMergePatch {
    /**
     * 
     * @type {Array<AddressInfo>}
     * @memberof PlaceMergePatch
     */
    addresses?: Array<AddressInfo> | null;
    /**
     * A GeoJSON Geometry, as defined in the [GeoJSON specification](https://www.rfc-editor.org/rfc/rfc7946#section-3.1)
     * 
     * The longitude and latitude units of this geometry are expected to be in decimal degrees, using the 
     * WGS84 coordinate reference system, also known by the SRID 4326. https://www.rfc-editor.org/rfc/rfc7946#section-4
     * @type {object}
     * @memberof PlaceMergePatch
     */
    geojson?: object | null;
    /**
     * Human-readable label for this place. Names must be unique. Uniqueness is case-insensitive.
     * @type {string}
     * @memberof PlaceMergePatch
     */
    name?: string;
}

export function PlaceMergePatchFromJSON(json: any): PlaceMergePatch {
    return PlaceMergePatchFromJSONTyped(json, false);
}

export function PlaceMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlaceMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addresses': !exists(json, 'addresses') ? undefined : (json['addresses'] === null ? null : (json['addresses'] as Array<any>).map(AddressInfoFromJSON)),
        'geojson': !exists(json, 'geojson') ? undefined : json['geojson'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function PlaceMergePatchToJSON(value?: PlaceMergePatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addresses': value.addresses === undefined ? undefined : (value.addresses === null ? null : (value.addresses as Array<any>).map(AddressInfoToJSON)),
        'geojson': value.geojson,
        'name': value.name,
    };
}

