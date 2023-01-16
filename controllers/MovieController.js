import Movie from "../models/Movie.js";

const MovieController = {};

MovieController.getAll = async (req, res) => {
  try {
    const movie = await Movie.find();

    return res.status(200).json({
      success: true,
      message: "Get all users retrieved succsessfully",
      data: movie,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving users",
      error: error.message,
    });
  }
};
MovieController.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const movie = await Movie.findOne({ id: id });

    if (movie) {
      return res.status(200).json({
        success: true,
        message: "Get movie details retrieved succsessfully",
        data: movie,
      });
    } else {
      return res.status(404).json({
        succes: false,
        message: `Cannot find movie with id=${id}`,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving users",
      error: error.message,
    });
  }
};

export default MovieController;
