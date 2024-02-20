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
exports.TargetStructureTransformationToJSON = exports.TargetStructureTransformationFromJSONTyped = exports.TargetStructureTransformationFromJSON = exports.TargetStructureTransformationAggregationEnum = void 0;
const runtime_1 = require("../runtime");
/**
* @export
* @enum {string}
*/
var TargetStructureTransformationAggregationEnum;
(function (TargetStructureTransformationAggregationEnum) {
    TargetStructureTransformationAggregationEnum["Avg"] = "avg";
    TargetStructureTransformationAggregationEnum["Count"] = "count";
    TargetStructureTransformationAggregationEnum["Countif"] = "countif";
})(TargetStructureTransformationAggregationEnum = exports.TargetStructureTransformationAggregationEnum || (exports.TargetStructureTransformationAggregationEnum = {}));
function TargetStructureTransformationFromJSON(json) {
    return TargetStructureTransformationFromJSONTyped(json, false);
}
exports.TargetStructureTransformationFromJSON = TargetStructureTransformationFromJSON;
function TargetStructureTransformationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'aggregation': !runtime_1.exists(json, 'aggregation') ? undefined : json['aggregation'],
        'aggregation_criteria': !runtime_1.exists(json, 'aggregation_criteria') ? undefined : json['aggregation_criteria'],
        'is_identity_col': !runtime_1.exists(json, 'is_identity_col') ? undefined : json['is_identity_col'],
        'output_col': json['output_col'],
        'scope_col': json['scope_col'],
    };
}
exports.TargetStructureTransformationFromJSONTyped = TargetStructureTransformationFromJSONTyped;
function TargetStructureTransformationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'aggregation': value.aggregation,
        'aggregation_criteria': value.aggregation_criteria,
        'is_identity_col': value.is_identity_col,
        'output_col': value.output_col,
        'scope_col': value.scope_col,
    };
}
exports.TargetStructureTransformationToJSON = TargetStructureTransformationToJSON;