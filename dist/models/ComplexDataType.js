"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Faraday REST API
 * The [Faraday](https://faraday.ai) SDK makes it easy to predict customer behavior using a simple API.
 *
 *
 *
 * NOTE: This file was modified manually. There is a bug in the openapi-generator, which until patched,
 * cannot handle `oneOf` both a primitive and object type. Here we are manually overriding the issue.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplexDataTypeToJSON = exports.ComplexDataTypeFromJSONTyped = exports.ComplexDataTypeFromJSON = void 0;
const ComplexDataTypeOneOf_1 = require("./ComplexDataTypeOneOf");
const PrimitiveDataType_1 = require("./PrimitiveDataType");
function ComplexDataTypeFromJSON(json) {
    if (json === undefined || json === null) {
        return json;
    }
    // if json is an object we have a complex data type
    if (typeof json === "object") {
        return ComplexDataTypeOneOf_1.ComplexDataTypeOneOfFromJSON(json);
    }
    // else we have a primitive data type
    return PrimitiveDataType_1.PrimitiveDataTypeFromJSON(json);
}
exports.ComplexDataTypeFromJSON = ComplexDataTypeFromJSON;
function ComplexDataTypeFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    // if json is an object we have a complex data type
    if (typeof json === "object") {
        return ComplexDataTypeOneOf_1.ComplexDataTypeOneOfFromJSONTyped(json, true);
    }
    // else we have a primitive data type
    return PrimitiveDataType_1.PrimitiveDataTypeFromJSONTyped(json, true);
}
exports.ComplexDataTypeFromJSONTyped = ComplexDataTypeFromJSONTyped;
function ComplexDataTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if (typeof value === "object") {
        return ComplexDataTypeOneOf_1.ComplexDataTypeOneOfToJSON(value);
    }
    return PrimitiveDataType_1.PrimitiveDataTypeToJSON(value);
}
exports.ComplexDataTypeToJSON = ComplexDataTypeToJSON;
