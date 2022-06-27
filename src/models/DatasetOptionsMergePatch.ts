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
    DatasetOptionsBigQueryMergePatch,
    DatasetOptionsBigQueryMergePatchFromJSON,
    DatasetOptionsBigQueryMergePatchFromJSONTyped,
    DatasetOptionsBigQueryMergePatchToJSON,
} from './DatasetOptionsBigQueryMergePatch';
import {
    DatasetOptionsClassicMergePatch,
    DatasetOptionsClassicMergePatchFromJSON,
    DatasetOptionsClassicMergePatchFromJSONTyped,
    DatasetOptionsClassicMergePatchToJSON,
} from './DatasetOptionsClassicMergePatch';
import {
    DatasetOptionsHostedCsvMergePatch,
    DatasetOptionsHostedCsvMergePatchFromJSON,
    DatasetOptionsHostedCsvMergePatchFromJSONTyped,
    DatasetOptionsHostedCsvMergePatchToJSON,
} from './DatasetOptionsHostedCsvMergePatch';
import {
    DatasetOptionsSnowflakeMergePatch,
    DatasetOptionsSnowflakeMergePatchFromJSON,
    DatasetOptionsSnowflakeMergePatchFromJSONTyped,
    DatasetOptionsSnowflakeMergePatchToJSON,
} from './DatasetOptionsSnowflakeMergePatch';

/**
 * @type DatasetOptionsMergePatch
 * Dataset connection options
 * @export
 */
export type DatasetOptionsMergePatch = { type: 'bigquery' } & DatasetOptionsBigQueryMergePatch | { type: 'classic' } & DatasetOptionsClassicMergePatch | { type: 'hosted_csv' } & DatasetOptionsHostedCsvMergePatch | { type: 'snowflake' } & DatasetOptionsSnowflakeMergePatch;

export function DatasetOptionsMergePatchFromJSON(json: any): DatasetOptionsMergePatch {
    return DatasetOptionsMergePatchFromJSONTyped(json, false);
}

export function DatasetOptionsMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'bigquery':
            return {...DatasetOptionsBigQueryMergePatchFromJSONTyped(json, true), type: 'bigquery'};
        case 'classic':
            return {...DatasetOptionsClassicMergePatchFromJSONTyped(json, true), type: 'classic'};
        case 'hosted_csv':
            return {...DatasetOptionsHostedCsvMergePatchFromJSONTyped(json, true), type: 'hosted_csv'};
        case 'snowflake':
            return {...DatasetOptionsSnowflakeMergePatchFromJSONTyped(json, true), type: 'snowflake'};
        default:
            throw new Error(`No variant of DatasetOptionsMergePatch exists with 'type=${json['type']}'`);
    }
}

export function DatasetOptionsMergePatchToJSON(value?: DatasetOptionsMergePatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'bigquery':
            return DatasetOptionsBigQueryMergePatchToJSON(value);
        case 'classic':
            return DatasetOptionsClassicMergePatchToJSON(value);
        case 'hosted_csv':
            return DatasetOptionsHostedCsvMergePatchToJSON(value);
        case 'snowflake':
            return DatasetOptionsSnowflakeMergePatchToJSON(value);
        default:
            throw new Error(`No variant of DatasetOptionsMergePatch exists with 'type=${value['type']}'`);
    }
}

