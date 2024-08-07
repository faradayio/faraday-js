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
import { ModelingField } from './ModelingField';
import { Persona } from './Persona';
import { ResourceStatus } from './ResourceStatus';
/**
 * A set of customer personas.
 * @export
 * @interface PersonaSet
 */
export interface PersonaSet {
    /**
     * Is the related cohort using this as the primary persona set?
     * @type {boolean}
     * @memberof PersonaSet
     */
    active?: boolean;
    /**
     * If not null, this resource will no longer receive updates, but will still be visable.
     * @type {Date}
     * @memberof PersonaSet
     */
    archived_at?: Date;
    /**
     *
     * @type {string}
     * @memberof PersonaSet
     */
    cohort_id: string;
    /**
     * When this resource was created.
     * @type {Date}
     * @memberof PersonaSet
     */
    created_at: Date;
    /**
     * Whether to show the persona set in Explore, the map view on https://app.faraday.ai.
     *
     * This will slow down persona set builds.
     * @type {boolean}
     * @memberof PersonaSet
     */
    explore?: boolean;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof PersonaSet
     */
    id: string;
    /**
     * The last time this resource's input was read.
     * @type {Date}
     * @memberof PersonaSet
     */
    last_read_input_at?: Date;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {Date}
     * @memberof PersonaSet
     */
    last_updated_config_at?: Date;
    /**
     * The last time this resource successfully built.
     * @type {Date}
     * @memberof PersonaSet
     */
    last_updated_output_at?: Date;
    /**
     * Specify customer attributes to use in modeling
     * @type {Array<ModelingField>}
     * @memberof PersonaSet
     */
    modeling_fields?: Array<ModelingField>;
    /**
     * Human-readable label for this persona set.
     * @type {string}
     * @memberof PersonaSet
     */
    name: string;
    /**
     * Specify the exact number of clusters (i.e. personas) there should be in the persona set.
     *
     * By default, the optimal value for this parameter is determined automatically.
     *
     * Setting this requires external knowledge and should only be done when the use-case necessitates a specific number of clusters.
     * @type {number}
     * @memberof PersonaSet
     */
    number_of_clusters?: number;
    /**
     * The personas that belong to this persona set
     * @type {Array<Persona>}
     * @memberof PersonaSet
     */
    personas?: Array<Persona>;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof PersonaSet
     */
    resource_type: string;
    /**
     *
     * @type {ResourceStatus}
     * @memberof PersonaSet
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {Date}
     * @memberof PersonaSet
     */
    status_changed_at?: Date;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof PersonaSet
     */
    status_error?: string;
    /**
     * When this resource was last updated.
     * @type {Date}
     * @memberof PersonaSet
     */
    updated_at: Date;
}
export declare function PersonaSetFromJSON(json: any): PersonaSet;
export declare function PersonaSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonaSet;
export declare function PersonaSetToJSON(value?: PersonaSet | null): any;
