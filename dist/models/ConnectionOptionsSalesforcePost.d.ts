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
 * (Parameters used to POST a new value of the `ConnectionOptionsSalesforce` type.)
 *
 * Salesforce connection options
 * @export
 * @interface ConnectionOptionsSalesforcePost
 */
export interface ConnectionOptionsSalesforcePost {
    /**
     * Password for the Salesforce connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforcePost
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforcePost
     */
    type: string;
    /**
     * Username for the Salesforce connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforcePost
     */
    username?: string;
}
export declare function ConnectionOptionsSalesforcePostFromJSON(json: any): ConnectionOptionsSalesforcePost;
export declare function ConnectionOptionsSalesforcePostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsSalesforcePost;
export declare function ConnectionOptionsSalesforcePostToJSON(value?: ConnectionOptionsSalesforcePost | null): any;
