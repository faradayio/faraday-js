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
    DatasetEnrichment,
    DatasetEnrichmentFromJSON,
    DatasetEnrichmentFromJSONTyped,
    DatasetEnrichmentToJSON,
} from './DatasetEnrichment';

/**
 * A mapping of enrichment sources (like FIG) to their enrichment metadata
 * @export
 * @interface DatasetEnrichments
 */
export interface DatasetEnrichments {
    [key: string]: DatasetEnrichment;
}

export function DatasetEnrichmentsFromJSON(json: any): DatasetEnrichments {
    return DatasetEnrichmentsFromJSONTyped(json, false);
}

export function DatasetEnrichmentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetEnrichments {
    return json;
}

export function DatasetEnrichmentsToJSON(value?: DatasetEnrichments | null): any {
    return value;
}

