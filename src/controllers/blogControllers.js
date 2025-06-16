import blogModel from '../models/blog.js';
import { blogService } from "../services/blogService.js";

// @desc    Create a new blog
// @route   POST /api/blogs
// @access  Private
const create = async (req, res) => await blogService.create(req, res);

// @desc    Get all blogs
// @route   GET /api/blogs
// @access  Private
const getAll = async (req, res) => await blogService.getAll(req, res);

// @desc    Update a blog
// @route   PUT /api/blogs/:id
// @access  Private
const update = async (req, res) => await blogService.update(req, res);

// @desc    Delete a blog
// @route   DELETE /api/blogs/:id
// @access  Private
const destroy = async (req, res) => await blogService.destroy(req, res);

export const blogController = { create, getAll, update, destroy };