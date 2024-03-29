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
exports.TargetLimitMergePatchToJSON = exports.TargetLimitMergePatchFromJSONTyped = exports.TargetLimitMergePatchFromJSON = void 0;
const TargetLimitPercentileMergePatch_1 = require("./TargetLimitPercentileMergePatch");
const TargetLimitRowCountMergePatch_1 = require("./TargetLimitRowCountMergePatch");
function TargetLimitMergePatchFromJSON(json) {
    return TargetLimitMergePatchFromJSONTyped(json, false);
}
exports.TargetLimitMergePatchFromJSON = TargetLimitMergePatchFromJSON;
function TargetLimitMergePatchFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['method']) {
        case 'percentile':
            return Object.assign(Object.assign({}, TargetLimitPercentileMergePatch_1.TargetLimitPercentileMergePatchFromJSONTyped(json, true)), { method: 'percentile' });
        case 'row_count':
            return Object.assign(Object.assign({}, TargetLimitRowCountMergePatch_1.TargetLimitRowCountMergePatchFromJSONTyped(json, true)), { method: 'row_count' });
        default:
            throw new Error(`No variant of TargetLimitMergePatch exists with 'method=${json['method']}'`);
    }
}
exports.TargetLimitMergePatchFromJSONTyped = TargetLimitMergePatchFromJSONTyped;
function TargetLimitMergePatchToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['method']) {
        case 'percentile':
            return TargetLimitPercentileMergePatch_1.TargetLimitPercentileMergePatchToJSON(value);
        case 'row_count':
            return TargetLimitRowCountMergePatch_1.TargetLimitRowCountMergePatchToJSON(value);
        default:
            throw new Error(`No variant of TargetLimitMergePatch exists with 'method=${value['method']}'`);
    }
}
exports.TargetLimitMergePatchToJSON = TargetLimitMergePatchToJSON;
