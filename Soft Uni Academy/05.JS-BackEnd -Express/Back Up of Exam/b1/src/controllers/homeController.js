const router = require(`express`).Router();

const { isAuth } = require("../middleware/middleware");
const operationService = require(`../services/operationService`);
const userService = require(`../services/userService`);

router.get(`/`, async(req, res) => {
    const latestStones = await operationService.getLatest().lean();  

    res.render( `home`, { latestStones } );
});


router.get(`/dashboard`, async (req, res) => {
  const stone = await operationService.getAll().lean();

     res.render( `dashboard`,  { stone /*,createdStoneCatalogsCount, likedStonesCount*/} );
 });
 
module.exports = router;



  //   const user = await operationService.getUser();
 // const user = await userService.getInfo(req.user._id);
 // console.log("This is USER:", user);

//  const createdStoneCatalogsCount = user.createdStoneCatalogs.length;
//  const likedStonesCount = user.likedStones.length;