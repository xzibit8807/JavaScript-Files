const router = require(`express`).Router();
const operationService = require(`../services/operationService`);


router.get('/search', async (req, res) => {
    const { name } = req.query; 
    const result = await operationService.search(name);

    res.render('search', { searchInput: name, result });
});

module.exports = router;


