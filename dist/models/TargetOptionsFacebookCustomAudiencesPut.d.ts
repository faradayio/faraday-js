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
 * (Parameters used to PUT a value of the `TargetOptionsFacebookCustomAudiences` type.)
 *
 * Facebook Custom Audiences target options
 * @export
 * @interface TargetOptionsFacebookCustomAudiencesPut
 */
export interface TargetOptionsFacebookCustomAudiencesPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsFacebookCustomAudiencesPut
     */
    type: string;
}
export declare function TargetOptionsFacebookCustomAudiencesPutFromJSON(json: any): TargetOptionsFacebookCustomAudiencesPut;
export declare function TargetOptionsFacebookCustomAudiencesPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsFacebookCustomAudiencesPut;
export declare function TargetOptionsFacebookCustomAudiencesPutToJSON(value?: TargetOptionsFacebookCustomAudiencesPut | null): any;
