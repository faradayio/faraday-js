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
 * 
 * @export
 * @interface ArchiveConfig
 */
export interface ArchiveConfig {
    /**
     * Only allow the following resources to be archived/unarchived.
     * If a downstream or upstream resource would be archived/unarchived, and is not in this list, throw an error.
     * @type {Array<string>}
     * @memberof ArchiveConfig
     */
    cascade_to?: Array<string>;
    /**
     * When archiving a resource, if this is set to true, archive the resource and all its downstream resources. 
     * When unarchiving a resource, if this is set to true, unarchive the resource and all its upstream resources.
     * If false, and there are downstream/upstream resource that would be archived/unarchived, throw an error.
     * @type {boolean}
     * @memberof ArchiveConfig
     */
    cascade_to_all?: boolean;
}

export function ArchiveConfigFromJSON(json: any): ArchiveConfig {
    return ArchiveConfigFromJSONTyped(json, false);
}

export function ArchiveConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArchiveConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cascade_to': !exists(json, 'cascade_to') ? undefined : json['cascade_to'],
        'cascade_to_all': !exists(json, 'cascade_to_all') ? undefined : json['cascade_to_all'],
    };
}

export function ArchiveConfigToJSON(value?: ArchiveConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cascade_to': value.cascade_to,
        'cascade_to_all': value.cascade_to_all,
    };
}
