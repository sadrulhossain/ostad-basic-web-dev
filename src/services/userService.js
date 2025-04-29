import userModel from '../models/userModel.js'

const userService = {
    createUser: async (req, res) => {
        try {
            const user = await userModel.create(req.body)
            res.status(201).json({
                message: 'User created successfully',
                user
            })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    readUser: (req, res) => {
        res.json({ message: 'User read successfully' })
    },

    updateUser: async (req, res) => {
        try {
            const user = await userModel.update(req.params.id, req.body)
            res.status(201).json({
                message: 'User updated successfully',
                user
            })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    deleteUser: async (req, res) => {
        try {
            const user = await userModel.delete(req.params.id)
            res.status(201).json({
                message: 'User deleted successfully'
            })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await userModel.findAll()
            if (!users) return res.status(404).json({ message: 'No user found' })
            res.json({
                message: 'All users fetched successfully',
                users
            })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = await userModel.findById(req.params.id)
            if (!user) return res.status(404).json({ message: 'User not found' })
            res.json({
                message: 'User fetched by ID',
                user
            })
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    loginUser: async (req, res) => {
        try {
            const user = await userModel.loginUser(req.params.id)
            res.json({
                message: 'User login successful'
            })
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    logoutUser: async (req, res) => {
        try {
            const user = await userModel.logoutUser(req.params.id)
            res.json({
                message: 'User logout successful'
            })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    changePassword: (req, res) => {
        res.json({ message: 'Password changed successfully' })
    },

    updateProfile: (req, res) => {
        res.json({ message: 'User profile updated successfully' })
    },

    makeAdmin: async (req, res) => {
        try {
            const user = await userModel.makeAdmin(req.params.id)
            res.json({
                message: 'User made admin successfully'
            })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    removeAdmin: async (req, res) => {
        try {
            const user = await userModel.removeAdmin(req.params.id)
            res.json({
                message: 'Admin role removed successfully'
            })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    searchUsers: (req, res) => {
        res.json({ message: 'User search completed successfully' })
    },

    filterUsers: (req, res) => {
        res.json({ message: 'User filter completed successfully' })
    },

    blockUser: async (req, res) => {
        try {
            const user = await userModel.blockUser(req.params.id)
            res.json({
                message: 'User blocked successfully'
            })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    unblockUser: async (req, res) => {
        try {
            const user = await userModel.unblockUser(req.params.id)
            res.json({
                message: 'User unblocked successfully'
            })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    verifyEmail: (req, res) => {
        res.json({ message: 'Email verified successfully' })
    },

    resendVerification: (req, res) => {
        res.json({ message: 'Verification email resent' })
    },

    uploadProfilePicture: (req, res) => {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' })
        }
        res.json({
            message: 'Profile picture uploaded successfully',
            filePath: `/uploads/${req.file.filename}`
        })
    },

    deleteAccount: (req, res) => {
        res.json({ message: 'Account deleted successfully' })
    }
}

export default userService