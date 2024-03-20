const router = require(`express`).Router();
const movieService = require(`../services/movieService`)

router.get(`/search`,async (req, res) =>{
    const {title, genre, date} = req.query;
    const movies = await movieService.search(title, genre, date)
    res.render(`search`, { movies, title, genre, date });
});

module.exports = router;


