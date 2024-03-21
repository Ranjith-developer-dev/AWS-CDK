import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3n from 'aws-cdk-lib/aws-s3-notifications';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface S3Props extends cdk.StackProps {
    readonly lambdaFunction: lambda.Function
}
export class S3BucketStack extends cdk.Stack {
    public readonly bucket: s3.Bucket;

    //Replace props.lambdaFunction with your lambda function
    constructor(scope: Construct, id: string, props: S3Props) {
        super(scope, id, props);

        this.bucket = new s3.Bucket(this, "ranjith-cdk-bucket", {
            versioned: false,
            bucketName: "ranjith-cdk-bucket",
            publicReadAccess: false,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            removalPolicy: cdk.RemovalPolicy.DESTROY
        });

        //Assigne notification to be sent to your lambda function
        this.bucket.addEventNotification(s3.EventType.OBJECT_CREATED, new s3n.LambdaDestination(props.lambdaFunction))
    }



}
