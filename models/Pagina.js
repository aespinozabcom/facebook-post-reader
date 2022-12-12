const { Schema, model } = require("mongoose");

const paginaSchema = Schema({
  descripcion: {
    type: String,
    required: [true, "La descripcion de la pagina es obligatoria"],
  },
  url: {
    type: String,
    required: [true, "La url de la pagina es obligatoria"],
  },
  pageId: {
    type: String,
    required: [true, "La pageId de la pagina es obligatoria"],
  },
  estado: {
    type: Boolean,
    required: [true],
    default: true,
  },
});

module.exports = model("Pagina", paginaSchema);
