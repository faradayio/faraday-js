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
exports.TargetOptionsIterableMergePatchToJSON = exports.TargetOptionsIterableMergePatchFromJSONTyped = exports.TargetOptionsIterableMergePatchFromJSON = void 0;
const runtime_1 = require("../runtime");
function TargetOptionsIterableMergePatchFromJSON(json) {
    return TargetOptionsIterableMergePatchFromJSONTyped(json, false);
}
exports.TargetOptionsIterableMergePatchFromJSON = TargetOptionsIterableMergePatchFromJSON;
function TargetOptionsIterableMergePatchFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'api_key': !runtime_1.exists(json, 'api_key') ? undefined : json['api_key'],
        'project_identifier': !runtime_1.exists(json, 'project_identifier') ? undefined : json['project_identifier'],
        'type': json['type'],
    };
}
exports.TargetOptionsIterableMergePatchFromJSONTyped = TargetOptionsIterableMergePatchFromJSONTyped;
function TargetOptionsIterableMergePatchToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'api_key': value.api_key,
        'project_identifier': value.project_identifier,
        'type': value.type,
    };
}
exports.TargetOptionsIterableMergePatchToJSON = TargetOptionsIterableMergePatchToJSON;
