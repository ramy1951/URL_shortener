const express = require('express');
var router = express.Router()
const shortUrl = require('../models/short_url');

/**
 * Creates a shortened URL and redirects to home page.
 */
router.post("/shorten", async (req, res) => {
    shortUrl.create(req.body.fullUrl);
    return res.redirect("/");
});

module.exports = router;