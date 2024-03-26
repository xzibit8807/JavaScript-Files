const router = require(`express`).Router();

const { isAuth } = require("../middleware/middleware");
const operationService = require(`../services/operationService`);
const { getErrorMessage } = require("../utils/errorUtils");



router.get(`/create`,isAuth, async(req, res) => {
     const game = await operationService.getAll().lean();
    res.render( `create`,  { game } );
});

 router.post(`/create`,isAuth, async (req,res) =>{
    const gameData = req.body;
try{ 
    await operationService.create(req.user._id, gameData);
    console.log( `Cast data send to DB...\n A new game was Created !`);
    res.redirect(`/dashboard`);
}catch(err){
    
    console.error('Error fetching course details:', err);
    res.status(400).render(`create`, { ...gameData, error: getErrorMessage(err) });
}
});


 router.get(`/:gameId/details`, async(req, res) => {

     try {
       const course = await operationService.getOneWithInfo(req.params.gameId).lean();

       const likedUsers = course.likedList ? course.likedList.map(user => user.user).join(', ') : "";
       console.log("likedUsers:", likedUsers); 
        
       const isOwner = course.owner && course.owner._id == req.user?._id;
       const isLiked = course.likedList && course.likedList.some(user => user._id == req.user?._id);
  
      res.render(`details`, { ...course, likedUsers, isOwner, isLiked });
     } catch (err) {
       console.error('Something went wrong...\nError fetching course details:', err);
       res.status(500).send('<p>Something went wrong with this page, please try again.</p>');
     }
  });
  

 router.get(`/:gameId/liked`,isAuth, async (req,res) =>{
    let user = req.params.gameId;
    await operationService.liked(user, req.user._id);
    res.redirect(`/${user}/details`)
 });

 
 
 router.get(`/:gameId/delete`,isOwner, isAuth ,async (req, res) => {
     await operationService.delete(req.params.gameId);
     
     return res.redirect(`/dashboard`);
    });
    
    
    async function isOwner(req,res,next){
        const course = await operationService.getOne(req.params.gameId).lean();
        if(course.owner != req.user?._id ){
            return res.redirect(`/${req.params.gameId}/details`)
        } 
        
        if(!course){
            return res.redirect(`/dashboard`);
        }
        req.course = course;
        next(); 
    }
    
    
    router.get(`/:gameId/edit`,isOwner,async (req, res) =>{
        res.render(`edit` , { ...req.course });
    } )
    
    router.post(`/:gameId/edit`, isOwner, async(req,res) =>{
        const gameData = req.body;
        const currentData = req.params.gameId;
        try{
            await operationService.edit(currentData, gameData);
            res.redirect(`/${currentData}/details`)
        }catch(err){
            res.render(`edit`, { ...gameData, error: getErrorMessage(err)}); 
        }
    });

    /// Service for the Comments API  
    router.get('', async(req, res) =>{
        try{
            const comments = await operationService.getAll().populate('owner comments likes')
            res.status(200).json(comments)
        }catch(err){
            res.status(404).send({ message: '${err.message}'});
            return;
        }
    })

module.exports = router;