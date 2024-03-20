const router = require(`express`).Router();

const operationService = require(`../services/operationService`);


router.get(`/`, async(req, res) => {
//    const latestStones = await operationService.getLatest().lean();  

    res.render( `home`, /*{ latestStones }*/ );
});


// router.get(`/dashboard`, async (req, res) => {
//   const stone = await operationService.getAll().lean();

//      res.render( `dashboard`,  { stone } );
//  });
 
module.exports = router;
