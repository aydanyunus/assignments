import http from 'http';
import dotenv from 'dotenv';
dotenv.config()
import fs from 'fs';
import url from 'url';

const fetchData = async () => {
    try {
        const data = await fs.promises.readFile('./data.json', {
            encoding: 'utf-8'
        });
        return (JSON.parse(data));
    } catch (error) {
        console.error(error);
    }
};


const port = process.env.PORT;
const host = process.env.HOST;


const server = http.createServer(async (req, res) => {
    let parsedUrl = url.parse(req.url, true)
    const page = parseInt(parsedUrl.query.page);
    const size = parseInt(parsedUrl.query.size);


    if (parsedUrl.pathname === '/' && req.method === 'GET') {
        try {
            const newsData = await fetchData();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            if (!isNaN(page) && !isNaN(size)) {
                const startIndex = (page - 1) * size;
                const endIndex = page * size;
                const result = newsData.slice(startIndex, endIndex);
                res.end(JSON.stringify(result));
            } else {
                res.end(JSON.stringify(newsData));
            }
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify([]));
        }
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
})


server.listen(port, host, () => {
    console.log(`server running on ${host}:${port}`);
});