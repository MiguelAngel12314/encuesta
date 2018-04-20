(() => {
	"use strict";
	const bd = require("./encuesta.model");
	const router = require("express").Router();
	router.post("/saveEncuesta",(req,res) => {

		bd.insertEncuesta(req.body, (err, request)=> {
			if (err) throw err;
			res.status(200).send(request);
			// console.log(datos);
		});
	});
	module.exports = router;
})();