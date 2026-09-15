import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Admin =
  mongoose.models.logins ||
  mongoose.model("logins", adminSchema);

export default Admin;