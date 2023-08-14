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
    OutcomeBiasMitigationStrategy,
    OutcomeBiasMitigationStrategyFromJSON,
    OutcomeBiasMitigationStrategyFromJSONTyped,
    OutcomeBiasMitigationStrategyToJSON,
} from './OutcomeBiasMitigationStrategy';

/**
 * The strategy to be applied to gender and/or age to mitigate or reverse the bias found in the attainment population.
 * 
 * Though the spec appears you can combine different mitigation strategies per dimension of concern (age=equity, gender=equality), API runtime validation will prevent it for now. Later we may support this so the spec is designed for future proofing. Note: age=none, gender=equity is allowed.
 * @export
 * @interface OutcomeMergePatchBiasMitigation
 */
export interface OutcomeMergePatchBiasMitigation {
    /**
     * 
     * @type {OutcomeBiasMitigationStrategy}
     * @memberof OutcomeMergePatchBiasMitigation
     */
    age?: OutcomeBiasMitigationStrategy;
    /**
     * 
     * @type {OutcomeBiasMitigationStrategy}
     * @memberof OutcomeMergePatchBiasMitigation
     */
    gender?: OutcomeBiasMitigationStrategy;
}

export function OutcomeMergePatchBiasMitigationFromJSON(json: any): OutcomeMergePatchBiasMitigation {
    return OutcomeMergePatchBiasMitigationFromJSONTyped(json, false);
}

export function OutcomeMergePatchBiasMitigationFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutcomeMergePatchBiasMitigation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'age': !exists(json, 'age') ? undefined : OutcomeBiasMitigationStrategyFromJSON(json['age']),
        'gender': !exists(json, 'gender') ? undefined : OutcomeBiasMitigationStrategyFromJSON(json['gender']),
    };
}

export function OutcomeMergePatchBiasMitigationToJSON(value?: OutcomeMergePatchBiasMitigation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'age': OutcomeBiasMitigationStrategyToJSON(value.age),
        'gender': OutcomeBiasMitigationStrategyToJSON(value.gender),
    };
}

