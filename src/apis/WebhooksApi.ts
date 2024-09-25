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
    WebhookEndpoint,
    WebhookEndpointMergePatch,
    WebhookEndpointPost,
} from '../models';

export interface CreateWebhookEndpointRequest {
    webhookEndpointFields: WebhookEndpointPost;
}

export interface DeleteWebhookEndpointRequest {
    webhookEndpointId: string;
}

export interface GetWebhookEndpointRequest {
    webhookEndpointId: string;
}

export interface UpdateWebhookEndpointRequest {
    webhookEndpointId: string;
    webhookEndpointMergePatch: WebhookEndpointMergePatch;
}

/**
 * 
 */
export class WebhooksApi extends runtime.BaseAPI {

    /**
     * Add a new webhook endpoint
     * Create webhook endpoint
     */
    private async createWebhookEndpointRaw(requestParameters: CreateWebhookEndpointRequest, ): Promise<runtime.ApiResponse<WebhookEndpoint>> {
        if (requestParameters.webhookEndpointFields === null || requestParameters.webhookEndpointFields === undefined) {
            throw new runtime.RequiredError('webhookEndpointFields','Required parameter requestParameters.webhookEndpointFields was null or undefined when calling createWebhookEndpoint.');
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
            path: `/webhook_endpoints`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.webhookEndpointFields,
        });

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Add a new webhook endpoint
     * Create webhook endpoint
     */
    async createWebhookEndpoint(webhookEndpointFields: WebhookEndpointPost, ): Promise<WebhookEndpoint> {
        const response = await this.createWebhookEndpointRaw({ webhookEndpointFields: webhookEndpointFields }, );
        return await response.value();
    }

    /**
     * Delete a webhook endpoint
     * Delete a webhook endpoint
     */
    private async deleteWebhookEndpointRaw(requestParameters: DeleteWebhookEndpointRequest, ): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.webhookEndpointId === null || requestParameters.webhookEndpointId === undefined) {
            throw new runtime.RequiredError('webhookEndpointId','Required parameter requestParameters.webhookEndpointId was null or undefined when calling deleteWebhookEndpoint.');
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
            path: `/webhook_endpoints/{webhook_endpoint_id}`.replace(`{${"webhook_endpoint_id"}}`, encodeURIComponent(String(requestParameters.webhookEndpointId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a webhook endpoint
     * Delete a webhook endpoint
     */
    async deleteWebhookEndpoint(webhookEndpointId: string, ): Promise<void> {
        await this.deleteWebhookEndpointRaw({ webhookEndpointId: webhookEndpointId }, );
    }

    /**
     * Get details on a specific webhook endpoint
     * Retrieve a webhook
     */
    private async getWebhookEndpointRaw(requestParameters: GetWebhookEndpointRequest, ): Promise<runtime.ApiResponse<WebhookEndpoint>> {
        if (requestParameters.webhookEndpointId === null || requestParameters.webhookEndpointId === undefined) {
            throw new runtime.RequiredError('webhookEndpointId','Required parameter requestParameters.webhookEndpointId was null or undefined when calling getWebhookEndpoint.');
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
            path: `/webhook_endpoints/{webhook_endpoint_id}`.replace(`{${"webhook_endpoint_id"}}`, encodeURIComponent(String(requestParameters.webhookEndpointId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get details on a specific webhook endpoint
     * Retrieve a webhook
     */
    async getWebhookEndpoint(webhookEndpointId: string, ): Promise<WebhookEndpoint> {
        const response = await this.getWebhookEndpointRaw({ webhookEndpointId: webhookEndpointId }, );
        return await response.value();
    }

    /**
     * Get a list of webhook endpoints defined on the account
     * List webhook endpoints
     */
    private async getWebhookEndpointsRaw(): Promise<runtime.ApiResponse<Array<WebhookEndpoint>>> {
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
            path: `/webhook_endpoints`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get a list of webhook endpoints defined on the account
     * List webhook endpoints
     */
    async getWebhookEndpoints(): Promise<Array<WebhookEndpoint>> {
        const response = await this.getWebhookEndpointsRaw();
        return await response.value();
    }

    /**
     * Update the configuration of a webhook endpoint
     * Update a webhook endpoint
     */
    private async updateWebhookEndpointRaw(requestParameters: UpdateWebhookEndpointRequest, ): Promise<runtime.ApiResponse<WebhookEndpoint>> {
        if (requestParameters.webhookEndpointId === null || requestParameters.webhookEndpointId === undefined) {
            throw new runtime.RequiredError('webhookEndpointId','Required parameter requestParameters.webhookEndpointId was null or undefined when calling updateWebhookEndpoint.');
        }

        if (requestParameters.webhookEndpointMergePatch === null || requestParameters.webhookEndpointMergePatch === undefined) {
            throw new runtime.RequiredError('webhookEndpointMergePatch','Required parameter requestParameters.webhookEndpointMergePatch was null or undefined when calling updateWebhookEndpoint.');
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
            path: `/webhook_endpoints/{webhook_endpoint_id}`.replace(`{${"webhook_endpoint_id"}}`, encodeURIComponent(String(requestParameters.webhookEndpointId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.webhookEndpointMergePatch,
        });

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update the configuration of a webhook endpoint
     * Update a webhook endpoint
     */
    async updateWebhookEndpoint(webhookEndpointId: string, webhookEndpointMergePatch: WebhookEndpointMergePatch, ): Promise<WebhookEndpoint> {
        const response = await this.updateWebhookEndpointRaw({ webhookEndpointId: webhookEndpointId, webhookEndpointMergePatch: webhookEndpointMergePatch }, );
        return await response.value();
    }

}