//////////////////////////////////
// listingslab Open Source JQuery
//////////////////////////////////

function _init_render () {
	try {
		_fonts_css ();
		
		$('.with_tooltip').tooltip ();
		$('#_download_icons a').tooltip ();
		$('._strap').tooltip ();
		
		_jqr_css ($('#_jq_resume ul'), 'padding', '2px');
		_jqr_css ($('#_jq_resume ul'), 'list-style', 'none');
		_jqr_css ($('#_jq_resume li'), 'border-bottom', '1px solid ' + _jqr ['c_border']);
		_jqr_css ($('#_jq_resume li'), 'font-size', '0.8em');
		_jqr_css ($('#_jq_resume'), 'min-width', '780px');
		_jqr_css ($('#_jq_resume'), 'max-width', '1200px');
		_jqr_css ($('#_jq_resume'), 'margin', 'auto');
		
		_jqr_css ($('._download'), 'width', '30px');
		
		_jqr_css ($('._example_r'), 'width', '25%');
		_jqr_css ($('._example_r'), 'float', 'left');
		_jqr_css ($('._example_r'), 'margin-right', '20px');
		
		_jqr_css ($('._example_d'), 'width', '30%');
		_jqr_css ($('._example_d'), 'float', 'left');
		
		_jqr_css ($('#_title_txt'), 'float', 'left');
		_jqr_css ($('#_title_txt'), 'margin-top', '5px');
		_jqr_css ($('#_title'), 'margin-top', '25px');
		_jqr_css ($('#_title'), 'margin-bototm', '25px');
		_jqr_css ($('#_title_txt'), 'width', '100%');
		_jqr_css ($('#_title_txt'), 'text-align', 'center');
		
		_jqr_css ($('._download_icons'), 'float', 'right');
		//_jqr_css ($('._download_icons'), 'width', '25%');
		_jqr_css ($('._download_icons'), 'text-align', 'right');
		
		$('.section').addClass('ui-state- ui-corner-all');
		_jqr_css ($('.section'), 'background', _jqr ['c_grey']);
		_jqr_css ($('.section'), 'border', '1px solid ' + _jqr ['c_border']);
		_jqr_css ($('.section_pad'), 'padding', '25px');
		_jqr_css ($('.section'), 'margin-top', '25px');
		
		_jqr_css ($('#_jqr_a_l'), 'float', 'left');
		_jqr_css ($('#_jqr_a_l'), 'width', '49%');
		
		_jqr_css ($('#_jqr_a_r'), 'float', 'right');
		_jqr_css ($('#_jqr_a_r'), 'width', '49%');

		_jqr_css ($('._linkedin'), 'float', 'right');
		_jqr_css ($('._linkedin'), 'margin-left', '15px');
		_jqr_css ($('._linkedin'), 'margin-bottom', '15px');
		$('._linkedin').addClass('ui-state- ui-corner-all');
		_jqr_css ($('._linkedin'), 'border', '1px solid ' + _jqr ['c_border']);
		
		_foot_css ();
		
	}catch (err){
		//alert ( '_init_render\n\n'+err);
	}
}


function _foot_css (){
	try {
		_jqr_css ($('#_jqr_foot'), 'text-align', 'center');
		_jqr_css ($('#_jqr_foot'), 'margin-top', '25px');
		_jqr_css ($('._foot_img'), 'width', '7%');
	}catch (err){
		//alert ( '_foot_css ()\n\n'+err);
	}
}

function _fonts_css (){
	try {
		_jqr_css ($('#_jq_resume'), 'color', _jqr ['c_text']);
		
		_jqr_css ($('#_jq_resume'), 'font-family', 'Open Sans');
		_jqr_css ($('#_jq_resume'), 'font-size', '0.9em');
		
		_jqr_css ($('#_jq_resume h1'), 'font-size', '1.3em');
		_jqr_css ($('#_jq_resume h2'), 'font-size', '1.2em');
		_jqr_css ($('#_jq_resume h3'), 'font-size', '1.1em');
		_jqr_css ($('#_jq_resume h4'), 'font-size', '1.0em');
		
		_jqr_css ($('#_jq_resume h1 '), 'color', _jqr ['c_dark']);
		_jqr_css ($('#_jq_resume h2 '), 'color', _jqr ['c_dark']);
		_jqr_css ($('#_jq_resume h3 '), 'color', _jqr ['c_dark']);
		_jqr_css ($('#_jq_resume h4 '), 'color', _jqr ['c_dark']);
		
		_jqr_css ($('#_jq_resume h1'), 'padding', '0px');
		_jqr_css ($('#_jq_resume h2'), 'padding', '0px');
		_jqr_css ($('#_jq_resume h3'), 'padding', '0px');
		_jqr_css ($('#_jq_resume h4'), 'padding', '0px');
		_jqr_css ($('#_jq_resume h1'), 'margin', '0px');
		_jqr_css ($('#_jq_resume h2'), 'margin', '0px');
		_jqr_css ($('#_jq_resume h3'), 'margin', '0px');
		_jqr_css ($('#_jq_resume h4'), 'margin', '0px');
		
		_jqr_css ($('#_jq_resume h1'), 'font-weight', 'normal');
		_jqr_css ($('#_jq_resume h2'), 'font-weight', 'normal');
		_jqr_css ($('#_jq_resume h3'), 'font-weight', 'normal');
		_jqr_css ($('#_jq_resume h4'), 'font-weight', 'normal');
		
		
		_jqr_css ($('#_jqr_foot a'), 'color', _jqr ['c_text']);
		_jqr_css ($('#_jqr_foot a'), 'text-decoration', 'none');
		
		_jqr_css ($('._title_toggle h3 '), 'color', _jqr ['c_dark']);
		_jqr_css ($('.section a'), 'color', _jqr ['c_light']);
		_jqr_css ($('#_title h1 a'), 'color', _jqr ['c_dark']);
		_jqr_css ($('.section a'), 'text-decoration', 'none');
		_jqr_css ($('#_title a'), 'text-decoration', 'none');
		
	}catch (err){
		//alert ( '_fonts_css ()\n\n'+err);
	}
}






















/*
 * 
 * $( "#_btn_home" ).click (function(){
			try{
				_play_audio ('click_on');
				_hb_css ('#_heartbeat', 'visibility', 'visible');
			}catch (err){
				alert (err);
			}
			return true;
		});
		_hb_btn ($('#_btn_about'), 'info', false);
		$( "#_btn_about" ).click (function(){
			try{
				_play_audio ('click_on');
				$( "#_hb_dialog" ).dialog( "open" );
			}catch (err){
				alert (err);
			}
			return false;
		});

function _clear_default (){
	try {
		$('#_hb_left').html ('');
		$('#_hb_right').html ('');
	}catch (err){
		alert ( '_clear_default\n\n'+err);
	}
}
function _init_dialog (){
	try {
		$( "#_hb_dialog" ).dialog({
			autoOpen: false,
			width: 600,
			modal: true,
			buttons: {
				"OK": function() {
					$( this ).dialog( "close" );
				}
			}
		});
		//$( "#_hb_dialog" ).dialog( "close" );
	}catch (err){
		alert ( '_init_dialog\n\n'+err);
	}
}


function _clear_both (){
	try {
		var h = '';
		h += '<div style="clear:both;"></div>';
		return h;
	}catch (err){
		alert ( '_clear_both\n\n'+err);
	}
}
*/