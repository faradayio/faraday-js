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
import { DataMapPost } from './DataMapPost';
/**
 *
 * @export
 * @interface DatasetStreamPost
 */
export interface DatasetStreamPost {
    /**
     *
     * @type {DataMapPost}
     * @memberof DatasetStreamPost
     */
    data_map: DataMapPost;
}
export declare function DatasetStreamPostFromJSON(json: any): DatasetStreamPost;
export declare function DatasetStreamPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetStreamPost;
export declare function DatasetStreamPostToJSON(value?: DatasetStreamPost | null): any;