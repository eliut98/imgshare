const path = require('path');
const fs = require('fs-extra');
const { randomName } = require('../helpers/libs');

const ctrl = {};

ctrl.index = (req, res) => {

}

ctrl.create = async (req, res) => {
    const imgTempPath = req.file.path;
    const ext = path.extname(req.file.originalname).toLocaleLowerCase();
    const imgName = randomName();
    const targetPath = path.resolve(`src/public/upload/${imgName}${ext}`);

    
    if(ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif' || ext === '.webp') {
      await fs.rename(imgTempPath, targetPath);
    }

    res.send('Works');
}

ctrl.like = (req, res) => {
    
}

ctrl.comment = (req, res) => {
    
}

ctrl.remove = (req, res) => {
    
}

module.exports = ctrl;