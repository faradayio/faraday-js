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
 * Poplar connection options
 * @export
 * @interface ConnectionOptionsPoplar
 */
export interface ConnectionOptionsPoplar {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsPoplar
     */
    type: string;
}
export declare function ConnectionOptionsPoplarFromJSON(json: any): ConnectionOptionsPoplar;
export declare function ConnectionOptionsPoplarFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsPoplar;
export declare function ConnectionOptionsPoplarToJSON(value?: ConnectionOptionsPoplar | null): any;
