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
 * (Parameters used to PUT a value of the `TargetOptionsTheTradeDesk` type.)
 *
 * The Trade Desk target options
 * @export
 * @interface TargetOptionsTheTradeDeskPut
 */
export interface TargetOptionsTheTradeDeskPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsTheTradeDeskPut
     */
    type: string;
}
export declare function TargetOptionsTheTradeDeskPutFromJSON(json: any): TargetOptionsTheTradeDeskPut;
export declare function TargetOptionsTheTradeDeskPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsTheTradeDeskPut;
export declare function TargetOptionsTheTradeDeskPutToJSON(value?: TargetOptionsTheTradeDeskPut | null): any;
