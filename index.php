<?php
ini_set('display_errors', '0');    
error_reporting(E_ALL | E_STRICT); 
	require_once('php/simplepie.inc'); 
	$feed = new SimplePie();
	$feed->set_feed_url('http://www.xcelme.com/blog/?feed=rss2');
	$feed->init();
	$feed->handle_content_type();
?>

<!DOCTYPE html>
<head>
	<meta http-equiv="Content-type" content="text/html; charset=utf-8">
	<title>Ribbon</title>
	<link rel="stylesheet" href="styles.css" type="text/css" media="screen"  charset="utf-8">
	<SCRIPT type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></SCRIPT>
	<script type="text/javascript" charset="utf-8" src="global.js" ></script>
</head>

<div id="wrapper">
	<div id="main">
		
	</div><!-- #Main -->
	
	<div id="sidebar">
		<div id="newsfeed">
			<div id="inner">
			<?php foreach ($feed->get_items() as $item): ?>
				 <p><a href="<?php echo $item->get_permalink(); ?>"><?php echo $item->get_title(); ?></a></p>
			<?php endforeach; ?>
			</div><!-- #inner -->
		</div>
	</div><!-- #sidebar -->
</div><!-- #wrapper -->