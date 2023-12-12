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
exports.TargetOptionsSalesforceMarketingCloudPostToJSON = exports.TargetOptionsSalesforceMarketingCloudPostFromJSONTyped = exports.TargetOptionsSalesforceMarketingCloudPostFromJSON = void 0;
const runtime_1 = require("../runtime");
function TargetOptionsSalesforceMarketingCloudPostFromJSON(json) {
    return TargetOptionsSalesforceMarketingCloudPostFromJSONTyped(json, false);
}
exports.TargetOptionsSalesforceMarketingCloudPostFromJSON = TargetOptionsSalesforceMarketingCloudPostFromJSON;
function TargetOptionsSalesforceMarketingCloudPostFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'api_subdomain': json['api_subdomain'],
        'ftp_private_key': !runtime_1.exists(json, 'ftp_private_key') ? undefined : json['ftp_private_key'],
        'ftp_user_password': !runtime_1.exists(json, 'ftp_user_password') ? undefined : json['ftp_user_password'],
        'ftp_username': !runtime_1.exists(json, 'ftp_username') ? undefined : json['ftp_username'],
        'type': json['type'],
    };
}
exports.TargetOptionsSalesforceMarketingCloudPostFromJSONTyped = TargetOptionsSalesforceMarketingCloudPostFromJSONTyped;
function TargetOptionsSalesforceMarketingCloudPostToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'api_subdomain': value.api_subdomain,
        'ftp_private_key': value.ftp_private_key,
        'ftp_user_password': value.ftp_user_password,
        'ftp_username': value.ftp_username,
        'type': value.type,
    };
}
exports.TargetOptionsSalesforceMarketingCloudPostToJSON = TargetOptionsSalesforceMarketingCloudPostToJSON;
