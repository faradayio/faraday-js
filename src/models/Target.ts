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

import { exists, mapValues } from '../runtime';
import {
    ResourceStatus,
    ResourceStatusFromJSON,
    ResourceStatusFromJSONTyped,
    ResourceStatusToJSON,
} from './ResourceStatus';

/**
 * Instructions on how to export output data defined by a scope.
 * 
 * There are two flavors of targets, each requiring different treatment in the API:
 * <table>
 * <thead>
 * <tr><th>Target type</th><th>Description</th><th>API requirement</th></tr>
 * </thead>
 * <tbody>
 * <tr><td><strong>Publication targets</strong></td><td>Faraday <em>hosts</em> your predictions for convenient retrieval as needed.</td><td>Supply <code>publication_type</code>. Do not specify a <code>connection_id</code>.</td></tr>
 * <tr><td><strong>Replication targets</strong></td><td>Faraday copies your predictions to systems <em>you</em> control.</td><td>Supply <code>connection_id</code>. Do not specify a <code>publication_type</code>.</td></tr>
 * </tbody>
 * </table>
 * @export
 * @interface Target
 */
export interface Target {
    /**
     * If this is a replication (externally-hosted) target, the UUID of a connection - see `/connections` for more detail. 
     * 
     * Mutually exclusive with `publication_type`.
     * @type {string}
     * @memberof Target
     */
    connectionId?: string;
    /**
     * When this resource was created.
     * @type {Date}
     * @memberof Target
     */
    createdAt: Date;
    /**
     * There are two options to receive back identifying information about exported individuals, each supporting different use cases:
     *   * **Identified**: All identifiable information specified by `identity_sets` in source data is emitted in cleartext - see /datasets for more detail. All payload columns are emitted. Your account may have a limit on how many rows can be returned. This facilitates most conversion, engagement, and retention use cases, along with direct mail acquisition.
     *   * **Hashed**: Faraday's name, physical address, and email is emitted in hashed form. Data is randomly ordered to prevent re-identification. All payload columns are emitted except raw propensity scores and attributes. This facilitates digital acquisition use cases.
     * 
     * Specify `"hashed": true` to receive **hashed** representations of individuals, and `"hashed": false` to receive **identified** representation.
     * 
     * Note: `"publication_type": "hosted_api"` only supports `true`.
     * @type {boolean}
     * @memberof Target
     */
    hashed?: boolean;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Target
     */
    id: string;
    /**
     * The connection-specific options. These vary by connection type. The following are currently supported:
     * <table>
     * <thead>
     * <tr><th>Key</th><th>Description</th><th>Data type</th><th>Applies to connection type(s) (* = required)</th></tr>
     * </thead>
     * <tbody>
     * <tr><td><code>dataset_name</code></td><td>Dataset name</td><td>text</td><td>bigquery*</td></tr>
     * <tr><td><code>day_partitioned</code></td><td>Day partitioned</td><td>bool</td><td>bigquery</td></tr>
     * <tr><td><code>delimeter</code></td><td>CSV delimeter</td><td>text</td><td>hosted_csv, s3_csv</td></tr>
     * <tr><td><code>gzip</code></td><td>gzip</td><td>bool</td><td>hosted_csv, s3_csv</td></tr>
     * <tr><td><code>object_key</code></td><td>S3 object key</td><td>text</td><td>s3_csv</td></tr>
     * <tr><td><code>paranoid_quoting</code></td><td>Paranoid quoting</td><td>bool</td><td>hosted_csv, s3_csv</td></tr>
     * <tr><td><code>table_name</code></td><td>Table name</td><td>text</td><td>bigquery*, redshift*</em></td></tr>
     * </tbody>
     * </table>
     * 
     * If the desired target has no required parameters, omit this from the request.
     * @type {object}
     * @memberof Target
     */
    options?: object;
    /**
     * If this is a publication (Faraday-hosted) target, the type. The following options are supported:
     *   * `hosted_csv` - Faraday hosts a CSV for you to retrieve by your choice of protocol: HTTPS, S3, GCS, or SFTP.
     *   * `hosted_api` - Faraday hosts your predictions for you to retrieve individually in real time using an HTTP API.
     *  
     * Mutually exclusive with `connection_id`.
     * @type {string}
     * @memberof Target
     */
    publicationType?: string;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof Target
     */
    resourceType: string;
    /**
     * The UUID of a scope - see /scopes for more detail.
     * @type {string}
     * @memberof Target
     */
    scopeId: string;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof Target
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {Date}
     * @memberof Target
     */
    statusChangedAt?: Date;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof Target
     */
    statusError?: string;
    /**
     * When this resource was last updated.
     * @type {Date}
     * @memberof Target
     */
    updatedAt: Date;
}

export function TargetFromJSON(json: any): Target {
    return TargetFromJSONTyped(json, false);
}

export function TargetFromJSONTyped(json: any, ignoreDiscriminator: boolean): Target {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'connectionId': !exists(json, 'connection_id') ? undefined : json['connection_id'],
        'createdAt': (new Date(json['created_at'])),
        'hashed': !exists(json, 'hashed') ? undefined : json['hashed'],
        'id': json['id'],
        'options': !exists(json, 'options') ? undefined : json['options'],
        'publicationType': !exists(json, 'publication_type') ? undefined : json['publication_type'],
        'resourceType': json['resource_type'],
        'scopeId': json['scope_id'],
        'status': ResourceStatusFromJSON(json['status']),
        'statusChangedAt': !exists(json, 'status_changed_at') ? undefined : (new Date(json['status_changed_at'])),
        'statusError': !exists(json, 'status_error') ? undefined : json['status_error'],
        'updatedAt': (new Date(json['updated_at'])),
    };
}

export function TargetToJSON(value?: Target | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'connection_id': value.connectionId,
        'created_at': (value.createdAt.toISOString()),
        'hashed': value.hashed,
        'id': value.id,
        'options': value.options,
        'publication_type': value.publicationType,
        'resource_type': value.resourceType,
        'scope_id': value.scopeId,
        'status': ResourceStatusToJSON(value.status),
        'status_changed_at': value.statusChangedAt === undefined ? undefined : (value.statusChangedAt.toISOString()),
        'status_error': value.statusError,
        'updated_at': (value.updatedAt.toISOString()),
    };
}

