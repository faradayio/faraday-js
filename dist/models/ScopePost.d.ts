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
import { ScopePayloadPost } from './ScopePayloadPost';
import { ScopePopulationPost } from './ScopePopulationPost';
/**
 * (Parameters used to POST a new value of the `Scope` type.)
 *
 * Instructions on how to produce output data.
 * @export
 * @interface ScopePost
 */
export interface ScopePost {
    /**
     * Human-readable label for this scope. Each scope must have a unique name.
     * @type {string}
     * @memberof ScopePost
     */
    name: string;
    /**
     *
     * @type {ScopePayloadPost}
     * @memberof ScopePost
     */
    payload: ScopePayloadPost;
    /**
     *
     * @type {ScopePopulationPost}
     * @memberof ScopePost
     */
    population: ScopePopulationPost;
    /**
     * A preview scope provides only a limited number of output records, but
     * it is not billed.
     * @type {boolean}
     * @memberof ScopePost
     */
    preview: boolean;
}
export declare function ScopePostFromJSON(json: any): ScopePost;
export declare function ScopePostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScopePost;
export declare function ScopePostToJSON(value?: ScopePost | null): any;
