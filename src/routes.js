import express from 'express';
import { authController } from 'controllers/authController.js';
import { protect } from 'middlewares/authMiddleware.js';
import { blogController } from "./controllers/blogControllers.js";


const router = express.Router();

// auth
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

// blog
router.route('/blogs')
    .post(protect, blogController.create)
    .get(protect, blogController.getAll);

router.route('/blogs/:id')
    .put(protect, blogController.update)
    .delete(protect, blogController.destroy);

export default router;