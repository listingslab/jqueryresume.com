<?php
	// Listingslab jq_resume
	error_reporting(E_ALL);
	ini_set('display_errors', '1');
	global $o;
	include '_php/functions.php';
	include 'config.php';
	$o ['version'] = '7.6.1';
?>
<!doctype html>
<html>
    <head>
    	<title><?php print $o ['page_title'];?></title>
	<?php include '_php/includes/inc_meta.php'; ?>
	<?php include '_php/includes/inc_css.php'; ?>
	<?php include '_php/includes/inc_javascript.php'; ?>
    </head>
    <body>
		<div id="_jq_resume">
			<div id="_jqr_head">
				<?php include '_php/content/_title.php'; ?>
			</div>
			<div id="_jqr_a">
				<div id="_jqr_a_l">
				<?php include '_php/content/_profile.php'; ?>
				<?php include '_php/content/_skills.php'; ?>
				<?php include '_php/content/_education.php'; ?>
				<?php include '_php/content/_examples.php'; ?>
				<?php include '_php/content/_recommendations.php'; ?>
				</div>
				<div id="_jqr_a_r">
				<?php include '_php/content/_employment.php'; ?>
				
				
				</div>
			</div>
			<div id="_jqr_b">
				<!-- good place for keywords, this -->
				<?php print $o ['keywords'];?>
			</div>
			<div style="clear:both;"></div>
			<?php include '_php/content/_foot.php'; ?>
		</div>
		<div id="_dev">
			<?php 
			//print '<pre>'; 
			//print_r ($o); 
			//print '</pre>';?>
		</div>
    </body>
</html>

<p align="center">
	<a href="/">
		<img height="25" src="<?php print_r ($o ['app_path']); ?>/_img/_png/_3rdparty/aptana.png" />
	</a>
</p>