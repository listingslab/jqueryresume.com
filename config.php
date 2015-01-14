<?php
	
	$o ['app_path'] = listingslab_get_url ();
	$o ['img_path'] = 'http://listingslab.com/jq_resume/';
	$o ['live_path'] = 'http://listingslab.com/jq_resume/';
	$o ['img'] = $o ['app_path'].'_img/_png/listingslab.png';
	$o ['url'] = listingslab_get_url ();
	$o ['page_title'] = 'Curriculum Vitae';
	$o ['title'] = 'Chris Dorward, Curriculum Vitae';
	$o ['strap'] = 'Front End Developer since 1995';
	$o ['desc'] = 'Dealing with most technologies, because most technologies are Open Source. 
	We want you to buy cool stuff which works, not a bunch of code.';
	$o ['keywords'] = 'Chris Dorward, resume, curriculum vitae, CV, experience, 
	qualifications, profile, Skills, node.js, angular,js, mongoDB, Design, User Interface Design , 
	Application, Development, GUI/UI Design, Web Interface Design, UI/UX Design , E-commerce, 
	Search Engine Visibility, Front End Developer, JavaScript Developer, Angular.js, node.js, mongoDB
	  Web Development, User Interface, Graphics, Adobe PhotoShop, Illustrator, In Design, Dreamweaver,
	   Flash & ActionScript , ActionScript, MX Server, Comms Server Technical, jQuery, 
	   JavaScript, CSS, CSS3, jQuery UI, Information Architecture, HTML, XHTML, HTML 5, AJAX
	   PHP, Facebook/Twitter API, Drupal, Web Analytics, MySQL, Databases, UNIX, Linux, LAMP, 
	   Cloud Servers, Cloud Hosting';
	$o ['c_text'] = '#555';
	$o ['c_grey'] = '#fbfbfb';
	$o ['c_border'] = '#f4f4f4';
	$o ['c_light'] = '#00b2ee';
	$o ['c_mid'] = '#3299cc';
	$o ['c_dark'] = '#00798c';
	$o ['grad_1'] = '#00b0ec';
	$o ['grad_2'] = '#00abe4';
	$o ['grad_3'] = '#00a4dc';
	$o ['grad_4'] = '#009bd0';
	$o ['grad_5'] = '#0091c3';
	$o ['grad_6'] = '#0087b5';
	$o ['grad_7'] = '#007ea9';
	$o ['grad_8'] = '#00779f';
	$o ['grad_9'] = '#006f95';
	$o ['grad_10'] = '#00698d';
	$o ['mode_skills'] = 'no';
	if (isset($_GET['mode_skills'])){if ($_GET['imode_skills'] != ''){$o ['mode_skills'] = $_GET['mode_skills'];}}
?>