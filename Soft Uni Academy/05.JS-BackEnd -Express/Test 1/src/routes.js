const router = require(`express`).Router();

const homeController = require(`./controllers/homeController`);
const catalogController = require(`./controllers/catalogController`);
const noPageController = require(`./controllers/404Controller`);
//const searchPage = require(`./controllers/searchController`);
const authController = require(`./controllers/authController`);


router.use(homeController);
router.use(catalogController);
//router.use(searchPage);
//router.use(`/cast`, castController);
router.use(authController);

router.use(noPageController);

module.exports = router;