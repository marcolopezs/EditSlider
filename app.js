$(function(){
	$("#enlace").hide();
	$("#editarNo").hide();
	$("#editarSi").show();

	var TextoContenido = '<div class="texto"><span>Texto</span><a class="candado unlock" href="javascript:;"><i class="fa fa-unlock"></i></a><a class="editar" href="javascript:;"><i class="fa fa-pencil"></i></a></div>';

	
	$("#estilos-texto a").on("click", function(){
		var estilo = $(this).attr("id");
		$(".texto span").removeClass();
		$(".texto span").addClass("tp-caption "+estilo);
	});

	$("#agregar").on("click", function(){
		$("#contenido-texto").append(TextoContenido);

		//ARRASTRAR
		$('.texto').draggable();

		//EDITAR TEXTO
		/*
		$(".editar").on("click", function(){
			//$(this).hide();
			//$("#editarNo").show();
			$(".texto span").attr("contenteditable", "true");
		});*/

		$('.editar').toggle(
	    	function () {
                $(".texto span").attr("contenteditable", "true");
            },
	    	function () {
                $(".texto span").attr("contenteditable", "false");
            }
        );

		//NO EDITAR TEXTO
/*
		$("#editarNo").on("click", function(){
			$(this).hide();
			$("#editarSi").show();
			$(".texto span").attr("contenteditable", "false");
		});*/

	});

	//CANDADO
	$("a.candado").on("click", function(){
		alert("hola");
		//$(this).addClass("unlock");
		//$(this).addClass("lock");
	});

	$("#enviar").on("click", function(){
		var TextoEstilo = $(".texto span").attr("class");;
		TextoX = texto.position().left;
	    TextoY = texto.position().top;

	    console.log(TextoX);
	    console.log(TextoY);
	    console.log(TextoEstilo);

	    $("#enlace").show();
		$("#enlace").attr("target","_blank");
	    $("#enlace").attr("href","slider.php?estilo="+TextoEstilo+"&textoX="+TextoX+"&textoY="+TextoY);

	});

});