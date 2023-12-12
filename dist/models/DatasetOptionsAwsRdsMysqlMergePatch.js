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
exports.DatasetOptionsAwsRdsMysqlMergePatchToJSON = exports.DatasetOptionsAwsRdsMysqlMergePatchFromJSONTyped = exports.DatasetOptionsAwsRdsMysqlMergePatchFromJSON = void 0;
const runtime_1 = require("../runtime");
function DatasetOptionsAwsRdsMysqlMergePatchFromJSON(json) {
    return DatasetOptionsAwsRdsMysqlMergePatchFromJSONTyped(json, false);
}
exports.DatasetOptionsAwsRdsMysqlMergePatchFromJSON = DatasetOptionsAwsRdsMysqlMergePatchFromJSON;
function DatasetOptionsAwsRdsMysqlMergePatchFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'table_name': !runtime_1.exists(json, 'table_name') ? undefined : json['table_name'],
        'type': json['type'],
    };
}
exports.DatasetOptionsAwsRdsMysqlMergePatchFromJSONTyped = DatasetOptionsAwsRdsMysqlMergePatchFromJSONTyped;
function DatasetOptionsAwsRdsMysqlMergePatchToJSON(value) {
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
exports.DatasetOptionsAwsRdsMysqlMergePatchToJSON = DatasetOptionsAwsRdsMysqlMergePatchToJSON;
