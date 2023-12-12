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
 * (Parameters used to POST a new value of the `ScopePopulation` type.)
 *
 * The people to include in a scope. Leave `cohort_ids` empty to include the entire US population.
 * @export
 * @interface ScopePopulationPost
 */
export interface ScopePopulationPost {
    /**
     * Include people from the specified cohorts in this scope.
     * @type {Array<string>}
     * @memberof ScopePopulationPost
     */
    cohort_ids: Array<string>;
    /**
     * Exclude people from the specified cohorts in this scope.
     * @type {Array<string>}
     * @memberof ScopePopulationPost
     */
    exclusion_cohort_ids?: Array<string>;
}
export declare function ScopePopulationPostFromJSON(json: any): ScopePopulationPost;
export declare function ScopePopulationPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScopePopulationPost;
export declare function ScopePopulationPostToJSON(value?: ScopePopulationPost | null): any;
