(() => {
	"use strict";
	const mongoClient = require("mongodb").MongoClient;
	const url = "mongodb://localhost:27017";

	const insertEncuesta = (datos,callback) => {
		mongoClient.connect(url, (err,db) => {
			if (err) callback(err);
			const dbo = db.db("encuesta");

				dbo.collection("encuesta").insertOne(datos,(error,res) => {
					if (error) callback(error);
					callback(null,"Insertado Correctamente");
					db.close();
				});

		});
	};

	module.exports = {
		insertEncuesta : insertEncuesta
	};
})();