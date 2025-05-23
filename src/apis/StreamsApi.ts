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
    Stream,
    StreamAnalysis,
} from '../models';

export interface ArchiveStreamRequest {
    streamIdOrName: string;
    archiveConfig: ArchiveConfig;
}

export interface DeleteStreamRequest {
    streamIdOrName: string;
}

export interface FindOrCreateStreamRequest {
    streamName: string;
}

export interface ForceUpdateStreamRequest {
    streamIdOrName: string;
}

export interface GetStreamRequest {
    streamIdOrName: string;
}

export interface GetStreamAnalysisRequest {
    streamIdOrName: string;
}

export interface UnarchiveStreamRequest {
    streamIdOrName: string;
    archiveConfig: ArchiveConfig;
}

/**
 * 
 */
export class StreamsApi extends runtime.BaseAPI {

    /**
     * Archive a stream
     * Archive a stream
     */
    private async archiveStreamRaw(requestParameters: ArchiveStreamRequest, ): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.streamIdOrName === null || requestParameters.streamIdOrName === undefined) {
            throw new runtime.RequiredError('streamIdOrName','Required parameter requestParameters.streamIdOrName was null or undefined when calling archiveStream.');
        }

        if (requestParameters.archiveConfig === null || requestParameters.archiveConfig === undefined) {
            throw new runtime.RequiredError('archiveConfig','Required parameter requestParameters.archiveConfig was null or undefined when calling archiveStream.');
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
            path: `/streams/{stream_id_or_name}/archive`.replace(`{${"stream_id_or_name"}}`, encodeURIComponent(String(requestParameters.streamIdOrName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.archiveConfig,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Archive a stream
     * Archive a stream
     */
    async archiveStream(streamIdOrName: string, archiveConfig: ArchiveConfig, ): Promise<void> {
        await this.archiveStreamRaw({ streamIdOrName: streamIdOrName, archiveConfig: archiveConfig }, );
    }

    /**
     * Delete a stream
     */
    private async deleteStreamRaw(requestParameters: DeleteStreamRequest, ): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.streamIdOrName === null || requestParameters.streamIdOrName === undefined) {
            throw new runtime.RequiredError('streamIdOrName','Required parameter requestParameters.streamIdOrName was null or undefined when calling deleteStream.');
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
            path: `/streams/{stream_id_or_name}`.replace(`{${"stream_id_or_name"}}`, encodeURIComponent(String(requestParameters.streamIdOrName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a stream
     */
    async deleteStream(streamIdOrName: string, ): Promise<void> {
        await this.deleteStreamRaw({ streamIdOrName: streamIdOrName }, );
    }

    /**
     * Look up (or create) an event stream by name.
     * Create a stream
     */
    private async findOrCreateStreamRaw(requestParameters: FindOrCreateStreamRequest, ): Promise<runtime.ApiResponse<Stream>> {
        if (requestParameters.streamName === null || requestParameters.streamName === undefined) {
            throw new runtime.RequiredError('streamName','Required parameter requestParameters.streamName was null or undefined when calling findOrCreateStream.');
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
            path: `/streams/{stream_name}`.replace(`{${"stream_name"}}`, encodeURIComponent(String(requestParameters.streamName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Look up (or create) an event stream by name.
     * Create a stream
     */
    async findOrCreateStream(streamName: string, ): Promise<Stream> {
        const response = await this.findOrCreateStreamRaw({ streamName: streamName }, );
        return await response.value();
    }

    /**
     * Trigger a rerun for this resource. Faraday automatically updates resources when their config changes, but this option is available in case of transient errors. 
     * Trigger a rerun for this resource.
     */
    private async forceUpdateStreamRaw(requestParameters: ForceUpdateStreamRequest, ): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.streamIdOrName === null || requestParameters.streamIdOrName === undefined) {
            throw new runtime.RequiredError('streamIdOrName','Required parameter requestParameters.streamIdOrName was null or undefined when calling forceUpdateStream.');
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
            path: `/streams/{stream_id_or_name}/force_update`.replace(`{${"stream_id_or_name"}}`, encodeURIComponent(String(requestParameters.streamIdOrName))),
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
    async forceUpdateStream(streamIdOrName: string, ): Promise<void> {
        await this.forceUpdateStreamRaw({ streamIdOrName: streamIdOrName }, );
    }

    /**
     * Look up a specific event stream.
     * Retrieve a stream
     */
    private async getStreamRaw(requestParameters: GetStreamRequest, ): Promise<runtime.ApiResponse<Stream>> {
        if (requestParameters.streamIdOrName === null || requestParameters.streamIdOrName === undefined) {
            throw new runtime.RequiredError('streamIdOrName','Required parameter requestParameters.streamIdOrName was null or undefined when calling getStream.');
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
            path: `/streams/{stream_id_or_name}`.replace(`{${"stream_id_or_name"}}`, encodeURIComponent(String(requestParameters.streamIdOrName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Look up a specific event stream.
     * Retrieve a stream
     */
    async getStream(streamIdOrName: string, ): Promise<Stream> {
        const response = await this.getStreamRaw({ streamIdOrName: streamIdOrName }, );
        return await response.value();
    }

    /**
     * Get the count of stream events emitted over a time period.
     */
    private async getStreamAnalysisRaw(requestParameters: GetStreamAnalysisRequest, ): Promise<runtime.ApiResponse<StreamAnalysis>> {
        if (requestParameters.streamIdOrName === null || requestParameters.streamIdOrName === undefined) {
            throw new runtime.RequiredError('streamIdOrName','Required parameter requestParameters.streamIdOrName was null or undefined when calling getStreamAnalysis.');
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
            path: `/streams/{stream_id_or_name}/analysis`.replace(`{${"stream_id_or_name"}}`, encodeURIComponent(String(requestParameters.streamIdOrName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get the count of stream events emitted over a time period.
     */
    async getStreamAnalysis(streamIdOrName: string, ): Promise<StreamAnalysis> {
        const response = await this.getStreamAnalysisRaw({ streamIdOrName: streamIdOrName }, );
        return await response.value();
    }

    /**
     * List all streams present on the account
     * List streams
     */
    private async getStreamsRaw(): Promise<runtime.ApiResponse<Array<Stream>>> {
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
            path: `/streams`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response);
    }

    /**
     * List all streams present on the account
     * List streams
     */
    async getStreams(): Promise<Array<Stream>> {
        const response = await this.getStreamsRaw();
        return await response.value();
    }

    /**
     * Unarchive a stream
     * Unarchive a stream
     */
    private async unarchiveStreamRaw(requestParameters: UnarchiveStreamRequest, ): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.streamIdOrName === null || requestParameters.streamIdOrName === undefined) {
            throw new runtime.RequiredError('streamIdOrName','Required parameter requestParameters.streamIdOrName was null or undefined when calling unarchiveStream.');
        }

        if (requestParameters.archiveConfig === null || requestParameters.archiveConfig === undefined) {
            throw new runtime.RequiredError('archiveConfig','Required parameter requestParameters.archiveConfig was null or undefined when calling unarchiveStream.');
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
            path: `/streams/{stream_id_or_name}/unarchive`.replace(`{${"stream_id_or_name"}}`, encodeURIComponent(String(requestParameters.streamIdOrName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.archiveConfig,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Unarchive a stream
     * Unarchive a stream
     */
    async unarchiveStream(streamIdOrName: string, archiveConfig: ArchiveConfig, ): Promise<void> {
        await this.unarchiveStreamRaw({ streamIdOrName: streamIdOrName, archiveConfig: archiveConfig }, );
    }

}
