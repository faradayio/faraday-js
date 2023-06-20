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
 * Facebook Custom Audiences connection options
 * @export
 * @interface ConnectionOptionsFacebookCustomAudiences
 */
export interface ConnectionOptionsFacebookCustomAudiences {
    /**
     * A Facebook system user access token with ads_management permission. Make sure the app has Ads Management Standard Access permissions. Refer to <a href="https://developers.facebook.com/docs/marketing-api/system-users/install-apps-and-generate-tokens">the Facebook docs</a> for more information.
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiences
     */
    system_user_token: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiences
     */
    type: string;
}

export function ConnectionOptionsFacebookCustomAudiencesFromJSON(json: any): ConnectionOptionsFacebookCustomAudiences {
    return ConnectionOptionsFacebookCustomAudiencesFromJSONTyped(json, false);
}

export function ConnectionOptionsFacebookCustomAudiencesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsFacebookCustomAudiences {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'system_user_token': json['system_user_token'],
        'type': json['type'],
    };
}

export function ConnectionOptionsFacebookCustomAudiencesToJSON(value?: ConnectionOptionsFacebookCustomAudiences | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'system_user_token': value.system_user_token,
        'type': value.type,
    };
}

