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
exports.DatasetOptionsSalesforceMarketingCloudPutToJSON = exports.DatasetOptionsSalesforceMarketingCloudPutFromJSONTyped = exports.DatasetOptionsSalesforceMarketingCloudPutFromJSON = void 0;
function DatasetOptionsSalesforceMarketingCloudPutFromJSON(json) {
    return DatasetOptionsSalesforceMarketingCloudPutFromJSONTyped(json, false);
}
exports.DatasetOptionsSalesforceMarketingCloudPutFromJSON = DatasetOptionsSalesforceMarketingCloudPutFromJSON;
function DatasetOptionsSalesforceMarketingCloudPutFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'tenant_subdomain': json['tenant_subdomain'],
        'type': json['type'],
    };
}
exports.DatasetOptionsSalesforceMarketingCloudPutFromJSONTyped = DatasetOptionsSalesforceMarketingCloudPutFromJSONTyped;
function DatasetOptionsSalesforceMarketingCloudPutToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'tenant_subdomain': value.tenant_subdomain,
        'type': value.type,
    };
}
exports.DatasetOptionsSalesforceMarketingCloudPutToJSON = DatasetOptionsSalesforceMarketingCloudPutToJSON;
