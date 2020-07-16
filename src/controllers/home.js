const { Image } = require("../models/Index");

module.exports = {
  async index(req, res) {
    const images = await Image.find().sort({ timestamp: 1 });
    res.render("index", {
      images,
    });
  },
  upload(req, res) {
    res.render("upload");
  },
};
