const router = require(`express`).Router();

const { isAuth } = require("../middleware/middleware");
const operationService = require(`../services/operationService`);
const { getErrorMessage } = require("../utils/errorUtils");



router.get(`/create`,isAuth, async(req, res) => {
     const stone = await operationService.getAll().lean();
    res.render( `create`,  { stone } );
});

 router.post(`/create`,isAuth, async (req,res) =>{
    const stoneData = req.body;
try{ 
    await operationService.create(req.user._id, stoneData);
    console.log( `Cast data send to DB...\n A new Stone was Created !`);
    res.redirect(`/dashboard`);
}catch(err){
    
    console.error('Error fetching course details:', err);
    res.status(400).render(`create`, { ...stoneData, error: getErrorMessage(err) });
}
});


 router.get(`/:stoneId/details`, async(req, res) => {

     try {
       const course = await operationService.getOneWithInfo(req.params.stoneId).lean();

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
  

 router.get(`/:stoneId/liked`,isAuth, async (req,res) =>{
    let user = req.params.stoneId;
    await operationService.liked(user, req.user._id);
    res.redirect(`/${user}/details`)
 });

 
 
 router.get(`/:stoneId/delete`,isOwner, isAuth ,async (req, res) => {
     await operationService.delete(req.params.stoneId);
     
     return res.redirect(`/dashboard`);
    });
    
    
    async function isOwner(req,res,next){
        const course = await operationService.getOne(req.params.stoneId).lean();
        if(course.owner != req.user?._id ){
            return res.redirect(`/${req.params.stoneId}/details`)
        } 
        
        if(!course){
            return res.redirect(`/dashboard`);
        }
        req.course = course;
        next(); 
    }
    
    
    router.get(`/:stoneId/edit`,isOwner,async (req, res) =>{
        res.render(`edit` , { ...req.course });
    } )
    
    router.post(`/:stoneId/edit`, isOwner, async(req,res) =>{
        const stoneData = req.body;
        const currentData = req.params.stoneId;
        try{
            await operationService.edit(currentData, stoneData);
            res.redirect(`/${currentData}/details`)
        }catch(err){
            res.render(`edit`, { ...stoneData, error: getErrorMessage(err)}); 
        }
    });

module.exports = router;