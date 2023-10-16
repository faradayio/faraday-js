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
    OutcomePerformanceLiftCurvePoint,
    OutcomePerformanceLiftCurvePointFromJSON,
    OutcomePerformanceLiftCurvePointFromJSONTyped,
    OutcomePerformanceLiftCurvePointToJSON,
} from './OutcomePerformanceLiftCurvePoint';
import {
    OutcomePerformanceRocCurvePoint,
    OutcomePerformanceRocCurvePointFromJSON,
    OutcomePerformanceRocCurvePointFromJSONTyped,
    OutcomePerformanceRocCurvePointToJSON,
} from './OutcomePerformanceRocCurvePoint';
import {
    TabularData,
    TabularDataFromJSON,
    TabularDataFromJSONTyped,
    TabularDataToJSON,
} from './TabularData';

/**
 * Performance metrics for a propensity model, optionally over a tenure range.
 * @export
 * @interface OutcomePerformanceModel
 */
export interface OutcomePerformanceModel {
    /**
     * 
     * @type {Array<OutcomePerformanceLiftCurvePoint>}
     * @memberof OutcomePerformanceModel
     */
    lift_curve: Array<OutcomePerformanceLiftCurvePoint>;
    /**
     * 
     * @type {TabularData}
     * @memberof OutcomePerformanceModel
     */
    lift_table: TabularData;
    /**
     * Average of lift at average conversion rate (r), (1-0.75 * r), (1-0.5*r), and (1-0.25*r).
     * @type {number}
     * @memberof OutcomePerformanceModel
     */
    lift_value: number;
    /**
     * 
     * @type {TabularData}
     * @memberof OutcomePerformanceModel
     */
    metrics_table: TabularData;
    /**
     * The area under the receiver operating characteristic curve.
     * @type {number}
     * @memberof OutcomePerformanceModel
     */
    roc_auc: number;
    /**
     * 
     * @type {Array<OutcomePerformanceRocCurvePoint>}
     * @memberof OutcomePerformanceModel
     */
    roc_curve: Array<OutcomePerformanceRocCurvePoint>;
    /**
     * When the tenure range ends measured in days. The value can be null if no tenure range applies to this model. The value can also be null if the range is unbounded.
     * @type {number}
     * @memberof OutcomePerformanceModel
     */
    tenure_end?: number;
    /**
     * When the tenure range starts measured in days. The value can be null if no tenure range applies to this model.
     * @type {number}
     * @memberof OutcomePerformanceModel
     */
    tenure_start?: number;
}

export function OutcomePerformanceModelFromJSON(json: any): OutcomePerformanceModel {
    return OutcomePerformanceModelFromJSONTyped(json, false);
}

export function OutcomePerformanceModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutcomePerformanceModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lift_curve': ((json['lift_curve'] as Array<any>).map(OutcomePerformanceLiftCurvePointFromJSON)),
        'lift_table': TabularDataFromJSON(json['lift_table']),
        'lift_value': json['lift_value'],
        'metrics_table': TabularDataFromJSON(json['metrics_table']),
        'roc_auc': json['roc_auc'],
        'roc_curve': ((json['roc_curve'] as Array<any>).map(OutcomePerformanceRocCurvePointFromJSON)),
        'tenure_end': !exists(json, 'tenure_end') ? undefined : json['tenure_end'],
        'tenure_start': !exists(json, 'tenure_start') ? undefined : json['tenure_start'],
    };
}

export function OutcomePerformanceModelToJSON(value?: OutcomePerformanceModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lift_curve': ((value.lift_curve as Array<any>).map(OutcomePerformanceLiftCurvePointToJSON)),
        'lift_table': TabularDataToJSON(value.lift_table),
        'lift_value': value.lift_value,
        'metrics_table': TabularDataToJSON(value.metrics_table),
        'roc_auc': value.roc_auc,
        'roc_curve': ((value.roc_curve as Array<any>).map(OutcomePerformanceRocCurvePointToJSON)),
        'tenure_end': value.tenure_end,
        'tenure_start': value.tenure_start,
    };
}

