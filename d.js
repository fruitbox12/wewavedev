// Initialize an empty array to hold the data
var data = [];

// Create a new WebSocket connection
var socket = new WebSocket('wss://feed.telemetry.polkadot.io/feed');

// Event listener for when the connection is opened
socket.addEventListener('open', function (event) {
    console.log('Connected to WS Server');
    // You can send a message to the server here, if needed
    // socket.send('Your message');
});

// Event listener for when a message is received from the server
socket.addEventListener('message', function (event) {
    console.log('Message from server: ', event.data);

    // Assuming the received data is JSON and needs to be parsed
    try {
        var telemetryData = JSON.parse(event.data);
        
        // Map the telemetry data to match your desired data structure
        var mappedData = telemetryData.map(item => {
            // Replace 'someField1', 'someField2', and 'someField3' with the actual field names from your data
            return {
                e: item.someField1,
                i: item.someField2,
                v: item.someField3
            };
        });

        // Add the mapped data to the global data array
        data.push(...mappedData);

        // You can now use the 'data' array as needed
        console.log(data);
    } catch (error) {
        console.error('Error parsing data from WebSocket:', error);
    }
});

// Event listener for any errors that occur
socket.addEventListener('error', function (event) {
    console.error('WebSocket Error: ', event);
});

// Event listener for when the WebSocket is closed
socket.addEventListener('close', function (event) {
    console.log('Disconnected from WS Server');
});
