//////////////////////////////////
// listingslab Open Source JQuery
// Sportlobster Technical Test
// https://github.com/listingslab/MVC_sl
//////////////////////////////////
function init_audio (){
	try {
		_sl ['audio'] = 'on';
		$.ionSound({
		    sounds: [
		     	"click_on",
		     	"click_off",
		     	"poppop",
		     	"toggle",
		     	"04_afraid",
		    ],
		    path: _sl ['app_path'] + "_mp3_ogg/",                
		    multiPlay: true,               
		    volume: "1"
		});
		
	}catch (err){
		alert ( '_audio\n'+err);
	}
}
function _play_audio (sound){
	try {
		if (_sl ['audio'] == 'on'){
			$.ionSound.play (sound);
		}
	}catch (err){
		alert ( '_audio\n'+err);
	}
}
