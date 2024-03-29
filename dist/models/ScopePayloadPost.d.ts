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
 * (Parameters used to POST a new value of the `ScopePayload` type.)
 *
 * The data to include for each person in this scope.
 * @export
 * @interface ScopePayloadPost
 */
export interface ScopePayloadPost {
    /**
     * Include additional traits.
     *
     * For traits created through `output_to_traits` via `/datasets`, specify the trait name.
     *
     * For traits from Faraday's Internal Graph (FIG), specify the name prefixed by `fig/` ex. `fig/age`.
     * @type {Array<string>}
     * @memberof ScopePayloadPost
     */
    attributes?: Array<string>;
    /**
     * Specify a list of cohort membership(s) to include. The list can include any cohort, not just those in `population.cohort_ids`.
     * @type {Array<string>}
     * @memberof ScopePayloadPost
     */
    cohort_ids?: Array<string>;
    /**
     * Opt-in to include prediction explainability.
     * @type {boolean}
     * @memberof ScopePayloadPost
     */
    explainability?: boolean;
    /**
     * Include the propensity score(s) from the specified outcome(s).
     * @type {Array<string>}
     * @memberof ScopePayloadPost
     */
    outcome_ids?: Array<string>;
    /**
     * Include the persona assignment(s) from the specified persona set(s).
     * @type {Array<string>}
     * @memberof ScopePayloadPost
     */
    persona_set_ids?: Array<string>;
    /**
     * Include the recommendation(s) from the specified recommender(s).
     *
     * This feature is experimental and subject to change. To enable this feature, contact your account manager.
     * @type {Array<string>}
     * @memberof ScopePayloadPost
     */
    recommender_ids?: Array<string>;
}
export declare function ScopePayloadPostFromJSON(json: any): ScopePayloadPost;
export declare function ScopePayloadPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScopePayloadPost;
export declare function ScopePayloadPostToJSON(value?: ScopePayloadPost | null): any;
