import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, done) => {
    done(null, "./uploads");
  },
  filename: (req, file, done) => {
    const fileExtension = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExtension, "")
        .toLowerCase()
        .split(" ")
        .join("-") +
      "-" +
      Date.now() +
      fileExtension;
    done(null, fileName);
  },
});

export const upload = multer({
  storage:storage,
  dest: "./uploads",
  limits: {
    fileSize: 70000,
  },
  fileFilter: (req, file, done) => {
    const fileName = file.mimetype;

    if (
      fileName === "image/png" ||
      fileName === "image/png" ||
      fileName === "image/jpeg"
    ) {
      done(null, true);
    } else {
      done(new Error("invalid file type"));
    }
  },
});
