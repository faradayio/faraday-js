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
exports.OutcomeBiasMitigationStrategyToJSON = exports.OutcomeBiasMitigationStrategyFromJSONTyped = exports.OutcomeBiasMitigationStrategyFromJSON = exports.OutcomeBiasMitigationStrategy = void 0;
/**
 * The strategy to use for bias mitigation.
 *
 * Currently supported:
 *   - `none` - ignore bias
 *   - `equality` - neutralize bias
 *   - `equity` - invert bias
 *
 * Bias mitigation will attempt to match the baseline population rate for the dimension of concern (DOC) (`equality`) or overcorrect for past inequality in the direction of the underprivileged DOC (`equity`).
 * @export
 * @enum {string}
 */
var OutcomeBiasMitigationStrategy;
(function (OutcomeBiasMitigationStrategy) {
    OutcomeBiasMitigationStrategy["None"] = "none";
    OutcomeBiasMitigationStrategy["Equality"] = "equality";
    OutcomeBiasMitigationStrategy["Equity"] = "equity";
})(OutcomeBiasMitigationStrategy = exports.OutcomeBiasMitigationStrategy || (exports.OutcomeBiasMitigationStrategy = {}));
function OutcomeBiasMitigationStrategyFromJSON(json) {
    return OutcomeBiasMitigationStrategyFromJSONTyped(json, false);
}
exports.OutcomeBiasMitigationStrategyFromJSON = OutcomeBiasMitigationStrategyFromJSON;
function OutcomeBiasMitigationStrategyFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.OutcomeBiasMitigationStrategyFromJSONTyped = OutcomeBiasMitigationStrategyFromJSONTyped;
function OutcomeBiasMitigationStrategyToJSON(value) {
    return value;
}
exports.OutcomeBiasMitigationStrategyToJSON = OutcomeBiasMitigationStrategyToJSON;