//////////////////////////////////
// listingslab Open Source JQuery
//////////////////////////////////
function _audio (){
	try {
		// if cookie doesn't tell us otherwise, we'll start the audio feature
		_jqr ['audio'] = 'on';
		$.ionSound({
		    sounds: [
		        "_ting",
		     	"01_stress_pill",
		     	"02_entitled",
		     	"03_doing",
		     	"04_afraid",
		     	"05_enthusiasm",
		     	"06_goodbye",
		     	"07_operational",
		     	"08_message",
		     	"09_human_error",
		     	"click_on",
		     	"click_off",
		     	"poppop",
		     	"toggle",
		    ],
		    path: _jqr ['app_path'] + "_mp3_ogg/",                
		    multiPlay: true,               
		    volume: "1"
		});
		//_play_audio ('click_off');
	}catch (err){
		//alert ( '_audio\n\n'+err);
	}
}
function _play_audio (sound){
	try {
		if (_jqr ['audio'] == 'on'){
			$.ionSound.play (sound);
		}
	}catch (err){
		//alert ( '_audio\n\n'+err);
	}
}
