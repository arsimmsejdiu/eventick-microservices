// Import the required modules
import express from "express";
import { currentUser } from "@eventick/common";

// Create a new router instance
const router = express.Router();

/**
 * Route: GET /api/users/currentuser
 * Description: Get the current user
 * Middleware: currentUser
 */
router.get("/api/users/currentuser", currentUser, (req, res) => {
  // Send the current user in the response
  res.send({ currentUser: req.currentUser || null });
});

// Export the router
export { router as currentUserRouter };