
import {Schema, model} from "mongoose"

const MovieSchema = new Schema(
   {
      id: {
         type: Number,
         required: true,
      },
      title: {
         type: String,
         required: true,
      },
    
   },
   {
      timestamps: false,
      versionKey: false,
   }
);

const Movie = model("Movie", MovieSchema);

export default Movie;