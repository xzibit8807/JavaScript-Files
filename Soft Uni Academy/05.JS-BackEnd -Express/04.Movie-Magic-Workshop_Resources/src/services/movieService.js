const Movie = require(`../models/Movie`);
 
exports.getAll = () => Movie.find();

//ToDo: Filter result in mongoDB  
exports.search = async (title, genre, date) => {

    let result = {};
    if(title){
       // result = result.filter(movie => movie.title.toLowerCase().includes(title));
        result.title = new RegExp(title, 'i') 
    }
    if(genre){
      //  result = result.filter(movie => movie.genre.toLowerCase() == genre.toLowerCase());
      result.genre = genre.toLowerCase();
    }
    if(date){
        result.date == date;
    }
    //let searchedMovie = await Movie.find(result).lean();
   // return searchedMovie;
    return Movie.find(result).lean(); 
}

exports.getOne = (movieId) => Movie.findById(movieId).populate('casts');

exports.edit = (movieId, movieData) => Movie.findByIdAndUpdate(movieId, movieData)

exports.create = (movieData) =>  Movie.create(movieData);
  //  movieData._id = movies[movies.length -1]._id + 1;
  //  movies.push(movieData);

  exports.attach = async (movieId, castId) => {
    // return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
    const movie = await this.getOne(movieId);

    // This is optional and we don't need it in this case
    // const cast = await Cast.findById(castId);
    // cast.movies.push(movie);
    // await cast.save();

    // TODO: validate castId if exists
    // TODO: validate if cast is already added
    movie.casts.push(castId);

    await movie.save();

    return movie;
};

  exports.delete = (movieId) => Movie.findByIdAndDelete(movieId);