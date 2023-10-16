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
 * (Parameters used to POST a new value of the `ConnectionOptionsHubspot` type.)
 * 
 * HubSpot connection options
 * @export
 * @interface ConnectionOptionsHubspotPost
 */
export interface ConnectionOptionsHubspotPost {
    /**
     * Password for the HubSpot connection
     * @type {string}
     * @memberof ConnectionOptionsHubspotPost
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsHubspotPost
     */
    type: string;
    /**
     * Username for the HubSpot connection
     * @type {string}
     * @memberof ConnectionOptionsHubspotPost
     */
    username?: string;
}

export function ConnectionOptionsHubspotPostFromJSON(json: any): ConnectionOptionsHubspotPost {
    return ConnectionOptionsHubspotPostFromJSONTyped(json, false);
}

export function ConnectionOptionsHubspotPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsHubspotPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'password': !exists(json, 'password') ? undefined : json['password'],
        'type': json['type'],
        'username': !exists(json, 'username') ? undefined : json['username'],
    };
}

export function ConnectionOptionsHubspotPostToJSON(value?: ConnectionOptionsHubspotPost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'password': value.password,
        'type': value.type,
        'username': value.username,
    };
}
