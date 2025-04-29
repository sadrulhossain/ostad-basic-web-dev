// index.js
import express from 'express'

const app = express()
const STATUS_CODE = {
    SUCCESS: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    SERVER_ERROR: 500
}
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.post('/user', (req, res) => {
    try {
        if (!req.body) return errorRes(res, 'Invalid request.', STATUS_CODE.BAD_REQUEST)

        const {name, email} = req.body

        // return successRes(res, name)
        if (!name || !email) {
            return errorRes(res, 'Both name and email are required.', STATUS_CODE.BAD_REQUEST)
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return errorRes(res, 'Invalid email format.', STATUS_CODE.BAD_REQUEST)
        }

        return successRes(res, {
            name: name,
            email: email
        })
    } catch (e) {
        return errorRes(res, 'Something went wrong!')
    }
})

app.use((req, res) => {
    return errorRes(res, 'Route not found', STATUS_CODE.NOT_FOUND)
})

const successRes = (res, data, status = STATUS_CODE.SUCCESS) => {
    return res.status(status).json({
        success: true,
        status: status,
        message: 'Success',
        error: null,
        data: data || null
    })
}

const errorRes = (res, error, status = STATUS_CODE.SERVER_ERROR) => {
    return res.status(status).json({
        success: false,
        status: status,
        message: 'Error',
        error: error,
        data: null
    })
}

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`)
})