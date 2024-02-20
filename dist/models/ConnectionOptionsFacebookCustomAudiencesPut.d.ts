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
 * (Parameters used to PUT a value of the `ConnectionOptionsFacebookCustomAudiences` type.)
 *
 * Facebook Custom Audiences connection options
 * @export
 * @interface ConnectionOptionsFacebookCustomAudiencesPut
 */
export interface ConnectionOptionsFacebookCustomAudiencesPut {
    /**
     * The Facebook ad account ID (numeric).
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiencesPut
     */
    account_id: string;
    /**
     * The Facebook ad account literate.
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiencesPut
     */
    account_literate?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiencesPut
     */
    type: string;
}
export declare function ConnectionOptionsFacebookCustomAudiencesPutFromJSON(json: any): ConnectionOptionsFacebookCustomAudiencesPut;
export declare function ConnectionOptionsFacebookCustomAudiencesPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsFacebookCustomAudiencesPut;
export declare function ConnectionOptionsFacebookCustomAudiencesPutToJSON(value?: ConnectionOptionsFacebookCustomAudiencesPut | null): any;