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
    ConnectionOptionsPost,
    ConnectionOptionsPostFromJSON,
    ConnectionOptionsPostFromJSONTyped,
    ConnectionOptionsPostToJSON,
} from './ConnectionOptionsPost';

/**
 * (Parameters used to POST a new value of the `Connection` type.)
 * 
 * Configuration for connecting data between Faraday and an external location.
 * 
 * Connections are required when working with **replication targets**.
 * @export
 * @interface ConnectionPost
 */
export interface ConnectionPost {
    /**
     * A user-friendly name of the connection.
     * @type {string}
     * @memberof ConnectionPost
     */
    name: string;
    /**
     * 
     * @type {ConnectionOptionsPost}
     * @memberof ConnectionPost
     */
    options: ConnectionOptionsPost;
}

export function ConnectionPostFromJSON(json: any): ConnectionPost {
    return ConnectionPostFromJSONTyped(json, false);
}

export function ConnectionPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'options': ConnectionOptionsPostFromJSON(json['options']),
    };
}

export function ConnectionPostToJSON(value?: ConnectionPost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'options': ConnectionOptionsPostToJSON(value.options),
    };
}

