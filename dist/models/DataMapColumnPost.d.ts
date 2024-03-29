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
import { DataMapColumnFormat } from './DataMapColumnFormat';
/**
 *
 * @export
 * @interface DataMapColumnPost
 */
export interface DataMapColumnPost {
    /**
     * The name of a column in the dataset. If format is "static_date_iso8601", then the value provided in this field is used as a static value.
     * @type {string}
     * @memberof DataMapColumnPost
     */
    column_name: string;
    /**
     *
     * @type {DataMapColumnFormat}
     * @memberof DataMapColumnPost
     */
    format?: DataMapColumnFormat;
}
export declare function DataMapColumnPostFromJSON(json: any): DataMapColumnPost;
export declare function DataMapColumnPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataMapColumnPost;
export declare function DataMapColumnPostToJSON(value?: DataMapColumnPost | null): any;
