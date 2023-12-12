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
exports.TargetOptionsHostedCsvToJSON = exports.TargetOptionsHostedCsvFromJSONTyped = exports.TargetOptionsHostedCsvFromJSON = void 0;
const runtime_1 = require("../runtime");
function TargetOptionsHostedCsvFromJSON(json) {
    return TargetOptionsHostedCsvFromJSONTyped(json, false);
}
exports.TargetOptionsHostedCsvFromJSON = TargetOptionsHostedCsvFromJSON;
function TargetOptionsHostedCsvFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'delimiter': !runtime_1.exists(json, 'delimiter') ? undefined : json['delimiter'],
        'gzip': !runtime_1.exists(json, 'gzip') ? undefined : json['gzip'],
        'output_url': !runtime_1.exists(json, 'output_url') ? undefined : json['output_url'],
        'quote_all': !runtime_1.exists(json, 'quote_all') ? undefined : json['quote_all'],
        'type': json['type'],
    };
}
exports.TargetOptionsHostedCsvFromJSONTyped = TargetOptionsHostedCsvFromJSONTyped;
function TargetOptionsHostedCsvToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'delimiter': value.delimiter,
        'gzip': value.gzip,
        'output_url': value.output_url,
        'quote_all': value.quote_all,
        'type': value.type,
    };
}
exports.TargetOptionsHostedCsvToJSON = TargetOptionsHostedCsvToJSON;
