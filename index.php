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

	<!-- jQuery UI CSS -->
	<link rel="stylesheet" href="//code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.css">

	<!-- Estilos -->
	<link rel="stylesheet" href="estilos.css">

	<!-- Estilos Revolution Slider -->
	<link rel="stylesheet" href="rs-plugin/css/settings.css">

	<!-- SPECTRUM - COLORPICKER -->
	<link rel="stylesheet" href="http://bgrins.github.io/spectrum/spectrum.css">

</head>
<body>

<div class="imagen">
	<img src="images/seabg1.jpg" alt="">

	<div id="contenido">

		<div id="contenido-texto"></div>

	</div>	

</div>

<a id="fondoNo" href="javscript:;">OCULTAR TRANSPARENCIA</a>
<a id="fondoSi" href="javscript:;">MOSTRAR TRANSPARENCIA</a>

<a id="agregar" href="javascript:;">AGREGAR</a>

<a id="enviar" href="javascript:;">Enviar datos</a>

<a id="enlace" href="">Vista previa</a>

<h3>Lista de estilos</h3>

<div id="estilos-texto">
	
	<h4>Tamaño</h4>
	<div id="texto-tamano-slide"></div>

	<h4>Color</h4>
	<div id="texto-color">
		<fieldset>
			Color: <input type="text" name="colorpicker" id="colorpicker" class="gui-input" />
		</fieldset>
	</div>
	
</div>

<!-- jQuery -->
<script src="http://code.jquery.com/jquery-1.10.2.js"></script>

<!-- jQuery UI -->
<script src="http://code.jquery.com/ui/1.11.1/jquery-ui.js"></script>

<!-- APP -->
<script type="text/javascript" src="app.js"></script>

<!-- SPECTRUM - COLORPICKER -->
<script src="http://bgrins.github.io/spectrum/spectrum.js"></script>

</body>
</html>