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
 * (Parameters used to PUT a value of the `ConnectionOptionsSftp` type.)
 *
 * SFTP connection options
 * @export
 * @interface ConnectionOptionsSftpPut
 */
export interface ConnectionOptionsSftpPut {
    /**
     * The compression algorithm to use
     * @type {boolean}
     * @memberof ConnectionOptionsSftpPut
     */
    compression?: boolean;
    /**
     * The encryption cipher(s) to use
     * @type {string}
     * @memberof ConnectionOptionsSftpPut
     */
    encryption?: string;
    /**
     * The hostname or IP address of the SFTP server
     * @type {string}
     * @memberof ConnectionOptionsSftpPut
     */
    host: string;
    /**
     * The host key algorithm to use in verifying the host key presented by the remote host
     * @type {string}
     * @memberof ConnectionOptionsSftpPut
     */
    host_key?: string;
    /**
     * Currently not supported in favor of SSH keypair authentication (if blank Faraday's private key will be used instead)
     * @type {string}
     * @memberof ConnectionOptionsSftpPut
     */
    password?: string;
    /**
     * The port on the SFTP server listening for connections
     * @type {number}
     * @memberof ConnectionOptionsSftpPut
     */
    port: number;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSftpPut
     */
    type: string;
    /**
     * The user to connect to the SFTP server as
     * @type {string}
     * @memberof ConnectionOptionsSftpPut
     */
    user: string;
}
export declare function ConnectionOptionsSftpPutFromJSON(json: any): ConnectionOptionsSftpPut;
export declare function ConnectionOptionsSftpPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsSftpPut;
export declare function ConnectionOptionsSftpPutToJSON(value?: ConnectionOptionsSftpPut | null): any;
