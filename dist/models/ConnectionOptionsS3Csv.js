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
exports.ConnectionOptionsS3CsvToJSON = exports.ConnectionOptionsS3CsvFromJSONTyped = exports.ConnectionOptionsS3CsvFromJSON = void 0;
function ConnectionOptionsS3CsvFromJSON(json) {
    return ConnectionOptionsS3CsvFromJSONTyped(json, false);
}
exports.ConnectionOptionsS3CsvFromJSON = ConnectionOptionsS3CsvFromJSON;
function ConnectionOptionsS3CsvFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'aws_region': json['aws_region'],
        'bucket_name': json['bucket_name'],
        'type': json['type'],
    };
}
exports.ConnectionOptionsS3CsvFromJSONTyped = ConnectionOptionsS3CsvFromJSONTyped;
function ConnectionOptionsS3CsvToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'aws_region': value.aws_region,
        'bucket_name': value.bucket_name,
        'type': value.type,
    };
}
exports.ConnectionOptionsS3CsvToJSON = ConnectionOptionsS3CsvToJSON;
