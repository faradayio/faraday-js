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


import * as runtime from '../runtime';
import {
    AccountUsage,
    AccountUsageFromJSON,
    AccountUsageToJSON,
} from '../models';

/**
 * 
 */
export class UsageApi extends runtime.BaseAPI {

    /**
     * Get usage stats for your account.
     * Get usage stats for your account.
     */
    private async getUsagesRaw(): Promise<runtime.ApiResponse<Array<AccountUsage>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/usages`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AccountUsageFromJSON));
    }

    /**
     * Get usage stats for your account.
     * Get usage stats for your account.
     */
    async getUsages(): Promise<Array<AccountUsage>> {
        const response = await this.getUsagesRaw();
        return await response.value();
    }

}
