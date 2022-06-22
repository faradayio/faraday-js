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

import {
    DatasetOptionsBigQueryPost,
    DatasetOptionsBigQueryPostFromJSON,
    DatasetOptionsBigQueryPostFromJSONTyped,
    DatasetOptionsBigQueryPostToJSON,
} from './DatasetOptionsBigQueryPost';
import {
    DatasetOptionsHostedCsvPost,
    DatasetOptionsHostedCsvPostFromJSON,
    DatasetOptionsHostedCsvPostFromJSONTyped,
    DatasetOptionsHostedCsvPostToJSON,
} from './DatasetOptionsHostedCsvPost';

/**
 * @type DatasetOptionsPost
 * Dataset connection options
 * @export
 */
export type DatasetOptionsPost = { type: 'bigquery' } & DatasetOptionsBigQueryPost | { type: 'hosted_csv' } & DatasetOptionsHostedCsvPost;

export function DatasetOptionsPostFromJSON(json: any): DatasetOptionsPost {
    return DatasetOptionsPostFromJSONTyped(json, false);
}

export function DatasetOptionsPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'bigquery':
            return {...DatasetOptionsBigQueryPostFromJSONTyped(json, true), type: 'bigquery'};
        case 'hosted_csv':
            return {...DatasetOptionsHostedCsvPostFromJSONTyped(json, true), type: 'hosted_csv'};
        default:
            throw new Error(`No variant of DatasetOptionsPost exists with 'type=${json['type']}'`);
    }
}

export function DatasetOptionsPostToJSON(value?: DatasetOptionsPost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'bigquery':
            return DatasetOptionsBigQueryPostToJSON(value);
        case 'hosted_csv':
            return DatasetOptionsHostedCsvPostToJSON(value);
        default:
            throw new Error(`No variant of DatasetOptionsPost exists with 'type=${value['type']}'`);
    }
}

