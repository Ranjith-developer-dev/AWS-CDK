import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as lambda from 'aws-cdk-lib/aws-lambda';
export interface S3Props extends cdk.StackProps {
    readonly lambdaFunction: lambda.Function;
}
export declare class S3BucketStack extends cdk.Stack {
    readonly bucket: s3.Bucket;
    constructor(scope: Construct, id: string, props: S3Props);
}
