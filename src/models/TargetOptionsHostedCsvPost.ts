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
 * (Parameters used to POST a new value of the `TargetOptionsHostedCsv` type.)
 * 
 * CSV target options
 * @export
 * @interface TargetOptionsHostedCsvPost
 */
export interface TargetOptionsHostedCsvPost {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof TargetOptionsHostedCsvPost
     */
    delimiter?: string;
    /**
     * Whether files are gzipped.
     * @type {boolean}
     * @memberof TargetOptionsHostedCsvPost
     */
    gzip?: boolean;
    /**
     * Whether to always quote all fields, even if they don't require it. Some systems require this.
     * @type {boolean}
     * @memberof TargetOptionsHostedCsvPost
     */
    quote_all?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsHostedCsvPost
     */
    type: string;
}

export function TargetOptionsHostedCsvPostFromJSON(json: any): TargetOptionsHostedCsvPost {
    return TargetOptionsHostedCsvPostFromJSONTyped(json, false);
}

export function TargetOptionsHostedCsvPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsHostedCsvPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'delimiter': !exists(json, 'delimiter') ? undefined : json['delimiter'],
        'gzip': !exists(json, 'gzip') ? undefined : json['gzip'],
        'quote_all': !exists(json, 'quote_all') ? undefined : json['quote_all'],
        'type': json['type'],
    };
}

export function TargetOptionsHostedCsvPostToJSON(value?: TargetOptionsHostedCsvPost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'delimiter': value.delimiter,
        'gzip': value.gzip,
        'quote_all': value.quote_all,
        'type': value.type,
    };
}

