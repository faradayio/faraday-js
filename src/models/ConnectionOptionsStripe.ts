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
 * Stripe connection options
 * @export
 * @interface ConnectionOptionsStripe
 */
export interface ConnectionOptionsStripe {
    /**
     * Password for the Stripe connection
     * @type {string}
     * @memberof ConnectionOptionsStripe
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsStripe
     */
    type: string;
    /**
     * Username for the Stripe connection
     * @type {string}
     * @memberof ConnectionOptionsStripe
     */
    username?: string;
}

export function ConnectionOptionsStripeFromJSON(json: any): ConnectionOptionsStripe {
    return ConnectionOptionsStripeFromJSONTyped(json, false);
}

export function ConnectionOptionsStripeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsStripe {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'password': !exists(json, 'password') ? undefined : json['password'],
        'type': json['type'],
        'username': !exists(json, 'username') ? undefined : json['username'],
    };
}

export function ConnectionOptionsStripeToJSON(value?: ConnectionOptionsStripe | null): any {
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

