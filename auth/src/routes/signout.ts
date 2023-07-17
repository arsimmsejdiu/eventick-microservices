// This code is written in Typescript using the Express framework.

// Import the express module
import express from "express";

// Create a new router instance
const router = express.Router();

// Define a route for signing out users
router.post("/api/users/signout", (req, res) => {
  // Set the session to null, effectively signing out the user
  req.session = null;

  // Send an empty response object
  res.send({});
});

// Export the router as a named export
export { router as signoutRouter };