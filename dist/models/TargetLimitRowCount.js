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
exports.TargetLimitRowCountToJSON = exports.TargetLimitRowCountFromJSONTyped = exports.TargetLimitRowCountFromJSON = exports.TargetLimitRowCountDirectionEnum = void 0;
const runtime_1 = require("../runtime");
/**
* @export
* @enum {string}
*/
var TargetLimitRowCountDirectionEnum;
(function (TargetLimitRowCountDirectionEnum) {
    TargetLimitRowCountDirectionEnum["Ascending"] = "ascending";
    TargetLimitRowCountDirectionEnum["Descending"] = "descending";
})(TargetLimitRowCountDirectionEnum = exports.TargetLimitRowCountDirectionEnum || (exports.TargetLimitRowCountDirectionEnum = {}));
function TargetLimitRowCountFromJSON(json) {
    return TargetLimitRowCountFromJSONTyped(json, false);
}
exports.TargetLimitRowCountFromJSON = TargetLimitRowCountFromJSON;
function TargetLimitRowCountFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'direction': !runtime_1.exists(json, 'direction') ? undefined : json['direction'],
        'method': json['method'],
        'outcome_id': !runtime_1.exists(json, 'outcome_id') ? undefined : json['outcome_id'],
        'threshold': json['threshold'],
    };
}
exports.TargetLimitRowCountFromJSONTyped = TargetLimitRowCountFromJSONTyped;
function TargetLimitRowCountToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'direction': value.direction,
        'method': value.method,
        'outcome_id': value.outcome_id,
        'threshold': value.threshold,
    };
}
exports.TargetLimitRowCountToJSON = TargetLimitRowCountToJSON;
