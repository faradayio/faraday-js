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
 * (Parameters used to PUT a value of the `TargetOptionsSegment` type.)
 *
 * Segment target options
 * @export
 * @interface TargetOptionsSegmentPut
 */
export interface TargetOptionsSegmentPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSegmentPut
     */
    type: string;
}
export declare function TargetOptionsSegmentPutFromJSON(json: any): TargetOptionsSegmentPut;
export declare function TargetOptionsSegmentPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsSegmentPut;
export declare function TargetOptionsSegmentPutToJSON(value?: TargetOptionsSegmentPut | null): any;
