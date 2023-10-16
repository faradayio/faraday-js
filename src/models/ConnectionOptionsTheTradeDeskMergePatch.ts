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
 * (Parameters used to PATCH the `ConnectionOptionsTheTradeDesk` type.)
 * 
 * The Trade Desk connection options
 * @export
 * @interface ConnectionOptionsTheTradeDeskMergePatch
 */
export interface ConnectionOptionsTheTradeDeskMergePatch {
    /**
     * Refer to <a href="https://hightouch.com/docs/destinations/tradedesk#first-party-data-segment-credentials">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsTheTradeDeskMergePatch
     */
    advertiser_id?: string;
    /**
     * To generate an API token you must contact your TradeDesk rep and ask for CRM Data Management Access. Refer to <a href="https://hightouch.com/docs/destinations/tradedesk#crm-data-segment-credentials">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsTheTradeDeskMergePatch
     */
    api_key?: string;
    /**
     * Select a server location of your choice. If unspecified, defaults to 'production'. Refer to <a href="https://hightouch.com/docs/destinations/tradedesk#first-party-data-segment-credentials">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsTheTradeDeskMergePatch
     */
    environment?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsTheTradeDeskMergePatch
     */
    type: string;
}

export function ConnectionOptionsTheTradeDeskMergePatchFromJSON(json: any): ConnectionOptionsTheTradeDeskMergePatch {
    return ConnectionOptionsTheTradeDeskMergePatchFromJSONTyped(json, false);
}

export function ConnectionOptionsTheTradeDeskMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsTheTradeDeskMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'advertiser_id': !exists(json, 'advertiser_id') ? undefined : json['advertiser_id'],
        'api_key': !exists(json, 'api_key') ? undefined : json['api_key'],
        'environment': !exists(json, 'environment') ? undefined : json['environment'],
        'type': json['type'],
    };
}

export function ConnectionOptionsTheTradeDeskMergePatchToJSON(value?: ConnectionOptionsTheTradeDeskMergePatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'advertiser_id': value.advertiser_id,
        'api_key': value.api_key,
        'environment': value.environment,
        'type': value.type,
    };
}
