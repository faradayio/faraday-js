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
 * Stripe dataset options
 * @export
 * @interface DatasetOptionsStripe
 */
export interface DatasetOptionsStripe {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsStripe
     */
    type: string;
}

export function DatasetOptionsStripeFromJSON(json: any): DatasetOptionsStripe {
    return DatasetOptionsStripeFromJSONTyped(json, false);
}

export function DatasetOptionsStripeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsStripe {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function DatasetOptionsStripeToJSON(value?: DatasetOptionsStripe | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
    };
}

