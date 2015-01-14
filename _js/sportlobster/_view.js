//////////////////////////////////
// listingslab Open Source JQuery
// Sportlobster Technical Test
// https://github.com/listingslab/MVC_sl
//////////////////////////////////
/*
A view requests information from the model that it uses to 
generate an output representation to the user.
 */
function init_view () {
	try {
		_set_css ();
		_make_btns ();
		$('#hide_working').hide ();
		$('#working').hide ();
	}catch (err){
		//alert ( '_init_view\n'+err);
	}
}
function _view_finished (){
	try {
		var h = '';
		_play_audio ('04_afraid');
		h += '<h1>OK, cool</h1>';
		$('#dialog_predict').html (h);
	}catch (err){
		//alert ( '_view_finished\n'+err);
	}
}
function _view_print_events () {
	try {
		var h = '';
		for (var i=0; i< _sl ['data']['data'].length; i++){
			var d = _sl ['data']['data'][i];
			h += '<div class="event" title="' +  d['id'] + '">';
			h += '<div class="summary"><h1>' +  d['summary'] + ', ' +  d['competition'] + '</h1></div>';
			h += '</div>';
		}
		$('#events').html (h);
		$( '.event' ).click (function(){
			try{
				_play_audio ('click_on');
				_view_print_event_detail ($(this).attr ('title'));
			}catch (err){
				//alert (err);
			}
			return false;
		});
		_set_css ();
		_css_btn ($( '#home' ), 'home', true);
	}catch (err){
		//alert ( '_view_print_events\n'+err);
	}
}
function _view_print_app () {
	try {
		var h = '';
		h += '<div id="events"></div>';
		h += '<a id="home" href="' + _sl ['app_path'] + '">Home</a>';
		h += '<div id="event_detail"></div>';
		h += '<div style="clear:both;"></div>';
		$('#app').html (h);
		_set_css ();
	}catch (err){
		//alert ( '_view_print_app\n'+err);
	}
}
function _set_css (){
	try {
		_css ($('#_sportlobster'), 'margin', 'auto');	
		_css ($('#_sportlobster'), 'font-family', 'Open Sans');
		_css ($('#_sportlobster'), 'font-size', '0.8em');
		_css ($('#_sportlobster h1'), 'font-size', '1.1em');
		_css ($('#_sportlobster h1 a'), 'color', _sl ['text_col']);
		_css ($('#_sportlobster'), 'color', _sl ['text_col']);
		_css ($('._normal_text a'), 'color', _sl ['text_col']);
		_css ($('#_sportlobster'), 'min-width', '780px');
		_css ($('#_sportlobster'), 'max-width', '1200px');
		_css ($('._normal_text a'), 'text-decoration', 'none');
		_css ($('._normal_title a'), 'text-decoration', 'none');
		_css ($('._normal_text a'), 'font-weight', 'bold');
		_css ($('.pad_10'), 'padding', '10px');
		_css ($('#working'), 'margin-top', '20px');
		_css ($('#working'), 'margin-bottom', '20px');
		_css ($('#app'), 'margin-top', '20px');
		$('#app').addClass('ui-state- ui-corner-all');
		_css ($('#app a'), 'color', _sl ['text_col']);
		_css ($('#app a'), 'text-decoration', 'none');
		_css ($('#app a'), 'font-weight', 'bold');
		_css ($('#menu'), 'float', 'left');
		_css ($('#events'), 'margin-top', '45px');
		_css ($('#events'), 'width', '30%');
		_css ($('#event_detail'), 'width', '67%');
		_css ($('#events'), 'float', 'left');
		_css ($('#event_detail'), 'float', 'right');
		_css ($('#home'), 'color', 'white');
		_css ($('#home'), 'float', 'right');
		_css ($('.event'), 'color', _sl ['white_col']);
		_css ($('.event'), 'padding', '10px');
		_css ($('.event'), 'margin-bottom', '15px');
		_css ($('.event'), 'background', _sl ['1_col']);
		_css ($('.event'), 'border', '1px solid ' + _sl ['border_col']);
		$('.event').addClass('ui-state- ui-corner-all');
		_css ($('#event_detail'), 'color', 'white');
		_css ($('#event_detail'), 'margin-top', '15px');
		_css ($('#event_detail'), 'background', _sl ['2_col']);
		_css ($('#event_detail'), 'border', '1px solid ' + _sl ['border_col']);
		$('#event_detail').addClass('ui-state- ui-corner-all');
		_css ($('#detail_link'), 'float', 'right');
		_css ($('._team_avatar'), 'float', 'right');
		_css ($('._team_avatar_l'), 'float', 'left');
		_css ($('._team_avatar_l'), 'width', '38px');
		_css ($('._team_avatar'), 'width', '38px');
		$('._team_avatar').addClass('ui-state- ui-corner-all');
		_css ($('._team_avatar'), 'border', '1px solid ' + _sl ['border_col']);
		$('._team_avatar_l').addClass('ui-state- ui-corner-all');
		_css ($('._team_avatar_l'), 'border', '1px solid ' + _sl ['border_col']);
		_css ($('#ed_prediction'), 'margin-left', '5%');
		_css ($('#ed_prediction'), 'width', '100%');
		_css ($('#ed_draw'), 'background', _sl ['2_col']);
		_css ($('#ed_draw'), 'border', '1px solid ' + _sl ['bg_col']);
		$('#ed_draw').addClass('ui-state- ui-corner-all');
		_css ($('#ed_draw'), 'float', 'left');
		_css ($('#ed_draw'), 'width', '20%');
		_css ($('#ed_draw'), 'margin-bottom', '15px');
		_css ($('#ed_draw'), 'margin-top', '20px');
		_css ($('#ed_draw'), 'margin-left', '1%');
		_css ($('#ed_draw'), 'margin-right', '1%');
		_css ($('#ed_draw'), 'text-align', 'center');
		_css ($('#ed_home_team'), 'width', '32%');
		_css ($('#ed_home_team'), 'background', _sl ['1_col']);
		_css ($('#ed_home_team'), 'border', '1px solid ' + _sl ['bg_col']);
		$('#ed_home_team').addClass('ui-state- ui-corner-all');
		_css ($('#ed_home_team'), 'float', 'left');
		_css ($('#ed_home_team'), 'margin-top', '15px');
		_css ($('#ed_home_team'), 'text-align', 'center');
		_css ($('#ed_home_team'), 'margin-bottom', '15px');
		_css ($('#ed_away_team'), 'width', '35%');
		_css ($('#ed_away_team'), 'margin-top', '15px');
		_css ($('#ed_away_team'), 'background', _sl ['1_col']);
		_css ($('#ed_away_team'), 'border', '1px solid ' + _sl ['bg_col']);
		$('#ed_away_team').addClass('ui-state- ui-corner-all');
		_css ($('#ed_away_team'), 'float', 'left');
		_css ($('#ed_away_team'), 'text-align', 'center');
		_css ($('#ed_away_team'), 'margin-bottom', '15px');
		_css ($('.half_left'), 'border', '1px solid ' + _sl ['border_col']);
		_css ($('.half_left'), 'background', 'white');
		_css ($('.half_left'), 'float', 'left');
		_css ($('.half_left'), 'width', '49%');
		$('.half_left').addClass('ui-state- ui-corner-all');
		_css ($('.half_right'), 'border', '1px solid ' + _sl ['border_col']);
		_css ($('.half_right'), 'background', 'white');
		_css ($('.half_right'), 'float', 'right');
		_css ($('.half_right'), 'width', '49%');
		$('.half_right').addClass('ui-state- ui-corner-all');
	}catch (err){	
		//alert ( '_set_css\n'+err);
	}
}
function _make_btns (){
	try {
		$( '.menu_btn' ).tooltip ();
		$( '.link_tooltip' ).tooltip ();
		_css_btn ($( '#download' ), 'disk', false);
		_css_btn ($( '#show_data' ), 'script', false);
		_css_btn ($( '#github_btn' ), 'person', false);
		_css_btn ($( '#hide_header' ), 'circle-minus', false);
		_css_btn ($( '#show_working' ), 'circle-arrow-s', false);
		_css_btn ($( '#hide_working' ), 'circle-arrow-n', true);
		$( '#show_working' ).click (function(){
			try{
				_play_audio ('click_on');
				$('#working').fadeIn ();
				$('#hide_working').show ();
				$(this).hide ();
			}catch (err){
				//alert (err);
			}
			return false;
		});
		$( '#hide_working' ).click (function(){
			try{
				_play_audio ('click_off');
				$('#working').fadeOut ();
				$('#show_working').show ();
				$(this).hide ();
			}catch (err){
				//alert (err);
			}
			return false;
		});
	}catch (err){	
		//alert ( '_make_btns\n'+err);
	}
}
function _css_btn (selector, icon, showtext){
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
		_css (new_button, 'text-align', 'left');
		_css (new_button, 'color', 'white');
	}catch (err){	
		//alert ( '_css_btn\n\n'+err);
	}
}
function _css (selector, css, value){
	try {
		$(selector).css (css,value);
	}catch (err){
		//alert ( '_css\n\n'+err);
	}
}
function _view_print_event_detail (id) {
	try {
		$('#event_detail').hide ();
		var h = '';
		h += '<div class="pad_10">';
		// yeh, this bit's a bit rubbish
		var d;
		for (var i=0; i < _sl ['data']['data'].length; i++){
			if (id == _sl ['data']['data'][i]['id']){
				d = _sl ['data']['data'][i];
			}
		}
		h += '<a id="detail_link" href="' + _sl ['app_path'] + '?event_id=' + d['id'];
		h += '" target="_self" title="View on sportlobster.com">Permalink</a>';
		h += '<div class="summary"><h1>' +  d['summary'] + '</h1></div>';
		h += '<div style="clear:both;"></div>';
		h += '<div id="ed_prediction">';
		h += '<div class="predict_home" id="ed_home_team" title="'+d['id']+'"><div class="pad_10">';
		h += '<a href="' + d ['home_team']['url'] + '" target="_blank">';
		h += '<img class="_team_avatar_l" src="' + d ['home_team']['photos']['website']['avatar']['url'] + '" />';
		h += '</a>';
		h += '<h1>' + d ['home_team']['name'] + ' to Win</h1>';
		h += '<div style="clear:both;"></div>';
		h += '<div id="homewin"><div class="progress-label">' + d ['prediction_options'][0]['percentage'] + '% say ' + d ['home_team']['name'] + ' will win</div></div>';
		h += '</div></div>';
		h += '<div class="predict_draw" id="ed_draw" title="'+d['id']+'"><div class="pad_10">';
		h += '<h1>Draw</h1>';
		h += '<div style="clear:both;"></div>';
		h += '<div id="draw"><div class="progress-label">' + d ['prediction_options'][1]['percentage'] + '% say Draw</div></div>';
		h += '</div></div>';
		h += '<div class="predict_away" id="ed_away_team" title="'+d['id']+'"><div class="pad_10">';
		h += '<a href="' + d ['home_team']['url'] + '" target="_blank">';
		h += '<img class="_team_avatar" src="' + d ['away_team']['photos']['website']['avatar']['url'] + '" />';
		h += '</a>';
		h += '<h1>' + d ['away_team']['name'] + ' to Win</h1>';
		h += '<div style="clear:both;"></div>';
		h += '<div id="awaywin"><div class="progress-label">' + d ['prediction_options'][2]['percentage'] + '% say ' + d ['away_team']['name'] + ' will win</div></div>';
		h += '</div></div>';
		h += '</div>';
		h += '<div style="clear:both;"></div>';
		h += '<div id="ed_numpredictions">There are ' + d ['prediction_count'] + ' predictions on this event</div>';
		h += '<div class="_time_ago">Event time <abbr class="timeago" title="' + d['start_time'] + '"></abbr></div>';
		h += '</div>';
		$('#event_detail').html (h);
		_set_css ();
		jQuery("abbr.timeago").timeago();
		_css ($('#event_detail'), 'background-image', 'url("' + d ['taxonomies'][1]['photos']['website']['event-banner']['url'] + '")');
		$( '#detail_link' ).tooltip ();
		_css ($('#homewin'), 'width', '100%');
		_css ($('#homewin'), 'margin-top', '15px');
		$( '#homewin' ).progressbar({
	      value: d ['prediction_options'][0]['percentage'],
	    });
	    _css ($('#draw'), 'width', '100%');
		_css ($('#draw'), 'margin-top', '5px');
		$( '#draw' ).progressbar({
	      value: d ['prediction_options'][1]['percentage'],
	    });
	    _css ($('#awaywin'), 'width', '100%');
		_css ($('#awaywin'), 'margin-top', '15px');
		$( '#awaywin' ).progressbar({
	      value: d ['prediction_options'][2]['percentage'],
	    });
		_css ($('.ui-progressbar'), 'position', 'relative');
		_css ($('.ui-progressbar'), 'background', _sl ['1_col']);
		_css ($('.ui-progressbar'), 'text-align', 'center');
		_css ($('.progress-label'), 'position', 'absolute');
		_css ($('.progress-label'), 'margin-left', '5px');
		_css ($('.progress-label'), 'margin-top', '4px');
		_css ($('.progress-label'), 'font-weight', 'bold');
		_css ($('.progress-label'), 'color', 'white');
		_css_btn ($( '#detail_link' ), 'link', true);
		$('#event_detail').fadeIn ();
		$( '.predict_home' ).click (function(){
			_view_prediction ($(this).attr ('title'), 'home');
			return false;
		});
		$( '.predict_draw' ).click (function(){
			_view_prediction ($(this).attr ('title'), 'draw');
			return false;
		});
		$( '.predict_away' ).click (function(){
			_view_prediction ($(this).attr ('title'), 'away');
			return false;
		});
	}catch (err){
		//alert ( '_view_loading\n'+err);
	}
}
function _view_prediction (id, result) {
	try {
		$( "#dialog_predict" ).dialog({
		  autoOpen: false,
	      resizable: false,
	      modal: true,
	      show: {
	        effect: "blind"
	      },
	      hide: {
	        effect: "blind"
	      }
	    });
		_play_audio ('poppop');
		var d;
		for (var i=0; i < _sl ['data']['data'].length; i++){
			if (id == _sl ['data']['data'][i]['id']){
				d = _sl ['data']['data'][i];
			}
		}
		var h = '';
		if (result == 'home'){
			h += '<img class="_predict_avatar" src="' + d ['home_team']['photos']['website']['avatar']['url'] + '" />';
			h += 'Are you sure you want to predict a home win for ';
			h += '<b>' + d ['home_team']['name'] + '</b> vs <b>' + d ['away_team']['name']+'?</b>';
			h += '<br /><br />' + d ['prediction_options'][0]['percentage'] + '% agree with you';
		}
		if (result == 'draw'){
			h += 'Are you sure you want to predict a draw for ';
			h += '<b>' + d['summary'] + '?</b>';
			h += '<br /><br />' + d ['prediction_options'][1]['percentage'] + '% agree with you';
		}
		if (result == 'away'){
			h += '<img class="_predict_avatar" src="' + d ['away_team']['photos']['website']['avatar']['url'] + '" />';
			h += 'Are you sure you want to predict an away win for ';
			h += '<b>' + d ['away_team']['name'] + '</b> vs <b>' + d ['home_team']['name']+'?</b>';
			h += '<br /><br />' + d ['prediction_options'][2]['percentage'] + '% agree with you';
		}
		h += '<div style="clear:both; height:10px;"></div>';
		h += '<a href="#" class="_yesplease">Yes please</a>';
		h += '<a href="#" class="_nownow">Not now</a>';
		$('#dialog_predict').html (h);
		$( '._yesplease' ).click (function(){
			$( "#dialog_predict" ).dialog( "close" );
			_play_audio ('click_off');
			_view_finished ();
			return false;
		});
		$( '._nownow' ).click (function(){
			$( "#dialog_predict" ).dialog( "close" );
			_play_audio ('click_off');
			return false;
		});
		_css_btn ($( '._yesplease' ), 'check', true);
		_css_btn ($( '._nownow' ), 'trash', true);
		_css ($('._predict_avatar'), 'float', 'left');
		_css ($('._predict_avatar'), 'width', '100px');
		_css ($('._predict_avatar'), 'margin-right', '15px');
		_css ($('._predict_avatar'), 'border', '1px solid ' + _sl ['border_col']);
		$('._predict_avatar').addClass('ui-state- ui-corner-all');
		$( "#dialog_predict" ).dialog( "open" );
	}catch (err){
		//alert ( '_view_print_app\n'+err);
	}
}