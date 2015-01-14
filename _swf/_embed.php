 
 <?php 
 	$swf_path = $o ['app_path'].'_swf/';
	if (isset($_GET['swf'])){
		if ($_GET['swf'] != ''){
			$swf_path .= $_GET['swf'];
		}
	}
	$swf_path .= '.swf';
 ?>
 <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="98%" id="FlashID" title="Fractions Of Shape">
    <param name="movie" value="<?php print $swf_path;?>" />
    <param name="quality" value="high" />
    <param name="wmode" value="opaque" />
    <param name="swfversion" value="6.0.65.0" />
    <param name="expressinstall" value="<?php print $o ['app_path'].'_swf/';?>expressInstall.swf" />
    <!--[if !IE]>-->
    <object type="application/x-shockwave-flash" data="<?php print $swf_path;?>" width="100%" height="98%">
      <!--<![endif]-->
      <param name="quality" value="high" />
      <param name="wmode" value="opaque" />
      <param name="swfversion" value="6.0.65.0" />
      <param name="expressinstall" value="<?php print $o ['app_path'].'_swf/';?>expressInstall.swf" />
      <div>
        <h4>Your device doesn't support the Flash player. Which is why we don't use Flash any more.</h4>
        <p><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" width="112" height="33" /></a></p>
      </div>
      <!--[if !IE]>-->
    </object>
    <!--<![endif]-->
  </object>