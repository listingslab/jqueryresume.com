//////////////////////////////////
// listingslab Open Source JQuery
// Sportlobster Technical Test
// https://github.com/listingslab/MVC_sl
//////////////////////////////////
/*
The controller sends commands to the model to update the model's state 
(e.g., editing a document). 
It can also send commands to its associated view to change the view's presentation of the model 
(e.g., by scrolling through a document).
 */
function init_controller () {
	try {
		init_model ();
		_model_load_data ();
		init_view ();
		_view_print_app ();
		init_audio ();
		_controller_url_params ();
	}catch (err){
		//alert ( '_init_controller\n'+err);
	}
}
function _controller_url_params () {
	try {
		url_vars = _get_url_vars();
		if (url_vars['action'] != undefined){
			if (url_vars['action'] == "show_working"){
				$('#working').show ();
				$('#hide_working').show ();
				$('#show_working').hide ();
			}
		}
		_sl ['event_id'] = false;
		if (url_vars['event_id'] != undefined){
			_sl ['event_id'] = url_vars['event_id'];
		}
	}catch (err){
		//alert ( '_controller_url_params\n'+err);
	}
}

function _get_url_vars() {
	try {
	    var vars = {};
	    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
	        vars[key] = value;
	    });
	    return vars;
    }catch (err){
		//alert ( '_get_url_vars\n'+err);
	}
}
function _get_this_url (){
	try {
		this_url = window.location.href;
		return this_url;
	}catch (err){
		//alert ( '_get_this_url\n'+err);
	}
}