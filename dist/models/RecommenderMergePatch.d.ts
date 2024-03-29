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
/**
 * (Parameters used to PATCH the `Recommender` type.)
 *
 * Recommender resources are used to predict future associations (e.g. future purchase). They are based on an event stream containing all previous associations such as an order event stream or a product rating event stream
 *
 * This feature is experimental and subject to change. To enable this feature, contact your account manager.
 * @export
 * @interface RecommenderMergePatch
 */
export interface RecommenderMergePatch {
    /**
     * Human-readable label for this recommender. Each recommender must have a unique name.
     * @type {string}
     * @memberof RecommenderMergePatch
     */
    name?: string;
    /**
     * Name of the stream to use for recommendations
     * @type {string}
     * @memberof RecommenderMergePatch
     */
    stream_name?: string;
    /**
     * Name of the stream property
     * @type {string}
     * @memberof RecommenderMergePatch
     */
    stream_property_name?: string;
}
export declare function RecommenderMergePatchFromJSON(json: any): RecommenderMergePatch;
export declare function RecommenderMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecommenderMergePatch;
export declare function RecommenderMergePatchToJSON(value?: RecommenderMergePatch | null): any;
