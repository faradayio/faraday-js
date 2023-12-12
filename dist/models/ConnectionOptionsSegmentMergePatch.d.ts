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
 * (Parameters used to PATCH the `ConnectionOptionsSegment` type.)
 *
 * Segment connection options
 * @export
 * @interface ConnectionOptionsSegmentMergePatch
 */
export interface ConnectionOptionsSegmentMergePatch {
    /**
     * API Key for the Segment connection
     * @type {string}
     * @memberof ConnectionOptionsSegmentMergePatch
     */
    api_key?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSegmentMergePatch
     */
    type: string;
}
export declare function ConnectionOptionsSegmentMergePatchFromJSON(json: any): ConnectionOptionsSegmentMergePatch;
export declare function ConnectionOptionsSegmentMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsSegmentMergePatch;
export declare function ConnectionOptionsSegmentMergePatchToJSON(value?: ConnectionOptionsSegmentMergePatch | null): any;
