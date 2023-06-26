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
    TraitDataMapColumnPut,
    TraitDataMapColumnPutFromJSON,
    TraitDataMapColumnPutFromJSONTyped,
    TraitDataMapColumnPutToJSON,
} from './TraitDataMapColumnPut';

/**
 * (Parameters used to PUT a value of the `OutputToTraits` type.)
 * 
 * A mapping of trait name to trait definition, where the key is what the trait will be called in Faraday's system.
 * 
 * Traits are characteristics about people, that are unrelated to particular events.
 * @export
 * @interface OutputToTraitsPut
 */
export interface OutputToTraitsPut {
    [key: string]: TraitDataMapColumnPut;
}

export function OutputToTraitsPutFromJSON(json: any): OutputToTraitsPut {
    return OutputToTraitsPutFromJSONTyped(json, false);
}

export function OutputToTraitsPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutputToTraitsPut {
    return json;
}

export function OutputToTraitsPutToJSON(value?: OutputToTraitsPut | null): any {
    return value;
}

