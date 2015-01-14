//////////////////////////////////
// listingslab Open Source JQuery
//////////////////////////////////

function _profile () {
	try {
		
		var more = _jqr ['ui']['sections']['_profile']['more'];
		m = {name: 'More about early career', div: '_profile_more_career', state:'on'};
		more ['_profile_more_career'] = m;
		_profile_toggle ('_profile_more_career');
		
		
		m = {name: 'summary', div: '_profile_more_summary', state:'on'};
		more ['_profile_more_summary'] = m;
		//_profile_toggle ('_profile_more_summary');
		
		m = {name: 'summary', div: '_profile_more_find', state:'on'};
		more ['_profile_more_find'] = m;
		_profile_toggle ('_profile_more_find');
		
		m = {name: 'summary', div: '_profile_more_chris', state:'on'};
		more ['_profile_more_chris'] = m;
		_profile_toggle ('_profile_more_chris');
		
		
		$( "._profile_toggle" ).click (function(){
			try{
				_profile_toggle ($(this).attr ('title'));
			}catch (err){
				//alert (err);
			}
			return false;
		});
		$( "#_profile_img_dialog" ).dialog ({
				autoOpen: false,
				modal: false,
				width: 450,
				show: "fade",
				hide: "fade",
				close: function(ev, ui) { 
					_play_audio ('click_off');
				},
		});
		_jqr_css ($('._profile_img'), 'float', 'right');
		_jqr_css ($('._profile_img'), 'height', '150px');
		_jqr_css ($('._profile_img'), 'margin-left', '20px');
		_jqr_css ($('._profile_img'), 'margin-top', '10px');
		
		_jqr_css ($('#_profile_more_find'), 'padding-top', '10px');
		
		$('._profile_img').addClass('ui-state- ui-corner-all');
		_jqr_css ($('._profile_dialog_img'), 'height', '420px');
		$('._profile_dialog_img').addClass('ui-state- ui-corner-all');
		_jqr_css ($('._profile_dialog_img'), 'border', '1px solid ' + _jqr ['c_border']);
		_jqr_css ($('._profile_img'), 'border', '1px solid ' + _jqr ['c_border']);
		$('#_profile_img').click (function(){
			try{
				_play_audio ('poppop');
				$( "#_profile_img_dialog" ).dialog ('open');
			}catch (err){
				//alert (err);
			}
			return false;
		});
		$('._profile_dialog_img').click (function(){
			try{
				$( "#_profile_img_dialog" ).dialog ('close');
			}catch (err){
				//alert (err);
			}
			return false;
		});
		
		/*$(document).keypress("m",function(e) {
		  if(e.ctrlKey)
		    $( "#_admin_menu" ).dialog( "open" );
		});*/
		
	}catch (err){
		//alert ( '_profile\n\n'+err);
	}
}
function _profile_toggle (div) {
	try {
		if (_jqr ['ui']['sections']['_profile']['more'][div]['state'] == 'on'){
			_jqr ['ui']['sections']['_profile']['more'][div]['state'] = 'off';
			//_play_audio ('click_off');
			$('.' + div + ' ._hidden_profile').hide ();
		}else{
			_jqr ['ui']['sections']['_profile']['more'][div]['state'] = 'on';
			//_play_audio ('click_on');
			$('.' + div + ' ._hidden_profile').show ();
		}
	}catch (err){
		//alert ( ' _profile_toggle\n\n'+err);
	}
}