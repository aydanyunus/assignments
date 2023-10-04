const loggingMiddleware = (req, res, next) => {
    const {method, url, query, body} = req;
    console.log(method, url, query, body)
    next()
}

export default loggingMiddleware;