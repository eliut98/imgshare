const ctrl = {};

const { Image } = require('../models/Index');

ctrl.index = async (req, res) => {
    const images = await Image.find().sort({timestamp: 1});
    res.render('index', {
        images
    });
}

ctrl.upload = (req, res) => {
    res.render('upload');
}

module.exports = ctrl;