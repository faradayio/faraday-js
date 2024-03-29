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
exports.TraitStatisticalTypeToJSON = exports.TraitStatisticalTypeFromJSONTyped = exports.TraitStatisticalTypeFromJSON = exports.TraitStatisticalType = void 0;
/**
 * A string describing the nature of data represented by the trait.
 *
 * categorical: the field contains one value of a bounded set. Example "favorite_color": one of "red", "blue", or "yellow".
 * multicategorical: the field contains one or more values of a bounded set.
 * ordinal: the field contains values which have a natural ordering from low to high.
 * nominal: Anything else. Fields which are boolean in nature (0/1, T/F, true/false) should be set to `nominal`.
 * @export
 * @enum {string}
 */
var TraitStatisticalType;
(function (TraitStatisticalType) {
    TraitStatisticalType["Categorical"] = "categorical";
    TraitStatisticalType["Multicategorical"] = "multicategorical";
    TraitStatisticalType["Ordinal"] = "ordinal";
    TraitStatisticalType["Nominal"] = "nominal";
})(TraitStatisticalType = exports.TraitStatisticalType || (exports.TraitStatisticalType = {}));
function TraitStatisticalTypeFromJSON(json) {
    return TraitStatisticalTypeFromJSONTyped(json, false);
}
exports.TraitStatisticalTypeFromJSON = TraitStatisticalTypeFromJSON;
function TraitStatisticalTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.TraitStatisticalTypeFromJSONTyped = TraitStatisticalTypeFromJSONTyped;
function TraitStatisticalTypeToJSON(value) {
    return value;
}
exports.TraitStatisticalTypeToJSON = TraitStatisticalTypeToJSON;
