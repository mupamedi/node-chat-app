var socket = io(); 

socket.on('connect', function () {
    console.log('connected to server');
});

socket.on('newMessage', function(message) {
    console.log('new Message', message);
})

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

