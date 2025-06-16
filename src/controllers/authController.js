import { authService } from "../services/authService.js";

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const register = async (req, res) => await authService.register(req, res);

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res) => await authService.login(req, res);

export const authController = { register, login };