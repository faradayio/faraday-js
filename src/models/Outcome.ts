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
    ResourceStatus,
    ResourceStatusFromJSON,
    ResourceStatusFromJSONTyped,
    ResourceStatusToJSON,
} from './ResourceStatus';

/**
 * A model describing how likely a group of people are to transition from one cohort to another (for example, from a prospect to a customer).
 * @export
 * @interface Outcome
 */
export interface Outcome {
    /**
     * A cohort of people who have attained the desired outcome (for example, if predicting transition from prospect to customer, the attainment cohort should be existing customers).
     * @type {string}
     * @memberof Outcome
     */
    attainment_cohort_id: string;
    /**
     * Human-readable label of the attainment cohort. See /cohorts/{attainment_cohort_id} to edit the attainment cohort or view additional details.
     * @type {string}
     * @memberof Outcome
     */
    attainment_cohort_name?: string;
    /**
     * A cohort of counterexamples - people who have clearly failed to attain the outcome, as opposed to simply being indeterminate. This cohort is optional.
     * @type {string}
     * @memberof Outcome
     */
    attrition_cohort_id?: string;
    /**
     * Human-readable label of the attrition cohort. See /cohorts/{attrition_cohort_id} to edit the attrition cohort or view additional details.
     * @type {string}
     * @memberof Outcome
     */
    attrition_cohort_name?: string;
    /**
     * When this resource was created.
     * @type {Date}
     * @memberof Outcome
     */
    created_at: Date;
    /**
     * A cohort of people who could attain or attrite the desired outcome (for example, if predicting transition from prospect to customer, the eligible cohort should be prospects). If no eligible cohort is specified, the model will use the US population as the eligible cohort.
     * @type {string}
     * @memberof Outcome
     */
    eligible_cohort_id?: string;
    /**
     * Human-readable label of the eligibility cohort. See /cohorts/{eligible_cohort_id} to edit the eligible cohort or view additional details.
     * @type {string}
     * @memberof Outcome
     */
    eligible_cohort_name?: string;
    /**
     * The name of a field or category of fields which should not be considered for this Outcome. Should be used
     * primarily for the purposes of Responsible AI.
     * @type {Array<string>}
     * @memberof Outcome
     */
    feature_blocklist?: Array<string>;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Outcome
     */
    id: string;
    /**
     * Human-readable label for this outcome. Each outcome must have a unique name.
     * @type {string}
     * @memberof Outcome
     */
    name: string;
    /**
     * URL of an HTML report containing information such as the objective of the model, performance, and important features.
     * @type {string}
     * @memberof Outcome
     */
    report_url?: string;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof Outcome
     */
    resource_type: string;
    /**
     * The area under the receiver operating characteristic curve. Typically, the higher the ROC AUC, the better the model.
     * @type {number}
     * @memberof Outcome
     */
    roc_auc?: number;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof Outcome
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {Date}
     * @memberof Outcome
     */
    status_changed_at?: Date;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof Outcome
     */
    status_error?: string;
    /**
     * When this resource was last updated.
     * @type {Date}
     * @memberof Outcome
     */
    updated_at: Date;
}

export function OutcomeFromJSON(json: any): Outcome {
    return OutcomeFromJSONTyped(json, false);
}

export function OutcomeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Outcome {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attainment_cohort_id': json['attainment_cohort_id'],
        'attainment_cohort_name': !exists(json, 'attainment_cohort_name') ? undefined : json['attainment_cohort_name'],
        'attrition_cohort_id': !exists(json, 'attrition_cohort_id') ? undefined : json['attrition_cohort_id'],
        'attrition_cohort_name': !exists(json, 'attrition_cohort_name') ? undefined : json['attrition_cohort_name'],
        'created_at': (new Date(json['created_at'])),
        'eligible_cohort_id': !exists(json, 'eligible_cohort_id') ? undefined : json['eligible_cohort_id'],
        'eligible_cohort_name': !exists(json, 'eligible_cohort_name') ? undefined : json['eligible_cohort_name'],
        'feature_blocklist': !exists(json, 'feature_blocklist') ? undefined : json['feature_blocklist'],
        'id': json['id'],
        'name': json['name'],
        'report_url': !exists(json, 'report_url') ? undefined : json['report_url'],
        'resource_type': json['resource_type'],
        'roc_auc': !exists(json, 'roc_auc') ? undefined : json['roc_auc'],
        'status': ResourceStatusFromJSON(json['status']),
        'status_changed_at': !exists(json, 'status_changed_at') ? undefined : (new Date(json['status_changed_at'])),
        'status_error': !exists(json, 'status_error') ? undefined : json['status_error'],
        'updated_at': (new Date(json['updated_at'])),
    };
}

export function OutcomeToJSON(value?: Outcome | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attainment_cohort_id': value.attainment_cohort_id,
        'attainment_cohort_name': value.attainment_cohort_name,
        'attrition_cohort_id': value.attrition_cohort_id,
        'attrition_cohort_name': value.attrition_cohort_name,
        'created_at': (value.created_at.toISOString()),
        'eligible_cohort_id': value.eligible_cohort_id,
        'eligible_cohort_name': value.eligible_cohort_name,
        'feature_blocklist': value.feature_blocklist,
        'id': value.id,
        'name': value.name,
        'report_url': value.report_url,
        'resource_type': value.resource_type,
        'roc_auc': value.roc_auc,
        'status': ResourceStatusToJSON(value.status),
        'status_changed_at': value.status_changed_at === undefined ? undefined : (value.status_changed_at.toISOString()),
        'status_error': value.status_error,
        'updated_at': (value.updated_at.toISOString()),
    };
}

