const helpers = {};

helpers.randomName = () => {
    let characters = "abcdefghijklmnñopqrstuvwxyz123456789";
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

module.exports = helpers;