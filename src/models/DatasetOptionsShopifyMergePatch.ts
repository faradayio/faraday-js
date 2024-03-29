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
 * (Parameters used to PATCH the `DatasetOptionsShopify` type.)
 * 
 * Shopify dataset options
 * @export
 * @interface DatasetOptionsShopifyMergePatch
 */
export interface DatasetOptionsShopifyMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsShopifyMergePatch
     */
    type: string;
}

export function DatasetOptionsShopifyMergePatchFromJSON(json: any): DatasetOptionsShopifyMergePatch {
    return DatasetOptionsShopifyMergePatchFromJSONTyped(json, false);
}

export function DatasetOptionsShopifyMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsShopifyMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function DatasetOptionsShopifyMergePatchToJSON(value?: DatasetOptionsShopifyMergePatch | null): any {
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

