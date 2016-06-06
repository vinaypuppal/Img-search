var Search = require('bing.search');
var API_KEY = process.env.BING_API_KEY;
module.exports = function (term,offset,res) {
	var search = new Search(API_KEY);
	var skip = 0;
	var top = 10;
	if(offset){
		skip = offset-1 * top
	}
	search.images(term,{
		top:top,
		skip:skip
	},function(error,results){
		if (error) {
			throw error;
			res.send({
				error:error
			});
		} else {
			var reqResults = results.map(function(result){
				return {
					imgUrl: result.url,
					altText: result.title,
					thumbnailUrl: result.thumbnail.url,
					pageUrl: result.sourceUrl
				}
			});
			res.send(reqResults);
		}
	});
}