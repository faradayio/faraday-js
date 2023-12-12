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
import { ScopePayloadMergePatch } from './ScopePayloadMergePatch';
import { ScopePopulationMergePatch } from './ScopePopulationMergePatch';
/**
 * (Parameters used to PATCH the `Scope` type.)
 *
 * Instructions on how to produce output data.
 * @export
 * @interface ScopeMergePatch
 */
export interface ScopeMergePatch {
    /**
     * Human-readable label for this scope. Each scope must have a unique name.
     * @type {string}
     * @memberof ScopeMergePatch
     */
    name?: string;
    /**
     *
     * @type {ScopePayloadMergePatch}
     * @memberof ScopeMergePatch
     */
    payload?: ScopePayloadMergePatch;
    /**
     *
     * @type {ScopePopulationMergePatch}
     * @memberof ScopeMergePatch
     */
    population?: ScopePopulationMergePatch;
    /**
     * A preview scope provides only a limited number of output records, but
     * it is not billed.
     * @type {boolean}
     * @memberof ScopeMergePatch
     */
    preview?: boolean;
}
export declare function ScopeMergePatchFromJSON(json: any): ScopeMergePatch;
export declare function ScopeMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScopeMergePatch;
export declare function ScopeMergePatchToJSON(value?: ScopeMergePatch | null): any;
