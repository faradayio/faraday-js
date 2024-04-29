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
 * A broad category describing the flavor of a trait.
 * @export
 * @enum {string}
 */
export enum TraitCategory {
    FigDemography = 'fig/demography',
    FigEnvironment = 'fig/environment',
    FigGeography = 'fig/geography',
    FigIdentity = 'fig/identity',
    FigLifestyle = 'fig/lifestyle',
    FigProperty = 'fig/property',
    FigReachability = 'fig/reachability',
    FigSociety = 'fig/society',
    UserDefined = 'user_defined'
}

export function TraitCategoryFromJSON(json: any): TraitCategory {
    return TraitCategoryFromJSONTyped(json, false);
}

export function TraitCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraitCategory {
    return json as TraitCategory;
}

export function TraitCategoryToJSON(value?: TraitCategory | null): any {
    return value as any;
}

