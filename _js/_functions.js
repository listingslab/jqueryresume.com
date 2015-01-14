//////////////////////////////////
// listingslab Open Source JQuery
//////////////////////////////////

String.prototype.trunc = function(n,useWordBoundary){
	try {
		var toLong = this.length>n,
		s_ = toLong ? this.substr(0,n-1) : this;
		s_ = useWordBoundary && toLong ? s_.substr(0,s_.lastIndexOf(' ')) : s_;
		return  toLong ? s_ + '&hellip;' : s_;
	}catch (err){
		//alert ( 'String.prototype.trunc\n\n'+err);
	}
};

function _get_url_vars() {
	try {
	    var vars = {};
	    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
	        vars[key] = value;
	    });
	    return vars;
    }catch (err){
		//alert ( '_get_url_vars\n\n'+err);
	}
}
function _get_this_url (){
	try {
		this_url = window.location.href;
		return this_url;
	}catch (err){
		//alert ( '_get_this_url\n\n'+err);
	}
}
function _show_error (title, message){
	try {
		img = '<a href="http://living-websites-cloud.eu/bug-bbq/" target="_blank"><img height="75" align="right" src="'+_hb ['app_path']+'_img/_png/bugbbq.png" /></a>';
		$( "#_hb_dialog" ).dialog( "option", "title", title );
		$( "#_hb_dialog" ).html (img + '<br />' + message);
		$( "#_hb_dialog" ).dialog("open");
	}catch (err){
		//alert ( '_show_error\n\n'+err);
	}
}

function _jqr_btn (selector, icon, showtext){
	try {
		new_button = $(selector).button ({
			icons: {
				primary: "ui-icon-"+icon
			},
			text: showtext
		});
		new_button.click (function(){
			return true;
		});
		_jqr_css (new_button, 'text-align', 'left');
		_jqr_css (new_button, 'font-size', '14px');
	}catch (err){	
		//alert ( '_jqr_btn\n\n'+err);
	}
}

function _jqr_css (selector, css, value){
	try {
		$(selector).css (css,value);
	}catch (err){
		//alert ( '_hb_css\n\n'+err);
	}
}

