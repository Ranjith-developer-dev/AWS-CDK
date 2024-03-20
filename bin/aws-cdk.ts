#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { S3BucketStack } from '../lib/aws-s3-cdk-stack';

const app = new cdk.App();
const s3_bucket_stack = new S3BucketStack(app, 'ranjithS3Stack');

//reusing assets
const bucket = s3_bucket_stack.bucket;

