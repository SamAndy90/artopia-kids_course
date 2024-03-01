import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  fullname: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  agreement: Boolean,
});

export default models.User || model("User", userSchema);
