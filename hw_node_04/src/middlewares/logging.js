const loggingMiddleware = (req, res, next) => {
    const {method, url, query, body} = req;
    const logMsg = `${method} ${url} query: ${JSON.stringify(query)} body:${JSON.stringify(body)}`
    console.log(logMsg)
    next()
}

export default loggingMiddleware;