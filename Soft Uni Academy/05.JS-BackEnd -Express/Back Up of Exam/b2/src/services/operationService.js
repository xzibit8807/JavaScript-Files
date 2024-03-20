const Catalog = require(`../models/Catalog`);
const User = require(`../models/User`)
 
exports.getAll = () => Catalog.find();

 //  Search Engine
exports.search = async (title, genre, date) => {

    let result = {};
    if(title){
 
        result.title = new RegExp(title, 'i')
    }
    if(genre){
      //  result = result.filter(stone => stone.genre.toLowerCase() == genre.toLowerCase());
      result.genre = genre.toLowerCase();
    }
    if(date){
        result.date == date;
    }
    //let searchedstone = await stone.find(result).lean();
   // return searchedstone;
    return stone.find(result).lean();
}  

exports.getOne = (stoneId) => Catalog.findById(stoneId);
//exports.getOneWithOwner = (stoneId) => this.getOne(stoneId).populate(`owner`).populate(`likedList`);

exports.getOneWithInfo = (stoneId) => {
  try {
      const stone = this.getOne(stoneId)
          .populate('likedList');

      console.log("Populated stone:", stone); // Check if stone object is populated correctly
      return stone;
  } catch (err) {
      console.error("Error populating stone:", err);
      throw err;
  }
};



exports.liked = async (stoneId, userId) =>{
 // await Catalog.findByIdAndUpdate(stoneId, {$push: {likedList: userId}}, {runValidators: true});
 // await User.findByIdAndUpdate(userId, {$push: {likedStones: stoneId}}, {runValidators: true});

 const stone = await Catalog.findById(stoneId);
 const user = await User.findById(userId);

 stone.likedList.push(userId);
 user.likedStones.push(stoneId);

 await stone.save();
 await user.save();
}

exports.getUser = (email) => User.find(email);
//  .populate('casts');

// Edit Function
exports.edit = (stoneId, stoneData) => Catalog.findByIdAndUpdate(stoneId, stoneData, {runValidators: true})
// Delete Service
exports.delete = (stoneId) => Catalog.findByIdAndDelete(stoneId);
// Create function
exports.create = async(userId, stoneData) => {
  const createStone = await Catalog.create({
      owner: userId,
      ...stoneData
  });

  await User.findByIdAndUpdate(userId, {$push: {createdStoneCatalogs: createStone._id}});

  return createStone;
}

//exports.create = async (userId, stoneData) => await Catalog.create({owner: userId, ...stoneData,});
  //  stoneData._id = stones[stones.length -1]._id + 1;
  //  stones.push(stoneData);

  exports.attach = async (stoneId, castId) => {
    // return stone.findByIdAndUpdate(stoneId, { $push: { casts: castId } });
    const stone = await this.getOne(stoneId);

    // This is optional and we don't need it in this case
    // const cast = await Cast.findById(castId);
    // cast.stones.push(stone);
    // await cast.save();

    // TODO: validate castId if exists
    // TODO: validate if cast is already added
    stone.casts.push(castId);

    await Catalog.save();

    return stone;
};

// this finds the stones and then sorts them by the latest 3 ,limit is there for 3
exports.getLatest = () => Catalog.find().sort({createdAt: -1}).limit(3);

  exports.delete = (stoneId) => Catalog.findByIdAndDelete(stoneId);