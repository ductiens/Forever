import multer from "multer";
// Multer cho phép server nhận và lưu trữ các file từ client

const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
