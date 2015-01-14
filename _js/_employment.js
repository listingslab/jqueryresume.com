//////////////////////////////////
// listingslab Open Source JQuery
//////////////////////////////////

function _employment () {
	try {
		_employment_data ();
		$( "._employment_toggle" ).click (function(){
			try{
				_employment_toggle ($(this).attr ('title'));
			}catch (err){
				//alert (err);
			}
			return false;
		});
		_employment_render ();
	}catch (err){
		//alert ( '_employment\n\n'+err);
	}
}
function _employment_render () {
	try {
		_jqr_css ($('.job_pad'), 'margin-top', '5px');
		$('.job_pad').addClass('ui-state- ui-corner-all');
		_jqr_css ($('.job_pad'), 'background', 'white');
		_jqr_css ($('.job_pad'), 'border', '1px solid ' + _jqr ['c_border']);
		_jqr_css ($('.job_pad'), 'padding', '5px');
		_jqr_css ($('#_employment_content'), 'padding-top', '15px');
		_jqr_css ($('.job_dates'), 'float', 'right');
		_jqr_css ($('.job_title a'), 'color', _jqr ['c_dark']);
		_jqr_css ($('.job_dates a'), 'color', _jqr ['c_text']);
		_jqr_css ($('.job_title'), 'float', 'left');
		_jqr_css ($('.job_desc'), 'float', 'left');
		_jqr_css ($('.job_skills'), 'float', 'right');
		_jqr_css ($('.job_desc'), 'width', '70%');
		_jqr_css ($('.job_skills'), 'width', '25%');
		_jqr_css ($('.job_desc'), 'margin-top', '10px');
		_jqr_css ($('.job_skills'), 'margin-top', '10px');
		_jqr_css ($('.job_icon'), 'float', 'left');
		_jqr_css ($('.job_icon'), 'width', '40px');
		_jqr_css ($('._job_img'), 'width', '100%');
	}catch (err){
		//alert ( ' _employment_render\n\n'+err);
	}
}
function _employment_toggle (div) {
	try {
		if (_jqr ['ui']['sections']['_employment']['more'][div]['state'] == 'on'){
			_jqr ['ui']['sections']['_employment']['more'][div]['state'] = 'off';
			//_play_audio ('click_off');
			$('.' + div + ' ._hidden_job').hide ();
		}else{
			_jqr ['ui']['sections']['_employment']['more'][div]['state'] = 'on';
			//_play_audio ('click_on');
			$('.' + div + ' ._hidden_job').show ();
		}
	}catch (err){
		//alert ( ' _employment_toggle\n\n'+err);
	}
}

function _employment_data () {
	try {
		var more = _jqr ['ui']['sections']['_employment']['more'];
		m = {name: '', div: '_job_lwc', state:'on'};
		more ['_job_lwc'] = m;
		m = {name: '', div: '_job_ll', state:'on'};
		more ['_job_ll'] = m;
		m = {name: '', div: '_job_velo', state:'on'};
		more ['_job_velo'] = m;
		m = {name: '', div: '_job_ig', state:'on'};
		more ['_job_ig'] = m;
		m = {name: '', div: '_job_cantor', state:'on'};
		more ['_job_cantor'] = m;
		m = {name: '', div: '_job_eurobet', state:'on'};
		more ['_job_eurobet'] = m;
		m = {name: '', div: '_job_saffron', state:'on'};
		more ['_job_saffron'] = m;
		m = {name: '', div: '_job_pb', state:'on'};
		more ['_job_pb'] = m;
		m = {name: '', div: '_job_fmg', state:'on'};
		more ['_job_fmg'] = m;
		m = {name: '', div: '_job_kyunet', state:'on'};
		more ['_job_kyunet'] = m;
		m = {name: '', div: '_job_kpe', state:'on'};
		more ['_job_kpe'] = m;
		m = {name: '', div: '_job_4mat', state:'on'};
		more ['_job_4mat'] = m;
		m = {name: '', div: '_job_asp', state:'on'};
		more ['_job_asp'] = m;
		m = {name: '', div: '_job_trans', state:'on'};
		more ['_job_trans'] = m;
		m = {name: '', div: '_job_chaosuk', state:'on'};
		more ['_job_chaosuk'] = m;
		
		//_employment_toggle ('_job_lwc');
		//_employment_toggle ('_job_ll');
		//_employment_toggle ('_job_velo');
		//_employment_toggle ('_job_ig');
		//_employment_toggle ('_job_cantor');
		//_employment_toggle ('_job_eurobet');
		//_employment_toggle ('_job_saffron');
		//_employment_toggle ('_job_pb');
		//_employment_toggle ('_job_fmg');
		//_employment_toggle ('_job_kyunet');
		//_employment_toggle ('_job_kpe');
		_employment_toggle ('_job_4mat');
		_employment_toggle ('_job_asp');
		_employment_toggle ('_job_trans');
		_employment_toggle ('_job_chaosuk');
		
		url_vars = _get_url_vars();
		if (url_vars['job'] != undefined){
			if (url_vars['job'] == "lwc"){ _employment_toggle ('_job_lwc');}
			if (url_vars['job'] == "ll"){ _employment_toggle ('_job_ll');}
			if (url_vars['job'] == "velo"){ _employment_toggle ('_job_velo');}
			if (url_vars['job'] == "ig"){ _employment_toggle ('_job_ig');}
			if (url_vars['job'] == "cantor"){ _employment_toggle ('_job_cantor');}
			if (url_vars['job'] == "eurobet"){ _employment_toggle ('_job_eurobet');}
			if (url_vars['job'] == "saffron"){ _employment_toggle ('_job_saffron');}
			if (url_vars['job'] == "pb"){ _employment_toggle ('_job_pb');}
			if (url_vars['job'] == "fmg"){ _employment_toggle ('_job_fmg');}
			if (url_vars['job'] == "kyunet"){ _employment_toggle ('_job_kyunet');}
			if (url_vars['job'] == "kpe"){ _employment_toggle ('_job_kpe');}
			if (url_vars['job'] == "4mat"){ _employment_toggle ('_job_4mat');}
			if (url_vars['job'] == "asp"){ _employment_toggle ('_job_asp');}
			if (url_vars['job'] == "trans"){ _employment_toggle ('_job_trans');}
			if (url_vars['job'] == "chaosuk"){ _employment_toggle ('_job_chaosuk');}
		}
	}catch (err){
		//alert ( ' _employment_data\n\n'+err);
	}
}