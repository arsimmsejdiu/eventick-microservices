// Import required modules and libraries
import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import { validateRequest, BadRequestError } from "@eventick/common";

import { Password } from "../services/password";
import { User } from "../models/user";

// Create an instance of the Express router
const router = express.Router();

/**
 * Sign in route handler.
 * Validates the request body, checks if the user exists, verifies the password,
 * generates a JWT token, and stores it in the session.
 * 
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @returns {Response} - The Express response object.
 */
router.post(
  "/api/users/signin",
  [
    // Validate email and password in the request body
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("You must supply a password"),
  ],
  // Validate the request using the validateRequest middleware
  validateRequest,
  async (req: Request, res: Response) => {
    // Extract email and password from the request body
    const { email, password } = req.body;

    // Check if the user exists in the database
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      // If user does not exist, throw a BadRequestError
      throw new BadRequestError("Invalid credentials");
    }

    // Verify if the provided password matches the stored password
    const passwordsMatch = await Password.compare(
      existingUser.password,
      password
    );
    if (!passwordsMatch) {
      // If passwords do not match, throw a BadRequestError
      throw new BadRequestError("Invalid Credentials");
    }

    // Generate a JWT token
    const userJwt = jwt.sign(
      {
        id: existingUser.id,
        email: existingUser.email,
      },
      process.env.JWT_KEY!
    );

    // Store the JWT token in the session object
    req.session = {
      jwt: userJwt,
    };

    // Send a success response with the existing user object
    res.status(200).send(existingUser);
  }
);

// Export the router
export { router as signinRouter };