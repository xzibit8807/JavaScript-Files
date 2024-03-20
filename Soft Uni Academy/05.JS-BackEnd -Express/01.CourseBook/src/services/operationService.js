const Catalog = require(`../models/Catalog`);
const User = require(`../models/User`)
 
exports.getAll = () => Catalog.find();

 /*  Search Engine
exports.search = async (title, genre, date) => {

    let result = {};
    if(title){
 
        result.title = new RegExp(title, 'i')
    }
    if(genre){
      //  result = result.filter(course => course.genre.toLowerCase() == genre.toLowerCase());
      result.genre = genre.toLowerCase();
    }
    if(date){
        result.date == date;
    }
    //let searchedcourse = await course.find(result).lean();
   // return searchedcourse;
    return course.find(result).lean();
}  */

exports.getOne = (courseId) => Catalog.findById(courseId);
//exports.getOneWithOwner = (courseId) => this.getOne(courseId).populate(`owner`).populate(`signUpList`);

exports.getOneWithOwner = (courseId) => {
  try {
      const course = this.getOne(courseId)
          .populate('owner')
          .populate('signUpList')

      console.log("Populated Course:", course); // Check if course object is populated correctly
      return course;
  } catch (err) {
      console.error("Error populating course:", err);
      throw err;
  }
};



exports.signUp = async (courseId, userId) =>{
 // await Catalog.findByIdAndUpdate(courseId, {$push: {signUpList: userId}}, {runValidators: true});
 // await User.findByIdAndUpdate(userId, {$push: {signUpCourses: courseId}}, {runValidators: true});

 const course = await Catalog.findById(courseId);
 const user = await User.findById(userId);

 course.signUpList.push(userId);
 user.signUpCourses.push(courseId);

 await course.save();
 await user.save();
}

exports.getUser = (email) => User.find(email);
//  .populate('casts');

// Edit Function
exports.edit = (courseId, courseData) => Catalog.findByIdAndUpdate(courseId, courseData, {runValidators: true})
// Delete Service
exports.delete = (courseId) => Catalog.findByIdAndDelete(courseId);
// Create function
exports.create = async(userId,courseData) => {
    const createCourse = await Catalog.create({
      owner: userId,
      ...courseData
    });
    User.findByIdAndUpdate(userId, {$push: {createdCourses: createCourse._id}})

    return createCourse;
} 
//exports.create = async (userId, courseData) => await Catalog.create({owner: userId, ...courseData,});
  //  courseData._id = courses[courses.length -1]._id + 1;
  //  courses.push(courseData);

  exports.attach = async (courseId, castId) => {
    // return course.findByIdAndUpdate(courseId, { $push: { casts: castId } });
    const course = await this.getOne(courseId);

    // This is optional and we don't need it in this case
    // const cast = await Cast.findById(castId);
    // cast.courses.push(course);
    // await cast.save();

    // TODO: validate castId if exists
    // TODO: validate if cast is already added
    course.casts.push(castId);

    await Catalog.save();

    return course;
};

// this finds the Courses and then sorts them by the latest 3 ,limit is there for 3
exports.getLatest = () => Catalog.find().sort({createdAt: -1}).limit(3);

  exports.delete = (courseId) => Catalog.findByIdAndDelete(courseId);