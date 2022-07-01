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
 * A string describing the nature of data represented by the trait.
 * 
 * categorical: the field contains one value of a bounded set. Example "favorite_color": one of "red", "blue", or "yellow".
 * multicategorical: the field contains one or more values of a bounded set. 
 * ordinal: the field contains values which have a natural ordering from low to high.  
 * nominal: Anything else. Fields which are boolean in nature (0/1, T/F, true/false) should be set to `nominal`.
 * @export
 * @enum {string}
 */
export enum TraitStatisticalType {
    Categorical = 'categorical',
    Multicategorical = 'multicategorical',
    Ordinal = 'ordinal',
    Nominal = 'nominal'
}

export function TraitStatisticalTypeFromJSON(json: any): TraitStatisticalType {
    return TraitStatisticalTypeFromJSONTyped(json, false);
}

export function TraitStatisticalTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraitStatisticalType {
    return json as TraitStatisticalType;
}

export function TraitStatisticalTypeToJSON(value?: TraitStatisticalType | null): any {
    return value as any;
}

