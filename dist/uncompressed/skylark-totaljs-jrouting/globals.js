define([
	"skylark-domx-query",
	"./jR"
],function($,tangular){
	return function() {
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

		function jRinit() {
			jR.async();
			$.fn.jRouting = function(g) {

				if (jR.hashtags || !jR.isModernBrowser)
					return this;

				var version = +$.fn.jquery.replace(/\./g, '');
				if (version >= 300 && g === true)
					throw Error('$(selector).jRouting() doesn\'t work in jQuery +3. Instead of this use jR.clientside(selector).');

				var handler = function(e) {
					e.preventDefault();
					jR.redirect($(this).attr('href'));
				};

				if (g)
					$(document).on('click', this.selector, handler);
				else
					this.filter('a').bind('click', handler);

				return this;
			};

			$(function() {

				jR.async();

				if (jR.hashtags)
					jR.url = location.hash || JRFU.path(JRFU.prepareUrl(location.pathname));
				else
					jR.url = JRFU.path(JRFU.prepareUrl(location.pathname));

				if (jR.events.ready) {
					jR.emit('ready', jR.url);
					jR.emit('load', jR.url);
				} else {
					setTimeout(function() {
						jR.isReady = true;
						jR.location(jR.url);
						jR.emit('ready', jR.url);
						jR.emit('load', jR.url);
					}, 5);
				}

				$(window).on('hashchange', function() {
					if (!jR.isReady || !jR.hashtags)
						return;
					jR.location(JRFU.path(location.hash));
				});

				$(window).on('popstate', function() {
					if (!jR.isReady || jR.hashtags)
						return;
					var url = JRFU.path(location.pathname);
					jR.url !== url && jR.location(url);
				});
			});
		}

		jRinit();


		return W;
	};
x});
