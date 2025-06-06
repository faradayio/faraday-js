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
    ArchiveConfig,
    Outcome,
    OutcomeAnalysis,
    OutcomeMergePatch,
    OutcomePost,
} from '../models';

export interface ArchiveOutcomeRequest {
    outcomeId: string;
    archiveConfig: ArchiveConfig;
}

export interface CreateOutcomeRequest {
    outcomeFields: OutcomePost;
}

export interface DeleteOutcomeRequest {
    outcomeId: string;
}

export interface ForceUpdateOutcomeRequest {
    outcomeId: string;
}

export interface GetOutcomeRequest {
    outcomeId: string;
}

export interface GetOutcomeAnalysisRequest {
    outcomeId: string;
}

export interface GetOutcomeDownloadRequest {
    outcomeId: string;
}

export interface UnarchiveOutcomeRequest {
    outcomeId: string;
    archiveConfig: ArchiveConfig;
}

export interface UpdateOutcomeRequest {
    outcomeId: string;
    outcomeFields: OutcomeMergePatch;
}

/**
 * 
 */
export class OutcomesApi extends runtime.BaseAPI {

    /**
     * Archive a outcome
     * Archive a outcome
     */
    private async archiveOutcomeRaw(requestParameters: ArchiveOutcomeRequest, ): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.outcomeId === null || requestParameters.outcomeId === undefined) {
            throw new runtime.RequiredError('outcomeId','Required parameter requestParameters.outcomeId was null or undefined when calling archiveOutcome.');
        }

        if (requestParameters.archiveConfig === null || requestParameters.archiveConfig === undefined) {
            throw new runtime.RequiredError('archiveConfig','Required parameter requestParameters.archiveConfig was null or undefined when calling archiveOutcome.');
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
            path: `/outcomes/{outcome_id}/archive`.replace(`{${"outcome_id"}}`, encodeURIComponent(String(requestParameters.outcomeId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.archiveConfig,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Archive a outcome
     * Archive a outcome
     */
    async archiveOutcome(outcomeId: string, archiveConfig: ArchiveConfig, ): Promise<void> {
        await this.archiveOutcomeRaw({ outcomeId: outcomeId, archiveConfig: archiveConfig }, );
    }

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
            body: requestParameters.outcomeFields,
        });

        return new runtime.JSONApiResponse(response);
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
     * Delete an outcome
     */
    private async deleteOutcomeRaw(requestParameters: DeleteOutcomeRequest, ): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.outcomeId === null || requestParameters.outcomeId === undefined) {
            throw new runtime.RequiredError('outcomeId','Required parameter requestParameters.outcomeId was null or undefined when calling deleteOutcome.');
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
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an outcome
     */
    async deleteOutcome(outcomeId: string, ): Promise<void> {
        await this.deleteOutcomeRaw({ outcomeId: outcomeId }, );
    }

    /**
     * Trigger a rerun for this resource. Faraday automatically updates resources when their config changes, but this option is available in case of transient errors. 
     * Trigger a rerun for this resource.
     */
    private async forceUpdateOutcomeRaw(requestParameters: ForceUpdateOutcomeRequest, ): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.outcomeId === null || requestParameters.outcomeId === undefined) {
            throw new runtime.RequiredError('outcomeId','Required parameter requestParameters.outcomeId was null or undefined when calling forceUpdateOutcome.');
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
            path: `/outcomes/{outcome_id}/force_update`.replace(`{${"outcome_id"}}`, encodeURIComponent(String(requestParameters.outcomeId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Trigger a rerun for this resource. Faraday automatically updates resources when their config changes, but this option is available in case of transient errors. 
     * Trigger a rerun for this resource.
     */
    async forceUpdateOutcome(outcomeId: string, ): Promise<void> {
        await this.forceUpdateOutcomeRaw({ outcomeId: outcomeId }, );
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

        return new runtime.JSONApiResponse(response);
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
     * Get details on a specific outcome\'s analysis report on model performance, bias, etc.
     * Retrieve an outcome\'s analysis
     */
    private async getOutcomeAnalysisRaw(requestParameters: GetOutcomeAnalysisRequest, ): Promise<runtime.ApiResponse<OutcomeAnalysis>> {
        if (requestParameters.outcomeId === null || requestParameters.outcomeId === undefined) {
            throw new runtime.RequiredError('outcomeId','Required parameter requestParameters.outcomeId was null or undefined when calling getOutcomeAnalysis.');
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
            path: `/outcomes/{outcome_id}/analysis`.replace(`{${"outcome_id"}}`, encodeURIComponent(String(requestParameters.outcomeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get details on a specific outcome\'s analysis report on model performance, bias, etc.
     * Retrieve an outcome\'s analysis
     */
    async getOutcomeAnalysis(outcomeId: string, ): Promise<OutcomeAnalysis> {
        const response = await this.getOutcomeAnalysisRaw({ outcomeId: outcomeId }, );
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

        return new runtime.JSONApiResponse(response);
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
     * Unarchive a outcome
     * Unarchive a outcome
     */
    private async unarchiveOutcomeRaw(requestParameters: UnarchiveOutcomeRequest, ): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.outcomeId === null || requestParameters.outcomeId === undefined) {
            throw new runtime.RequiredError('outcomeId','Required parameter requestParameters.outcomeId was null or undefined when calling unarchiveOutcome.');
        }

        if (requestParameters.archiveConfig === null || requestParameters.archiveConfig === undefined) {
            throw new runtime.RequiredError('archiveConfig','Required parameter requestParameters.archiveConfig was null or undefined when calling unarchiveOutcome.');
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
            path: `/outcomes/{outcome_id}/unarchive`.replace(`{${"outcome_id"}}`, encodeURIComponent(String(requestParameters.outcomeId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.archiveConfig,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Unarchive a outcome
     * Unarchive a outcome
     */
    async unarchiveOutcome(outcomeId: string, archiveConfig: ArchiveConfig, ): Promise<void> {
        await this.unarchiveOutcomeRaw({ outcomeId: outcomeId, archiveConfig: archiveConfig }, );
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
            body: requestParameters.outcomeFields,
        });

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Edit configuration of an existing outcome
     * Edit an outcome
     */
    async updateOutcome(outcomeId: string, outcomeFields: OutcomeMergePatch, ): Promise<Outcome> {
        const response = await this.updateOutcomeRaw({ outcomeId: outcomeId, outcomeFields: outcomeFields }, );
        return await response.value();
    }

}
