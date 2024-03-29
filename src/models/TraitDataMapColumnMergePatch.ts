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

import { exists, mapValues } from "../runtime";
import {
  DataMapColumnFormat,
  DataMapColumnFormatFromJSON,
  DataMapColumnFormatFromJSONTyped,
  DataMapColumnFormatToJSON,
} from "./DataMapColumnFormat";

/**
 *
 * @export
 * @interface TraitDataMapColumnMergePatch
 */
export interface TraitDataMapColumnMergePatch {
  /**
   * The name of a column in the dataset.
   * @type {string}
   * @memberof TraitDataMapColumnMergePatch
   */
  column_name?: string;
  /**
   *
   * @type {DataMapColumnFormat}
   * @memberof TraitDataMapColumnMergePatch
   */
  format?: DataMapColumnFormat | null;
  /**
   * A mapping of values as they appear in the dataset to how they should be used in models, where the key is what appears in the dataset and value is how it should be interpretted. This is used when multiple distinct values in the source table functionally represent the sme thing, or when combining traits from multiple datasets. Use '*' as the key to capture all values that have been excluded by all other conditions.
   * @type {{ [key: string]: string | number | boolean; }}
   * @memberof TraitDataMapColumnMergePatch
   */
  transformation_table?: { [key: string]: string | number | boolean } | null;
}

export function TraitDataMapColumnMergePatchFromJSON(
  json: any
): TraitDataMapColumnMergePatch {
  return TraitDataMapColumnMergePatchFromJSONTyped(json, false);
}

export function TraitDataMapColumnMergePatchFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TraitDataMapColumnMergePatch {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    column_name: !exists(json, "column_name") ? undefined : json["column_name"],
    format: !exists(json, "format")
      ? undefined
      : DataMapColumnFormatFromJSON(json["format"]),
    transformation_table: !exists(json, "transformation_table")
      ? undefined
      : json["transformation_table"],
  };
}

export function TraitDataMapColumnMergePatchToJSON(
  value?: TraitDataMapColumnMergePatch | null
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
    transformation_table:
      value.transformation_table === undefined
        ? undefined
        : value.transformation_table === null
        ? null
        : value.transformation_table,
  };
}
