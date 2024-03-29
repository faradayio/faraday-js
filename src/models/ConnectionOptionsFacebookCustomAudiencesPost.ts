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
 * (Parameters used to POST a new value of the `ConnectionOptionsFacebookCustomAudiences` type.)
 * 
 * Facebook Custom Audiences connection options
 * @export
 * @interface ConnectionOptionsFacebookCustomAudiencesPost
 */
export interface ConnectionOptionsFacebookCustomAudiencesPost {
    /**
     * The Facebook ad account ID (numeric).
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiencesPost
     */
    account_id: string;
    /**
     * The Facebook ad account literate.
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiencesPost
     */
    account_literate?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiencesPost
     */
    type: string;
}

export function ConnectionOptionsFacebookCustomAudiencesPostFromJSON(json: any): ConnectionOptionsFacebookCustomAudiencesPost {
    return ConnectionOptionsFacebookCustomAudiencesPostFromJSONTyped(json, false);
}

export function ConnectionOptionsFacebookCustomAudiencesPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsFacebookCustomAudiencesPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'account_id': json['account_id'],
        'account_literate': !exists(json, 'account_literate') ? undefined : json['account_literate'],
        'type': json['type'],
    };
}

export function ConnectionOptionsFacebookCustomAudiencesPostToJSON(value?: ConnectionOptionsFacebookCustomAudiencesPost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_id': value.account_id,
        'account_literate': value.account_literate,
        'type': value.type,
    };
}

