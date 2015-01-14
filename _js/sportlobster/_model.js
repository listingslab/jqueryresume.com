//////////////////////////////////
// listingslab Open Source JQuery
// Sportlobster Technical Test
// https://github.com/listingslab/MVC_sl
//////////////////////////////////
/*
 A model notifies its associated views and controllers when there has been 
 a change in its state. This notification allows the views to produce updated output, 
 and the controllers to change the available set of commands. In some cases an MVC 
 implementation might instead be "passive," so that other components must poll the model 
 for updates rather than being notified.
 */
function init_model () {
	try {
		_sl ['data'] = {};
	}catch (err){
		//alert ( 'init_model\n' + err);
	}
}
function _model_load_data () {
	try {
		$.ajax({
			type : 'POST',
			url : _sl ['data_path'],
			dataType : 'text',
			success : function (response){
				try {
					_sl ['data'] = $.parseJSON($.trim (response));
					_model_sort ();
				}catch(err){
					//alert ( 'API ERROR', 'We connected to the API, but the reply cannot be understood');
				}
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
				//alert ( 'API ERROR', 'A problem with the API has been detected. Heartbeat was trying to load the following URL<br /><br /><a href="' + ai_url + '" target="_blank">' + ai_url + '</a>');
			}			
		});
	}catch (err){
		//alert ( '_model_load_data\n' + err);
	}
}
function _model_sort () {
	try {
		_sl ['events'] = [];
		for (var i=0; i< _sl ['data']['data'].length; i++){
			var an_event = {};
			an_event ['id'] = _sl ['data']['data'][i]['id'];
			an_event ['data'] = _sl ['data']['data'][i];
			_sl ['events'].push (an_event);
		}
		_view_print_events ();
		if (!_sl ['event_id']){
			_view_print_event_detail (_sl ['events'][0]['id']);
		}else{
			_view_print_event_detail (_sl ['event_id']);
		}
		
	}catch (err){
		//alert ( '_model_sort\n' + err);
	}
}
