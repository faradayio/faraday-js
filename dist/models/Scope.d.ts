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
import { ResourceStatus } from './ResourceStatus';
import { ScopeColumns } from './ScopeColumns';
import { ScopePayload } from './ScopePayload';
import { ScopePopulation } from './ScopePopulation';
/**
 * Instructions on how to produce output data.
 * @export
 * @interface Scope
 */
export interface Scope {
    /**
     * If not null, this resource will no longer receive updates, but will still be visable.
     * @type {Date}
     * @memberof Scope
     */
    archived_at?: Date;
    /**
     *
     * @type {ScopeColumns}
     * @memberof Scope
     */
    columns?: ScopeColumns;
    /**
     * When this resource was created.
     * @type {Date}
     * @memberof Scope
     */
    created_at: Date;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Scope
     */
    id: string;
    /**
     * The last time this resource's input was read.
     * @type {Date}
     * @memberof Scope
     */
    last_read_input_at?: Date;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {Date}
     * @memberof Scope
     */
    last_updated_config_at?: Date;
    /**
     * The last time this resource successfully built.
     * @type {Date}
     * @memberof Scope
     */
    last_updated_output_at?: Date;
    /**
     * Human-readable label for this scope. Each scope must have a unique name.
     * @type {string}
     * @memberof Scope
     */
    name: string;
    /**
     *
     * @type {ScopePayload}
     * @memberof Scope
     */
    payload: ScopePayload;
    /**
     *
     * @type {ScopePopulation}
     * @memberof Scope
     */
    population: ScopePopulation;
    /**
     * Count of the population. If a person appears in multiple cohorts, they are only counted once.
     * @type {number}
     * @memberof Scope
     */
    population_count?: number;
    /**
     * A preview scope provides only a limited number of output records, but
     * it is not billed.
     * @type {boolean}
     * @memberof Scope
     */
    preview: boolean;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof Scope
     */
    resource_type: string;
    /**
     *
     * @type {ResourceStatus}
     * @memberof Scope
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {Date}
     * @memberof Scope
     */
    status_changed_at?: Date;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof Scope
     */
    status_error?: string;
    /**
     * When this resource was last updated.
     * @type {Date}
     * @memberof Scope
     */
    updated_at: Date;
}
export declare function ScopeFromJSON(json: any): Scope;
export declare function ScopeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Scope;
export declare function ScopeToJSON(value?: Scope | null): any;
