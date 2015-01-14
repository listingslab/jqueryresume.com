//////////////////////////////////
// listingslab Open Source JQuery
//////////////////////////////////

function _examples () {
	try {
		var d_obj = {
				autoOpen: false,
				modal: false,
				width: 600,
				height: 470,
				show: "fade",
				hide: "fade",
				close: function(ev, ui) { 
					_play_audio ('click_off');
				}
		};
		$( "#_a_fractions_of_shape" ).dialog (d_obj);
		$( "#_b_fractions_of_shape" ).dialog (d_obj);
		$( "#_a_number_grid" ).dialog (d_obj);
		$( "#_b_number_grid" ).dialog (d_obj);
		$( "#_b_pl" ).dialog (d_obj);
		$( "._open_pl" ).click (function(){
			try{
				_play_audio ('click_on');
				$( "#_b_pl").load (_jqr ['app_path'] + '_swf/_embed.php?swf=penaltyLegends');
				$( "#_b_pl").dialog ('open');
			}catch (err){
				//alert (err);
			}
			return false;
		});
		$( "._open_kb" ).click (function(){
			try{
				_play_audio ('click_on');
				$( "#" + $(this).attr ('title') ).load (_jqr ['app_path'] + '_swf/_embed.php?swf='+$(this).attr ('title'));
				$( "#" + $(this).attr ('title') ).dialog ('open');
			}catch (err){
				//alert (err);
			}
			return false;
		});
		$( "._open_eastenders" ).click (function(){
			try{
				_play_audio ('click_on');
				$( "#" + $(this).attr ('title') ).load (_jqr ['app_path'] + '_swf/eastenders/index.php');
				$( "#" + $(this).attr ('title') ).dialog ('open');
			}catch (err){
				//alert (err);
			}
			return false;
		});
		$( "#_eastenders" ).dialog (d_obj);
	}catch (err){
		//alert ( '_examples\n\n'+err);
	}
}