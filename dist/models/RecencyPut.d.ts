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
import { RecencyOccurrence } from './RecencyOccurrence';
/**
 * (Parameters used to PUT a value of the `Recency` type.)
 *
 * Basing cohort on recency of event
 * @export
 * @interface RecencyPut
 */
export interface RecencyPut {
    /**
     * Event must have occurred no more than N days ago
     * @type {number}
     * @memberof RecencyPut
     */
    max_days?: number;
    /**
     * Event must have occurred at least N days ago
     * @type {number}
     * @memberof RecencyPut
     */
    min_days?: number;
    /**
     *
     * @type {RecencyOccurrence}
     * @memberof RecencyPut
     */
    occurrence: RecencyOccurrence;
}
export declare function RecencyPutFromJSON(json: any): RecencyPut;
export declare function RecencyPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecencyPut;
export declare function RecencyPutToJSON(value?: RecencyPut | null): any;
