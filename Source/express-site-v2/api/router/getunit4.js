const express= require('express');
const router = express.Router();

// ------------------------------------------------
// ---                  /unit4                  ---
// ------------------------------------------------
router.get('/', (req , res) => {
	var query = "SELECT * FROM unit4";

	db.query(query, function select(error, results) {
		if (error) {
			console.log(error);
			db.end();
			return;
		}
		if (results.length > 0) {
			console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
			console.log(results);
			console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
			res.send(results);
		} else {
			console.log("Pas de données pour l'unité de production 4");
		}
	});
});

// Export router
module.exports = router;
