<?php
	// Sportlobster Technical Test
	// https://github.com/listingslab/MVC_sl
	error_reporting(E_ALL);
	ini_set('display_errors', '1');
	$app_path = 'http://' . $_SERVER['HTTP_HOST'] . '/';
	if ($app_path  == 'http://listingslab.com/'){
		$app_path  .= 'jq_resume/_js/sportlobster/';
	}else{
		$app_path  .= '';
	}
?>
<!doctype html>
<html>
    <head>
    	<title>Sportlobster</title>
    	<link rel="shortcut icon" type="image/x-icon" href="<?php print $app_path;?>/img/sportlobster.ico">
    	<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
		<link href='<?php print $app_path;?>jquery-ui-1.9.2/css/sportlobster/jquery-ui-1.9.2.custom.css' rel='stylesheet' type='text/css'>
		<style>body {visibility: hidden;}a:focus {outline: none;}</style>
    	<script type="text/javascript">
			_sl = [];
			_sl ['data_path'] = '<?php print $app_path;?>data.json';
			_sl ['app_path'] = '<?php print $app_path;?>';
			_sl ['text_col'] = '#666';
			_sl ['border_col'] = '#ddd';
			_sl ['bg_col'] = '#f4f4f4';
			_sl ['1_col'] = '#3063cf'; // blue
			_sl ['2_col'] = '#57a755'; // green
			_sl ['white_col'] = '#fff';
			setTimeout(function(){
				try {
					_css ('body', 'visibility', 'visible');
			}catch (err) {
					//alert ('Timeout error on index.php\n' + err);
				}
			},3000);
		</script>
    	<script src="<?php print $app_path;?>jquery-ui-1.9.2/js/jquery-1.8.3.js" type="text/javascript"></script>
		<script src="<?php print $app_path;?>jquery-ui-1.9.2/js/jquery-ui-1.9.2.custom.js" type="text/javascript"></script>
		<script src="<?php print $app_path;?>ion_sound/js/ion.sound.js" type="text/javascript"></script>
		<script src="<?php print $app_path;?>jquery.timeago.js" type="text/javascript"></script>	
		<script src="<?php print $app_path;?>_audio.js" type="text/javascript"></script>
		<script src="<?php print $app_path;?>_model.js" type="text/javascript"></script>
		<script src="<?php print $app_path;?>_view.js" type="text/javascript"></script>
		<script src="<?php print $app_path;?>_controller.js" type="text/javascript"></script>
		<script src="<?php print $app_path;?>sportlobster.js" type="text/javascript"></script>
    </head>
    <body>
		<div id="_sportlobster">
			<div id="_sl_head">
<div id="menu">
	
	<a class="menu_btn" id="download" href="https://github.com/listingslab/MVC_sl/archive/master.zip" target="_blank" title="Download from GitHub">
		Download Code</a>
	<a class="menu_btn" id="show_data" title="View the JSON data" href="<?php print $app_path;?>data.json" target="_blank">
		Show Data</a>
	<a class="menu_btn" id="github_btn" href="https://github.com/listingslab/MVC_sl/" target="_blank" title="GitHub">
		GitHub</a>
	<a class="menu_btn" href="<?php print $app_path;?>?action=show_working" id="show_working" title="Because showing your working was 80% of the marks when I did Math at school.">
		Show Working</a>
	<a class="menu_btn" href="<?php print $app_path;?>?action=hide_working" id="hide_working" title="">
		Hide Working</a>
</div>
			
				<div style="clear:both;"></div>
				<div id="app">Application</div>
				<div id="dialog_predict" title=""></div>
				<div style="clear:both;"></div>
				<div id="working">
<div class="half_left"><div class="pad_10">
<h1>Assignment</h1>
<p>Create interface to view event predictions. 
Using the data provided, developer should visualise data by grouping and ordering them. 
Showcasing routing, filtering, paging, is a big plus 
(The data can be adjusted if needed).</p>
<ol>
	<li>Create list view of data that provides interaction of filtering data.</li>
	<ol>
		<li>ability to select a prediction</li>
		<li>ability to enable/disable predictions that were predicted</li>
	</ol>
	<li>Create separate routes for different pages/views of the end solution.</li>
	<ol>
		<li>ability to navigate inside a single event, 
			and separately review it's predictions using url parameters</li>
	</ol>
</ol>
<p><!--Bonus : using build script's (Grunt), testing (Jasmine) automated testing Karma), 
css precompilers (LESS, SASS), automatical documentation (Docular, Yuidoc).
If you want you can use : Typescript, Coffeescript.-->
Code should be nicely structured, no overuse of libraries. Max time : ~ 2h.</p>
					</div></div>
					<div class="half_right"><div class="pad_10">
<h1>Listingslab's Solution</h1>
<p class="_normal_text">	
		A simple <a class="link_tooltip" title="View JavaScript Framework" href="<?php print $app_path;?>sportlobster.js" target="_blank">jQuery</a> 
	<a class="link_tooltip" title="View JavaScript Model" href="<?php print $app_path;?>_model.js" target="_blank">M</a>
	<a class="link_tooltip" title="View JavaScript View" href="<?php print $app_path;?>_view.js" target="_blank">V</a>
	<a class="link_tooltip" title="View JavaScript Controller" href="_controller.js" target="_blank">C</a> 
	<a class="link_tooltip" title="Wikipedia explains" href="http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller" target="_blank">software architectural pattern</a> 
	to visualise this 
	<a class="link_tooltip" title="View the JSON data" href="<?php print $app_path;?>data.json" target="_blank">JSON data</a>.
	It uses 
	<a class="link_tooltip" title="Version 1.9.1" href="<?php print $app_path;?>jquery-ui/js/jquery-1.9.1.js" target="_blank">
		jQuery</a>, 
	<a class="link_tooltip" title="Version 1.10.3" href="<?php print $app_path;?>jquery-ui/js/jquery-ui-1.10.3.custom.js" target="_blank">
		jQuery UI</a>  
	and our own custom Open Source JavaScript framework which is available to 
	view and download from 
	<a class="link_tooltip" title="View this on GitHub." href="https://github.com/listingslab/MVC_sl" target="_blank">
	GitHub.</a>
</p>
<p class="_normal_text">
View JavaScript 
<a class="link_tooltip" title="View JavaScript Model" href="<?php print $app_path;?>_model.js" target="_blank">_model.js</a>, 
<a class="link_tooltip" title="View JavaScript View" href="<?php print $app_path;?>_view.js" target="_blank">_view.js</a>, 
<a class="link_tooltip" title="View JavaScript Controller" href="_controller.js" target="_blank">_controller.js</a> 
	</p>
<h1>How does the CSS work?</h1>
<p class="_normal_text">With jQuery you can set CSS attributes at run time. 
	So we can pretty much dispense with the traditional approach od including 
	style sheets and do it all fom within our JavaScript MVC
	<a href="_view.js" target="_blank">View</a> (see function _set_css ()
</p>
					
						
					</div>
					<div style="clear:both;"></div>
				</div></div>
			</div>
			<div style="clear:both;"></div>
			
		</div>
    </body>
</html>