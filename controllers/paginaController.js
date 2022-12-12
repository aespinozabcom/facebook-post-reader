const Pagina = require("../models/Pagina");

const listarPagina = async (req, res) => {
  const paginas = await Pagina.find({ estado: true });

  res.json(paginas);
};

const buscarPaginaXId = async (req, res) => {
  const { id } = req.params;

  const pagina = await Pagina.findOne({ _id: id, estado: true });

  res.json(pagina);
};

const crearPagina = async (req, res) => {
  const { descripcion, url, pageId } = req.body;

  const pagina = new Pagina({ descripcion, url, pageId });

  await pagina.save();

  res.json(pagina);
};

const editarPagina = async (req, res) => {
  const { id } = req.params;
  const { descripcion, url, pageId } = req.body;

  const pagina = await Pagina.findByIdAndUpdate(
    id,
    { descripcion, url, pageId },
    { new: true }
  );

  res.json(pagina);
};

const desactivarPagina = async (req, res) => {
  const { id } = req.params;

  const pagina = await Pagina.findByIdAndUpdate(
    id,
    { estado: false },
    { new: true }
  );

  res.json(pagina);
};

const activarPagina = async (req, res) => {
  const { id } = req.params;

  const pagina = await Pagina.findByIdAndUpdate(
    id,
    { estado: true },
    { new: true }
  );

  res.json(pagina);
};

module.exports = {
  listarPagina,
  buscarPaginaXId,
  crearPagina,
  editarPagina,
  desactivarPagina,
  activarPagina,
};
