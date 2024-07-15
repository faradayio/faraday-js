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
    ArchiveConfigFromJSON,
    ArchiveConfigToJSON,
    Recommender,
    RecommenderFromJSON,
    RecommenderToJSON,
    RecommenderAnalysis,
    RecommenderAnalysisFromJSON,
    RecommenderAnalysisToJSON,
    RecommenderMergePatch,
    RecommenderMergePatchFromJSON,
    RecommenderMergePatchToJSON,
    RecommenderPost,
    RecommenderPostFromJSON,
    RecommenderPostToJSON,
} from '../models';

export interface ArchiveRecommenderRequest {
    recommenderId: string;
    archiveConfig: ArchiveConfig;
}

export interface CreateRecommenderRequest {
    recommenderFields: RecommenderPost;
}

export interface DeleteRecommenderRequest {
    recommenderId: string;
}

export interface GetRecommenderRequest {
    recommenderId: string;
}

export interface GetRecommenderAnalysisRequest {
    recommenderId: string;
}

export interface UnarchiveRecommenderRequest {
    recommenderId: string;
    archiveConfig: ArchiveConfig;
}

export interface UpdateRecommenderRequest {
    recommenderId: string;
    recommenderFields: RecommenderMergePatch;
}

/**
 * 
 */
export class RecommendersApi extends runtime.BaseAPI {

    /**
     * Archive a recommender
     * Archive a recommender
     */
    private async archiveRecommenderRaw(requestParameters: ArchiveRecommenderRequest, ): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.recommenderId === null || requestParameters.recommenderId === undefined) {
            throw new runtime.RequiredError('recommenderId','Required parameter requestParameters.recommenderId was null or undefined when calling archiveRecommender.');
        }

        if (requestParameters.archiveConfig === null || requestParameters.archiveConfig === undefined) {
            throw new runtime.RequiredError('archiveConfig','Required parameter requestParameters.archiveConfig was null or undefined when calling archiveRecommender.');
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
            path: `/recommenders/{recommender_id}/archive`.replace(`{${"recommender_id"}}`, encodeURIComponent(String(requestParameters.recommenderId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ArchiveConfigToJSON(requestParameters.archiveConfig),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Archive a recommender
     * Archive a recommender
     */
    async archiveRecommender(recommenderId: string, archiveConfig: ArchiveConfig, ): Promise<void> {
        await this.archiveRecommenderRaw({ recommenderId: recommenderId, archiveConfig: archiveConfig }, );
    }

    /**
     * Add a new recommender.  This feature is experimental and subject to change. To enable this feature, contact your account manager. 
     * Create recommender
     */
    private async createRecommenderRaw(requestParameters: CreateRecommenderRequest, ): Promise<runtime.ApiResponse<Recommender>> {
        if (requestParameters.recommenderFields === null || requestParameters.recommenderFields === undefined) {
            throw new runtime.RequiredError('recommenderFields','Required parameter requestParameters.recommenderFields was null or undefined when calling createRecommender.');
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
            path: `/recommenders`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RecommenderPostToJSON(requestParameters.recommenderFields),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RecommenderFromJSON(jsonValue));
    }

    /**
     * Add a new recommender.  This feature is experimental and subject to change. To enable this feature, contact your account manager. 
     * Create recommender
     */
    async createRecommender(recommenderFields: RecommenderPost, ): Promise<Recommender> {
        const response = await this.createRecommenderRaw({ recommenderFields: recommenderFields }, );
        return await response.value();
    }

    /**
     * Delete a recommender
     */
    private async deleteRecommenderRaw(requestParameters: DeleteRecommenderRequest, ): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.recommenderId === null || requestParameters.recommenderId === undefined) {
            throw new runtime.RequiredError('recommenderId','Required parameter requestParameters.recommenderId was null or undefined when calling deleteRecommender.');
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
            path: `/recommenders/{recommender_id}`.replace(`{${"recommender_id"}}`, encodeURIComponent(String(requestParameters.recommenderId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a recommender
     */
    async deleteRecommender(recommenderId: string, ): Promise<void> {
        await this.deleteRecommenderRaw({ recommenderId: recommenderId }, );
    }

    /**
     * Get details on a specific recommender
     * Retrieve a recommender
     */
    private async getRecommenderRaw(requestParameters: GetRecommenderRequest, ): Promise<runtime.ApiResponse<Recommender>> {
        if (requestParameters.recommenderId === null || requestParameters.recommenderId === undefined) {
            throw new runtime.RequiredError('recommenderId','Required parameter requestParameters.recommenderId was null or undefined when calling getRecommender.');
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
            path: `/recommenders/{recommender_id}`.replace(`{${"recommender_id"}}`, encodeURIComponent(String(requestParameters.recommenderId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RecommenderFromJSON(jsonValue));
    }

    /**
     * Get details on a specific recommender
     * Retrieve a recommender
     */
    async getRecommender(recommenderId: string, ): Promise<Recommender> {
        const response = await this.getRecommenderRaw({ recommenderId: recommenderId }, );
        return await response.value();
    }

    /**
     * Get details on a specific recommender\'s analysis report on model performance, bias, etc.
     * Retrieve a recommenders\'s analysis
     */
    private async getRecommenderAnalysisRaw(requestParameters: GetRecommenderAnalysisRequest, ): Promise<runtime.ApiResponse<RecommenderAnalysis>> {
        if (requestParameters.recommenderId === null || requestParameters.recommenderId === undefined) {
            throw new runtime.RequiredError('recommenderId','Required parameter requestParameters.recommenderId was null or undefined when calling getRecommenderAnalysis.');
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
            path: `/recommenders/{recommender_id}/analysis`.replace(`{${"recommender_id"}}`, encodeURIComponent(String(requestParameters.recommenderId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RecommenderAnalysisFromJSON(jsonValue));
    }

    /**
     * Get details on a specific recommender\'s analysis report on model performance, bias, etc.
     * Retrieve a recommenders\'s analysis
     */
    async getRecommenderAnalysis(recommenderId: string, ): Promise<RecommenderAnalysis> {
        const response = await this.getRecommenderAnalysisRaw({ recommenderId: recommenderId }, );
        return await response.value();
    }

    /**
     * Get a list of recommenders defined on the account
     * List recommenders
     */
    private async getRecommendersRaw(): Promise<runtime.ApiResponse<Array<Recommender>>> {
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
            path: `/recommenders`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RecommenderFromJSON));
    }

    /**
     * Get a list of recommenders defined on the account
     * List recommenders
     */
    async getRecommenders(): Promise<Array<Recommender>> {
        const response = await this.getRecommendersRaw();
        return await response.value();
    }

    /**
     * Unarchive a recommender
     * Unarchive a recommender
     */
    private async unarchiveRecommenderRaw(requestParameters: UnarchiveRecommenderRequest, ): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.recommenderId === null || requestParameters.recommenderId === undefined) {
            throw new runtime.RequiredError('recommenderId','Required parameter requestParameters.recommenderId was null or undefined when calling unarchiveRecommender.');
        }

        if (requestParameters.archiveConfig === null || requestParameters.archiveConfig === undefined) {
            throw new runtime.RequiredError('archiveConfig','Required parameter requestParameters.archiveConfig was null or undefined when calling unarchiveRecommender.');
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
            path: `/recommenders/{recommender_id}/unarchive`.replace(`{${"recommender_id"}}`, encodeURIComponent(String(requestParameters.recommenderId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ArchiveConfigToJSON(requestParameters.archiveConfig),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Unarchive a recommender
     * Unarchive a recommender
     */
    async unarchiveRecommender(recommenderId: string, archiveConfig: ArchiveConfig, ): Promise<void> {
        await this.unarchiveRecommenderRaw({ recommenderId: recommenderId, archiveConfig: archiveConfig }, );
    }

    /**
     * Edit configuration of a recommender
     * Edit a recommender
     */
    private async updateRecommenderRaw(requestParameters: UpdateRecommenderRequest, ): Promise<runtime.ApiResponse<Recommender>> {
        if (requestParameters.recommenderId === null || requestParameters.recommenderId === undefined) {
            throw new runtime.RequiredError('recommenderId','Required parameter requestParameters.recommenderId was null or undefined when calling updateRecommender.');
        }

        if (requestParameters.recommenderFields === null || requestParameters.recommenderFields === undefined) {
            throw new runtime.RequiredError('recommenderFields','Required parameter requestParameters.recommenderFields was null or undefined when calling updateRecommender.');
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
            path: `/recommenders/{recommender_id}`.replace(`{${"recommender_id"}}`, encodeURIComponent(String(requestParameters.recommenderId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: RecommenderMergePatchToJSON(requestParameters.recommenderFields),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RecommenderFromJSON(jsonValue));
    }

    /**
     * Edit configuration of a recommender
     * Edit a recommender
     */
    async updateRecommender(recommenderId: string, recommenderFields: RecommenderMergePatch, ): Promise<Recommender> {
        const response = await this.updateRecommenderRaw({ recommenderId: recommenderId, recommenderFields: recommenderFields }, );
        return await response.value();
    }

}
