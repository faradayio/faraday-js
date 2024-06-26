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
import { PersonaDetails } from './PersonaDetails';
/**
 * A set of people who have more in common with each other than they do with members of other personas in the persona set.
 * @export
 * @interface Persona
 */
export interface Persona {
    /**
     * An image used to represent this persona (only available if demographics (age and gender) are included in the model)
     * @type {string}
     * @memberof Persona
     */
    avatar?: string;
    /**
     *
     * @type {PersonaDetails}
     * @memberof Persona
     */
    details?: PersonaDetails;
    /**
     *
     * @type {string}
     * @memberof Persona
     */
    id: string;
    /**
     * The number of individuals that match this persona within the cohort used to generate the persona set.
     * @type {number}
     * @memberof Persona
     */
    individuals_count?: number;
    /**
     * A human-readable label for this persona.
     * @type {string}
     * @memberof Persona
     */
    name: string;
}
export declare function PersonaFromJSON(json: any): Persona;
export declare function PersonaFromJSONTyped(json: any, ignoreDiscriminator: boolean): Persona;
export declare function PersonaToJSON(value?: Persona | null): any;
