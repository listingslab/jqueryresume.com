//////////////////////////////////
// listingslab Open Source JQuery
//////////////////////////////////

function _skills () {
	try {
		var d_obj = {
				autoOpen: false,
				modal: false,
				width: 700,
				show: "fade",
				hide: "fade",
				close: function(ev, ui) { 
					_play_audio ('click_off');
				}
		};
		$( "._open_dialog" ).click (function(){
			try{
				_play_audio ('click_on');
				$( "#" + $(this).attr ('title') ).dialog ('open');
			}catch (err){
				//alert (err);
			}
			return false;
		});
		$( "#_skills_drupal_dialog" ).dialog (d_obj);
		$( "#_skills_flash_dialog" ).dialog (d_obj);
		$( "#_skills_graphics_dialog" ).dialog (d_obj);
		$( "#_skills_jquery_dialog" ).dialog (d_obj);
		$( "#_skills_mobile_dialog" ).dialog (d_obj);
		$( "#_skills_opensource_dialog" ).dialog (d_obj);
		$( "#_skills_seo_dialog" ).dialog (d_obj);
		$( "#_skills_uidesign_dialog" ).dialog (d_obj);
		$( "#_skills_wordpress_dialog" ).dialog (d_obj);
		
		url_vars = _get_url_vars();
		if (url_vars['skill'] != undefined){
			if (url_vars['skill'] == "seo"){$( "#_skills_seo_dialog" ).dialog ('open');}
			if (url_vars['skill'] == "drupal"){$( "#_skills_drupal_dialog" ).dialog ('open');}
			if (url_vars['skill'] == "flash"){$( "#_skills_flash_dialog" ).dialog ('open');}
			if (url_vars['skill'] == "graphics"){$( "#_skills_graphics_dialog" ).dialog ('open');}
			if (url_vars['skill'] == "javascript"){$( "#_skills_jquery_dialog" ).dialog ('open');}
			if (url_vars['skill'] == "jquery"){$( "#_skills_jquery_dialog" ).dialog ('open');}
			if (url_vars['skill'] == "jqueryui"){$( "#_skills_jquery_dialog" ).dialog ('open');}
			if (url_vars['skill'] == "bower"){$( "#_skills_jquery_dialog" ).dialog ('open');}
			if (url_vars['skill'] == "angular"){$( "#_skills_jquery_dialog" ).dialog ('open');}
			if (url_vars['skill'] == "backbone"){$( "#_skills_jquery_dialog" ).dialog ('open');}
			
			if (url_vars['skill'] == "mobile"){$( "#_skills_mobile_dialog" ).dialog ('open');}
			if (url_vars['skill'] == "opensource"){$( "#_skills_opensource_dialog" ).dialog ('open');}
			if (url_vars['skill'] == "php"){$( "#_skills_opensource_dialog" ).dialog ('open');}
			if (url_vars['skill'] == "uidesign"){$( "#_skills_uidesign_dialog" ).dialog ('open');}
			if (url_vars['skill'] == "wordpress"){$( "#_skills_wordpress_dialog" ).dialog ('open');}
		}
		
		_jqr_css ($('#_skills_content'), 'padding-top', '15px');
		_jqr_css ($('._skill_dialog_img'), 'float', 'right');
		_jqr_css ($('._skill_dialog_img'), 'width', '150px');
		_jqr_css ($('._ex_group'), 'float', 'left');
		_jqr_css ($('._ex_group'), 'width', '45%');
		_jqr_css ($('._ex_group'), 'margin-right', '10px');
		_jqr_css ($('._half_width'), 'width', '33%');
		
		
		
	}catch (err){
		//alert ( '_skills\n\n'+err);
	}
}