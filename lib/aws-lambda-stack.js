"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicLambdaStack = void 0;
const cdk = require("aws-cdk-lib");
const lambda = require("aws-cdk-lib/aws-lambda");
class BasicLambdaStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // The code that defines your stack goes here
        const function1_name = "ranjith-cdk-lambda";
        const function2_name = "ranjith-cdk-lambda2";
        const lambda_path = "src/lambda/basic_lambda";
        // this.lambdaFunction1 = new lambda.Function(this, function1_name, {
        //     functionName: function1_name,
        //     runtime: lambda.Runtime.NODEJS_20_X,
        //     code: lambda.Code.fromAsset(lambda1_path),
        //     handler: "lambda_function.handler",
        //     timeout: cdk.Duration.minutes(10),
        //     memorySize: 1024,
        // });
        const createLambdaFunction = (name) => {
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
exports.BasicLambdaStack = BasicLambdaStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzLWxhbWJkYS1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF3cy1sYW1iZGEtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQW1DO0FBRW5DLGlEQUFpRDtBQUVqRCxNQUFhLGdCQUFpQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBSzNDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDNUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsNkNBQTZDO1FBQzdDLE1BQU0sY0FBYyxHQUFHLG9CQUFvQixDQUFDO1FBQzVDLE1BQU0sY0FBYyxHQUFHLHFCQUFxQixDQUFDO1FBRTdDLE1BQU0sV0FBVyxHQUFHLHlCQUF5QixDQUFDO1FBRTlDLHFFQUFxRTtRQUNyRSxvQ0FBb0M7UUFDcEMsMkNBQTJDO1FBQzNDLGlEQUFpRDtRQUNqRCwwQ0FBMEM7UUFDMUMseUNBQXlDO1FBQ3pDLHdCQUF3QjtRQUN4QixNQUFNO1FBRU4sTUFBTSxvQkFBb0IsR0FBRyxDQUFDLElBQVksRUFBbUIsRUFBRTtZQUMzRCxPQUFPLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO2dCQUNuQyxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztnQkFDbkMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztnQkFDeEMsT0FBTyxFQUFFLHlCQUF5QjtnQkFDbEMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDakMsVUFBVSxFQUFFLElBQUk7YUFDbkIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLGVBQWUsR0FBRyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUU1RCxPQUFPO1FBQ1AsSUFBSSxDQUFDLGVBQWUsR0FBRyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoRSxDQUFDO0NBQ0o7QUF2Q0QsNENBdUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gXCJhd3MtY2RrLWxpYlwiO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWxhbWJkYVwiO1xuXG5leHBvcnQgY2xhc3MgQmFzaWNMYW1iZGFTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gICAgLy9NYWtpbmcgdGhlIG9iamVjdCBhY2Nlc3NpYmxlIGZvciByZXVzYWJsaWxpdHlcbiAgICBwdWJsaWMgcmVhZG9ubHkgbGFtYmRhRnVuY3Rpb24xOiBsYW1iZGEuRnVuY3Rpb247XG4gICAgcHVibGljIHJlYWRvbmx5IGxhbWJkYUZ1bmN0aW9uMjogbGFtYmRhLkZ1bmN0aW9uO1xuXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgICAgICAvLyBUaGUgY29kZSB0aGF0IGRlZmluZXMgeW91ciBzdGFjayBnb2VzIGhlcmVcbiAgICAgICAgY29uc3QgZnVuY3Rpb24xX25hbWUgPSBcInJhbmppdGgtY2RrLWxhbWJkYVwiO1xuICAgICAgICBjb25zdCBmdW5jdGlvbjJfbmFtZSA9IFwicmFuaml0aC1jZGstbGFtYmRhMlwiO1xuXG4gICAgICAgIGNvbnN0IGxhbWJkYV9wYXRoID0gXCJzcmMvbGFtYmRhL2Jhc2ljX2xhbWJkYVwiO1xuXG4gICAgICAgIC8vIHRoaXMubGFtYmRhRnVuY3Rpb24xID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBmdW5jdGlvbjFfbmFtZSwge1xuICAgICAgICAvLyAgICAgZnVuY3Rpb25OYW1lOiBmdW5jdGlvbjFfbmFtZSxcbiAgICAgICAgLy8gICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yMF9YLFxuICAgICAgICAvLyAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KGxhbWJkYTFfcGF0aCksXG4gICAgICAgIC8vICAgICBoYW5kbGVyOiBcImxhbWJkYV9mdW5jdGlvbi5oYW5kbGVyXCIsXG4gICAgICAgIC8vICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24ubWludXRlcygxMCksXG4gICAgICAgIC8vICAgICBtZW1vcnlTaXplOiAxMDI0LFxuICAgICAgICAvLyB9KTtcblxuICAgICAgICBjb25zdCBjcmVhdGVMYW1iZGFGdW5jdGlvbiA9IChuYW1lOiBzdHJpbmcpOiBsYW1iZGEuRnVuY3Rpb24gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgbmFtZSwge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMjBfWCxcbiAgICAgICAgICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQobGFtYmRhX3BhdGgpLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IFwibGFtYmRhX2Z1bmN0aW9uLmhhbmRsZXJcIixcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24ubWludXRlcygxMCksXG4gICAgICAgICAgICAgICAgbWVtb3J5U2l6ZTogMTAyNCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubGFtYmRhRnVuY3Rpb24xID0gY3JlYXRlTGFtYmRhRnVuY3Rpb24oZnVuY3Rpb24xX25hbWUpO1xuXG4gICAgICAgIC8vcmV1c2VcbiAgICAgICAgdGhpcy5sYW1iZGFGdW5jdGlvbjIgPSBjcmVhdGVMYW1iZGFGdW5jdGlvbihmdW5jdGlvbjJfbmFtZSk7XG4gICAgfVxufVxuIl19