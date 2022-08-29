/* tslint:disable */
/* eslint-disable */
/**
 * Faraday REST API
 * The [Faraday](https://faraday.ai) SDK makes it easy to predict customer behavior using a simple API.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
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
import {
    Persona,
    PersonaFromJSON,
    PersonaFromJSONTyped,
    PersonaToJSON,
} from './Persona';
import {
    ResourceStatus,
    ResourceStatusFromJSON,
    ResourceStatusFromJSONTyped,
    ResourceStatusToJSON,
} from './ResourceStatus';

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
     * A unique ID for this resource.
     * @type {string}
     * @memberof PersonaSet
     */
    id: string;
    /**
     * Specify customer attributes to use in modeling
     * @type {Array<ModelingField>}
     * @memberof PersonaSet
     */
    modeling_fields?: Array<ModelingField>;
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

export function PersonaSetFromJSON(json: any): PersonaSet {
    return PersonaSetFromJSONTyped(json, false);
}

export function PersonaSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonaSet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': !exists(json, 'active') ? undefined : json['active'],
        'cohort_id': json['cohort_id'],
        'created_at': (new Date(json['created_at'])),
        'id': json['id'],
        'modeling_fields': !exists(json, 'modeling_fields') ? undefined : ((json['modeling_fields'] as Array<any>).map(ModelingFieldFromJSON)),
        'personas': !exists(json, 'personas') ? undefined : ((json['personas'] as Array<any>).map(PersonaFromJSON)),
        'resource_type': json['resource_type'],
        'status': ResourceStatusFromJSON(json['status']),
        'status_changed_at': !exists(json, 'status_changed_at') ? undefined : (new Date(json['status_changed_at'])),
        'status_error': !exists(json, 'status_error') ? undefined : json['status_error'],
        'updated_at': (new Date(json['updated_at'])),
    };
}

export function PersonaSetToJSON(value?: PersonaSet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
        'cohort_id': value.cohort_id,
        'created_at': (value.created_at.toISOString()),
        'id': value.id,
        'modeling_fields': value.modeling_fields === undefined ? undefined : ((value.modeling_fields as Array<any>).map(ModelingFieldToJSON)),
        'personas': value.personas === undefined ? undefined : ((value.personas as Array<any>).map(PersonaToJSON)),
        'resource_type': value.resource_type,
        'status': ResourceStatusToJSON(value.status),
        'status_changed_at': value.status_changed_at === undefined ? undefined : (value.status_changed_at.toISOString()),
        'status_error': value.status_error,
        'updated_at': (value.updated_at.toISOString()),
    };
}

