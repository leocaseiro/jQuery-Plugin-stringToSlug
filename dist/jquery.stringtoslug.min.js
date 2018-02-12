/**
 * jquery.stringtoslug - Convert a STRING to a SLUG (kebab-case) in any language
 * @version v2.1.0
 * @link https://leocaseiro.github.com/jQuery-Plugin-stringToSlug
 * @license MIT
 */
var _stringToSlug_API=function(e,t){"use strict";var r,s={setEvents:"keyup keydown blur",getPut:"#permalink",space:"-",prefix:"",suffix:"",replace:"",AND:"and",options:{},callback:!1};jQuery.extend(s,t),s.options.hasOwnProperty("separator")||(s.options.separator=s.space),s.options.hasOwnProperty("custom")||(s.options.custom={"&":s.AND}),e=e.replace(s.replace,"");try{e=getSlug(e,s.options)}catch(n){console.warn("Make sure you insert speakingurl.min.js before jquery.stringtoslug.min.js")}return r=s.prefix+e+s.suffix};jQuery.fn.stringToSlug=function(e){"use strict";var t={setEvents:"keyup keydown blur",getPut:"#permalink",space:"-",prefix:"",suffix:"",replace:"",AND:"and",callback:!1};return jQuery.extend(t,e),jQuery(this).bind(t.setEvents,function(){var r=jQuery(this).val(),s=_stringToSlug_API(r,e);return jQuery(t.getPut).val(s),jQuery(t.getPut).html(s),!1!==t.callback&&t.callback(s),this}),this};