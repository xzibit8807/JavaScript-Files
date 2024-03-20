const Catalog = require(`../models/Catalog`);
const User = require(`../models/User`)



exports.getAll = () => Catalog.find();

 exports.search = async (name) => {
  try {
      if (name) {
          const query = { name: new RegExp(name, 'i') };
          return await Catalog.find(query).lean();
      } else {
          return await Catalog.find().lean();;
      }
  } catch (error) {
  
      console.error("Error occurred during search:", error);
      throw error;
  }
};


exports.getOne = (stoneId) => Catalog.findById(stoneId);


exports.getOneWithInfo = (stoneId) => {
  try {
      const stone = this.getOne(stoneId)
          .populate('likedList');

      console.log("Populated stone:", stone); 
      return stone;
  } catch (err) {
      console.error("Error populating stone:", err);
      throw err;
  }
};



exports.liked = async (stoneId, userId) =>{

 const stone = await Catalog.findById(stoneId);
 const user = await User.findById(userId);

 stone.likedList.push(userId);
 user.likedStones.push(stoneId);

 await stone.save();
 await user.save();
}



exports.edit = (stoneId, stoneData) => Catalog.findByIdAndUpdate(stoneId, stoneData, {runValidators: true})

exports.delete = (stoneId) => Catalog.findByIdAndDelete(stoneId);

exports.create = async(userId, stoneData) => {
  if(!stoneData.name){
    throw new Error(`Name is required !`);
  }
  if(!stoneData.category){
    throw new Error(`Category is required !`);
  }
  if(!stoneData.color){
    throw new Error(`Color is required !`);
  }
  if(!stoneData.imageUrl){
    throw new Error(`Image is required !`);
  }
  if(!stoneData.location){
    throw new Error(`Location is required !`);
  }
  if(!stoneData.formula){
    throw new Error(`Formula is required !`);
  }
  if(!stoneData.description){
    throw new Error(`Description is required !`);
  }
  const createStone = await Catalog.create({
      owner: userId,
      ...stoneData
  });


  await User.findByIdAndUpdate(userId, {$push: {createdStoneCatalogs: createStone._id}});

  return createStone;
}


exports.getLatest = () => Catalog.find().sort({createdAt: -1}).limit(3);

  exports.delete = (stoneId) => Catalog.findByIdAndDelete(stoneId);