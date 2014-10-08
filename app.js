$(function(){
	$("#enlace").hide();
	$("#editarNo").hide();
	$("#editarSi").show();
	$("#estilos-texto").hide();
	
	$("#agregar").on("click", function(){

		$("#estilos-texto").removeClass().hide();

		var aleatorio = Math.floor(Math.random() * 999985) + 15;

		var TextoContenido = '<div id="'+aleatorio+'" class="texto"><div>Texto</div><a id="'+aleatorio+'" class="editarSi" href="javascript:;"><i class="fa fa-pencil"></i> EditarSi</a><a id="'+aleatorio+'" class="editarNo" href="javascript:;"><i class="fa fa-pencil"></i> EditarNo</a><a id="'+aleatorio+'" class="estilosSi" href="javascript:;"><i class="fa fa-font"></i> EstilosSi</a><a id="'+aleatorio+'" class="estilosNo" href="javascript:;"><i class="fa fa-font"></i> EstilosNo</a><a id="'+aleatorio+'" class="eliminar" href="javascript:;"><i class="fa fa-close"></i> Eliminar</a></div>';

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

		//ELIMINAR DIV
		$(".eliminar").on("click", function(){
			var id = $(this).attr("id");
			$("div#"+id).remove();
		});

	});

	$("#enviar").on("click", function(){

	    var get = $("#contenido-texto").get(0);
	    var cantidad = get.childElementCount;
	    var json = [];

		for(var i = 0; i < cantidad; i++){
			var valor = get.childNodes[i];
			json[i]= {
				"id":valor.id,
				"class":valor.firstChild.className,
				"texto":valor.firstChild.innerText,
				"x":valor.offsetLeft,
				"y":valor.offsetTop };
	    };

	    $("#enlace").show();
		$("#enlace").attr("target","_blank");
	    $("#enlace").attr("href","slider.php?json="+JSON.stringify(json));

	});

});