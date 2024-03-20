const router = require(`express`).Router();

const { isAuth } = require("../middleware/middleware");
const operationService = require(`../services/operationService`);
const { getErrorMessage } = require("../utils/errorUtils");

// All Courses Page ,compilation
router.get(`/allCourses`, async(req, res) => {
    const course = await operationService.getAll().lean();
    res.render( `catalog` , { course } );
});

// Create Page with Get and Post
router.get(`/createCourse`,isAuth, async(req, res) => {
    // const movies = await operationService.getAll().lean();
     res.render( `create`/*,  { movies } */);
 });

 router.post(`/createCourse`,isAuth, async (req,res) =>{
    const courseData = req.body;
try{ 
    await operationService.create(req.user._id, courseData);
    console.log( `Cast data send to DB...\n Course Created with the Right Way !`);
    res.redirect(`/allCourses`);
}catch(err){
    
    console.error('Error fetching course details:', err);
    res.status(400).render(`create`, { ...courseData, err: getErrorMessage(err) });
}

});
 // Details Page
 router.get(`/:courseId/details`, async(req, res) => {
    try {
      const course = await operationService.getOneWithOwner(req.params.courseId).lean();
      console.log("Course signUpList:", course.signUpList); // Проверка на правилния изход
  
      // Проверка дали course.singUpList е дефинирано преди да го използвате
      const signUpUsers = course.signUpList ? course.signUpList.map(user => user.user).join(', ') : "";
      console.log("SignUpUsers:", signUpUsers); // Check the output of signUpUsers
        
      const isOwner = course.owner && course.owner._id == req.user?._id;
      const isSigned = course.signUpList && course.signUpList.some(user => user._id == req.user?._id);
  
      res.render(`details`, { ...course, signUpUsers, isOwner, isSigned });
    } catch (err) {
      console.error('Something went wrong...\nError fetching course details:', err);
      res.status(500).send('<p>Internal Server Error</p>');
    }
  });
  
// Sign Up for a Course 
 router.get(`/:courseId/sign-up`,isAuth, async (req,res) =>{
    let user = req.params.courseId;
    await operationService.signUp(user, req.user._id);
    res.redirect(`/${user}/details`)
 });

// Delete Function
router.get(`/:courseId/delete`,isOwner, isAuth ,async (req, res) => {
    await operationService.delete(req.params.courseId);
    
    return res.redirect(`/allCourses`);
});
// this can be in the Same file ore other... Owner for Edith Page...
async function isOwner(req,res,next){
    const course = await operationService.getOne(req.params.courseId).lean();
    if(course.owner != req.user?._id ){
        return res.redirect(`/${req.params.courseId}/details`)
    } 
    
    if(!course){
        return res.redirect(`/allCourses`);
    }
    req.course = course;
    next(); 
}

// Edit page 
router.get(`/:courseId/edit`,isOwner,async (req, res) =>{
    res.render(`edith` , { ...req.course });
} )
router.post(`/:courseId/edit`, isOwner, async(req,res) =>{
    const courseData = req.body;
    const currentCoursed = req.params.courseId;

    try{
        await operationService.edit(currentCoursed, courseData);
        res.redirect(`/${currentCoursed}/details`)
    }catch(err){
        res.render(`/edit`, { ...courseData, error: getErrorMessage(err)}); 
    }
});

module.exports = router;