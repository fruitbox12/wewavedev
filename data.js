// Create a new WebSocket connection to the specified URL
var socket = new WebSocket('wss://feed.telemetry.polkadot.io/feed');

// Event listener for when the connection is opened
socket.addEventListener('open', function (event) {
    console.log('Connected to WS Server');
    // You can send messages to the server here, if needed
    // socket.send('Your message');
});

// Event listener for when a message is received from the server
socket.addEventListener('message', function (event) {
    console.log('Message from server: ', event.data);

    // Assuming the received data is JSON and needs to be parsed
    try {
        var telemetryData = JSON.parse(event.data);
        
        // Assuming telemetryData is an array of objects
        // Map the telemetry data to match your original data structure
        const mappedData = telemetryData.map(item => {
            return {
    e: item.eventType,  // Replace 'eventType' with the actual field name from telemetry data
        i: item.identifier, // Replace 'identifier' with the actual field name
        v: item.value    
            };
        });

        // Use or process the mapped data as needed
        console.log(mappedData);
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
