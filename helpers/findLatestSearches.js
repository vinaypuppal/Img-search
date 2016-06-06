var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var mongo_url = process.env.MONGOLAB_URI || "mongodb://localhost:27017/test"

module.exports = function (res) {
	MongoClient.connect(mongo_url,function (error,db) {
		if (error) {
			throw error;
			db.close();
		}
		var imgSearch = db.collection('imgSearch');
		imgSearch.find({},{_id:0}).toArray(function(error,docs){
			if(error){
				throw error;
				res.send({
					error:error
				})
			}else{
				res.send(docs);
			}
		});
	});
}