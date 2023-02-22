/* tslint:disable */
/* eslint-disable */
/**
 * Faraday REST API
 * The [Faraday](https://faraday.ai) SDK makes it easy to predict customer behavior using a simple API.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * (Parameters used to PATCH the `TargetOptionsGcpGcsCsv` type.)
 * 
 * GCS target options
 * @export
 * @interface TargetOptionsGcpGcsCsvMergePatch
 */
export interface TargetOptionsGcpGcsCsvMergePatch {
    /**
     * CSV delimiter
     * @type {string}
     * @memberof TargetOptionsGcpGcsCsvMergePatch
     */
    delimiter?: string | null;
    /**
     * Whether files are gzipped.
     * @type {boolean}
     * @memberof TargetOptionsGcpGcsCsvMergePatch
     */
    gzip?: boolean | null;
    /**
     * The object key inside of the bucket. For example, path/to/my/file.csv. If you enable gzip, best practice is to add .gz to the end. Note: strftime substitutions like %Y-%m-%d are supported.
     * @type {string}
     * @memberof TargetOptionsGcpGcsCsvMergePatch
     */
    object_key?: string;
    /**
     * Whether to always quote all fields, even if they don't require it. Some systems require this.
     * @type {boolean}
     * @memberof TargetOptionsGcpGcsCsvMergePatch
     */
    quote_all?: boolean | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpGcsCsvMergePatch
     */
    type: string;
}

export function TargetOptionsGcpGcsCsvMergePatchFromJSON(json: any): TargetOptionsGcpGcsCsvMergePatch {
    return TargetOptionsGcpGcsCsvMergePatchFromJSONTyped(json, false);
}

export function TargetOptionsGcpGcsCsvMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsGcpGcsCsvMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'delimiter': !exists(json, 'delimiter') ? undefined : json['delimiter'],
        'gzip': !exists(json, 'gzip') ? undefined : json['gzip'],
        'object_key': !exists(json, 'object_key') ? undefined : json['object_key'],
        'quote_all': !exists(json, 'quote_all') ? undefined : json['quote_all'],
        'type': json['type'],
    };
}

export function TargetOptionsGcpGcsCsvMergePatchToJSON(value?: TargetOptionsGcpGcsCsvMergePatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'delimiter': value.delimiter,
        'gzip': value.gzip,
        'object_key': value.object_key,
        'quote_all': value.quote_all,
        'type': value.type,
    };
}

