const router = require(`express`).Router();

const homeController = require(`./controllers/homeController`);
const movieController = require(`./controllers/movieController`);
const noPageController = require(`./controllers/404Controller`);
const searchPage = require(`./controllers/searchController`);
const castController = require(`./controllers/castController`);
const authController = require(`./controllers/authController`);


router.use(homeController);
router.use(movieController);
router.use(searchPage);
router.use(`/cast`, castController);
router.use(authController);

router.use(noPageController);

module.exports = router;