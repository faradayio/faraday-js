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
import { DataMapColumnFormat } from "./DataMapColumnFormat";
/**
 *
 * @export
 * @interface TraitInputFromDatasetsMergePatch
 */
export interface TraitInputFromDatasetsMergePatch {
    /**
     * The name of a column in the dataset.
     * @type {string}
     * @memberof TraitInputFromDatasetsMergePatch
     */
    column_name?: string;
    /**
     *
     * @type {DataMapColumnFormat}
     * @memberof TraitInputFromDatasetsMergePatch
     */
    format?: DataMapColumnFormat | null;
    /**
     * A list of values that should be treated as null.
     * @type {Array<string>}
     * @memberof TraitInputFromDatasetsMergePatch
     */
    null_values?: Array<string> | null;
    /**
     * A mapping of values as they appear in the dataset to how they should be used in models, where the key is what appears in the dataset and value is how it should be interpretted. This is used when multiple distinct values in the source table functionally represent the sme thing, or when combining traits from multiple datasets. Use '*' as the key to capture all values that have been excluded by all other conditions.
     * @type {{ [key: string]: string | number | boolean; }}
     * @memberof TraitInputFromDatasetsMergePatch
     */
    transformation_table?: {
        [key: string]: string | number | boolean;
    } | null;
}
export declare function TraitInputFromDatasetsMergePatchFromJSON(json: any): TraitInputFromDatasetsMergePatch;
export declare function TraitInputFromDatasetsMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraitInputFromDatasetsMergePatch;
export declare function TraitInputFromDatasetsMergePatchToJSON(value?: TraitInputFromDatasetsMergePatch | null): any;
