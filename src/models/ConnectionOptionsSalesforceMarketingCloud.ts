/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * Salesforce Marketing Cloud connection options
 * @export
 * @interface ConnectionOptionsSalesforceMarketingCloud
 */
export interface ConnectionOptionsSalesforceMarketingCloud {
    /**
     * Client ID of the API Integration within your installed package in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-server-to-server-package">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsSalesforceMarketingCloud
     */
    client_id: string;
    /**
     * Client secret of the API Integration within your installed package in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-server-to-server-package">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsSalesforceMarketingCloud
     */
    client_secret: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforceMarketingCloud
     */
    type: string;
}

export function ConnectionOptionsSalesforceMarketingCloudFromJSON(json: any): ConnectionOptionsSalesforceMarketingCloud {
    return ConnectionOptionsSalesforceMarketingCloudFromJSONTyped(json, false);
}

export function ConnectionOptionsSalesforceMarketingCloudFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsSalesforceMarketingCloud {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'client_id': json['client_id'],
        'client_secret': json['client_secret'],
        'type': json['type'],
    };
}

export function ConnectionOptionsSalesforceMarketingCloudToJSON(value?: ConnectionOptionsSalesforceMarketingCloud | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'client_id': value.client_id,
        'client_secret': value.client_secret,
        'type': value.type,
    };
}

