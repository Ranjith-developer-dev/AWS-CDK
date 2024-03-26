import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";

export class BasicLambdaStack extends cdk.Stack {
    //Making the object accessible for reusablility
    public readonly lambdaFunction1: lambda.Function;
    public readonly lambdaFunction2: lambda.Function;

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // The code that defines your stack goes here
        const function1_name = "ranjith-cdk-lambda";
        const function2_name = "ranjith-cdk-lambda2";

        const lambda_path = "src/lambda/basic_lambda";

        const createLambdaFunction = (name: string): lambda.Function => {
            return new lambda.Function(this, name, {
                functionName: name,
                runtime: lambda.Runtime.NODEJS_20_X,
                code: lambda.Code.fromAsset(lambda_path),
                handler: "lambda_function.handler",
                timeout: cdk.Duration.minutes(10),
                memorySize: 1024,
            });
        };

        this.lambdaFunction1 = createLambdaFunction(function1_name);

        //reuse
        this.lambdaFunction2 = createLambdaFunction(function2_name);
    }
}
