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
exports.DatasetOptionsIterableMergePatchToJSON = exports.DatasetOptionsIterableMergePatchFromJSONTyped = exports.DatasetOptionsIterableMergePatchFromJSON = void 0;
function DatasetOptionsIterableMergePatchFromJSON(json) {
    return DatasetOptionsIterableMergePatchFromJSONTyped(json, false);
}
exports.DatasetOptionsIterableMergePatchFromJSON = DatasetOptionsIterableMergePatchFromJSON;
function DatasetOptionsIterableMergePatchFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
    };
}
exports.DatasetOptionsIterableMergePatchFromJSONTyped = DatasetOptionsIterableMergePatchFromJSONTyped;
function DatasetOptionsIterableMergePatchToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
    };
}
exports.DatasetOptionsIterableMergePatchToJSON = DatasetOptionsIterableMergePatchToJSON;
