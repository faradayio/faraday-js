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
 * Salesforce dataset options
 * @export
 * @interface DatasetOptionsSalesforce
 */
export interface DatasetOptionsSalesforce {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSalesforce
     */
    type: string;
}

export function DatasetOptionsSalesforceFromJSON(json: any): DatasetOptionsSalesforce {
    return DatasetOptionsSalesforceFromJSONTyped(json, false);
}

export function DatasetOptionsSalesforceFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsSalesforce {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function DatasetOptionsSalesforceToJSON(value?: DatasetOptionsSalesforce | null): any {
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

