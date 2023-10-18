import { Router, Request, Response } from "express";

const userRouter = Router();

userRouter.post('/login', (req: Request, res: Response)=> {
    return res.status(401).json({message: 'Invalid credentials'})
})

userRouter.post('/registration', (req: Request, res: Response)=> {
    return res.status(401).json({message: 'Invalid credentials'})
})


export default userRouter;