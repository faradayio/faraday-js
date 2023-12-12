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
 * (Parameters used to POST a new value of the `TargetOptionsTheTradeDesk` type.)
 *
 * The Trade Desk target options
 * @export
 * @interface TargetOptionsTheTradeDeskPost
 */
export interface TargetOptionsTheTradeDeskPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsTheTradeDeskPost
     */
    type: string;
}
export declare function TargetOptionsTheTradeDeskPostFromJSON(json: any): TargetOptionsTheTradeDeskPost;
export declare function TargetOptionsTheTradeDeskPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsTheTradeDeskPost;
export declare function TargetOptionsTheTradeDeskPostToJSON(value?: TargetOptionsTheTradeDeskPost | null): any;
