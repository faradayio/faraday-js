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
import { OutcomePredictorsBlockedPost } from './OutcomePredictorsBlockedPost';
/**
 * (Parameters used to POST a new value of the `OutcomePredictors` type.)
 *
 * Provides control over the features used during modeling to predict an outcome.
 * @export
 * @interface OutcomePredictorsPost
 */
export interface OutcomePredictorsPost {
    /**
     *
     * @type {OutcomePredictorsBlockedPost}
     * @memberof OutcomePredictorsPost
     */
    blocked?: OutcomePredictorsBlockedPost;
}
export declare function OutcomePredictorsPostFromJSON(json: any): OutcomePredictorsPost;
export declare function OutcomePredictorsPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutcomePredictorsPost;
export declare function OutcomePredictorsPostToJSON(value?: OutcomePredictorsPost | null): any;
