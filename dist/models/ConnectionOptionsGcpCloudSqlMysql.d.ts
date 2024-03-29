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
 * Google Cloud SQL (MySQL) connection options
 * @export
 * @interface ConnectionOptionsGcpCloudSqlMysql
 */
export interface ConnectionOptionsGcpCloudSqlMysql {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysql
     */
    database: string;
    /**
     * For use with Cloud SQL proxy. Client must enable Cloud SQL Admin API and give IAM role "Cloud SQL Client" to our service account faraday-incoming@production-237317.iam.gserviceaccount.com (Datasets) or faraday-outgoing@production-237317.iam.gserviceaccount.com (Targets).
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysql
     */
    instance_connection_name: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysql
     */
    password: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysql
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysql
     */
    user: string;
}
export declare function ConnectionOptionsGcpCloudSqlMysqlFromJSON(json: any): ConnectionOptionsGcpCloudSqlMysql;
export declare function ConnectionOptionsGcpCloudSqlMysqlFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsGcpCloudSqlMysql;
export declare function ConnectionOptionsGcpCloudSqlMysqlToJSON(value?: ConnectionOptionsGcpCloudSqlMysql | null): any;
