import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import { validateRequest, BadRequestError } from "@eventick/common";

import { User } from "../models/user";

const router = express.Router();

/**
 * Route handler for user signup
 * 
 * Validates the request body, creates a new user, generates a JWT, and stores it in the session object.
 * 
 * @param req The request object.
 * @param res The response object.
 * @returns The response containing the created user.
 */
router.post(
  "/api/users/signup",
  [
    // Validate email and password in the request body
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new BadRequestError("Email in use");
    }

    // Create a new user
    const user = User.build({ email, password });
    await user.save();

    // Generate JWT
    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_KEY!
    );

    // Store JWT in session object
    req.session = {
      jwt: userJwt,
    };

    // Send response with the created user
    res.status(201).send(user);
  }
);

export { router as signupRouter };