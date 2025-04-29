import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dbPath = path.join(__dirname, '../data/users.json')

const readData = () => {
    try {
        return JSON.parse(fs.readFileSync(dbPath, 'utf-8'))
    } catch (e) {
        if (e.code === 'ENOENT') {
            fs.writeFileSync(dbPath, JSON.stringify([]))
            return []
        }
        throw e
    }
}

const writeData = (data) => {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2))
}

export {readData, writeData}