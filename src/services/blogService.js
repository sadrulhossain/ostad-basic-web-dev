import blogModel from '../models/blog.js';

const create = async (req, res) => {
    try {
        const { title, content } = req.body;

        const blog = await blogModel.create({
            title,
            content,
            author: req.user._id,
        });

        res.status(201).json(blog);
    } catch (e) {
        res.status(500).json({ message: 'Server error' });
    }
};

const getAll = async (req, res) => {
    try {
        const blogs = await blogModel.find().populate('author', 'name email');
        res.json(blogs);
    } catch (e) {
        res.status(500).json({ message: 'Server error' });
    }
};

const update = async (req, res) => {
    try {
        const { title, content } = req.body;
        const blog = await findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        // Check if the blog belongs to the logged-in user
        if (blog.author.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        blog.title = title || blog.title;
        blog.content = content || blog.content;

        const updatedBlog = await blog.save();
        res.json(updatedBlog);
    } catch (e) {
        res.status(500).json({ message: 'Server error' });
    }
};

const destroy = async (req, res) => {
    try {
        const blog = await findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        // Check if the blog belongs to the logged-in user
        if (blog.author.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        await blog.remove();
        res.json({ message: 'Blog removed' });
    } catch (e) {
        res.status(500).json({ message: 'Server error' });
    }
};

const findById = async (id) => await blogModel.findById(id);

export const blogService = { create, getAll, update, destroy };