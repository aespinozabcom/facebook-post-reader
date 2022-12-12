const { Schema, model } = require("mongoose");

const postSchema = Schema(
  {
    pagina: {
      type: Schema.Types.ObjectId,
      ref: "Pagina",
    },
    estado: {
      type: Boolean,
      required: [true],
      default: true,
    },
  },
  { strict: false }
);

module.exports = model("Post", postSchema);
