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
 * (Parameters used to PUT a value of the `TargetOptionsGcpGcsCsv` type.)
 * 
 * GCP Google Cloud Storage (GCS) CSV target options
 * @export
 * @interface TargetOptionsGcpGcsCsvPut
 */
export interface TargetOptionsGcpGcsCsvPut {
    /**
     * CSV delimiter
     * @type {string}
     * @memberof TargetOptionsGcpGcsCsvPut
     */
    delimiter?: string;
    /**
     * Whether files are gzipped.
     * @type {boolean}
     * @memberof TargetOptionsGcpGcsCsvPut
     */
    gzip?: boolean;
    /**
     * The object key inside of the bucket. For example, path/to/my/file.csv. If you enable gzip, best practice is to add .gz to the end. Note: strftime substitutions like %Y-%m-%d are supported.
     * @type {string}
     * @memberof TargetOptionsGcpGcsCsvPut
     */
    object_key: string;
    /**
     * Whether to always quote all fields, even if they don't require it. Some systems require this.
     * @type {boolean}
     * @memberof TargetOptionsGcpGcsCsvPut
     */
    quote_all?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpGcsCsvPut
     */
    type: string;
}

export function TargetOptionsGcpGcsCsvPutFromJSON(json: any): TargetOptionsGcpGcsCsvPut {
    return TargetOptionsGcpGcsCsvPutFromJSONTyped(json, false);
}

export function TargetOptionsGcpGcsCsvPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsGcpGcsCsvPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'delimiter': !exists(json, 'delimiter') ? undefined : json['delimiter'],
        'gzip': !exists(json, 'gzip') ? undefined : json['gzip'],
        'object_key': json['object_key'],
        'quote_all': !exists(json, 'quote_all') ? undefined : json['quote_all'],
        'type': json['type'],
    };
}

export function TargetOptionsGcpGcsCsvPutToJSON(value?: TargetOptionsGcpGcsCsvPut | null): any {
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
