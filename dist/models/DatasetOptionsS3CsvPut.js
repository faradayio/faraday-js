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
exports.DatasetOptionsS3CsvPutToJSON = exports.DatasetOptionsS3CsvPutFromJSONTyped = exports.DatasetOptionsS3CsvPutFromJSON = void 0;
const runtime_1 = require("../runtime");
function DatasetOptionsS3CsvPutFromJSON(json) {
    return DatasetOptionsS3CsvPutFromJSONTyped(json, false);
}
exports.DatasetOptionsS3CsvPutFromJSON = DatasetOptionsS3CsvPutFromJSON;
function DatasetOptionsS3CsvPutFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'delimiter': !runtime_1.exists(json, 'delimiter') ? undefined : json['delimiter'],
        'encrypted': !runtime_1.exists(json, 'encrypted') ? undefined : json['encrypted'],
        'header_row': !runtime_1.exists(json, 'header_row') ? undefined : json['header_row'],
        'prefix': json['prefix'],
        'replace_all_with_latest_file': !runtime_1.exists(json, 'replace_all_with_latest_file') ? undefined : json['replace_all_with_latest_file'],
        'type': json['type'],
    };
}
exports.DatasetOptionsS3CsvPutFromJSONTyped = DatasetOptionsS3CsvPutFromJSONTyped;
function DatasetOptionsS3CsvPutToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'delimiter': value.delimiter,
        'encrypted': value.encrypted,
        'header_row': value.header_row,
        'prefix': value.prefix,
        'replace_all_with_latest_file': value.replace_all_with_latest_file,
        'type': value.type,
    };
}
exports.DatasetOptionsS3CsvPutToJSON = DatasetOptionsS3CsvPutToJSON;
