//////////////////////////////////
// listingslab Open Source JQuery
// Sportlobster Technical Test
// https://github.com/listingslab/MVC_sl
//////////////////////////////////
$(document).ready(function () {
	try {
		init_controller ();
		setTimeout(function(){
			try {
				_css ('body', 'visibility', 'visible');
			}catch (err){
				//alert ('init timeout\n\n' + err);	
			}
		},500);
	} catch (err){
		//alert ('init Ready Error \n\n ' + err);
	}
});