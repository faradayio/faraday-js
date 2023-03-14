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
    TargetModesAggregatedPut,
    TargetModesAggregatedPutFromJSON,
    TargetModesAggregatedPutFromJSONTyped,
    TargetModesAggregatedPutToJSON,
} from './TargetModesAggregatedPut';
import {
    TargetModesHashedPut,
    TargetModesHashedPutFromJSON,
    TargetModesHashedPutFromJSONTyped,
    TargetModesHashedPutToJSON,
} from './TargetModesHashedPut';
import {
    TargetModesIdentifiedPut,
    TargetModesIdentifiedPutFromJSON,
    TargetModesIdentifiedPutFromJSONTyped,
    TargetModesIdentifiedPutToJSON,
} from './TargetModesIdentifiedPut';
import {
    TargetModesReferencedPut,
    TargetModesReferencedPutFromJSON,
    TargetModesReferencedPutFromJSONTyped,
    TargetModesReferencedPutToJSON,
} from './TargetModesReferencedPut';

/**
 * @type TargetModesPut
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
 *   * All identifiable information specified by `identity_sets` in source data is emitted in cleartext - see <a href="../reference/createdataset">/datasets</a> for more detail. All payload columns are emitted. Your account may have a limit on how many rows can be returned.
 *   * This option is best for direct mail and canvassing campaigns.
 * 
 * **`referenced`**
 *   * This option will produce one row per person based on the identifier column of a dataset of your choice. To protect privacy, this will not include identifying information other than the key you select.
 *   * This option is best for merging data back into your stack.
 * @export
 */
export type TargetModesPut = { mode: 'aggregated' } & TargetModesAggregatedPut | { mode: 'hashed' } & TargetModesHashedPut | { mode: 'identified' } & TargetModesIdentifiedPut | { mode: 'referenced' } & TargetModesReferencedPut;

export function TargetModesPutFromJSON(json: any): TargetModesPut {
    return TargetModesPutFromJSONTyped(json, false);
}

export function TargetModesPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetModesPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['mode']) {
        case 'aggregated':
            return {...TargetModesAggregatedPutFromJSONTyped(json, true), mode: 'aggregated'};
        case 'hashed':
            return {...TargetModesHashedPutFromJSONTyped(json, true), mode: 'hashed'};
        case 'identified':
            return {...TargetModesIdentifiedPutFromJSONTyped(json, true), mode: 'identified'};
        case 'referenced':
            return {...TargetModesReferencedPutFromJSONTyped(json, true), mode: 'referenced'};
        default:
            throw new Error(`No variant of TargetModesPut exists with 'mode=${json['mode']}'`);
    }
}

export function TargetModesPutToJSON(value?: TargetModesPut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['mode']) {
        case 'aggregated':
            return TargetModesAggregatedPutToJSON(value);
        case 'hashed':
            return TargetModesHashedPutToJSON(value);
        case 'identified':
            return TargetModesIdentifiedPutToJSON(value);
        case 'referenced':
            return TargetModesReferencedPutToJSON(value);
        default:
            throw new Error(`No variant of TargetModesPut exists with 'mode=${value['mode']}'`);
    }
}

