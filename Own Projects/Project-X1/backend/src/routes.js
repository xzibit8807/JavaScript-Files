const router = require(`express`).Router();

const homeController = require(`./controllers/homeController`);
const authController = require(`./controllers/authController`);
const catalogController = require(`./controllers/catalogController`);
const searchPage = require(`./controllers/searchController`);
const noPageController = require(`./controllers/404Controller`);


router.use(homeController);
router.use(catalogController);
router.use(searchPage);
router.use(authController);

router.use(noPageController);

module.exports = router;