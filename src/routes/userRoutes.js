import express from 'express'
import userController from '../controllers/userController.js'
import upload from '../config/multerConfig.js'

const router = express.Router()

// User CRUD operations
router.post("/create-user", userController.createUser)
router.get("/read-user", userController.readUser)
router.put("/update-user", userController.updateUser)
router.delete("/delete-user", userController.deleteUser)

// User data retrieval
router.get("/all-users", userController.getAllUsers)
router.get("/user/:id", userController.getUserById)

// Authentication
router.post("/login", userController.loginUser)
router.post("/logout", userController.logoutUser)

// Account management
router.put("/change-password", userController.changePassword)
router.put("/update-profile", userController.updateProfile)

// Admin operations
router.put("/make-admin/:id", userController.makeAdmin)
router.put("/remove-admin/:id", userController.removeAdmin)

// Search and filter
router.get("/search", userController.searchUsers)
router.get("/filter", userController.filterUsers)

// User status
router.patch("/block-user/:id", userController.blockUser)
router.patch("/unblock-user/:id", userController.unblockUser)

// Email verification
router.post("/verify-email", userController.verifyEmail)
router.post("/resend-verification", userController.resendVerification)

// Profile picture
router.post("/upload-profile-picture", upload.single('profilePicture'), userController.uploadProfilePicture)

// Account deletion
router.delete("/delete-account", userController.deleteAccount)

export default router