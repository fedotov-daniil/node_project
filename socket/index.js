var events = require('../events');

function configure(io){

}

exports.startSocket = function (io){
    io.sockets.on('connection', function (socket) {
        events.map(socket);
    });
};
