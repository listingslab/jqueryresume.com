//////////////////////////////////
// listingslab Open Source JQuery
//////////////////////////////////
function _cookies (){
	try {
		//$('#_hb_drilldown_pad').html ('cookies');
	}catch (err){
		//alert ( '_cookies\n\n'+err);
	}
}
function _mm_cookie (){
	try {
		var cookie_str = _mm_readCookie( '_heartbeat');
		if (cookie_str == null){
			_mm_createCookie('_heartbeat', _mm_randomString(24),30);
		}
	}catch (err){
		//alert ('_mm_cookie () \n' + err);
	}
}
function _mm_readCookie (name) {
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
		//alert ('_mm_readCookie () \n' + err);
	}
}
function _mm_createCookie (name,value,days) {
	try {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}catch (err){	
		//alert ('_mm_createCookie () \n' + err);
	}
}
function _mm_randomString (length) {
	try {
		var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		var result = '';
		for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
		return result;
	}catch (err){
		//alert ('randomString () \n' + err);
	}
}
function _mm_url () {
	try {
		var currentPageUrlIs = "";
		if (typeof this.href != "undefined") {
		       currentPageUrlIs = this.href.toString().toLowerCase(); 
		}else{ 
		       currentPageUrlIs = document.location.toString().toLowerCase();
		}
		return currentPageUrlIs;
	}catch (err){
		//alert ('_mm_url () \n' + err);
	}
}
function _mm_title () {
	try {
		var title = document.title;
		return title;
	}catch (err){
		//alert ('_mm_title () \n' + err);
	}
}
