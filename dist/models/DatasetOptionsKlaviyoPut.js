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
exports.DatasetOptionsKlaviyoPutToJSON = exports.DatasetOptionsKlaviyoPutFromJSONTyped = exports.DatasetOptionsKlaviyoPutFromJSON = void 0;
function DatasetOptionsKlaviyoPutFromJSON(json) {
    return DatasetOptionsKlaviyoPutFromJSONTyped(json, false);
}
exports.DatasetOptionsKlaviyoPutFromJSON = DatasetOptionsKlaviyoPutFromJSON;
function DatasetOptionsKlaviyoPutFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
    };
}
exports.DatasetOptionsKlaviyoPutFromJSONTyped = DatasetOptionsKlaviyoPutFromJSONTyped;
function DatasetOptionsKlaviyoPutToJSON(value) {
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
exports.DatasetOptionsKlaviyoPutToJSON = DatasetOptionsKlaviyoPutToJSON;
