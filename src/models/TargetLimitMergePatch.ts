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

import {
    TargetLimitPercentileMergePatch,
    TargetLimitPercentileMergePatchFromJSON,
    TargetLimitPercentileMergePatchFromJSONTyped,
    TargetLimitPercentileMergePatchToJSON,
} from './TargetLimitPercentileMergePatch';
import {
    TargetLimitRowCountMergePatch,
    TargetLimitRowCountMergePatchFromJSON,
    TargetLimitRowCountMergePatchFromJSONTyped,
    TargetLimitRowCountMergePatchToJSON,
} from './TargetLimitRowCountMergePatch';

/**
 * @type TargetLimitMergePatch
 * Restrict the number of rows exported in a target.
 * - To apply an absolute row limit, use `row_count`.
 * - **Deprecated:** To filter by percentile scores, use `percentile` (use `filter outcome_percentile` instead).
 * Target limits are not supported for targets with options.type = "lookup_api"
 * @export
 */
export type TargetLimitMergePatch = { method: 'percentile' } & TargetLimitPercentileMergePatch | { method: 'row_count' } & TargetLimitRowCountMergePatch;

export function TargetLimitMergePatchFromJSON(json: any): TargetLimitMergePatch {
    return TargetLimitMergePatchFromJSONTyped(json, false);
}

export function TargetLimitMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetLimitMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['method']) {
        case 'percentile':
            return {...TargetLimitPercentileMergePatchFromJSONTyped(json, true), method: 'percentile'};
        case 'row_count':
            return {...TargetLimitRowCountMergePatchFromJSONTyped(json, true), method: 'row_count'};
        default:
            throw new Error(`No variant of TargetLimitMergePatch exists with 'method=${json['method']}'`);
    }
}

export function TargetLimitMergePatchToJSON(value?: TargetLimitMergePatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['method']) {
        case 'percentile':
            return TargetLimitPercentileMergePatchToJSON(value);
        case 'row_count':
            return TargetLimitRowCountMergePatchToJSON(value);
        default:
            throw new Error(`No variant of TargetLimitMergePatch exists with 'method=${value['method']}'`);
    }
}

