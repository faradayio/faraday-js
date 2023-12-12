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
 * Salesforce Marketing Cloud dataset options
 * @export
 * @interface DatasetOptionsSalesforceMarketingCloud
 */
export interface DatasetOptionsSalesforceMarketingCloud {
    /**
     * The auto-generated ID unique to your Salesforce Marketing Cloud account. Refer to <a href="https://www.stitchdata.com/docs/integrations/saas/salesforce-marketing-cloud#retrieve-tenant-subdomain">the Stitch docs</a>.
     * @type {string}
     * @memberof DatasetOptionsSalesforceMarketingCloud
     */
    tenant_subdomain: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSalesforceMarketingCloud
     */
    type: string;
}
export declare function DatasetOptionsSalesforceMarketingCloudFromJSON(json: any): DatasetOptionsSalesforceMarketingCloud;
export declare function DatasetOptionsSalesforceMarketingCloudFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsSalesforceMarketingCloud;
export declare function DatasetOptionsSalesforceMarketingCloudToJSON(value?: DatasetOptionsSalesforceMarketingCloud | null): any;
