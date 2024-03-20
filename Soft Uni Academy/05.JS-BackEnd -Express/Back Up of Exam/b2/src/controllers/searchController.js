const router = require(`express`).Router();


router.get(`/search`,async (req, res) =>{
    // const {title, genre, date} = req.query;
    // const movies = await movieService.search(title, genre, date)
    res.render(`search`, /*{ movies, title, genre, date }*/);
});

module.exports = router;


