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
/**
 * A list of lift data for the model. Each lift point consists of a target percentile`x`, an estimated lift over random `y`, and error bounds on the lift `y_min` and `y_max`.
 * @export
 * @interface OutcomePerformanceLiftCurvePoint
 */
export interface OutcomePerformanceLiftCurvePoint {
    /**
     * The quantile-based target percentile. For example, a value of `.1` defines a target percentile specifying the top 10 percent of scores.
     * @type {number}
     * @memberof OutcomePerformanceLiftCurvePoint
     */
    x: number;
    /**
     * The estimated lift over random at the given target percentile.
     * @type {number}
     * @memberof OutcomePerformanceLiftCurvePoint
     */
    y: number;
    /**
     * The upper error bound for `y`.
     * @type {number}
     * @memberof OutcomePerformanceLiftCurvePoint
     */
    y_max: number;
    /**
     * The lower error bound for `y`.
     * @type {number}
     * @memberof OutcomePerformanceLiftCurvePoint
     */
    y_min: number;
}

export function OutcomePerformanceLiftCurvePointFromJSON(json: any): OutcomePerformanceLiftCurvePoint {
    return OutcomePerformanceLiftCurvePointFromJSONTyped(json, false);
}

export function OutcomePerformanceLiftCurvePointFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutcomePerformanceLiftCurvePoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'x': json['x'],
        'y': json['y'],
        'y_max': json['y_max'],
        'y_min': json['y_min'],
    };
}

export function OutcomePerformanceLiftCurvePointToJSON(value?: OutcomePerformanceLiftCurvePoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'x': value.x,
        'y': value.y,
        'y_max': value.y_max,
        'y_min': value.y_min,
    };
}
