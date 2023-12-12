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
 * SFTP connection options
 * @export
 * @interface ConnectionOptionsSftp
 */
export interface ConnectionOptionsSftp {
    /**
     * The compression algorithm to use
     * @type {boolean}
     * @memberof ConnectionOptionsSftp
     */
    compression?: boolean;
    /**
     * The encryption cipher(s) to use
     * @type {string}
     * @memberof ConnectionOptionsSftp
     */
    encryption?: string;
    /**
     * The hostname or IP address of the SFTP server
     * @type {string}
     * @memberof ConnectionOptionsSftp
     */
    host: string;
    /**
     * The host key algorithm to use in verifying the host key presented by the remote host
     * @type {string}
     * @memberof ConnectionOptionsSftp
     */
    host_key?: string;
    /**
     * Currently not supported in favor of SSH keypair authentication (if blank Faraday's private key will be used instead)
     * @type {string}
     * @memberof ConnectionOptionsSftp
     */
    password?: string;
    /**
     * The port on the SFTP server listening for connections
     * @type {number}
     * @memberof ConnectionOptionsSftp
     */
    port: number;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSftp
     */
    type: string;
    /**
     * The user to connect to the SFTP server as
     * @type {string}
     * @memberof ConnectionOptionsSftp
     */
    user: string;
}
export declare function ConnectionOptionsSftpFromJSON(json: any): ConnectionOptionsSftp;
export declare function ConnectionOptionsSftpFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsSftp;
export declare function ConnectionOptionsSftpToJSON(value?: ConnectionOptionsSftp | null): any;
