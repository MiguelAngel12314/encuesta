(() => {
	const app = require("express")();
	const cors = require("cors");
	const bodyParser = require("body-parser");
	const encuesta = require("./modules/encuesta/encuesta.controller");

	app.use(bodyParser.json());
	app.use(cors());

	// Modulos
	app.use("/encuesta", encuesta);
	
	app.listen(3000);


	console.log("Listen to port 3000");
})();