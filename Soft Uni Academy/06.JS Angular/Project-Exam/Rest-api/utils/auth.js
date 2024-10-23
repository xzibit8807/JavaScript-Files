const jwt = require('./jwt');
// const { authCookieName } = require('../app-config');
// const {
//     userModel,
//     tokenBlacklistModel
// } = require('../models');
function auth(redirectUnauthenticated = true) {

    return function (req, res, next) {

        console.log('Incoming Request Object:', req);
    //////////////
            // if (!req || !req.headers) {
            //   console.error('No headers in the request object.');
            //   return res.status(400).json({ message: 'Bad request, no headers found' });
            // }
       ///////////////
        const token = req.headers['authorization'];
        if (!token) {
            return res.status(401).json({ message: 'No token provided, authorization denied' });
          }

          try {
            const decoded = jwt.verify(token.split(' ')[1], config.jwtSecret);
            req.user = decoded;
            next();
          } catch (err) {
            return res.status(401).json({ message: 'Invalid token, authorization denied' });
          }

        // Promise.all([
        //     jwt.verifyToken(token),
        //     tokenBlacklistModel.findOne({ token })
        // ])
        //     .then(([data, blacklistedToken]) => {
        //         if (blacklistedToken) {
        //             return Promise.reject(new Error('blacklisted token'));
        //         }
        //         userModel.findById(data.id)
        //             .then(user => {
        //                 req.user = user;
        //                 req.isLogged = true;
        //                 next();
        //             })
        //     })
        //     .catch(err => {
        //         if (!redirectUnauthenticated) {
        //             next();
        //             return;
        //         }
        //         if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
        //             console.error(err);
        //             res
        //                 .status(401)
        //                 .send({ message: "Invalid token!" });
        //             return;
        //         }
        //         next(err);
        //     });
    };
};

module.exports = auth;
////////////////////////////////////////////////////////////////////////////////////////
//// Second Type of Authentication
// const jwt = require('./jwt');
// const config = require('../config/config'); // Import your JWT secret configuration

// function auth(req, res, next) {
//     console.log('Incoming Request Object:', req);
  
//     if (!req || !req.headers) {
//       console.error('No headers in the request object.');
//       return res.status(400).json({ message: 'Bad request, no headers found' });
//     }
  
//     const authHeader = req.headers['authorization'];
//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(401).json({ message: 'No token provided, authorization denied' });
//     }
  
//     const token = authHeader.split(' ')[1];
//     try {
//       const decoded = jwt.verify(token, config.jwtSecret);
//       req.user = decoded;
//       next();
//     } catch (err) {
//       return res.status(401).json({ message: 'Invalid token, authorization denied' });
//     }
//   }
  

// module.exports = auth;
