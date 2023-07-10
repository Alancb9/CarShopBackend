import mongoose from "mongoose";

const schemaForOrder = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    id: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, //ultima fecha en que se actualizo este dato
  }
);

export default mongoose.model("Order", schemaForOrder);
