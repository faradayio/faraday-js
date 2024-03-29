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

import { exists, mapValues } from '../runtime';
import {
    ModelingField,
    ModelingFieldFromJSON,
    ModelingFieldFromJSONTyped,
    ModelingFieldToJSON,
} from './ModelingField';

/**
 * (Parameters used to POST a new value of the `PersonaSet` type.)
 * 
 * A set of customer personas.
 * @export
 * @interface PersonaSetPost
 */
export interface PersonaSetPost {
    /**
     * 
     * @type {string}
     * @memberof PersonaSetPost
     */
    cohort_id: string;
    /**
     * Whether to show the persona set in Explore, the map view on https://app.faraday.ai.
     * 
     * This will slow down persona set builds.
     * @type {boolean}
     * @memberof PersonaSetPost
     */
    explore?: boolean;
    /**
     * Specify customer attributes to use in modeling
     * @type {Array<ModelingField>}
     * @memberof PersonaSetPost
     */
    modeling_fields?: Array<ModelingField>;
    /**
     * Human-readable label for this persona set.
     * @type {string}
     * @memberof PersonaSetPost
     */
    name: string;
    /**
     * Specify the exact number of clusters (i.e. personas) there should be in the persona set.
     * 
     * By default, the optimal value for this parameter is determined automatically.
     * 
     * Setting this requires external knowledge and should only be done when the use-case necessitates a specific number of clusters.
     * @type {number}
     * @memberof PersonaSetPost
     */
    number_of_clusters?: number;
}

export function PersonaSetPostFromJSON(json: any): PersonaSetPost {
    return PersonaSetPostFromJSONTyped(json, false);
}

export function PersonaSetPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonaSetPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cohort_id': json['cohort_id'],
        'explore': !exists(json, 'explore') ? undefined : json['explore'],
        'modeling_fields': !exists(json, 'modeling_fields') ? undefined : ((json['modeling_fields'] as Array<any>).map(ModelingFieldFromJSON)),
        'name': json['name'],
        'number_of_clusters': !exists(json, 'number_of_clusters') ? undefined : json['number_of_clusters'],
    };
}

export function PersonaSetPostToJSON(value?: PersonaSetPost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cohort_id': value.cohort_id,
        'explore': value.explore,
        'modeling_fields': value.modeling_fields === undefined ? undefined : ((value.modeling_fields as Array<any>).map(ModelingFieldToJSON)),
        'name': value.name,
        'number_of_clusters': value.number_of_clusters,
    };
}

