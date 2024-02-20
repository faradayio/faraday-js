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
import { DatasetOptionsMergePatch } from './DatasetOptionsMergePatch';
import { IdentitySetsMergePatch } from './IdentitySetsMergePatch';
import { OutputToStreamsMergePatch } from './OutputToStreamsMergePatch';
import { OutputToTraitsMergePatch } from './OutputToTraitsMergePatch';
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
     * An identifying name for this dataset.
     * @type {string}
     * @memberof DatasetMergePatch
     */
    name?: string;
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
    output_to_streams?: OutputToStreamsMergePatch | null;
    /**
     *
     * @type {OutputToTraitsMergePatch}
     * @memberof DatasetMergePatch
     */
    output_to_traits?: OutputToTraitsMergePatch | null;
    /**
     * A dataset in preview mode will only detect columns and produce a data preview, but not ingest the data.
     *
     * Defaults to undefined, which is equivalent to false.
     * @type {boolean}
     * @memberof DatasetMergePatch
     */
    preview?: boolean | null;
    /**
     * The name of the column that references an ID from an external system.
     *
     * Setting this enables export of data via <a href="/reference/createtarget">`/targets`</a> that is keyed on this field.
     * @type {string}
     * @memberof DatasetMergePatch
     */
    reference_key_column?: string | null;
    /**
     * A column or set of columns that uniquely identify an input row. If
     * multiple rows are ingested with identical values in the columns
     * specified by `upsert_columns`, the newest will be used.
     *
     * Cannot currently be used with `incremental_column`.
     *
     * If neither `upsert_columns` nor `incremental_column` are
     * specified, each unique row will be ingested once.
     * @type {Array<string>}
     * @memberof DatasetMergePatch
     */
    upsert_columns?: Array<string> | null;
}
export declare function DatasetMergePatchFromJSON(json: any): DatasetMergePatch;
export declare function DatasetMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetMergePatch;
export declare function DatasetMergePatchToJSON(value?: DatasetMergePatch | null): any;