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
import { DataMapColumnPost } from './DataMapColumnPost';
/**
 * (Parameters used to POST a new value of the `DataMap` type.)
 *
 * A mapping from dataset columns to what they mean. It is recommended to include a "datetime" column if possible, as it will improve the accuracy of models.
 * @export
 * @interface DataMapPost
 */
export interface DataMapPost {
    [key: string]: DataMapColumnPost | any;
    /**
     *
     * @type {DataMapColumnPost}
     * @memberof DataMapPost
     */
    datetime?: DataMapColumnPost;
}
export declare function DataMapPostFromJSON(json: any): DataMapPost;
export declare function DataMapPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataMapPost;
export declare function DataMapPostToJSON(value?: DataMapPost | null): any;
