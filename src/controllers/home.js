const ctrl = {};

ctrl.index = (req, res) => {
    res.render('index');
}

ctrl.upload = (req, res) => {
    res.render('upload');
}

module.exports = ctrl;