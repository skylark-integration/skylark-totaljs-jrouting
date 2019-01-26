define([
	"./jR",
	"./jR"
],function(tangular){
	return tangular.globals = function() {
		var W = window;

		W.jR = jR;
		
		W.ROUTE = function(url, fn, middleware, init) {
			return jR.route(url, fn, middleware, init);
		};	

		setTimeout(jR.async, 500);
		setTimeout(jR.async, 1000);
		setTimeout(jR.async, 2000);
		setTimeout(jR.async, 3000);
		setTimeout(jR.async, 5000);

		return W;
	};
x});
