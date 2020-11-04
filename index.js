const express = require('express');
const app = express();
const shortUrl = require('./models/short_url');
const cors = require('cors');
const apiController = require('./router/apiController');


/**************MIDDLEWARE**************/
app.set('view engine', "ejs");
app.use(express.urlencoded({
    extended: false
}));
app.use(cors({
    methods: ["POST"],
    origin: process.env.CORS_ORIGIN
}));

/**************API ROUTER**************/
app.use("/api", apiController);


/**************MAIN ROUTES**************/
/**
 * Renders home page while passing in the URLs directs to home page.
 */
app.get("/", async (_req, res) => {
    const urlTable = await shortUrl.getAllUrls();

    return res.render("index", {
        urlTable
    });
});

/**
 * Will redirect user to the full based on shortIdz.
 */
app.get("/:shortUrl", (req, res) => res.redirect(shortUrl.getFullUrl(req.params.shortUrl)));

app.listen(process.env.PORT, () => console.log("listening at " + process.env.PORT));