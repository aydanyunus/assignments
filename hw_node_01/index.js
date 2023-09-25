import http from 'http';

let count = 0;

let port = 3000

process.argv.forEach((arg) => {
    if (arg.startsWith('--port')) {
        const clPort = arg.split('=')[1]
        if (!isNaN(clPort)) {
            port = parseInt(clPort, 10)
        }
    }
})

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        count += 1;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: 'Request handled successfully',
            requestCount: count,
        }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('not found');
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});