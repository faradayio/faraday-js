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
import { Connection, ConnectionMergePatch, ConnectionPost, Dataset, Target } from '../models';
export interface CreateConnectionRequest {
    connectionFields: ConnectionPost;
}
export interface DeleteConnectionRequest {
    connectionId: string;
}
export interface GetConnectionRequest {
    connectionId: string;
}
export interface GetConnectionDatasetsRequest {
    connectionId: string;
}
export interface GetConnectionTargetsRequest {
    connectionId: string;
}
export interface UpdateConnectionRequest {
    connectionId: string;
    connectionMergePatch: ConnectionMergePatch;
}
/**
 *
 */
export declare class ConnectionsApi extends runtime.BaseAPI {
    /**
     * Add a new connection.  Connections are configuration for connecting data between Faraday and an external location. They are required when working with <a href=\"https://faraday.ai/developers/reference/createtarget\">**replication targets**</a>.  All connections have a `type` that determines which options may be specified.  Connection `type` is specified in the `options` object.
     * Create connection
     */
    private createConnectionRaw;
    /**
     * Add a new connection.  Connections are configuration for connecting data between Faraday and an external location. They are required when working with <a href=\"https://faraday.ai/developers/reference/createtarget\">**replication targets**</a>.  All connections have a `type` that determines which options may be specified.  Connection `type` is specified in the `options` object.
     * Create connection
     */
    createConnection(connectionFields: ConnectionPost): Promise<Connection>;
    /**
     * Delete a connection
     * Delete a connection
     */
    private deleteConnectionRaw;
    /**
     * Delete a connection
     * Delete a connection
     */
    deleteConnection(connectionId: string): Promise<void>;
    /**
     * Get details on a specific connection
     * Retrieve a connection
     */
    private getConnectionRaw;
    /**
     * Get details on a specific connection
     * Retrieve a connection
     */
    getConnection(connectionId: string): Promise<Connection>;
    /**
     * Get all datasets that use this connection
     * Retrieve all datasets that use this connection
     */
    private getConnectionDatasetsRaw;
    /**
     * Get all datasets that use this connection
     * Retrieve all datasets that use this connection
     */
    getConnectionDatasets(connectionId: string): Promise<Array<Dataset>>;
    /**
     * Get all targets that use this connection
     * Retrieve all targets that use this connection
     */
    private getConnectionTargetsRaw;
    /**
     * Get all targets that use this connection
     * Retrieve all targets that use this connection
     */
    getConnectionTargets(connectionId: string): Promise<Array<Target>>;
    /**
     * Get a list of connections defined on the account
     * List connections
     */
    private getConnectionsRaw;
    /**
     * Get a list of connections defined on the account
     * List connections
     */
    getConnections(): Promise<Array<Connection>>;
    /**
     * Update the configuration of a connection.
     * Update a connection
     */
    private updateConnectionRaw;
    /**
     * Update the configuration of a connection.
     * Update a connection
     */
    updateConnection(connectionId: string, connectionMergePatch: ConnectionMergePatch): Promise<Connection>;
}
