//////////////////////////////////
// listingslab Open Source JQuery
//////////////////////////////////
$(document).ready(function () {
	try {
		$('#_dev').hide ();
		_init_render ();
		_audio ();
		_interface ();
		setTimeout(function(){
			try {
				_profile ();
				_skills ();
				_employment ();
				_examples ();
			}catch (err){
				//alert ('\n' + err);	
			}
		},50);
		
		setTimeout(function(){
			try {
				_jqr_css ('body', 'visibility', 'visible');
			}catch (err){
				//alert ('init timeout\n\n' + err);	
			}
		},1000);
	} catch (err){
		//alert ('init Ready Error \n\n ' + err);
	}
});