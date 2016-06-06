var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var mongo_url = process.env.MONGOLAB_URI || "mongodb://localhost:27017/test"

var imgSearch = require('./imgSearch');

module.exports = function (term,offset,res) {
	imgSearch(term,offset,res);
	MongoClient.connect(mongo_url,function (error,db) {
		if (error) {
			throw error;
			db.close();
		}else{
			var imgSearch = db.collection('imgSearch');
			imgSearch.findOne({searchTerm:term},function (error,doc) {
				if (error) {
					throw error;
				}
				if(doc){
					console.log(doc);
					//update doc with recentlySearchedAt field
					var updatedata = {
						recentlySearchedAt: new Date().toLocaleString()
					};
					imgSearch.update({searchTerm:term},{$set:updatedata},function (error) {
						if (error) {
							throw error;
						}
						db.close();
					});
				}else{
					//create new doc
					var data = {
						searchTerm: term,
						firstSearchedAt: new Date().toLocaleString()
					};
					imgSearch.insert(data,function (error) {
						if (error) {
							throw error;
						}
						db.close();
					});
				}
			});
		}
	});
}