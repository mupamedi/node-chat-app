var socket = io(); 

socket.on('connect', function () {
    console.log('connected to server');

    socket.emit('createMessage', {
        to: 'mike@example.com',
        text: 'also hey'
    });

});

socket.on('newMessage', function(message) {
    console.log('new Message', message);
})

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

