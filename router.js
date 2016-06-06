var path=require('path');

var saveTermSearch = require('./helpers/saveSearchTerm');
var findLatestSearches = require('./helpers/findLatestSearches');

module.exports = function (app) {
	app.get('/',function(req,res){
		res.sendFile(path.join(__dirname,'/public/index.html'));
	});
	app.get('/search/:term',function(req,res){
		var term = req.params.term;
		var offset = req.query.offset;
		saveTermSearch(term,offset,res);
	});
	app.get('/images/latest',function (req,res) {
		findLatestSearches(res);
	});
}