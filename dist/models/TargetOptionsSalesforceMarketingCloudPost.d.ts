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
 * (Parameters used to POST a new value of the `TargetOptionsSalesforceMarketingCloud` type.)
 *
 * Salesforce Marketing Cloud target options
 * @export
 * @interface TargetOptionsSalesforceMarketingCloudPost
 */
export interface TargetOptionsSalesforceMarketingCloudPost {
    /**
     * Subdomain of the API Integration within your installed package in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-server-to-server-package">the HighTouch docs</a>.
     * @type {string}
     * @memberof TargetOptionsSalesforceMarketingCloudPost
     */
    api_subdomain: string;
    /**
     * Private SSH key of the FTP user created in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-ftp-user">the HighTouch docs</a>.
     * @type {string}
     * @memberof TargetOptionsSalesforceMarketingCloudPost
     */
    ftp_private_key?: string;
    /**
     * Password of the FTP user created in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-ftp-user">the HighTouch docs</a>.
     * @type {string}
     * @memberof TargetOptionsSalesforceMarketingCloudPost
     */
    ftp_user_password?: string;
    /**
     * Username of the FTP user created in SFMC. Typically a numeric Marketing Cloud MID. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-ftp-user">the HighTouch docs</a>.
     * @type {string}
     * @memberof TargetOptionsSalesforceMarketingCloudPost
     */
    ftp_username?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSalesforceMarketingCloudPost
     */
    type: string;
}
export declare function TargetOptionsSalesforceMarketingCloudPostFromJSON(json: any): TargetOptionsSalesforceMarketingCloudPost;
export declare function TargetOptionsSalesforceMarketingCloudPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsSalesforceMarketingCloudPost;
export declare function TargetOptionsSalesforceMarketingCloudPostToJSON(value?: TargetOptionsSalesforceMarketingCloudPost | null): any;