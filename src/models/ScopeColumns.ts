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
    ScopeColumnsColumnsForMode,
    ScopeColumnsColumnsForModeFromJSON,
    ScopeColumnsColumnsForModeFromJSONTyped,
    ScopeColumnsColumnsForModeToJSON,
} from './ScopeColumnsColumnsForMode';
import {
    ScopePayloadColumn,
    ScopePayloadColumnFromJSON,
    ScopePayloadColumnFromJSONTyped,
    ScopePayloadColumnToJSON,
} from './ScopePayloadColumn';

/**
 * Metadata about the columns in this scope. Useful for advanced target configuration.
 * @export
 * @interface ScopeColumns
 */
export interface ScopeColumns {
    /**
     * 
     * @type {ScopeColumnsColumnsForMode}
     * @memberof ScopeColumns
     */
    columns_for_mode: ScopeColumnsColumnsForMode;
    /**
     * First party identifiers from all dataset `identity_sets` populating this scope.
     * @type {Array<string>}
     * @memberof ScopeColumns
     */
    identity_columns: Array<string>;
    /**
     * Payload columns. The shape is a 1:1 mapping of machine-readable payload column names to human-readable column names.
     * @type {Array<ScopePayloadColumn>}
     * @memberof ScopeColumns
     */
    payload_columns: Array<ScopePayloadColumn>;
}

export function ScopeColumnsFromJSON(json: any): ScopeColumns {
    return ScopeColumnsFromJSONTyped(json, false);
}

export function ScopeColumnsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScopeColumns {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'columns_for_mode': ScopeColumnsColumnsForModeFromJSON(json['columns_for_mode']),
        'identity_columns': json['identity_columns'],
        'payload_columns': ((json['payload_columns'] as Array<any>).map(ScopePayloadColumnFromJSON)),
    };
}

export function ScopeColumnsToJSON(value?: ScopeColumns | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'columns_for_mode': ScopeColumnsColumnsForModeToJSON(value.columns_for_mode),
        'identity_columns': value.identity_columns,
        'payload_columns': ((value.payload_columns as Array<any>).map(ScopePayloadColumnToJSON)),
    };
}

