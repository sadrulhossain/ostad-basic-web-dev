import { readData, writeData } from '../config/dbConfig.js'

class UserModel {
    // Private methods for data transformation
    #transformUser(userData) {
        return {
            id: userData.id,
            name: userData.name,
            email: userData.email,
            isAdmin: userData.isAdmin || false,
            isVerified: userData.isVerified || false,
            isBlocked: userData.isBlocked || false,
            createdAt: userData.createdAt || new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
    }

    // Public methods
    async create(userData) {
        const users = await readData()
        const newUser = this.#transformUser({
            id: Date.now().toString(),
            ...userData
        })
        users.push(newUser)
        await writeData(users)
        return newUser
    }

    async findAll() {
        return await readData()
    }

    async findById(id) {
        const users = await readData()
        return users.find(user => user.id === id) || null
    }

    async findByEmail(email) {
        const users = await readData()
        return users.find(user => user.email === email) || null
    }

    async update(id, updates) {
        const users = await readData()
        const index = users.findIndex(user => user.id === id)

        if (index === -1) return null

        const updatedUser = this.#transformUser({
            ...users[index],
            ...updates
        })

        users[index] = updatedUser
        await writeData(users)
        return updatedUser
    }

    async delete(id) {
        const users = await readData()
        const filteredUsers = users.filter(user => user.id !== id)

        if (users.length === filteredUsers.length) return false

        await writeData(filteredUsers)
        return true
    }

    // Specialized methods
    async makeAdmin(id) {
        return this.update(id, { isAdmin: true })
    }

    async removeAdmin(id) {
        return this.update(id, { isAdmin: false })
    }

    async blockUser(id) {
        return this.update(id, { isBlocked: true })
    }

    async unblockUser(id) {
        return this.update(id, { isBlocked: false })
    }
}

export default new UserModel()