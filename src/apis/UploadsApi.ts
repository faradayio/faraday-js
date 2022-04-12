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


import * as runtime from '../runtime';

export interface CreateUploadRequest {
    directory: string;
    filename: string;
    body?: Blob;
}

/**
 * 
 */
export class UploadsApi extends runtime.BaseAPI {

    /**
     * Upload a CSV file containing data to process.
     * Add a file
     */
    private async createUploadRaw(requestParameters: CreateUploadRequest, ): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.directory === null || requestParameters.directory === undefined) {
            throw new runtime.RequiredError('directory','Required parameter requestParameters.directory was null or undefined when calling createUpload.');
        }

        if (requestParameters.filename === null || requestParameters.filename === undefined) {
            throw new runtime.RequiredError('filename','Required parameter requestParameters.filename was null or undefined when calling createUpload.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/octet-stream';

        const response = await this.request({
            path: `/uploads/{directory}/{filename}`.replace(`{${"directory"}}`, encodeURIComponent(String(requestParameters.directory))).replace(`{${"filename"}}`, encodeURIComponent(String(requestParameters.filename))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Upload a CSV file containing data to process.
     * Add a file
     */
    async createUpload(directory: string, filename: string, body?: Blob, ): Promise<void> {
        await this.createUploadRaw({ directory: directory, filename: filename, body: body }, );
    }

}
