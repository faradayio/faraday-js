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
import { ResourceStatus } from './ResourceStatus';
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
     * The last time this resource's input was read.
     * @type {Date}
     * @memberof Place
     */
    last_read_input_at?: Date;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {Date}
     * @memberof Place
     */
    last_updated_config_at?: Date;
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
export declare function PlaceFromJSON(json: any): Place;
export declare function PlaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Place;
export declare function PlaceToJSON(value?: Place | null): any;
