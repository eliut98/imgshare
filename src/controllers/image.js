const path = require("path");
const fs = require("fs-extra");
const { Image } = require("../models/Index");
const { randomName } = require("../helpers/libs");

module.exports = {
  create(req, res) {
    const saveImage = async () => {
      const imgName = randomName();
      const images = await Image.find({
        filename: imgName,
      });
      if (images.length > 0) {
        saveImage();
      } else {
        const imgTempPath = req.file.path;
        const ext = path.extname(req.file.originalname).toLocaleLowerCase();
        const targetPath = path.resolve(`src/public/upload/${imgName}${ext}`);
        const exts = [".png", ".jpg", ".jpeg", ".gif", ".webp"];

        if (exts.includes(ext)) {
          await fs.rename(imgTempPath, targetPath);
          const newImage = new Image({
            title: req.body.title,
            description: req.body.description,
            filename: imgName + ext,
          });
          const imageSaved = await newImage.save();
          // res.redirect('/images');
          res.send("Works");
        } else {
          await fs.unlink(imgTempPath);
          res.status(500).json({
            msg: "Only images format are allowed",
          });
        }
      }
    };
    saveImage();
  },
};
