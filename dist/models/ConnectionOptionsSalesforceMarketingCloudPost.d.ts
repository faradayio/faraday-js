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
 * (Parameters used to POST a new value of the `ConnectionOptionsSalesforceMarketingCloud` type.)
 *
 * Salesforce Marketing Cloud connection options
 * @export
 * @interface ConnectionOptionsSalesforceMarketingCloudPost
 */
export interface ConnectionOptionsSalesforceMarketingCloudPost {
    /**
     * Client ID of the API Integration within your installed package in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-server-to-server-package">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsSalesforceMarketingCloudPost
     */
    client_id: string;
    /**
     * Client secret of the API Integration within your installed package in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-server-to-server-package">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsSalesforceMarketingCloudPost
     */
    client_secret: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforceMarketingCloudPost
     */
    type: string;
}
export declare function ConnectionOptionsSalesforceMarketingCloudPostFromJSON(json: any): ConnectionOptionsSalesforceMarketingCloudPost;
export declare function ConnectionOptionsSalesforceMarketingCloudPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsSalesforceMarketingCloudPost;
export declare function ConnectionOptionsSalesforceMarketingCloudPostToJSON(value?: ConnectionOptionsSalesforceMarketingCloudPost | null): any;