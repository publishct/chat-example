var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
    
    // io.emit('a user connected');
    // socket.on('disconnect', () => {
    // io.emit('user disconnected');
    // });

    // socket.on('connection', (newUser) => {
    // io.emit('connection', { newUser: 'chat message', anotherUser: 'someone joined' }); // This will emit the event to all connected sockets
  // });
});
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
