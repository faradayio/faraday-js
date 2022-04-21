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
    Target,
    TargetFromJSON,
    TargetToJSON,
    TargetPost,
    TargetPostFromJSON,
    TargetPostToJSON,
} from '../models';

export interface CreateTargetRequest {
    targetFields: TargetPost;
}

export interface CreateTargetPreviewRequest {
    targetId: string;
}

export interface DownloadTargetRequest {
    targetId: string;
}

export interface GetTargetRequest {
    targetId: string;
}

/**
 * 
 */
export class TargetsApi extends runtime.BaseAPI {

    /**
     * Add a new target.  There are two flavors of targets, each requiring different treatment in the API: <table> <thead> <tr><th>Target type</th><th>Description</th><th>API requirement</th></tr> </thead> <tbody> <tr><td><strong>Publication targets</strong></td><td>Faraday <em>hosts</em> your predictions for convenient retrieval as needed.</td><td>Supply <code>publication_type</code>. Do not specify a <code>connection_id</code>.</td></tr> <tr><td><strong>Replication targets</strong></td><td>Faraday copies your predictions to systems <em>you</em> control.</td><td>Supply <code>connection_id</code>. Do not specify a <code>publication_type</code>.</td></tr> </tbody> </table> 
     * Create target
     */
    private async createTargetRaw(requestParameters: CreateTargetRequest, ): Promise<runtime.ApiResponse<Target>> {
        if (requestParameters.targetFields === null || requestParameters.targetFields === undefined) {
            throw new runtime.RequiredError('targetFields','Required parameter requestParameters.targetFields was null or undefined when calling createTarget.');
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
            path: `/targets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TargetPostToJSON(requestParameters.targetFields),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TargetFromJSON(jsonValue));
    }

    /**
     * Add a new target.  There are two flavors of targets, each requiring different treatment in the API: <table> <thead> <tr><th>Target type</th><th>Description</th><th>API requirement</th></tr> </thead> <tbody> <tr><td><strong>Publication targets</strong></td><td>Faraday <em>hosts</em> your predictions for convenient retrieval as needed.</td><td>Supply <code>publication_type</code>. Do not specify a <code>connection_id</code>.</td></tr> <tr><td><strong>Replication targets</strong></td><td>Faraday copies your predictions to systems <em>you</em> control.</td><td>Supply <code>connection_id</code>. Do not specify a <code>publication_type</code>.</td></tr> </tbody> </table> 
     * Create target
     */
    async createTarget(targetFields: TargetPost, ): Promise<Target> {
        const response = await this.createTargetRaw({ targetFields: targetFields }, );
        return await response.value();
    }

    /**
     * Trigger a preview delivery (first 100 results) of a target
     * Start a preview delivery
     */
    private async createTargetPreviewRaw(requestParameters: CreateTargetPreviewRequest, ): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.targetId === null || requestParameters.targetId === undefined) {
            throw new runtime.RequiredError('targetId','Required parameter requestParameters.targetId was null or undefined when calling createTargetPreview.');
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
            path: `/targets/{target_id}/preview`.replace(`{${"target_id"}}`, encodeURIComponent(String(requestParameters.targetId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Trigger a preview delivery (first 100 results) of a target
     * Start a preview delivery
     */
    async createTargetPreview(targetId: string, ): Promise<void> {
        await this.createTargetPreviewRaw({ targetId: targetId }, );
    }

    /**
     * Download the default output of a target
     */
    private async downloadTargetRaw(requestParameters: DownloadTargetRequest, ): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.targetId === null || requestParameters.targetId === undefined) {
            throw new runtime.RequiredError('targetId','Required parameter requestParameters.targetId was null or undefined when calling downloadTarget.');
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
            path: `/targets/{target_id}/download.csv`.replace(`{${"target_id"}}`, encodeURIComponent(String(requestParameters.targetId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Download the default output of a target
     */
    async downloadTarget(targetId: string, ): Promise<string> {
        const response = await this.downloadTargetRaw({ targetId: targetId }, );
        return await response.value();
    }

    /**
     * Get details on a specific target
     * Retrieve a target
     */
    private async getTargetRaw(requestParameters: GetTargetRequest, ): Promise<runtime.ApiResponse<Target>> {
        if (requestParameters.targetId === null || requestParameters.targetId === undefined) {
            throw new runtime.RequiredError('targetId','Required parameter requestParameters.targetId was null or undefined when calling getTarget.');
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
            path: `/targets/{target_id}`.replace(`{${"target_id"}}`, encodeURIComponent(String(requestParameters.targetId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TargetFromJSON(jsonValue));
    }

    /**
     * Get details on a specific target
     * Retrieve a target
     */
    async getTarget(targetId: string, ): Promise<Target> {
        const response = await this.getTargetRaw({ targetId: targetId }, );
        return await response.value();
    }

    /**
     * Get a list of targets defined on the account
     * List targets
     */
    private async getTargetsRaw(): Promise<runtime.ApiResponse<Array<Target>>> {
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
            path: `/targets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TargetFromJSON));
    }

    /**
     * Get a list of targets defined on the account
     * List targets
     */
    async getTargets(): Promise<Array<Target>> {
        const response = await this.getTargetsRaw();
        return await response.value();
    }

}
