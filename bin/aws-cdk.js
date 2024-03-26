#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("aws-cdk-lib");
const aws_s3_cdk_stack_1 = require("../lib/aws-s3-cdk-stack");
const aws_lambda_stack_1 = require("../lib/aws-lambda-stack");
const app = new cdk.App();
//deploy basic lambda function
const basic_lambda_stack = new aws_lambda_stack_1.BasicLambdaStack(app, 'ranjithLambdaStack');
//reusing lambda 
const lambda = basic_lambda_stack.lambdaFunction1;
//deploy basic s3 bucket
const s3_bucket_stack = new aws_s3_cdk_stack_1.S3BucketStack(app, 'ranjithS3Stack', { lambdaFunction: basic_lambda_stack.lambdaFunction1 });
//reusing assets
const bucket = s3_bucket_stack.bucket;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzLWNkay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF3cy1jZGsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdUNBQXFDO0FBQ3JDLG1DQUFtQztBQUNuQyw4REFBd0Q7QUFDeEQsOERBQTJEO0FBRTNELE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRzFCLDhCQUE4QjtBQUM5QixNQUFNLGtCQUFrQixHQUFHLElBQUksbUNBQWdCLENBQUMsR0FBRyxFQUFFLG9CQUFvQixDQUFDLENBQUM7QUFFM0UsaUJBQWlCO0FBQ2pCLE1BQU0sTUFBTSxHQUFHLGtCQUFrQixDQUFDLGVBQWUsQ0FBQztBQUVsRCx3QkFBd0I7QUFDeEIsTUFBTSxlQUFlLEdBQUcsSUFBSSxnQ0FBYSxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxlQUFlLEVBQUMsQ0FBQyxDQUFDO0FBRXhILGdCQUFnQjtBQUNoQixNQUFNLE1BQU0sR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IFMzQnVja2V0U3RhY2sgfSBmcm9tICcuLi9saWIvYXdzLXMzLWNkay1zdGFjayc7XG5pbXBvcnQgeyBCYXNpY0xhbWJkYVN0YWNrIH0gZnJvbSAnLi4vbGliL2F3cy1sYW1iZGEtc3RhY2snO1xuXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xuXG5cbi8vZGVwbG95IGJhc2ljIGxhbWJkYSBmdW5jdGlvblxuY29uc3QgYmFzaWNfbGFtYmRhX3N0YWNrID0gbmV3IEJhc2ljTGFtYmRhU3RhY2soYXBwLCAncmFuaml0aExhbWJkYVN0YWNrJyk7XG5cbi8vcmV1c2luZyBsYW1iZGEgXG5jb25zdCBsYW1iZGEgPSBiYXNpY19sYW1iZGFfc3RhY2subGFtYmRhRnVuY3Rpb24xO1xuXG4vL2RlcGxveSBiYXNpYyBzMyBidWNrZXRcbmNvbnN0IHMzX2J1Y2tldF9zdGFjayA9IG5ldyBTM0J1Y2tldFN0YWNrKGFwcCwgJ3JhbmppdGhTM1N0YWNrJywgeyBsYW1iZGFGdW5jdGlvbjogYmFzaWNfbGFtYmRhX3N0YWNrLmxhbWJkYUZ1bmN0aW9uMX0pO1xuXG4vL3JldXNpbmcgYXNzZXRzXG5jb25zdCBidWNrZXQgPSBzM19idWNrZXRfc3RhY2suYnVja2V0O1xuXG5cblxuXG5cbiJdfQ==