$(function(){
	$("#enlace").hide();
	$("#editarNo").hide();
	$("#editarSi").show();
	$("#estilos-texto").hide();
	
	$("#agregar").on("click", function(){
		
		$("#estilos-texto").removeClass().hide();

		var aleatorio = Math.floor(Math.random() * 999985) + 15;

		var TextoContenido = '<div id="'+aleatorio+'" class="texto"><div>Texto</div><a id="'+aleatorio+'" class="editarSi" href="javascript:;"><i class="fa fa-pencil"></i> EditarSi</a><a id="'+aleatorio+'" class="editarNo" href="javascript:;"><i class="fa fa-pencil"></i> EditarNo</a><a id="'+aleatorio+'" class="estilosSi" href="javascript:;"><i class="fa fa-font"></i> EstilosSi</a><a id="'+aleatorio+'" class="estilosNo" href="javascript:;"><i class="fa fa-font"></i> EstilosNo</a></div>';

		$("#contenido-texto").append(TextoContenido);

		//OCULTAR BOTONES
		$(".editarNo").hide(); //DE EDICION
		$(".editarSi").show(); //DE EDICION
		$(".estilosNo").hide(); //DE ESTILOS
		$(".estilosSi").show(); //DE ESTILOS

		//ARRASTRAR
		$('.texto').draggable({disabled:false});

		//EDITAR TEXTO
		$(".editarSi").on("click", function(){
			var id = $(this).attr("id");
			$(this).hide();
			$("#"+id+".editarNo").show();
			$("div#"+id).draggable({disabled:true});
			$("#"+id+" div").attr("contenteditable", "true");
		});

		//NO EDITAR TEXTO
		$(".editarNo").on("click", function(){
			var id = $(this).attr("id");
			$(this).hide();
			$("#"+id+".editarSi").show();
			$("#editarSi").show();
			$("div#"+id).draggable({disabled:false});
			$("#"+id+" div").attr("contenteditable", "false");
		});

		//SELECCIONAR ESTILO DE LETRA
		$(".estilosSi").on("click", function(){
			var id = $(this).attr("id");
			$(this).hide();
			$("#"+id+".estilosNo").show();
			$("#estilos-texto").show();
			$("#estilos-texto").removeClass().addClass(id);

			$("#estilos-texto a").on("click", function(){
				var id = $("#estilos-texto").attr("class");
				var estilo = $(this).attr("id");
				$("#"+id+".texto div").removeClass();
				$("#"+id+".texto div").addClass("tp-caption "+estilo);
			});

		});

		//OCULTAR SELECCION DE ESTILOS
		$(".estilosNo").on("click", function(){
			var id = $(this).attr("id");
			$(this).hide();
			$("#"+id+".estilosSi").show();
			$("#estilos-texto").removeClass().hide();
		});

	});

	$("#enviar").on("click", function(){
		var TextoEstilo = $(".texto div").attr("class");;
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