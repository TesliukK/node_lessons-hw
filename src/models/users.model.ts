import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
  },
});
