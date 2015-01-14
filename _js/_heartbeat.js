/* FREE & Open Source JQuery by Listingslab
 * This script simply needs to be included in any 
 * page you'd like _heartbeat to track
___________________________________________ */
$(document).ready(function () {
	try {
		hb = {};
		hb ['interval'] = false;
		hb ['timer'] = -1;
		hb ['site'] = 'jQuery Resume';
		hb ['data_url'] = 'http://massif-ai.com/?r=heartbeat&m=json';
		$('#_op').hide ();
		_hb_cookie ();
		setTimeout(function(){
			try {
				_hb_ting ();
				hb ['interval'] = setInterval(_hb_ting, 5000);
			}catch (err){
				//alert ('document.ready setTimeout\n\n' + err);	
			}
		},500);
	} catch (err){
		//alert ('document.ready ' + err);
	}
});
function CorsRequest (request) {
	try{
		var url =  hb ['data_url'] + request;
		var xhr = createCORSRequest('GET', url);
		if (!xhr) {
			//alert ('CORS not supported');
			return;
		}
		xhr.onload = function() {
			var h = '';
			h += xhr.responseText;
			//$('#_op').html (h);
			//_hb_op ();
		};
		xhr.onerror = function(err) {
			//alert ('Woops, there was an error making the request.');
		};
		xhr.send();
		
	}catch (err){	
		//alert ('Error. _heartbeat.js \n CorsRequest (request) \n' + err);
	}
}
function createCORSRequest(method, url) {
	try{
		var xhr = new XMLHttpRequest();
		if ("withCredentials" in xhr) {
			xhr.open(method, url, true);
		} else if (typeof XDomainRequest != "undefined") {
			xhr = new XDomainRequest();
			xhr.open(method, url);
		} else {
			xhr = null;
		}
		return xhr;
	}catch (err){	
		//alert ('Error. _heartbeat.js \n createCORSRequest () \n' + err);
	}
}
function _hb_css (selector, css, value){
	try {
		$(selector).css (css,value);
	}catch (err){
		//alert ( '_hb_css\n\n'+err);
	}
}
function _hb_op () {
	try {
		_hb_css ($('#_stop_hb'), 'color', 'red');
		_hb_css ($('#_stop_hb'), 'text-decoration', 'none');
		_hb_css ($('#_stop_hb'), 'background', '#fff');
		_hb_css ($('#_op'), 'font-family', 'Open Sans');
		_hb_css ($('#_op'), 'font-size', '12px');
		_hb_css ($('#_stop_hb'), 'margin', '5px');
		_hb_css ($('#_stop_hb'), 'padding', '5px');
		_hb_css ($('#_stop_hb'), 'border', '1px solid #ccc');
		_hb_css ($('#_op'), 'border', '1px solid #ddd');
		_hb_css ($('#_op'), 'background', '#eee');
		_hb_css ($('#_op'), 'margin', '5px');
		_hb_css ($('#_op'), 'padding', '5px');
		_hb_css ($('#_stop_hb'), 'float', 'right');
		$( "#_stop_hb" ).click (function(){
			try{
				clearInterval (hb ['interval']);
				$(this).hide();
			}catch (err){
				//alert (err);
			}
			return false;
		});
	}catch (err){
		//alert ('_hb_op () \n' + err);
	}
}
function _hb_ting (){
	try {
		hb ['timer'] ++;
		var h = '';
		h += '<a href="#" id="_stop_hb">STOP HEARTBEAT</a>';
		var req = '';
		req += '&a=ting';
		req += '&url='+_hb_url ();
		req += '&title='+escapeHtmlEntities(_hb_title ());
		req += '&site='+ hb ['site'];
		req += '&thecookie=' + _hb_readCookie ( '_heartbeat');
		CorsRequest (req);
		//alert (req);
	}catch (err){
		//alert ('Error. _heartbeat.js \n _hb_ting () \n' + err);
	}
}
function _hb_cookie (){
	try {
		var cookie_str = _hb_readCookie( '_heartbeat');
		if (cookie_str == null){
			_hb_createCookie('_heartbeat', _hb_randomString(24),30);
		}
	}catch (err){
		//alert ('_hb_cookie () \n' + err);
	}
}
function _hb_readCookie (name) {
	try {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}catch (err){	
		//alert ('_hb_readCookie () \n' + err);
	}
}
function _hb_createCookie (name,value,days) {
	try {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}catch (err){	
		//alert ('_hb_createCookie () \n' + err);
	}
}
function _hb_randomString (length) {
	try {
		var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		var result = '';
		for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
		return result;
	}catch (err){
		//alert ('randomString () \n' + err);
	}
}
function _hb_url () {
	try {
		var currentPageUrlIs = "";
		if (typeof this.href != "undefined") {
		       currentPageUrlIs = this.href.toString().toLowerCase(); 
		}else{ 
		       currentPageUrlIs = document.location.toString().toLowerCase();
		}
		return currentPageUrlIs;
	}catch (err){
		//alert ('_hb_url () \n' + err);
	}
}
function _hb_title () {
	try {
		var title = document.title;
		return title;
	}catch (err){
		//alert ('_hb_title () \n' + err);
	}
}
if(typeof escapeHtmlEntities == 'undefined') {
    escapeHtmlEntities = function (text) {
        return text.replace(/[\u00A0-\u2666<>\&]/g, function(c) {
            return '&' + 
            (escapeHtmlEntities.entityTable[c.charCodeAt(0)] || '#'+c.charCodeAt(0)) + ';';
        });
    };
    // all HTML4 entities as defined here: http://www.w3.org/TR/html4/sgml/entities.html
    // added: amp, lt, gt, quot and apos
    escapeHtmlEntities.entityTable = {
        34 : 'quot', 
        38 : 'amp', 
        39 : 'apos', 
        60 : 'lt', 
        62 : 'gt', 
        160 : 'nbsp', 
        161 : 'iexcl', 
        162 : 'cent', 
        163 : 'pound', 
        164 : 'curren', 
        165 : 'yen', 
        166 : 'brvbar', 
        167 : 'sect', 
        168 : 'uml', 
        169 : 'copy', 
        170 : 'ordf', 
        171 : 'laquo', 
        172 : 'not', 
        173 : 'shy', 
        174 : 'reg', 
        175 : 'macr', 
        176 : 'deg', 
        177 : 'plusmn', 
        178 : 'sup2', 
        179 : 'sup3', 
        180 : 'acute', 
        181 : 'micro', 
        182 : 'para', 
        183 : 'middot', 
        184 : 'cedil', 
        185 : 'sup1', 
        186 : 'ordm', 
        187 : 'raquo', 
        188 : 'frac14', 
        189 : 'frac12', 
        190 : 'frac34', 
        191 : 'iquest', 
        192 : 'Agrave', 
        193 : 'Aacute', 
        194 : 'Acirc', 
        195 : 'Atilde', 
        196 : 'Auml', 
        197 : 'Aring', 
        198 : 'AElig', 
        199 : 'Ccedil', 
        200 : 'Egrave', 
        201 : 'Eacute', 
        202 : 'Ecirc', 
        203 : 'Euml', 
        204 : 'Igrave', 
        205 : 'Iacute', 
        206 : 'Icirc', 
        207 : 'Iuml', 
        208 : 'ETH', 
        209 : 'Ntilde', 
        210 : 'Ograve', 
        211 : 'Oacute', 
        212 : 'Ocirc', 
        213 : 'Otilde', 
        214 : 'Ouml', 
        215 : 'times', 
        216 : 'Oslash', 
        217 : 'Ugrave', 
        218 : 'Uacute', 
        219 : 'Ucirc', 
        220 : 'Uuml', 
        221 : 'Yacute', 
        222 : 'THORN', 
        223 : 'szlig', 
        224 : 'agrave', 
        225 : 'aacute', 
        226 : 'acirc', 
        227 : 'atilde', 
        228 : 'auml', 
        229 : 'aring', 
        230 : 'aelig', 
        231 : 'ccedil', 
        232 : 'egrave', 
        233 : 'eacute', 
        234 : 'ecirc', 
        235 : 'euml', 
        236 : 'igrave', 
        237 : 'iacute', 
        238 : 'icirc', 
        239 : 'iuml', 
        240 : 'eth', 
        241 : 'ntilde', 
        242 : 'ograve', 
        243 : 'oacute', 
        244 : 'ocirc', 
        245 : 'otilde', 
        246 : 'ouml', 
        247 : 'divide', 
        248 : 'oslash', 
        249 : 'ugrave', 
        250 : 'uacute', 
        251 : 'ucirc', 
        252 : 'uuml', 
        253 : 'yacute', 
        254 : 'thorn', 
        255 : 'yuml', 
        402 : 'fnof', 
        913 : 'Alpha', 
        914 : 'Beta', 
        915 : 'Gamma', 
        916 : 'Delta', 
        917 : 'Epsilon', 
        918 : 'Zeta', 
        919 : 'Eta', 
        920 : 'Theta', 
        921 : 'Iota', 
        922 : 'Kappa', 
        923 : 'Lambda', 
        924 : 'Mu', 
        925 : 'Nu', 
        926 : 'Xi', 
        927 : 'Omicron', 
        928 : 'Pi', 
        929 : 'Rho', 
        931 : 'Sigma', 
        932 : 'Tau', 
        933 : 'Upsilon', 
        934 : 'Phi', 
        935 : 'Chi', 
        936 : 'Psi', 
        937 : 'Omega', 
        945 : 'alpha', 
        946 : 'beta', 
        947 : 'gamma', 
        948 : 'delta', 
        949 : 'epsilon', 
        950 : 'zeta', 
        951 : 'eta', 
        952 : 'theta', 
        953 : 'iota', 
        954 : 'kappa', 
        955 : 'lambda', 
        956 : 'mu', 
        957 : 'nu', 
        958 : 'xi', 
        959 : 'omicron', 
        960 : 'pi', 
        961 : 'rho', 
        962 : 'sigmaf', 
        963 : 'sigma', 
        964 : 'tau', 
        965 : 'upsilon', 
        966 : 'phi', 
        967 : 'chi', 
        968 : 'psi', 
        969 : 'omega', 
        977 : 'thetasym', 
        978 : 'upsih', 
        982 : 'piv', 
        8226 : 'bull', 
        8230 : 'hellip', 
        8242 : 'prime', 
        8243 : 'Prime', 
        8254 : 'oline', 
        8260 : 'frasl', 
        8472 : 'weierp', 
        8465 : 'image', 
        8476 : 'real', 
        8482 : 'trade', 
        8501 : 'alefsym', 
        8592 : 'larr', 
        8593 : 'uarr', 
        8594 : 'rarr', 
        8595 : 'darr', 
        8596 : 'harr', 
        8629 : 'crarr', 
        8656 : 'lArr', 
        8657 : 'uArr', 
        8658 : 'rArr', 
        8659 : 'dArr', 
        8660 : 'hArr', 
        8704 : 'forall', 
        8706 : 'part', 
        8707 : 'exist', 
        8709 : 'empty', 
        8711 : 'nabla', 
        8712 : 'isin', 
        8713 : 'notin', 
        8715 : 'ni', 
        8719 : 'prod', 
        8721 : 'sum', 
        8722 : 'minus', 
        8727 : 'lowast', 
        8730 : 'radic', 
        8733 : 'prop', 
        8734 : 'infin', 
        8736 : 'ang', 
        8743 : 'and', 
        8744 : 'or', 
        8745 : 'cap', 
        8746 : 'cup', 
        8747 : 'int', 
        8756 : 'there4', 
        8764 : 'sim', 
        8773 : 'cong', 
        8776 : 'asymp', 
        8800 : 'ne', 
        8801 : 'equiv', 
        8804 : 'le', 
        8805 : 'ge', 
        8834 : 'sub', 
        8835 : 'sup', 
        8836 : 'nsub', 
        8838 : 'sube', 
        8839 : 'supe', 
        8853 : 'oplus', 
        8855 : 'otimes', 
        8869 : 'perp', 
        8901 : 'sdot', 
        8968 : 'lceil', 
        8969 : 'rceil', 
        8970 : 'lfloor', 
        8971 : 'rfloor', 
        9001 : 'lang', 
        9002 : 'rang', 
        9674 : 'loz', 
        9824 : 'spades', 
        9827 : 'clubs', 
        9829 : 'hearts', 
        9830 : 'diams', 
        338 : 'OElig', 
        339 : 'oelig', 
        352 : 'Scaron', 
        353 : 'scaron', 
        376 : 'Yuml', 
        710 : 'circ', 
        732 : 'tilde', 
        8194 : 'ensp', 
        8195 : 'emsp', 
        8201 : 'thinsp', 
        8204 : 'zwnj', 
        8205 : 'zwj', 
        8206 : 'lrm', 
        8207 : 'rlm', 
        8211 : 'ndash', 
        8212 : 'mdash', 
        8216 : 'lsquo', 
        8217 : 'rsquo', 
        8218 : 'sbquo', 
        8220 : 'ldquo', 
        8221 : 'rdquo', 
        8222 : 'bdquo', 
        8224 : 'dagger', 
        8225 : 'Dagger', 
        8240 : 'permil', 
        8249 : 'lsaquo', 
        8250 : 'rsaquo', 
        8364 : 'euro'
    };
}