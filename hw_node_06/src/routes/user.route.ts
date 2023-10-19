import { Router, Request, Response } from "express";
import { User } from "../entity/users.entity.ts";
import bycrypt from "bcrypt";

const userRouter = Router();

userRouter.post("/login", (req: Request, res: Response) => {
  return res.status(401).json({ message: "Invalid credentials" });
});

userRouter.post("/register", async (req: Request, res: Response) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: `please enter credentials` });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: `passwords don't match` });
    }
    
    const existingUser = await User.findOne({ where: [{ email }, { username }] });

    if (existingUser) {
      return res.status(400).json({ message: "User with this email or username already exists" });
    }

    const user = new User();
    user.email = email;
    user.username = username;
    user.password = await bycrypt.hash(password, 10);

    await user.save();
    return res.status(201).json({ message: "Registration successful" });

  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default userRouter;