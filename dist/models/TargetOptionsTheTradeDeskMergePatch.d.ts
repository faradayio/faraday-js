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
 * (Parameters used to PATCH the `TargetOptionsTheTradeDesk` type.)
 *
 * The Trade Desk target options
 * @export
 * @interface TargetOptionsTheTradeDeskMergePatch
 */
export interface TargetOptionsTheTradeDeskMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsTheTradeDeskMergePatch
     */
    type: string;
}
export declare function TargetOptionsTheTradeDeskMergePatchFromJSON(json: any): TargetOptionsTheTradeDeskMergePatch;
export declare function TargetOptionsTheTradeDeskMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsTheTradeDeskMergePatch;
export declare function TargetOptionsTheTradeDeskMergePatchToJSON(value?: TargetOptionsTheTradeDeskMergePatch | null): any;