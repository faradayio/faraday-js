"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetOptionsS3CsvMergePatchToJSON = exports.DatasetOptionsS3CsvMergePatchFromJSONTyped = exports.DatasetOptionsS3CsvMergePatchFromJSON = void 0;
const runtime_1 = require("../runtime");
function DatasetOptionsS3CsvMergePatchFromJSON(json) {
    return DatasetOptionsS3CsvMergePatchFromJSONTyped(json, false);
}
exports.DatasetOptionsS3CsvMergePatchFromJSON = DatasetOptionsS3CsvMergePatchFromJSON;
function DatasetOptionsS3CsvMergePatchFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'delimiter': !runtime_1.exists(json, 'delimiter') ? undefined : json['delimiter'],
        'encrypted': !runtime_1.exists(json, 'encrypted') ? undefined : json['encrypted'],
        'prefix': !runtime_1.exists(json, 'prefix') ? undefined : json['prefix'],
        'replace_all_with_latest_file': !runtime_1.exists(json, 'replace_all_with_latest_file') ? undefined : json['replace_all_with_latest_file'],
        'type': json['type'],
    };
}
exports.DatasetOptionsS3CsvMergePatchFromJSONTyped = DatasetOptionsS3CsvMergePatchFromJSONTyped;
function DatasetOptionsS3CsvMergePatchToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'delimiter': value.delimiter,
        'encrypted': value.encrypted,
        'prefix': value.prefix,
        'replace_all_with_latest_file': value.replace_all_with_latest_file,
        'type': value.type,
    };
}
exports.DatasetOptionsS3CsvMergePatchToJSON = DatasetOptionsS3CsvMergePatchToJSON;
