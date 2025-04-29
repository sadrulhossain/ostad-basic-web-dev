import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, process.env.UPLOAD_DIR || 'public/uploads')
    },
    filename: (req, file, callback) => {
        const unq = Date.now() + '-' + Math.round(Math.random() * 1e9)
        callback(null, 'user-' + unq + path.extname(file.originalname))
    }
})

const fileFilter = (req, file, callback) => {
    const fileTypes = new RegExp(process.env.ALLOWED_FILE_TYPES || 'jpeg|jpg|png|gif')
    const mime = fileTypes.test(file.mimetype)
    const ext = fileTypes.test(path.extname(file.originalname).toLowerCase())

    if (mime && ext) {
        return callback(null, true)
    }
    callback(new Error(`Only ${process.env.ALLOWED_FILE_TYPES || 'jpg, jpeg, png, gif'} files are allowed`))
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: (process.env.MAX_FILE_SIZE || 5) * 1024 * 1024
    },
    fileFilter: fileFilter
})

export default upload