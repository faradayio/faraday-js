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
exports.TargetTransformPresetIdentifiedToJSON = exports.TargetTransformPresetIdentifiedFromJSONTyped = exports.TargetTransformPresetIdentifiedFromJSON = exports.TargetTransformPresetIdentified = void 0;
/**
 * One of:
 *   * default: Faraday default identified representation
 *   * linkedin: Plaintext upload format for Linkedin
 *   * youtube: Plaintext upload format for Youtube
 *   * klaviyo: Plaintext upload format for Klaviyo
 *   * segment: Plaintext upload format for Segment
 *   * iterable: Plaintext upload format for Iterable
 *   * poplar: Plaintext upload format for Poplar
 *   * salesforce: Plaintext upload format for Salesforce
 *   * hubspot: Plaintext upload format for Hubspot
 *   * liveramp: Plaintext upload format for LiveRamp
 *
 * If not specified `default` is used.
 * @export
 * @enum {string}
 */
var TargetTransformPresetIdentified;
(function (TargetTransformPresetIdentified) {
    TargetTransformPresetIdentified["Default"] = "default";
    TargetTransformPresetIdentified["Linkedin"] = "linkedin";
    TargetTransformPresetIdentified["Youtube"] = "youtube";
    TargetTransformPresetIdentified["Klaviyo"] = "klaviyo";
    TargetTransformPresetIdentified["Segment"] = "segment";
    TargetTransformPresetIdentified["Iterable"] = "iterable";
    TargetTransformPresetIdentified["Poplar"] = "poplar";
    TargetTransformPresetIdentified["Salesforce"] = "salesforce";
    TargetTransformPresetIdentified["Hubspot"] = "hubspot";
    TargetTransformPresetIdentified["Liveramp"] = "liveramp";
})(TargetTransformPresetIdentified = exports.TargetTransformPresetIdentified || (exports.TargetTransformPresetIdentified = {}));
function TargetTransformPresetIdentifiedFromJSON(json) {
    return TargetTransformPresetIdentifiedFromJSONTyped(json, false);
}
exports.TargetTransformPresetIdentifiedFromJSON = TargetTransformPresetIdentifiedFromJSON;
function TargetTransformPresetIdentifiedFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.TargetTransformPresetIdentifiedFromJSONTyped = TargetTransformPresetIdentifiedFromJSONTyped;
function TargetTransformPresetIdentifiedToJSON(value) {
    return value;
}
exports.TargetTransformPresetIdentifiedToJSON = TargetTransformPresetIdentifiedToJSON;