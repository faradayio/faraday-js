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
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsS3Csv` type.)
 * 
 * CSV on Amazon S3 connection options
 * 
 * Prerequisites:
 * * Faraday's service account must be added to the S3 Bucket policy
 * @export
 * @interface ConnectionOptionsS3CsvPost
 */
export interface ConnectionOptionsS3CsvPost {
    /**
     * S3 buckets exists inside of an AWS region, e.g. us-east-1
     * @type {string}
     * @memberof ConnectionOptionsS3CsvPost
     */
    aws_region: string;
    /**
     * Bucket name
     * @type {string}
     * @memberof ConnectionOptionsS3CsvPost
     */
    bucket_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsS3CsvPost
     */
    type: string;
}

export function ConnectionOptionsS3CsvPostFromJSON(json: any): ConnectionOptionsS3CsvPost {
    return ConnectionOptionsS3CsvPostFromJSONTyped(json, false);
}

export function ConnectionOptionsS3CsvPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsS3CsvPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aws_region': json['aws_region'],
        'bucket_name': json['bucket_name'],
        'type': json['type'],
    };
}

export function ConnectionOptionsS3CsvPostToJSON(value?: ConnectionOptionsS3CsvPost | null): any {
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

