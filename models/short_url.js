const uuid = require('uuid');
const db = require('../db');

const create = (fullUrl) => {
    const shortUrl = uuid.v4();
    db.insert(fullUrl, shortUrl);
    return db.getAll();
}

const getFullUrl = (shortUrl) => {
    return db.getFullUrl(shortUrl);
}

const getAllUrls = () => {
    return db.getAll();
}


module.exports = {
    create,
    getFullUrl,
    getAllUrls
}