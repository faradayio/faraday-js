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
 * (Parameters used to PATCH the `ConnectionOptionsFacebookCustomAudiences` type.)
 *
 * Facebook Custom Audiences connection options
 * @export
 * @interface ConnectionOptionsFacebookCustomAudiencesMergePatch
 */
export interface ConnectionOptionsFacebookCustomAudiencesMergePatch {
    /**
     * The Facebook ad account ID (numeric).
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiencesMergePatch
     */
    account_id?: string;
    /**
     * The Facebook ad account literate.
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiencesMergePatch
     */
    account_literate?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiencesMergePatch
     */
    type: string;
}
export declare function ConnectionOptionsFacebookCustomAudiencesMergePatchFromJSON(json: any): ConnectionOptionsFacebookCustomAudiencesMergePatch;
export declare function ConnectionOptionsFacebookCustomAudiencesMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsFacebookCustomAudiencesMergePatch;
export declare function ConnectionOptionsFacebookCustomAudiencesMergePatchToJSON(value?: ConnectionOptionsFacebookCustomAudiencesMergePatch | null): any;
