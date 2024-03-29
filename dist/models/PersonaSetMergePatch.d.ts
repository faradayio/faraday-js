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
 * (Parameters used to PATCH the `PersonaSet` type.)
 *
 * A set of customer personas.
 * @export
 * @interface PersonaSetMergePatch
 */
export interface PersonaSetMergePatch {
    /**
     * Whether to show the persona set in Explore, the map view on https://app.faraday.ai.
     *
     * This will slow down persona set builds.
     * @type {boolean}
     * @memberof PersonaSetMergePatch
     */
    explore?: boolean | null;
    /**
     * Human-readable label for this persona set.
     * @type {string}
     * @memberof PersonaSetMergePatch
     */
    name?: string;
    /**
     * Specify the exact number of clusters (i.e. personas) there should be in the persona set.
     *
     * By default, the optimal value for this parameter is determined automatically.
     *
     * Setting this requires external knowledge and should only be done when the use-case necessitates a specific number of clusters.
     * @type {number}
     * @memberof PersonaSetMergePatch
     */
    number_of_clusters?: number | null;
}
export declare function PersonaSetMergePatchFromJSON(json: any): PersonaSetMergePatch;
export declare function PersonaSetMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonaSetMergePatch;
export declare function PersonaSetMergePatchToJSON(value?: PersonaSetMergePatch | null): any;
