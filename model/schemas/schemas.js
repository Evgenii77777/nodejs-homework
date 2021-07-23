const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contacts"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Set name for contacts"],
      unique: true,
    },
    number: {
      type: Number,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.virtual("strAge").get(function () {
  return `${this.age} `;
});

const Contact = model("contact", contactSchema);

module.exports = Contact;
