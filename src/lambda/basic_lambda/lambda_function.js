exports.handler = async (event) => {
    // Extracting name from the event, default to 'World' if not provided
    const name = event && event.name ? event.name : "World";

    // Building the response object
    const response = {
        statusCode: 200,
        body: JSON.stringify({ message: `Hello, ${name}!` }),
    };

    return response;
};

// // Test the Lambda function locally
// const event = { name: "John" }; // Example event object
// exports
//     .handler(event)
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));
