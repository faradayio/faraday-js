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
import { WebhookEndpoint, WebhookEndpointMergePatch, WebhookEndpointPost } from '../models';
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
export declare class WebhooksApi extends runtime.BaseAPI {
    /**
     * Add a new webhook endpoint
     * Create webhook endpoint
     */
    private createWebhookEndpointRaw;
    /**
     * Add a new webhook endpoint
     * Create webhook endpoint
     */
    createWebhookEndpoint(webhookEndpointFields: WebhookEndpointPost): Promise<WebhookEndpoint>;
    /**
     * Delete a webhook endpoint
     * Delete a webhook endpoint
     */
    private deleteWebhookEndpointRaw;
    /**
     * Delete a webhook endpoint
     * Delete a webhook endpoint
     */
    deleteWebhookEndpoint(webhookEndpointId: string): Promise<void>;
    /**
     * Get details on a specific webhook endpoint
     * Retrieve a webhook
     */
    private getWebhookEndpointRaw;
    /**
     * Get details on a specific webhook endpoint
     * Retrieve a webhook
     */
    getWebhookEndpoint(webhookEndpointId: string): Promise<WebhookEndpoint>;
    /**
     * Get a list of webhook endpoints defined on the account
     * List webhook endpoints
     */
    private getWebhookEndpointsRaw;
    /**
     * Get a list of webhook endpoints defined on the account
     * List webhook endpoints
     */
    getWebhookEndpoints(): Promise<Array<WebhookEndpoint>>;
    /**
     * Update the configuration of a webhook endpoint
     * Update a webhook endpoint
     */
    private updateWebhookEndpointRaw;
    /**
     * Update the configuration of a webhook endpoint
     * Update a webhook endpoint
     */
    updateWebhookEndpoint(webhookEndpointId: string, webhookEndpointMergePatch: WebhookEndpointMergePatch): Promise<WebhookEndpoint>;
}
