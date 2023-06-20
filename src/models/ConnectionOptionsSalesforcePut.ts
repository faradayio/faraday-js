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
 * (Parameters used to PUT a value of the `ConnectionOptionsSalesforce` type.)
 * 
 * Salesforce connection options
 * @export
 * @interface ConnectionOptionsSalesforcePut
 */
export interface ConnectionOptionsSalesforcePut {
    /**
     * Password for the Salesforce connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforcePut
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforcePut
     */
    type: string;
    /**
     * Username for the Salesforce connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforcePut
     */
    username?: string;
}

export function ConnectionOptionsSalesforcePutFromJSON(json: any): ConnectionOptionsSalesforcePut {
    return ConnectionOptionsSalesforcePutFromJSONTyped(json, false);
}

export function ConnectionOptionsSalesforcePutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsSalesforcePut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'password': !exists(json, 'password') ? undefined : json['password'],
        'type': json['type'],
        'username': !exists(json, 'username') ? undefined : json['username'],
    };
}

export function ConnectionOptionsSalesforcePutToJSON(value?: ConnectionOptionsSalesforcePut | null): any {
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

