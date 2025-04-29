import express from 'express'
import cors from 'cors'
import userRoutes from './src/routes/userRoutes.js'
import path from 'path'
import {fileURLToPath} from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/uploads', express.static(path.join(__dirname, process.env.UPLOAD_DIR || 'public/uploads')))
app.use('/api/users', userRoutes)
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({
        message: 'Something went wrong!'
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`)
})