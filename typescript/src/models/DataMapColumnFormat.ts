/* tslint:disable */
/* eslint-disable */
/**
 * Faraday REST API
 * The [Faraday](https://faraday.ai) SDK makes it easy to predict customer behavior using a simple API.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Specify the format of a column in the dataset
 * @export
 * @enum {string}
 */
export enum DataMapColumnFormat {
    CurrencyCents = 'currency_cents',
    CurrencyDollars = 'currency_dollars',
    DateIso8601 = 'date_iso8601',
    DateMonthDayFullyear = 'date_month_day_fullyear',
    DateMonthDayShortyear = 'date_month_day_shortyear',
    DateMonthDayFullyearHoursMinutes = 'date_month_day_fullyear_hours_minutes',
    DateMonthDayFullyearHoursMinutesSeconds = 'date_month_day_fullyear_hours_minutes_seconds',
    ListCommaSeparated = 'list_comma_separated',
    ListSemicolonSeparated = 'list_semicolon_separated',
    ListSingleValue = 'list_single_value'
}

export function DataMapColumnFormatFromJSON(json: any): DataMapColumnFormat {
    return DataMapColumnFormatFromJSONTyped(json, false);
}

export function DataMapColumnFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataMapColumnFormat {
    return json as DataMapColumnFormat;
}

export function DataMapColumnFormatToJSON(value?: DataMapColumnFormat | null): any {
    return value as any;
}

