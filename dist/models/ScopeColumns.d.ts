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
import { ScopeColumnsColumnsForMode } from './ScopeColumnsColumnsForMode';
import { ScopePayloadColumn } from './ScopePayloadColumn';
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
export declare function ScopeColumnsFromJSON(json: any): ScopeColumns;
export declare function ScopeColumnsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScopeColumns;
export declare function ScopeColumnsToJSON(value?: ScopeColumns | null): any;
