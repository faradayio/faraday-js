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
exports.DatasetOptionsAwsAuroraMysqlToJSON = exports.DatasetOptionsAwsAuroraMysqlFromJSONTyped = exports.DatasetOptionsAwsAuroraMysqlFromJSON = void 0;
function DatasetOptionsAwsAuroraMysqlFromJSON(json) {
    return DatasetOptionsAwsAuroraMysqlFromJSONTyped(json, false);
}
exports.DatasetOptionsAwsAuroraMysqlFromJSON = DatasetOptionsAwsAuroraMysqlFromJSON;
function DatasetOptionsAwsAuroraMysqlFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'table_name': json['table_name'],
        'type': json['type'],
    };
}
exports.DatasetOptionsAwsAuroraMysqlFromJSONTyped = DatasetOptionsAwsAuroraMysqlFromJSONTyped;
function DatasetOptionsAwsAuroraMysqlToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'table_name': value.table_name,
        'type': value.type,
    };
}
exports.DatasetOptionsAwsAuroraMysqlToJSON = DatasetOptionsAwsAuroraMysqlToJSON;
