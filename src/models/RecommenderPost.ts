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
 * (Parameters used to POST a new value of the `Recommender` type.)
 * 
 * TODO
 * @export
 * @interface RecommenderPost
 */
export interface RecommenderPost {
    /**
     * Human-readable label for this recommender. Each recommender must have a unique name.
     * @type {string}
     * @memberof RecommenderPost
     */
    name: string;
    /**
     * Name of the stream to use for recommendations
     * @type {string}
     * @memberof RecommenderPost
     */
    stream_name: string;
    /**
     * Name of the stream property
     * @type {string}
     * @memberof RecommenderPost
     */
    stream_property_name: string;
}

export function RecommenderPostFromJSON(json: any): RecommenderPost {
    return RecommenderPostFromJSONTyped(json, false);
}

export function RecommenderPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecommenderPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'stream_name': json['stream_name'],
        'stream_property_name': json['stream_property_name'],
    };
}

export function RecommenderPostToJSON(value?: RecommenderPost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'stream_name': value.stream_name,
        'stream_property_name': value.stream_property_name,
    };
}

