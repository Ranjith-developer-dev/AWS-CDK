import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class BasicLambdaStack extends cdk.Stack {

    //Making the object accessible for reusablility
    public readonly lambdaFunction: lambda.Function
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // The code that defines your stack goes here
        const function_name = 'ranjith-cdk-lambda';
        const lambda_path = 'src/lambda/basic_lambda';

        this.lambdaFunction = new lambda.Function(this, function_name, {
            functionName: function_name,
            runtime: lambda.Runtime.NODEJS_20_X,
            code: lambda.Code.fromAsset(lambda_path),
            handler: 'lambda_function.handler',
            timeout: cdk.Duration.minutes(10),
            memorySize: 1024
        });

    }
}
