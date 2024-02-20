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
import { AddressInfo } from './AddressInfo';
/**
 * (Parameters used to POST a new value of the `Place` type.)
 *
 * A geospatial area or set of addresses which can be used as a spatial filter when defining other resources.
 * @export
 * @interface PlacePost
 */
export interface PlacePost {
    /**
     *
     * @type {Array<AddressInfo>}
     * @memberof PlacePost
     */
    addresses?: Array<AddressInfo>;
    /**
     * A GeoJSON Geometry, as defined in the [GeoJSON specification](https://www.rfc-editor.org/rfc/rfc7946#section-3.1)
     *
     * The longitude and latitude units of this geometry are expected to be in decimal degrees, using the
     * WGS84 coordinate reference system, also known by the SRID 4326. https://www.rfc-editor.org/rfc/rfc7946#section-4
     * @type {object}
     * @memberof PlacePost
     */
    geojson?: object;
    /**
     * Human-readable label for this place. Names must be unique. Uniqueness is case-insensitive.
     * @type {string}
     * @memberof PlacePost
     */
    name: string;
}
export declare function PlacePostFromJSON(json: any): PlacePost;
export declare function PlacePostFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlacePost;
export declare function PlacePostToJSON(value?: PlacePost | null): any;