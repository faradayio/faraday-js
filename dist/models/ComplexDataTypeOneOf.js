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
exports.ComplexDataTypeOneOfToJSON = exports.ComplexDataTypeOneOfFromJSONTyped = exports.ComplexDataTypeOneOfFromJSON = exports.ComplexDataTypeOneOfLogicalTypeEnum = void 0;
const runtime_1 = require("../runtime");
const PrimitiveDataType_1 = require("./PrimitiveDataType");
/**
* @export
* @enum {string}
*/
var ComplexDataTypeOneOfLogicalTypeEnum;
(function (ComplexDataTypeOneOfLogicalTypeEnum) {
    ComplexDataTypeOneOfLogicalTypeEnum["Date"] = "date";
    ComplexDataTypeOneOfLogicalTypeEnum["TimestampMillis"] = "timestamp-millis";
    ComplexDataTypeOneOfLogicalTypeEnum["LocalTimestampMillis"] = "local-timestamp-millis";
    ComplexDataTypeOneOfLogicalTypeEnum["Json"] = "json";
    ComplexDataTypeOneOfLogicalTypeEnum["Uuid"] = "uuid";
})(ComplexDataTypeOneOfLogicalTypeEnum = exports.ComplexDataTypeOneOfLogicalTypeEnum || (exports.ComplexDataTypeOneOfLogicalTypeEnum = {}));
function ComplexDataTypeOneOfFromJSON(json) {
    return ComplexDataTypeOneOfFromJSONTyped(json, false);
}
exports.ComplexDataTypeOneOfFromJSON = ComplexDataTypeOneOfFromJSON;
function ComplexDataTypeOneOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'logicalType': !runtime_1.exists(json, 'logicalType') ? undefined : json['logicalType'],
        'type': PrimitiveDataType_1.PrimitiveDataTypeFromJSON(json['type']),
    };
}
exports.ComplexDataTypeOneOfFromJSONTyped = ComplexDataTypeOneOfFromJSONTyped;
function ComplexDataTypeOneOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'logicalType': value.logicalType,
        'type': PrimitiveDataType_1.PrimitiveDataTypeToJSON(value.type),
    };
}
exports.ComplexDataTypeOneOfToJSON = ComplexDataTypeOneOfToJSON;
