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
 * Salesforce connection options
 * @export
 * @interface ConnectionOptionsSalesforce
 */
export interface ConnectionOptionsSalesforce {
    /**
     * Password for the Salesforce connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforce
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforce
     */
    type: string;
    /**
     * Username for the Salesforce connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforce
     */
    username?: string;
}
export declare function ConnectionOptionsSalesforceFromJSON(json: any): ConnectionOptionsSalesforce;
export declare function ConnectionOptionsSalesforceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsSalesforce;
export declare function ConnectionOptionsSalesforceToJSON(value?: ConnectionOptionsSalesforce | null): any;