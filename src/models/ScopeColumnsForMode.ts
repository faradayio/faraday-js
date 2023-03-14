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
    TargetStructureTransformation,
    TargetStructureTransformationFromJSON,
    TargetStructureTransformationFromJSONTyped,
    TargetStructureTransformationToJSON,
} from './TargetStructureTransformation';

/**
 * Available columns for a given mode of target export.
 * @export
 * @interface ScopeColumnsForMode
 */
export interface ScopeColumnsForMode extends Array<TargetStructureTransformation> {
}

export function ScopeColumnsForModeFromJSON(json: any): ScopeColumnsForMode {
    return ScopeColumnsForModeFromJSONTyped(json, false);
}

export function ScopeColumnsForModeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScopeColumnsForMode {
    return json;
}

export function ScopeColumnsForModeToJSON(value?: ScopeColumnsForMode | null): any {
    return value;
}

