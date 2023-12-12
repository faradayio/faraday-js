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
exports.UploadToJSON = exports.UploadFromJSONTyped = exports.UploadFromJSON = void 0;
function UploadFromJSON(json) {
    return UploadFromJSONTyped(json, false);
}
exports.UploadFromJSON = UploadFromJSON;
function UploadFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'created_at': (new Date(json['created_at'])),
        'file_size': json['file_size'],
        'md5_hash': json['md5_hash'],
        'subpath': json['subpath'],
    };
}
exports.UploadFromJSONTyped = UploadFromJSONTyped;
function UploadToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'created_at': (value.created_at.toISOString()),
        'file_size': value.file_size,
        'md5_hash': value.md5_hash,
        'subpath': value.subpath,
    };
}
exports.UploadToJSON = UploadToJSON;
