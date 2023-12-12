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
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsGcpCloudSqlSqlServer` type.)
 *
 * Google Cloud SQL (SQL Server) connection options
 * @export
 * @interface ConnectionOptionsGcpCloudSqlSqlServerPost
 */
export interface ConnectionOptionsGcpCloudSqlSqlServerPost {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPost
     */
    database: string;
    /**
     * For use with Cloud SQL proxy. Client must enable Cloud SQL Admin API and give IAM role "Cloud SQL Client" to our service account faraday-incoming@production-237317.iam.gserviceaccount.com (Datasets) or faraday-outgoing@production-237317.iam.gserviceaccount.com (Targets).
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPost
     */
    instance_connection_name: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPost
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPost
     */
    password: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPost
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPost
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPost
     */
    user: string;
}
export declare function ConnectionOptionsGcpCloudSqlSqlServerPostFromJSON(json: any): ConnectionOptionsGcpCloudSqlSqlServerPost;
export declare function ConnectionOptionsGcpCloudSqlSqlServerPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsGcpCloudSqlSqlServerPost;
export declare function ConnectionOptionsGcpCloudSqlSqlServerPostToJSON(value?: ConnectionOptionsGcpCloudSqlSqlServerPost | null): any;
