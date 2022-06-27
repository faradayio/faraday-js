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
    DatasetOptionsClassicPost,
    DatasetOptionsClassicPostFromJSON,
    DatasetOptionsClassicPostFromJSONTyped,
    DatasetOptionsClassicPostToJSON,
} from './DatasetOptionsClassicPost';
import {
    DatasetOptionsHostedCsvPost,
    DatasetOptionsHostedCsvPostFromJSON,
    DatasetOptionsHostedCsvPostFromJSONTyped,
    DatasetOptionsHostedCsvPostToJSON,
} from './DatasetOptionsHostedCsvPost';
import {
    DatasetOptionsSnowflakePost,
    DatasetOptionsSnowflakePostFromJSON,
    DatasetOptionsSnowflakePostFromJSONTyped,
    DatasetOptionsSnowflakePostToJSON,
} from './DatasetOptionsSnowflakePost';

/**
 * @type DatasetOptionsPost
 * Dataset connection options
 * @export
 */
export type DatasetOptionsPost = { type: 'bigquery' } & DatasetOptionsBigQueryPost | { type: 'classic' } & DatasetOptionsClassicPost | { type: 'hosted_csv' } & DatasetOptionsHostedCsvPost | { type: 'snowflake' } & DatasetOptionsSnowflakePost;

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
        case 'classic':
            return {...DatasetOptionsClassicPostFromJSONTyped(json, true), type: 'classic'};
        case 'hosted_csv':
            return {...DatasetOptionsHostedCsvPostFromJSONTyped(json, true), type: 'hosted_csv'};
        case 'snowflake':
            return {...DatasetOptionsSnowflakePostFromJSONTyped(json, true), type: 'snowflake'};
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
        case 'classic':
            return DatasetOptionsClassicPostToJSON(value);
        case 'hosted_csv':
            return DatasetOptionsHostedCsvPostToJSON(value);
        case 'snowflake':
            return DatasetOptionsSnowflakePostToJSON(value);
        default:
            throw new Error(`No variant of DatasetOptionsPost exists with 'type=${value['type']}'`);
    }
}

