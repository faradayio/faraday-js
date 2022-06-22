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
/**
 * Hosted CSV dataset options
 * @export
 * @interface DatasetOptionsHostedCsv
 */
export interface DatasetOptionsHostedCsv {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsHostedCsv
     */
    type: string;
    /**
     * Subdirectory of uploads where files are stored and retrieved.
     * A directory is dedicated to one or more files which ought to have the same shape and contents. One or more datasets can pull from that folder (and in different ways) and push to one or more event streams. So if you have two different types of orders from two different POS/ecommerce systems, you would put them each in separate folders. Then you would create two different datasets that would both point to an `orders` stream.
     * @type {string}
     * @memberof DatasetOptionsHostedCsv
     */
    upload_directory: string;
}

export function DatasetOptionsHostedCsvFromJSON(json: any): DatasetOptionsHostedCsv {
    return DatasetOptionsHostedCsvFromJSONTyped(json, false);
}

export function DatasetOptionsHostedCsvFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsHostedCsv {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'upload_directory': json['upload_directory'],
    };
}

export function DatasetOptionsHostedCsvToJSON(value?: DatasetOptionsHostedCsv | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'upload_directory': value.upload_directory,
    };
}
