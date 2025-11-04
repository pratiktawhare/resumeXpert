import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
});

//file filter

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpg", "image/jpeg", "image/png"];
  if(allowedTypes.includes(file.mimetype)) {
    cb(null, true)
  }
  else {
    cb(new Error("Only .jpeg, .jpg, /png are allowed formats"), false)
  }
}

const upload = multer({ storage: storage, fileFilter: fileFilter })
export default upload;