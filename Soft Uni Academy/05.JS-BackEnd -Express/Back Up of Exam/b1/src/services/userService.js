const User = require(`../models/User`);

//exports.getInfo = (userId) => User.findById(userId).populate(['createdStoneCatalogs', 'likedStones']);

exports.getInfo = async (userId) => {
    try {
      const user = await User.findById(userId).populate(['createdStoneCatalogs', 'likedStones']);
      return user;
    } catch (error) {
      console.error('Error occurred while populating createdStoneCatalogs:', error);
      throw new Error('Failed to populate createdStoneCatalogs');
    }
  };
  

//   exports.getInfo = async (userId) => {
//     try {
//       const user = await User.findById(userId)
//         .populate('createdStoneCatalogs')
//         .populate('likedStones')
//         .lean();
  
//       if (!user) {
//         throw new Error('User not found');
//       }
  
//       const populatedUser = {
//         ...user,
//         createdStoneCatalogs: user.createdStoneCatalogs ? user.createdStoneCatalogs.map(course => course.toObject()) : [],
//         likedStones: user.likedStones ? user.likedStones.map(course => course.toObject()) : []
//       };
  
//       return populatedUser;
//     } catch (error) {
//       console.error('Error occurred while fetching user info:', error);
//      // throw new Error('Failed to fetch user info');
//     }
//   };
  