// import { Request, Response, NextFunction } from "express";

// const loggingMiddleware = (req: Request, res: Response, next: NextFunction) => {
//   const token = req.headers.authorization?.split(" ")[1];
//   if (!token) return res.status(400).json({ err: "Token is missing!" });

//   next();
// };

// export default loggingMiddleware;

// const authenticate = (req: Request, res:Response, next: NextFunction) => {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   return res.status(401).json({ message: "Unauthorized" });
// };

// export { authenticate };
