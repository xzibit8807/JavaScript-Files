const router = require(`express`).Router();
const mongoose = require(`mongoose`);

const authService = require(`../services/authService`);
const { getErrorMessage } = require("../utils/errorUtils");
const { isGuest, isAuth } = require("../middleware/middleware");


router.get(`/register`, isGuest, (req, res) =>{
    res.render(`auth/register`);
});

router.post(`/register`,isGuest, async (req, res) => {    
    const userDate = req.body;

    try{
        const token = await authService.register(userDate);
        res.cookie(`auth`, token);
        res.redirect(`/`);
    }catch(err){
       const message = getErrorMessage(err);

        res.status(400).render(`auth/register`, {...userDate, error: message });
    }
})


router.get(`/login`, isGuest, (req, res) =>{
    res.render(`auth/login`);
});

router.post('/login', isGuest, async (req, res) => {
    const { email, password } = req.body;
  // const loginData = req.body;
  let loginData = {email, password}
    try{
        const token = await authService.login(email, password);

        res.cookie('auth', token);
        res.redirect('/');
    }catch(err){
        res.status(400).render(`auth/login`,{...loginData, error: getErrorMessage(err) } );
    }
});


router.get(`/logout`,isAuth, (req, res) =>{
    res.clearCookie(`auth`);
    res.redirect(`/`);
});

module.exports = router;