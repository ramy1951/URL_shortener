const urlTable = [];

const insert = async (fullUrl, shortUrl) => {
    const itemExists = await urlTable.filter(url => {
        if (url.fullUrl == fullUrl)
            return url
    });

    if (itemExists.length > 0) {
        return itemExists[0].shortUrl
    }

    urlTable.push({
        fullUrl,
        shortUrl
    });

    return shortUrl;
};

const remove = (fullUrl) => {

};


const getFullUrl = (shortUrl) => {
    const results = urlTable.filter((url) => {
        if (url.shortUrl == shortUrl) return url;
    });

    return results[0].fullUrl
};

const getAll = () => {
    return urlTable;
};

module.exports = {
    insert,
    remove,
    getFullUrl,
    getAll
}