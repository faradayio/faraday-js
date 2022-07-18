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
    DatasetOptionsPut,
    DatasetOptionsPutFromJSON,
    DatasetOptionsPutFromJSONTyped,
    DatasetOptionsPutToJSON,
} from './DatasetOptionsPut';
import {
    IdentitySetsPut,
    IdentitySetsPutFromJSON,
    IdentitySetsPutFromJSONTyped,
    IdentitySetsPutToJSON,
} from './IdentitySetsPut';
import {
    OutputToStreamsPut,
    OutputToStreamsPutFromJSON,
    OutputToStreamsPutFromJSONTyped,
    OutputToStreamsPutToJSON,
} from './OutputToStreamsPut';
import {
    OutputToTraitsPut,
    OutputToTraitsPutFromJSON,
    OutputToTraitsPutFromJSONTyped,
    OutputToTraitsPutToJSON,
} from './OutputToTraitsPut';

/**
 * (Parameters used to PUT a value of the `Dataset` type.)
 * 
 * Tabular data describing orders, customers, leads, etc.
 * @export
 * @interface DatasetPut
 */
export interface DatasetPut {
    /**
     * 
     * @type {IdentitySetsPut}
     * @memberof DatasetPut
     */
    identity_sets: IdentitySetsPut;
    /**
     * 
     * @type {DatasetOptionsPut}
     * @memberof DatasetPut
     */
    options: DatasetOptionsPut;
    /**
     * 
     * @type {OutputToStreamsPut}
     * @memberof DatasetPut
     */
    output_to_streams: OutputToStreamsPut;
    /**
     * 
     * @type {OutputToTraitsPut}
     * @memberof DatasetPut
     */
    output_to_traits?: OutputToTraitsPut;
    /**
     * The name of the column that references an ID from an external system.
     * Setting this enables export of data via <a href="/reference/createtarget">`/targets`</a> that is keyed on this field.
     * @type {string}
     * @memberof DatasetPut
     */
    primary_key_column?: string;
}

export function DatasetPutFromJSON(json: any): DatasetPut {
    return DatasetPutFromJSONTyped(json, false);
}

export function DatasetPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'identity_sets': IdentitySetsPutFromJSON(json['identity_sets']),
        'options': DatasetOptionsPutFromJSON(json['options']),
        'output_to_streams': OutputToStreamsPutFromJSON(json['output_to_streams']),
        'output_to_traits': !exists(json, 'output_to_traits') ? undefined : OutputToTraitsPutFromJSON(json['output_to_traits']),
        'primary_key_column': !exists(json, 'primary_key_column') ? undefined : json['primary_key_column'],
    };
}

export function DatasetPutToJSON(value?: DatasetPut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'identity_sets': IdentitySetsPutToJSON(value.identity_sets),
        'options': DatasetOptionsPutToJSON(value.options),
        'output_to_streams': OutputToStreamsPutToJSON(value.output_to_streams),
        'output_to_traits': OutputToTraitsPutToJSON(value.output_to_traits),
        'primary_key_column': value.primary_key_column,
    };
}

