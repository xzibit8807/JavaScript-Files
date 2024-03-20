const User = require(`../models/User`);

//exports.getInfo = (userId) => User.findById(userId).populate(['createdCourses', 'signUpCourses']);

exports.getInfo = async (userId) => {
    try {
      const user = await User.findById(userId).populate(['createdCourses', 'signUpCourses']);
      return user;
    } catch (error) {
      console.error('Error occurred while populating createdCourses:', error);
      throw new Error('Failed to populate createdCourses');
    }
  };
  

//   exports.getInfo = async (userId) => {
//     try {
//       const user = await User.findById(userId)
//         .populate('createdCourses')
//         .populate('signUpCourses')
//         .lean();
  
//       if (!user) {
//         throw new Error('User not found');
//       }
  
//       const populatedUser = {
//         ...user,
//         createdCourses: user.createdCourses ? user.createdCourses.map(course => course.toObject()) : [],
//         signUpCourses: user.signUpCourses ? user.signUpCourses.map(course => course.toObject()) : []
//       };
  
//       return populatedUser;
//     } catch (error) {
//       console.error('Error occurred while fetching user info:', error);
//      // throw new Error('Failed to fetch user info');
//     }
//   };
  