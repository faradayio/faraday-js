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
import { TargetFilterPut } from './TargetFilterPut';
import { TargetLimitPut } from './TargetLimitPut';
import { TargetModesPut } from './TargetModesPut';
import { TargetOptionsPut } from './TargetOptionsPut';
import { TargetStructureTransformation } from './TargetStructureTransformation';
/**
 * (Parameters used to PUT a value of the `Target` type.)
 *
 * Instructions on how to export output data defined by a scope.
 *
 * There are three types of targets:
 * <table>
 * <thead>
 * <tr><th>Target type</th><th>Description</th><th>API requirement</th></tr>
 * </thead>
 * <tbody>
 * <tr><td><strong>Publication</strong></td><td>Faraday <em>hosts</em> your predictions for convenient retrieval as needed.</td><td>Specify a <code>type</code> of <code>hosted_csv</code> in <code>options</code>. Omit <code>connection_id</code>.</td></tr>
 * <tr><td><strong>Replication</strong></td><td>Faraday copies your predictions to systems <em>you</em> control. You may then push them to third parties like Facebook, Google Ads, etc.</td><td>Specify a valid <code>connection_id</code> and the corresponding <code>type</code> of the connection in <code>options</code>.</td></tr>
 * <tr><td><strong>Managed</strong></td><td>Faraday manages a push to third parties like Facebook, Google Ads, and more.</td><td>Must be on an enterprise plan. Contact Customer Success to set up.</td></tr>
 * </tbody>
 * </table>
 * @export
 * @interface TargetPut
 */
export interface TargetPut {
    /**
     * If this is a replication (externally-hosted) target, the UUID of a connection - see <a href="https://faraday.ai/developers/reference/createconnection">/connections</a> for more detail.
     *
     * If this is not a replication target, omit this parameter.
     * @type {string}
     * @memberof TargetPut
     */
    connection_id?: string;
    /**
     * By default, targets include all columns in <a href="https://faraday.ai/developers/reference/createtargetpreview">the target preview</a>, with no name changes.
     *
     * Users may use this parameter to specify their own set of "structure transformations" to override the default selection, order, and name of exported columns.
     *
     * The shape of this parameter is an array of objects where the order of the columns to export is given by the order of the array. Each item represents a 1:1 mapping of scope input column to target output column. Only those columns specified here are emitted in the target output.
     * @type {Array<TargetStructureTransformation>}
     * @memberof TargetPut
     */
    custom_structure?: Array<TargetStructureTransformation>;
    /**
     *
     * @type {TargetFilterPut}
     * @memberof TargetPut
     */
    filter?: TargetFilterPut;
    /**
     * By default, column names are exported in a machine-readable format with underscored uuids.
     *
     * Setting this to `true` replaces ids with literates in the exported column names.
     * @type {boolean}
     * @memberof TargetPut
     */
    human_readable?: boolean;
    /**
     *
     * @type {TargetLimitPut}
     * @memberof TargetPut
     */
    limit?: TargetLimitPut;
    /**
     * A user-friendly name of the target.
     * @type {string}
     * @memberof TargetPut
     */
    name: string;
    /**
     *
     * @type {TargetOptionsPut}
     * @memberof TargetPut
     */
    options: TargetOptionsPut;
    /**
     * **Deprecated: use `custom_structure`.**
     *
     * By default, targets include all columns in <a href="https://faraday.ai/developers/reference/createtargetpreview">the target preview</a>, with no name changes.
     * This parameter is an override of the default that enables an explicit mapping of columns that should be included in the target export, along with the exported column name.
     * Each key is the name the column originally had, and each value is the desired name.
     * Example:
     * ```
     * {
     *   "person_first_name": "first_name",
     *   "person_last_name": "last_name",
     *   "city": "city"
     * }
     * ```
     * In the example above, the target will only include the "first_name", "last_name", and "city" columns.
     * @type {{ [key: string]: string; }}
     * @memberof TargetPut
     */
    payload_map?: {
        [key: string]: string;
    };
    /**
     *
     * @type {TargetModesPut}
     * @memberof TargetPut
     */
    representation: TargetModesPut;
}
export declare function TargetPutFromJSON(json: any): TargetPut;
export declare function TargetPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetPut;
export declare function TargetPutToJSON(value?: TargetPut | null): any;
