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
export declare enum TraitCategory {
    FigProperty = "fig/property",
    FigIdentity = "fig/identity",
    FigDemography = "fig/demography",
    FigSociety = "fig/society",
    FigEnvironment = "fig/environment",
    FigLifestyle = "fig/lifestyle",
    FigGeography = "fig/geography",
    UserDefined = "user_defined"
}
export declare function TraitCategoryFromJSON(json: any): TraitCategory;
export declare function TraitCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraitCategory;
export declare function TraitCategoryToJSON(value?: TraitCategory | null): any;
