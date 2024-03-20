const router = require(`express`).Router();
const mongoose = require(`mongoose`);

const authService = require(`../services/authService`);
const { getErrorMessage } = require("../utils/errorUtils");

//// Register 
router.get(`/register`, (req, res) =>{
    res.render(`register`);
});

router.post(`/register`, async (req, res) => {    
    const userDate = req.body;

    try{
        await authService.register(userDate);
        res.redirect(`/login`);
    }catch(err){
       const message = getErrorMessage(err);

        res.render(`/register`, {...userDate, error: message });
    }
})

/// Login
router.get(`/login`, (req, res) =>{
    res.render(`login`);
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try{
        const token = await authService.login(email, password);

        res.cookie('auth', token);
    
        res.redirect('/');
    }catch(err){
        let message = getErrorMessage(err);
        res.status(400).render(`login`,{...email, error: message } );
    }

});

// logout
router.get(`/logout`, (req, res) =>{
    res.clearCookie(`auth`);
    res.redirect(`/`);
});

module.exports = router;
// find in future a way to disable cookie on logout