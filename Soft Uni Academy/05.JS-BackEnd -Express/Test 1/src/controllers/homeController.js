const router = require(`express`).Router();

const { isAuth } = require("../middleware/middleware");
const operationService = require(`../services/operationService`);
const userService = require(`../services/userService`);

router.get(`/`, async(req, res) => {
    const latestCourses = await operationService.getLatest().lean();
    //const catalogs = await operationService.getAll().lean();
    res.render( `home`, { latestCourses } );
});


router.get(`/profile`, isAuth, async (req, res) => {
  //   const user = await operationService.getUser();
  const user = await userService.getInfo(req.user._id);
  console.log("This is USER:", user);

  const createdCoursesCount = user.createdCourses.length;
  const signUpCoursesCount = user.signUpCourses.length;

     res.render( `profile`,  { user ,createdCoursesCount, signUpCoursesCount} );
 });
 
/* router.get(`/details/:curse`, async (req, res) => {
    const curseId = req.params.curse;

    const course = await operationService.getOne(curseId).lean();
    // const isOwner = course.owner == req.user?._id;

    // const casts = await castService.getById(movie.casts).lean();

    // const isAuthenticated = !!req.user;

    res.render(`details`, { course, /*isOwner *//* });
});*/
/*
router.get('/details/:curse', async (req, res) => {
    try {
        const curseId = req.params.curse;
      //  console.log(curseId); // Log the value of 'curseId'

        // Assuming `operationService.getOne` returns a Promise
        const course = await operationService.getOne(curseId).lean();

        if (!course) {
            // Handle the case when the course is not found
            return res.status(404).send('<p>Course not found</p>')
        }

        // Other code here...

        res.render('details', { course /*, isOwner *//*});
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error fetching course details:', error);
        res.status(500).send('<p>Internal Server Error</p>')
    }
});*/


module.exports = router;