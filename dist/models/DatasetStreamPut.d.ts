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
import { DataMapPut } from './DataMapPut';
/**
 *
 * @export
 * @interface DatasetStreamPut
 */
export interface DatasetStreamPut {
    /**
     *
     * @type {DataMapPut}
     * @memberof DatasetStreamPut
     */
    data_map: DataMapPut;
}
export declare function DatasetStreamPutFromJSON(json: any): DatasetStreamPut;
export declare function DatasetStreamPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetStreamPut;
export declare function DatasetStreamPutToJSON(value?: DatasetStreamPut | null): any;
