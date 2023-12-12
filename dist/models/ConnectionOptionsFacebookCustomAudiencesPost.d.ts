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
 * (Parameters used to POST a new value of the `ConnectionOptionsFacebookCustomAudiences` type.)
 *
 * Facebook Custom Audiences connection options
 * @export
 * @interface ConnectionOptionsFacebookCustomAudiencesPost
 */
export interface ConnectionOptionsFacebookCustomAudiencesPost {
    /**
     * The Facebook ad account ID (numeric).
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiencesPost
     */
    account_id: string;
    /**
     * The Facebook ad account literate.
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiencesPost
     */
    account_literate?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiencesPost
     */
    type: string;
}
export declare function ConnectionOptionsFacebookCustomAudiencesPostFromJSON(json: any): ConnectionOptionsFacebookCustomAudiencesPost;
export declare function ConnectionOptionsFacebookCustomAudiencesPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsFacebookCustomAudiencesPost;
export declare function ConnectionOptionsFacebookCustomAudiencesPostToJSON(value?: ConnectionOptionsFacebookCustomAudiencesPost | null): any;
