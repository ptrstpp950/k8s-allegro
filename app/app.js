const http = require('http');
const os = require('os');
const fs = require('fs');

const port = 8080;
const path = '/var/data'

console.log('dumpster server starting...');

const dataHandler = (request, response) => {
    fs.readdir(path, (err, items) => {

        if(err) {
            console.log(`cannot read directory ${path} :(`, err);
            response.write('folder does not exists');
            response.end();
            return;
        }

        response.write(`there are ${items.length} files in folder\n`);
        for (let i=0; i < items.length; i++) {
            response.write(`${items[i]}\n`);
        }

        response.end();
    });
}

const envHandler = (request, response) => {
    for (env in process.env) {
        response.write(`${env}: ${process.env[env]}\n`);
    }

    response.end();
}

const generalHandler = (request, response) => {
    response.end(`v1 running on ${os.hostname()}\n`);
}

const requestHandler = (request, response) => {
    console.log(`received request from ${request.connection.remoteAddress} for url ${request.url}`);

    if(request.url === '/test') {
        console.log('handling /test request as error');
        response.writeHead(404);
        response.end();
        return;
    }

    response.writeHead(200);
    if(request.url === '/data') {
        console.log('handling /data request');
        dataHandler(request, response);
        return;
    }

    if(request.url === '/env') {
        console.log('handling /env request');
        envHandler(request, response);
        return;
    }

    console.log('handling general request');
    generalHandler(request, response);
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
    if (err) {
        return console.log('bad thing happened :(', err)
    }

    console.log(`dumpster server is listening on ${port}`);

    console.log('dumpster server started');
});