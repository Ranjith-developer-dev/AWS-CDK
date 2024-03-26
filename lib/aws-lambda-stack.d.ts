import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
export declare class BasicLambdaStack extends cdk.Stack {
    readonly lambdaFunction1: lambda.Function;
    readonly lambdaFunction2: lambda.Function;
    constructor(scope: Construct, id: string, props?: cdk.StackProps);
}
