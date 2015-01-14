//////////////////////////////////
// listingslab Open Source JQuery
//////////////////////////////////

function _interface () {
	try {
		_jqr ['ui'] = {};
		_jqr ['ui']['sections'] = {};
		s = {name: 'Profile', div: '_profile', state:'on', more:{}};
		_jqr ['ui']['sections']['_profile'] = s;
		s = {name: 'Skills', div: '_skills', state:'on', more:{}};
		_jqr ['ui']['sections']['_skills'] = s;
		s = {name: 'Employment', div: '_employment', state:'on', more:{}};
		_jqr ['ui']['sections']['_employment'] = s;
		s = {name: 'Recommendations', div: '_recommendations', state:'on', more:{}};
		_jqr ['ui']['sections']['_recommendations'] = s;
		s = {name: 'Examples', div: '_examples', state:'on', more:{}};
		_jqr ['ui']['sections']['_examples'] = s;
		s = {name: 'Education', div: '_education', state:'on', more:{}};
		_jqr ['ui']['sections']['_education'] = s;
		//_title_toggle ('_education', false);
		//_title_toggle ('_examples', false);
		_title_toggle ('_recommendations', false);
		//_title_toggle ('_employment', false);
		//_title_toggle ('_skills', false);
		//_title_toggle ('_profile', false);
		$( "._title_toggle" ).click (function(){
			try{
				_title_toggle ($(this).attr ('title'), true);
			}catch (err){
				//alert (err);
			}
			return false;
		});
		////////////////////////////////
		var show_menu = false;
		if (show_menu){
			_jqr_css ($('#_jqr_a'), 'float', 'right');
			_jqr_css ($('#_jqr_b'), 'float', 'left');
			_jqr_css ($('#_jqr_b'), 'width', '20%');
			_jqr_css ($('#_jqr_a'), 'width', '75%');
			_jqr_css ($('#_jqr_b'), 'padding-top', '25px');
			$('#_jqr_b').show ();
		}else{
			_jqr_css ($('#_jqr_a'), 'float', 'left');
			_jqr_css ($('#_jqr_a'), 'width', '100%');
			$('#_jqr_b').hide ();
		}
		//_ui_buttons ();
	}catch (err){
		alert ( '_interface\n\n'+err);
	}
}
function _ui_buttons () {
	try {
		var h = '';
		h += '<a href="#" id="_btn_settings">Settings</a>';
		$('#_settings_toggle').html (h);
		_jqr_btn ($('._btn_hide'), 'circle-arrow-n', false);
		_jqr_css ($('._btn_hide'), 'float', 'right');
		_jqr_btn ($('#_btn_settings'), 'circle-arrow-s', true);
		$( "#_btn_settings" ).click (function(){
			try{
				//_play_audio ('click_on');
			}catch (err){
				//alert (err);
			}
			return false;
		});
		
	}catch (err){
		//alert ( '_ui_buttons\n\n'+err);
	}
}
function _hide_all_sections () {
	try {
	}catch (err){
		//alert ( '_hide_all_sections\n\n'+err);
	}
}
function _title_toggle (div, audio) {
	try {
		if (_jqr ['ui']['sections'][div]['state'] == 'on'){
			if (audio != false){
				_play_audio ('click_off');
			}
			_jqr ['ui']['sections'][div]['state'] = 'off';
			$('#' + div + ' ._hidden').hide ();
		}else{
			if (audio != false){
				_play_audio ('click_on');
			}
			_jqr ['ui']['sections'][div]['state'] = 'on';
			$('#' + div + ' ._hidden').show ();
		}
	}catch (err){
		//alert ( ' _title_toggle\n\n'+err);
	}
}
function _settings_menu () {
	try {
		var h = '';
		h += '<a href="#" id="_interface">Toggle Sounds</a>';
		h += '<a href="#" id="_cookies">Cookies</a>';
		$('#_jqr_b').html (h);
		_jqr_btn ($('#_cookies'), 'contact', true);
		_jqr_css ($('#_cookies'), 'width', '100%');
		_jqr_btn ($('#_interface'), 'volume-on', true);
		_jqr_css ($('#_interface'), 'width', '100%');
		$( "#_interface" ).click (function(){
			try{
				//_play_audio ('click_on');
			}catch (err){
				//alert (err);
			}
			return false;
		});
	}catch (err){
		//alert ( '_settings_menu\n\n'+err);
	}
}
