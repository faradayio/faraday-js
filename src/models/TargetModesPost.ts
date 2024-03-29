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
    TargetModesAggregatedPost,
    TargetModesAggregatedPostFromJSON,
    TargetModesAggregatedPostFromJSONTyped,
    TargetModesAggregatedPostToJSON,
} from './TargetModesAggregatedPost';
import {
    TargetModesHashedPost,
    TargetModesHashedPostFromJSON,
    TargetModesHashedPostFromJSONTyped,
    TargetModesHashedPostToJSON,
} from './TargetModesHashedPost';
import {
    TargetModesIdentifiedPost,
    TargetModesIdentifiedPostFromJSON,
    TargetModesIdentifiedPostFromJSONTyped,
    TargetModesIdentifiedPostToJSON,
} from './TargetModesIdentifiedPost';
import {
    TargetModesReferencedPost,
    TargetModesReferencedPostFromJSON,
    TargetModesReferencedPostFromJSONTyped,
    TargetModesReferencedPostToJSON,
} from './TargetModesReferencedPost';

/**
 * @type TargetModesPost
 * Choose how the scopes's output should be formatted for this target. The following **modes** are available:
 * 
 * **`aggregated`**
 *   * This option will produce one row per geographical area.
 *   * This option is best for geo-targeted ad campaigns.
 * 
 * **`hashed`**
 *   * Faraday's name, physical address, and email is emitted in hashed form. Data is randomly ordered to prevent re-identification. All payload columns are emitted except raw propensity scores and attributes. 
 *   * This option facilitates digital acquisition use cases.
 * 
 * **`identified`**
 *   * All identifiable information specified by `identity_sets` in source data is emitted in cleartext - see <a href="https://faraday.ai/developers/reference/createdataset">/datasets</a> for more detail. All payload columns are emitted. Your account may have a limit on how many rows can be returned.
 *   * This option is best for direct mail and canvassing campaigns.
 * 
 * **`referenced`**
 *   * This option will produce one row per person based on the identifier column of a dataset of your choice. To protect privacy, this will not include identifying information other than the key you select.
 *   * This option is best for merging data back into your stack.
 * @export
 */
export type TargetModesPost = { mode: 'aggregated' } & TargetModesAggregatedPost | { mode: 'hashed' } & TargetModesHashedPost | { mode: 'identified' } & TargetModesIdentifiedPost | { mode: 'referenced' } & TargetModesReferencedPost;

export function TargetModesPostFromJSON(json: any): TargetModesPost {
    return TargetModesPostFromJSONTyped(json, false);
}

export function TargetModesPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetModesPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['mode']) {
        case 'aggregated':
            return {...TargetModesAggregatedPostFromJSONTyped(json, true), mode: 'aggregated'};
        case 'hashed':
            return {...TargetModesHashedPostFromJSONTyped(json, true), mode: 'hashed'};
        case 'identified':
            return {...TargetModesIdentifiedPostFromJSONTyped(json, true), mode: 'identified'};
        case 'referenced':
            return {...TargetModesReferencedPostFromJSONTyped(json, true), mode: 'referenced'};
        default:
            throw new Error(`No variant of TargetModesPost exists with 'mode=${json['mode']}'`);
    }
}

export function TargetModesPostToJSON(value?: TargetModesPost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['mode']) {
        case 'aggregated':
            return TargetModesAggregatedPostToJSON(value);
        case 'hashed':
            return TargetModesHashedPostToJSON(value);
        case 'identified':
            return TargetModesIdentifiedPostToJSON(value);
        case 'referenced':
            return TargetModesReferencedPostToJSON(value);
        default:
            throw new Error(`No variant of TargetModesPost exists with 'mode=${value['mode']}'`);
    }
}

