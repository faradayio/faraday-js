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
import {
    DatasetOptionsMergePatch,
    DatasetOptionsMergePatchFromJSON,
    DatasetOptionsMergePatchFromJSONTyped,
    DatasetOptionsMergePatchToJSON,
} from './DatasetOptionsMergePatch';
import {
    IdentitySetsMergePatch,
    IdentitySetsMergePatchFromJSON,
    IdentitySetsMergePatchFromJSONTyped,
    IdentitySetsMergePatchToJSON,
} from './IdentitySetsMergePatch';
import {
    OutputToStreamsMergePatch,
    OutputToStreamsMergePatchFromJSON,
    OutputToStreamsMergePatchFromJSONTyped,
    OutputToStreamsMergePatchToJSON,
} from './OutputToStreamsMergePatch';
import {
    OutputToTraitsMergePatch,
    OutputToTraitsMergePatchFromJSON,
    OutputToTraitsMergePatchFromJSONTyped,
    OutputToTraitsMergePatchToJSON,
} from './OutputToTraitsMergePatch';

/**
 * (Parameters used to PATCH the `Dataset` type.)
 * 
 * Tabular data describing orders, customers, leads, etc.
 * @export
 * @interface DatasetMergePatch
 */
export interface DatasetMergePatch {
    /**
     * 
     * @type {IdentitySetsMergePatch}
     * @memberof DatasetMergePatch
     */
    identity_sets?: IdentitySetsMergePatch;
    /**
     * 
     * @type {DatasetOptionsMergePatch}
     * @memberof DatasetMergePatch
     */
    options?: DatasetOptionsMergePatch;
    /**
     * 
     * @type {OutputToStreamsMergePatch}
     * @memberof DatasetMergePatch
     */
    output_to_streams?: OutputToStreamsMergePatch;
    /**
     * 
     * @type {OutputToTraitsMergePatch}
     * @memberof DatasetMergePatch
     */
    output_to_traits?: OutputToTraitsMergePatch | null;
}

export function DatasetMergePatchFromJSON(json: any): DatasetMergePatch {
    return DatasetMergePatchFromJSONTyped(json, false);
}

export function DatasetMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'identity_sets': !exists(json, 'identity_sets') ? undefined : IdentitySetsMergePatchFromJSON(json['identity_sets']),
        'options': !exists(json, 'options') ? undefined : DatasetOptionsMergePatchFromJSON(json['options']),
        'output_to_streams': !exists(json, 'output_to_streams') ? undefined : OutputToStreamsMergePatchFromJSON(json['output_to_streams']),
        'output_to_traits': !exists(json, 'output_to_traits') ? undefined : OutputToTraitsMergePatchFromJSON(json['output_to_traits']),
    };
}

export function DatasetMergePatchToJSON(value?: DatasetMergePatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'identity_sets': IdentitySetsMergePatchToJSON(value.identity_sets),
        'options': DatasetOptionsMergePatchToJSON(value.options),
        'output_to_streams': OutputToStreamsMergePatchToJSON(value.output_to_streams),
        'output_to_traits': OutputToTraitsMergePatchToJSON(value.output_to_traits),
    };
}

