const { Router } = require("express");
const { check } = require("express-validator");
const {
  listarPagina,
  buscarPaginaXId,
  crearPagina,
  editarPagina,
  desactivarPagina,
  activarPagina,
} = require("../controllers/paginaController");

const router = Router();

//Listar roles
router.get("/", listarPagina);

//Buscar rol x Id
router.get(
  "/:id",
  [
    check("id", "La id es obligatoria").not().isEmpty(),
    check("id", "El id es obligatorio").isMongoId(),
  ],
  buscarPaginaXId
);

//Crear rol
router.post(
  "/",
  [
    check("descripcion", "La descripcion es obligatoria").not().isEmpty(),
    check("descripcion", "La descripcion debe ser un string").isString(),
    check("url", "La url es obligatoria").not().isEmpty(),
    check("url", "La url debe ser un string").isURL(),
    check("pageId", "El pageId es obligatorio").not().isEmpty(),
    check("pageId", "El pageId debe ser un string").isString(),
    // validarApiDuplicado,
  ],
  crearPagina
  //   crearApi
);

//Editar rol
router.put(
  "/:id",
  [
    check("id", "La id es obligatoria").not().isEmpty(),
    check("id", "El id es obligatorio").isMongoId(),
    check("descripcion", "La descripcion es obligatoria").not().isEmpty(),
    check("descripcion", "La descripcion debe ser un string").isString(),
    check("url", "La url es obligatoria").not().isEmpty(),
    check("url", "La url debe ser un string").isURL(),
    check("pageId", "El pageId es obligatorio").not().isEmpty(),
    check("pageId", "El pageId debe ser un string").isString(),
  ],
  editarPagina
  //   editarApi
);

//Desactivar rol
router.delete(
  "/:id",
  [
    check("id", "La id es obligatoria").not().isEmpty(),
    check("id", "El id es obligatorio").isMongoId(),
    // check("id").custom(existeApi),
  ],
  desactivarPagina
  //   desactivarApi
);

router.get(
  "/activar/:id",
  [
    check("id", "La id es obligatoria").not().isEmpty(),
    check("id", "El id es obligatorio").isMongoId(),
    // check("id").custom(existeApi),
  ],
  activarPagina
  //   activarApi
);

module.exports = router;
