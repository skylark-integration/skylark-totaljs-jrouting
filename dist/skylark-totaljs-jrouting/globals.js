/**
 * skylark-totaljs-jrouting - A version of totaljs-jrouting.js that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-totaljs-jrouting/
 * @license MIT
 */
define(["skylark-domx-query","./jR"],function(t,e){return e.globals=function(){var e=window;return e.jR=jR,e.ROUTE=function(t,e,n,a){return jR.route(t,e,n,a)},setTimeout(jR.async,500),setTimeout(jR.async,1e3),setTimeout(jR.async,2e3),setTimeout(jR.async,3e3),setTimeout(jR.async,5e3),jR.async(),t.fn.jRouting=function(e){if(jR.hashtags||!jR.isModernBrowser)return this;if(+t.fn.jquery.replace(/\./g,"")>=300&&!0===e)throw Error("$(selector).jRouting() doesn't work in jQuery +3. Instead of this use jR.clientside(selector).");var n=function(e){e.preventDefault(),jR.redirect(t(this).attr("href"))};return e?t(document).on("click",this.selector,n):this.filter("a").bind("click",n),this},t(document).ready(function(){jR.async(),jR.hashtags?jR.url=location.hash||JRFU.path(JRFU.prepareUrl(location.pathname)):jR.url=JRFU.path(JRFU.prepareUrl(location.pathname)),jR.events.ready?(jR.emit("ready",jR.url),jR.emit("load",jR.url)):setTimeout(function(){jR.isReady=!0,jR.location(jR.url),jR.emit("ready",jR.url),jR.emit("load",jR.url)},5),t(window).on("hashchange",function(){jR.isReady&&jR.hashtags&&jR.location(JRFU.path(location.hash))}),t(window).on("popstate",function(){if(jR.isReady&&!jR.hashtags){var t=JRFU.path(location.pathname);jR.url!==t&&jR.location(t)}})}),e}});
//# sourceMappingURL=sourcemaps/globals.js.map
