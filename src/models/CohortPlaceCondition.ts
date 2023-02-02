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
/**
 * 
 * @export
 * @interface CohortPlaceCondition
 */
export interface CohortPlaceCondition {
    /**
     * A distance in meters which will be used to expand the Place's geometry. If the place is a set of addresses,
     * then each geocoded address point will be buffered by this amount. If the place is a geometry, the entire geometry will be expanded by this amount.
     * If the place is a GeometryCollect, each geometry will be expanded by this amount.
     * 
     * See the [PostGIS documentation](https://postgis.net/docs/ST_Buffer.html) for visual descriptions of how this expansion, called buffering, works.
     * @type {number}
     * @memberof CohortPlaceCondition
     */
    distance?: number;
    /**
     * By default, Place conditions will select people who intersect the place's geometry. If `invert` is set to `true`, then
     * instead, select people who *do not* intersect the Place's geometry.
     * @type {boolean}
     * @memberof CohortPlaceCondition
     */
    invert?: boolean;
    /**
     * The ID of a Place which should be used to filter this Cohort's membership spatially.
     * @type {string}
     * @memberof CohortPlaceCondition
     */
    place_id: string;
}

export function CohortPlaceConditionFromJSON(json: any): CohortPlaceCondition {
    return CohortPlaceConditionFromJSONTyped(json, false);
}

export function CohortPlaceConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CohortPlaceCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'distance': !exists(json, 'distance') ? undefined : json['distance'],
        'invert': !exists(json, 'invert') ? undefined : json['invert'],
        'place_id': json['place_id'],
    };
}

export function CohortPlaceConditionToJSON(value?: CohortPlaceCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'distance': value.distance,
        'invert': value.invert,
        'place_id': value.place_id,
    };
}
