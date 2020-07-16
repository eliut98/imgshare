const { Router } = require("express");
const router = Router();

const home = require("../controllers/home");
const image = require("../controllers/image");

router.get("/", home.index);
router.get("/upload", home.upload);

router.post("/images", image.create);

module.exports = router;
