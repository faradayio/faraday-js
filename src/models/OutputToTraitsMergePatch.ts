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
import {
    TraitDataMapColumnMergePatch,
    TraitDataMapColumnMergePatchFromJSON,
    TraitDataMapColumnMergePatchFromJSONTyped,
    TraitDataMapColumnMergePatchToJSON,
} from './TraitDataMapColumnMergePatch';

/**
 * (Parameters used to PATCH the `OutputToTraits` type.)
 * 
 * A mapping of trait name to trait definition, where the key is what the trait will be called in Faraday's system.
 * 
 * Traits are characteristics about people, that are unrelated to particular events.
 * 
 * When specifying or modifying this parameter, bulk trait declarations specified with `output_all_columns_as_traits` must be null.
 * @export
 * @interface OutputToTraitsMergePatch
 */
export interface OutputToTraitsMergePatch {
    [key: string]: TraitDataMapColumnMergePatch;
}

export function OutputToTraitsMergePatchFromJSON(json: any): OutputToTraitsMergePatch {
    return OutputToTraitsMergePatchFromJSONTyped(json, false);
}

export function OutputToTraitsMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutputToTraitsMergePatch {
    return json;
}

export function OutputToTraitsMergePatchToJSON(value?: OutputToTraitsMergePatch | null): any {
    return value;
}

