const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");
const paginaRoutes = require("../routes/paginaRoutes");

class Server {
  constructor() {
    this.app = express();

    this.port = process.env.PORT;

    this.path = {
      pagina: "/api/pagina",
    };

    this.dbConnect();

    this.middlewares();

    this.rutas();

    this.scraping();

    // this.proxy();
  }

  middlewares() {
    this.app.use(express.static("public"));
    this.app.use(cors());
    this.app.use(express.json());
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor iniciado en el puerto " + this.port);
    });
  }

  rutas() {
    this.app.use(this.path.pagina, paginaRoutes);
  }

  async dbConnect() {
    await dbConnection();
  }

  scraping() {
    try {
      setInterval(() => {
        // scrapearRss(process.env.ID_API, this.io);
        console.log("hola");
      }, 60000);
    } catch (error) {
      console.warn(error);
    }
  }
}

module.exports = Server;
