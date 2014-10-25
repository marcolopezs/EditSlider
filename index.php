<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title></title>
	<!-- Google Font -->
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Oswald:400,300,700' rel='stylesheet' type='text/css'>

	<!-- Font Awesome Icon -->
	<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

	<!-- jQuery -->
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.js"></script>

	<!-- jQuery UI CSS -->
	<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/themes/smoothness/jquery-ui.css" />
	<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js"></script>

	<!-- Estilos -->
	<link rel="stylesheet" href="estilos.css">
	
	<!-- APP -->
	<script type="text/javascript" src="app.js"></script>
	
	<!-- SPECTRUM - COLORPICKER -->
	<link rel="stylesheet" href="http://bgrins.github.io/spectrum/spectrum.css">
	<script src="http://bgrins.github.io/spectrum/spectrum.js"></script>

	<!-- #### Revolution Slider #### -->
	<link rel="stylesheet" href="rs-plugin/css/settings.css">

    <!-- CSS STYLE-->
    <link rel="stylesheet" type="text/css" href="css/style.css" media="screen" />

    <!-- THE PREVIEW STYLE SHEETS, NO NEED TO LOAD IN YOUR DOM -->
    <link rel="stylesheet" type="text/css" href="css/noneed.css" media="screen" />

    <!-- SLIDER REVOLUTION 4.x SCRIPTS  -->    
     <script type="text/javascript" src="rs-plugin/js/jquery.themepunch.tools.min.js"></script>   
    <script type="text/javascript" src="rs-plugin/js/jquery.themepunch.revolution.min.js"></script>

	<!-- SLIDER REVOLUTION 4.x CSS SETTINGS -->
    <link rel="stylesheet" type="text/css" href="css/extralayers.css" media="screen" />	
	<link rel="stylesheet" type="text/css" href="rs-plugin/css/settings.css" media="screen" />

	<script type="text/javascript">

	var jSlider = jQuery.noConflict();

	jSlider(document).ready(function(){
								
		jSlider('.tp-banner').show().revolution(
		{
			dottedOverlay:"none",
			delay:16000,
			startwidth:1170,
			startheight:600,
			hideThumbs:200,
			
			thumbWidth:100,
			thumbHeight:50,
			thumbAmount:5,
			
			navigationType:"bullet",
			navigationArrows:"solo",
			navigationStyle:"preview4",
			
			touchenabled:"off",
			onHoverStop:"off",
			
			swipe_velocity: 0.7,
			swipe_min_touches: 1,
			swipe_max_touches: 1,
			drag_block_vertical: false,
									
			parallax:"mouse",
			parallaxBgFreeze:"on",
			parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
									
			keyboardNavigation:"off",
			
			navigationHAlign:"center",
			navigationVAlign:"bottom",
			navigationHOffset:0,
			navigationVOffset:20,

			soloArrowLeftHalign:"left",
			soloArrowLeftValign:"center",
			soloArrowLeftHOffset:20,
			soloArrowLeftVOffset:0,

			soloArrowRightHalign:"right",
			soloArrowRightValign:"center",
			soloArrowRightHOffset:20,
			soloArrowRightVOffset:0,
					
			shadow:0,
			fullWidth:"off",
			fullScreen:"on",

			spinner:"spinner4",
			
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,

			shuffle:"off",
			
			autoHeight:"off",						
			forceFullWidth:"off",	
									
			hideThumbsOnMobile:"off",
			hideNavDelayOnMobile:1500,						
			hideBulletsOnMobile:"off",
			hideArrowsOnMobile:"off",
			hideThumbsUnderResolution:0,
			
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			startWithSlide:0,
			fullScreenOffsetContainer: ".header"	
		});
		
						
	});	//ready

	</script>

	<!-- #### Revolution Slider #### -->	

</head>
<body>

	<div id="contenido-texto"></div>

	<div class="tp-banner-container">

		<div class="tp-banner" >

			<ul>

				<li data-transition="fade" data-slotamount="7" data-masterspeed="500" data-saveperformance="on" data-title="Intro Slide">
					<img  alt="seabg1" data-lazyload="images/seabg1.jpg" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat">
				</li>
	
			</ul>

			<div class="tp-bannertimer"></div>

		</div>

	</div>


<div id="opciones">

	<ul>
		<li><a id="agregar" href="javascript:;" title="Agrega texto"><i class="fa fa-plus-square-o"></i></a></li>
		<li><a id="transparencia" href="javascript:;" title="Ocultar transparencia"><i class="fa fa-square-o"></i></a></li>
		<li><a id="enviar" href="javascript:;" title="Listo!!!"><i class="fa fa-check-square-o"></i></a></li>
		<li id="enlace"><a target="_blank" href="javascript:;" title="Vista previa"><i class="fa fa-eye"></i></a></li>
	</ul>

</div>

<div id="opciones-estilos">

	<div class="opciones">
		<h4>Tamaño</h4>
		<div id="texto-tamano-slide"></div>
	</div>

	<div class="opciones">
		<h4>Color</h4>
		<div id="texto-color">
			<fieldset><input type="text" name="colorpicker" id="colorpicker" class="gui-input" /></fieldset>
		</div>
	</div>
		
</div>

</body>
</html>