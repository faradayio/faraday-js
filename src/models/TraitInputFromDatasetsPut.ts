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

import { exists } from "../runtime";
import {
  DataMapColumnFormat,
  DataMapColumnFormatFromJSON,
  DataMapColumnFormatToJSON,
} from "./DataMapColumnFormat";

/**
 *
 * @export
 * @interface TraitInputFromDatasetsPut
 */
export interface TraitInputFromDatasetsPut {
  /**
   * The name of a column in the dataset.
   * @type {string}
   * @memberof TraitInputFromDatasetsPut
   */
  column_name: string;
  /**
   *
   * @type {DataMapColumnFormat}
   * @memberof TraitInputFromDatasetsPut
   */
  format?: DataMapColumnFormat;
  /**
   * A list of values that should be treated as null.
   * @type {Array<string>}
   * @memberof TraitInputFromDatasetsPut
   */
  null_values?: Array<string>;
  /**
   * A mapping of values as they appear in the dataset to how they should be used in models, where the key is what appears in the dataset and value is how it should be interpretted. This is used when multiple distinct values in the source table functionally represent the sme thing, or when combining traits from multiple datasets. Use '*' as the key to capture all values that have been excluded by all other conditions.
   * @type {{ [key: string]: string | number | boolean; }}
   * @memberof TraitInputFromDatasetsPut
   */
  transformation_table?: { [key: string]: string | number | boolean };
}

export function TraitInputFromDatasetsPutFromJSON(
  json: any
): TraitInputFromDatasetsPut {
  return TraitInputFromDatasetsPutFromJSONTyped(json, false);
}

export function TraitInputFromDatasetsPutFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TraitInputFromDatasetsPut {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    column_name: json["column_name"],
    format: !exists(json, "format")
      ? undefined
      : DataMapColumnFormatFromJSON(json["format"]),
    null_values: !exists(json, "null_values") ? undefined : json["null_values"],
    transformation_table: !exists(json, "transformation_table")
      ? undefined
      : json["transformation_table"],
  };
}

export function TraitInputFromDatasetsPutToJSON(
  value?: TraitInputFromDatasetsPut | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    column_name: value.column_name,
    format: DataMapColumnFormatToJSON(value.format),
    null_values: value.null_values,
    transformation_table:
      value.transformation_table === undefined
        ? undefined
        : value.transformation_table,
  };
}
