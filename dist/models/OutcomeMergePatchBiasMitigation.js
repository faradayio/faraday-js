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
exports.OutcomeMergePatchBiasMitigationToJSON = exports.OutcomeMergePatchBiasMitigationFromJSONTyped = exports.OutcomeMergePatchBiasMitigationFromJSON = void 0;
const runtime_1 = require("../runtime");
const OutcomeBiasMitigationStrategy_1 = require("./OutcomeBiasMitigationStrategy");
function OutcomeMergePatchBiasMitigationFromJSON(json) {
    return OutcomeMergePatchBiasMitigationFromJSONTyped(json, false);
}
exports.OutcomeMergePatchBiasMitigationFromJSON = OutcomeMergePatchBiasMitigationFromJSON;
function OutcomeMergePatchBiasMitigationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'age': !runtime_1.exists(json, 'age') ? undefined : OutcomeBiasMitigationStrategy_1.OutcomeBiasMitigationStrategyFromJSON(json['age']),
        'gender': !runtime_1.exists(json, 'gender') ? undefined : OutcomeBiasMitigationStrategy_1.OutcomeBiasMitigationStrategyFromJSON(json['gender']),
    };
}
exports.OutcomeMergePatchBiasMitigationFromJSONTyped = OutcomeMergePatchBiasMitigationFromJSONTyped;
function OutcomeMergePatchBiasMitigationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'age': OutcomeBiasMitigationStrategy_1.OutcomeBiasMitigationStrategyToJSON(value.age),
        'gender': OutcomeBiasMitigationStrategy_1.OutcomeBiasMitigationStrategyToJSON(value.gender),
    };
}
exports.OutcomeMergePatchBiasMitigationToJSON = OutcomeMergePatchBiasMitigationToJSON;
