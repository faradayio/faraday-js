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
exports.InvoiceToJSON = exports.InvoiceFromJSONTyped = exports.InvoiceFromJSON = void 0;
function InvoiceFromJSON(json) {
    return InvoiceFromJSONTyped(json, false);
}
exports.InvoiceFromJSON = InvoiceFromJSON;
function InvoiceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': json['amount'],
        'due_date': (new Date(json['due_date'])),
        'effective_date': (new Date(json['effective_date'])),
        'paid': json['paid'],
    };
}
exports.InvoiceFromJSONTyped = InvoiceFromJSONTyped;
function InvoiceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'due_date': (value.due_date.toISOString().substr(0, 10)),
        'effective_date': (value.effective_date.toISOString().substr(0, 10)),
        'paid': value.paid,
    };
}
exports.InvoiceToJSON = InvoiceToJSON;
