import userService from '../services/userService.js'

const userController = {
    createUser: async (req, res) => await userService.createUser(req, res),

    readUser: (req, res) => userService.readUser(req, res) ,

    updateUser: async (req, res) => await userService.updateUser(req, res),

    deleteUser: async (req, res) => await userService.deleteUser(req, res),

    getAllUsers: async (req, res) => await userService.getAllUsers(req, res),

    getUserById: async (req, res) => await userService.getUserById(req, res),

    loginUser: async (req, res) => await userService.loginUser(req, res),

    logoutUser: async (req, res) => await userService.logoutUser(req, res),

    changePassword: (req, res) => userService.changePassword(req, res),

    updateProfile: (req, res) => userService.updateProfile(req, res),

    makeAdmin: async (req, res) => await userService.makeAdmin(req, res),

    removeAdmin: async (req, res) => await userService.removeAdmin(req, res),

    searchUsers: (req, res) => userService.searchUsers(req, res),

    filterUsers: (req, res) => userService.filterUsers(req, res),

    blockUser: async (req, res) => await userService.blockUser(req, res),

    unblockUser: async (req, res) => await userService.unblockUser(req, res),

    verifyEmail: (req, res) => userService.verifyEmail(req, res),

    resendVerification: (req, res) => userService.resendVerification(req, res),

    uploadProfilePicture: (req, res) =>  userService.uploadProfilePicture(req, res),

    deleteAccount: (req, res) => userService.deleteAccount(req, res)
}

export default userController