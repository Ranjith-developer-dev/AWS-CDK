#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { S3BucketStack } from '../lib/aws-s3-cdk-stack';
import { BasicLambdaStack } from '../lib/aws-lambda-stack';

const app = new cdk.App();


//deploy basic lambda function
const basic_lambda_stack = new BasicLambdaStack(app, 'ranjithLambdaStack');

//reusing lambda 
const lambda = basic_lambda_stack.lambdaFunction1;

//deploy basic s3 bucket
const s3_bucket_stack = new S3BucketStack(app, 'ranjithS3Stack', { lambdaFunction: basic_lambda_stack.lambdaFunction1});

//reusing assets
const bucket = s3_bucket_stack.bucket;





