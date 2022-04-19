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


import * as runtime from '../runtime';
import {
    Outcome,
    OutcomeFromJSON,
    OutcomeToJSON,
    OutcomePost,
    OutcomePostFromJSON,
    OutcomePostToJSON,
} from '../models';

export interface CreateOutcomeRequest {
    outcomeFields: OutcomePost;
}

export interface GetOutcomeRequest {
    outcomeId: string;
}

export interface GetOutcomeDownloadRequest {
    outcomeId: string;
}

export interface UpdateOutcomeRequest {
    outcomeId: string;
    outcomeFields: object;
}

/**
 * 
 */
export class OutcomesApi extends runtime.BaseAPI {

    /**
     * Add a new outcome (defined as a prediction of how likely individuals are to transition from one cohort to another)
     * Create outcome
     */
    private async createOutcomeRaw(requestParameters: CreateOutcomeRequest, ): Promise<runtime.ApiResponse<Outcome>> {
        if (requestParameters.outcomeFields === null || requestParameters.outcomeFields === undefined) {
            throw new runtime.RequiredError('outcomeFields','Required parameter requestParameters.outcomeFields was null or undefined when calling createOutcome.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/outcomes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OutcomePostToJSON(requestParameters.outcomeFields),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OutcomeFromJSON(jsonValue));
    }

    /**
     * Add a new outcome (defined as a prediction of how likely individuals are to transition from one cohort to another)
     * Create outcome
     */
    async createOutcome(outcomeFields: OutcomePost, ): Promise<Outcome> {
        const response = await this.createOutcomeRaw({ outcomeFields: outcomeFields }, );
        return await response.value();
    }

    /**
     * Get details on a specific outcome
     * Retrieve an outcome
     */
    private async getOutcomeRaw(requestParameters: GetOutcomeRequest, ): Promise<runtime.ApiResponse<Outcome>> {
        if (requestParameters.outcomeId === null || requestParameters.outcomeId === undefined) {
            throw new runtime.RequiredError('outcomeId','Required parameter requestParameters.outcomeId was null or undefined when calling getOutcome.');
        }

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
            path: `/outcomes/{outcome_id}`.replace(`{${"outcome_id"}}`, encodeURIComponent(String(requestParameters.outcomeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OutcomeFromJSON(jsonValue));
    }

    /**
     * Get details on a specific outcome
     * Retrieve an outcome
     */
    async getOutcome(outcomeId: string, ): Promise<Outcome> {
        const response = await this.getOutcomeRaw({ outcomeId: outcomeId }, );
        return await response.value();
    }

    /**
     * Download an HTML report containing information such as the objective of the model, performance, and important features
     * Retrieve outcome report
     */
    private async getOutcomeDownloadRaw(requestParameters: GetOutcomeDownloadRequest, ): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters.outcomeId === null || requestParameters.outcomeId === undefined) {
            throw new runtime.RequiredError('outcomeId','Required parameter requestParameters.outcomeId was null or undefined when calling getOutcomeDownload.');
        }

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
            path: `/outcomes/{outcome_id}/report.html`.replace(`{${"outcome_id"}}`, encodeURIComponent(String(requestParameters.outcomeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.BlobApiResponse(response);
    }

    /**
     * Download an HTML report containing information such as the objective of the model, performance, and important features
     * Retrieve outcome report
     */
    async getOutcomeDownload(outcomeId: string, ): Promise<Blob> {
        const response = await this.getOutcomeDownloadRaw({ outcomeId: outcomeId }, );
        return await response.value();
    }

    /**
     * Get a list of outcomes defined on the account
     * List outcomes
     */
    private async getOutcomesRaw(): Promise<runtime.ApiResponse<Array<Outcome>>> {
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
            path: `/outcomes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OutcomeFromJSON));
    }

    /**
     * Get a list of outcomes defined on the account
     * List outcomes
     */
    async getOutcomes(): Promise<Array<Outcome>> {
        const response = await this.getOutcomesRaw();
        return await response.value();
    }

    /**
     * Edit configuration of an existing outcome
     * Edit an outcome
     */
    private async updateOutcomeRaw(requestParameters: UpdateOutcomeRequest, ): Promise<runtime.ApiResponse<Outcome>> {
        if (requestParameters.outcomeId === null || requestParameters.outcomeId === undefined) {
            throw new runtime.RequiredError('outcomeId','Required parameter requestParameters.outcomeId was null or undefined when calling updateOutcome.');
        }

        if (requestParameters.outcomeFields === null || requestParameters.outcomeFields === undefined) {
            throw new runtime.RequiredError('outcomeFields','Required parameter requestParameters.outcomeFields was null or undefined when calling updateOutcome.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json+merge-patch';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/outcomes/{outcome_id}`.replace(`{${"outcome_id"}}`, encodeURIComponent(String(requestParameters.outcomeId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.outcomeFields as any,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OutcomeFromJSON(jsonValue));
    }

    /**
     * Edit configuration of an existing outcome
     * Edit an outcome
     */
    async updateOutcome(outcomeId: string, outcomeFields: object, ): Promise<Outcome> {
        const response = await this.updateOutcomeRaw({ outcomeId: outcomeId, outcomeFields: outcomeFields }, );
        return await response.value();
    }

}
