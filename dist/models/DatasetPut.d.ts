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
import { DatasetOptionsPut } from './DatasetOptionsPut';
import { IdentitySetsPut } from './IdentitySetsPut';
import { OutputToStreamsPut } from './OutputToStreamsPut';
import { OutputToTraitsPut } from './OutputToTraitsPut';
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
     * An identifying name for this dataset.
     * @type {string}
     * @memberof DatasetPut
     */
    name: string;
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
    output_to_streams?: OutputToStreamsPut;
    /**
     *
     * @type {OutputToTraitsPut}
     * @memberof DatasetPut
     */
    output_to_traits?: OutputToTraitsPut;
    /**
     * A dataset in preview mode will only detect columns and produce a data preview, but not ingest the data.
     *
     * Defaults to undefined, which is equivalent to false.
     * @type {boolean}
     * @memberof DatasetPut
     */
    preview?: boolean;
    /**
     * The name of the column that references an ID from an external system.
     *
     * Setting this enables export of data via <a href="/reference/createtarget">`/targets`</a> that is keyed on this field.
     * @type {string}
     * @memberof DatasetPut
     */
    reference_key_column?: string;
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
     * @memberof DatasetPut
     */
    upsert_columns?: Array<string>;
}
export declare function DatasetPutFromJSON(json: any): DatasetPut;
export declare function DatasetPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetPut;
export declare function DatasetPutToJSON(value?: DatasetPut | null): any;
