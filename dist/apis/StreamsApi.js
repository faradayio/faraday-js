"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamsApi = void 0;
const runtime = require("../runtime");
/**
 *
 */
class StreamsApi extends runtime.BaseAPI {
    /**
     * Archive a stream
     * Archive a stream
     */
    archiveStreamRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.streamIdOrName === null || requestParameters.streamIdOrName === undefined) {
                throw new runtime.RequiredError('streamIdOrName', 'Required parameter requestParameters.streamIdOrName was null or undefined when calling archiveStream.');
            }
            if (requestParameters.archiveConfig === null || requestParameters.archiveConfig === undefined) {
                throw new runtime.RequiredError('archiveConfig', 'Required parameter requestParameters.archiveConfig was null or undefined when calling archiveStream.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("bearer", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/streams/{stream_id_or_name}/archive`.replace(`{${"stream_id_or_name"}}`, encodeURIComponent(String(requestParameters.streamIdOrName))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.archiveConfig,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Archive a stream
     * Archive a stream
     */
    archiveStream(streamIdOrName, archiveConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.archiveStreamRaw({ streamIdOrName: streamIdOrName, archiveConfig: archiveConfig });
        });
    }
    /**
     * Delete a stream
     */
    deleteStreamRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.streamIdOrName === null || requestParameters.streamIdOrName === undefined) {
                throw new runtime.RequiredError('streamIdOrName', 'Required parameter requestParameters.streamIdOrName was null or undefined when calling deleteStream.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("bearer", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/streams/{stream_id_or_name}`.replace(`{${"stream_id_or_name"}}`, encodeURIComponent(String(requestParameters.streamIdOrName))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Delete a stream
     */
    deleteStream(streamIdOrName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteStreamRaw({ streamIdOrName: streamIdOrName });
        });
    }
    /**
     * Look up (or create) an event stream by name.
     * Create a stream
     */
    findOrCreateStreamRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.streamName === null || requestParameters.streamName === undefined) {
                throw new runtime.RequiredError('streamName', 'Required parameter requestParameters.streamName was null or undefined when calling findOrCreateStream.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("bearer", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/streams/{stream_name}`.replace(`{${"stream_name"}}`, encodeURIComponent(String(requestParameters.streamName))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * Look up (or create) an event stream by name.
     * Create a stream
     */
    findOrCreateStream(streamName) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.findOrCreateStreamRaw({ streamName: streamName });
            return yield response.value();
        });
    }
    /**
     * Look up a specific event stream.
     * Retrieve a stream
     */
    getStreamRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.streamIdOrName === null || requestParameters.streamIdOrName === undefined) {
                throw new runtime.RequiredError('streamIdOrName', 'Required parameter requestParameters.streamIdOrName was null or undefined when calling getStream.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("bearer", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/streams/{stream_id_or_name}`.replace(`{${"stream_id_or_name"}}`, encodeURIComponent(String(requestParameters.streamIdOrName))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * Look up a specific event stream.
     * Retrieve a stream
     */
    getStream(streamIdOrName) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getStreamRaw({ streamIdOrName: streamIdOrName });
            return yield response.value();
        });
    }
    /**
     * Get the count of stream events emitted over a time period.
     */
    getStreamAnalysisRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.streamIdOrName === null || requestParameters.streamIdOrName === undefined) {
                throw new runtime.RequiredError('streamIdOrName', 'Required parameter requestParameters.streamIdOrName was null or undefined when calling getStreamAnalysis.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("bearer", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/streams/{stream_id_or_name}/analysis`.replace(`{${"stream_id_or_name"}}`, encodeURIComponent(String(requestParameters.streamIdOrName))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * Get the count of stream events emitted over a time period.
     */
    getStreamAnalysis(streamIdOrName) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getStreamAnalysisRaw({ streamIdOrName: streamIdOrName });
            return yield response.value();
        });
    }
    /**
     * List all streams present on the account
     * List streams
     */
    getStreamsRaw() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("bearer", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/streams`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * List all streams present on the account
     * List streams
     */
    getStreams() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getStreamsRaw();
            return yield response.value();
        });
    }
    /**
     * Unarchive a stream
     * Unarchive a stream
     */
    unarchiveStreamRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.streamIdOrName === null || requestParameters.streamIdOrName === undefined) {
                throw new runtime.RequiredError('streamIdOrName', 'Required parameter requestParameters.streamIdOrName was null or undefined when calling unarchiveStream.');
            }
            if (requestParameters.archiveConfig === null || requestParameters.archiveConfig === undefined) {
                throw new runtime.RequiredError('archiveConfig', 'Required parameter requestParameters.archiveConfig was null or undefined when calling unarchiveStream.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("bearer", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/streams/{stream_id_or_name}/unarchive`.replace(`{${"stream_id_or_name"}}`, encodeURIComponent(String(requestParameters.streamIdOrName))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.archiveConfig,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Unarchive a stream
     * Unarchive a stream
     */
    unarchiveStream(streamIdOrName, archiveConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.unarchiveStreamRaw({ streamIdOrName: streamIdOrName, archiveConfig: archiveConfig });
        });
    }
}
exports.StreamsApi = StreamsApi;
