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

import { exists, mapValues } from '../runtime';
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsS3Csv` type.)
 * 
 * S3 connection options
 * @export
 * @interface ConnectionOptionsS3CsvPut
 */
export interface ConnectionOptionsS3CsvPut {
    /**
     * S3 buckets exists inside of an AWS region, e.g. us-east-1
     * @type {string}
     * @memberof ConnectionOptionsS3CsvPut
     */
    aws_region: string;
    /**
     * Bucket name
     * @type {string}
     * @memberof ConnectionOptionsS3CsvPut
     */
    bucket_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsS3CsvPut
     */
    type: string;
}

export function ConnectionOptionsS3CsvPutFromJSON(json: any): ConnectionOptionsS3CsvPut {
    return ConnectionOptionsS3CsvPutFromJSONTyped(json, false);
}

export function ConnectionOptionsS3CsvPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsS3CsvPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aws_region': json['aws_region'],
        'bucket_name': json['bucket_name'],
        'type': json['type'],
    };
}

export function ConnectionOptionsS3CsvPutToJSON(value?: ConnectionOptionsS3CsvPut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aws_region': value.aws_region,
        'bucket_name': value.bucket_name,
        'type': value.type,
    };
}

