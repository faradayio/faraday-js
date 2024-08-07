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

/**
 * The type of match that was found for the lookup request.
 * @export
 * @enum {string}
 */
export enum LookupMatchType {
    AddressFullName = 'address_full_name',
    EmailFullName = 'email_full_name',
    PhoneFullName = 'phone_full_name',
    AddressLastName = 'address_last_name',
    EmailLastName = 'email_last_name',
    PhoneLastName = 'phone_last_name',
    AddressOnly = 'address_only',
    EmailOnly = 'email_only'
}

export function LookupMatchTypeFromJSON(json: any): LookupMatchType {
    return LookupMatchTypeFromJSONTyped(json, false);
}

export function LookupMatchTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LookupMatchType {
    return json as LookupMatchType;
}

export function LookupMatchTypeToJSON(value?: LookupMatchType | null): any {
    return value as any;
}

