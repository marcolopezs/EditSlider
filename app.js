$(function(){
	$("#enlace").hide();
	$("#editarNo").hide();
	$("#editarSi").show();
	$("#estilos-texto").hide();
	
	$("#agregar").on("click", function(){

		$("#estilos-texto").removeClass().hide();

		var aleatorio = Math.floor(Math.random() * 999985) + 15;

		var TextoContenido = '<div id="'+aleatorio+'" class="texto"><div>Texto</div><span class="opciones"><a id="'+aleatorio+'" class="editarSi" href="javascript:;"><i class="fa fa-pencil"></i></a><a id="'+aleatorio+'" class="editarNo" href="javascript:;"><i class="fa fa-pencil"></i></a><a id="'+aleatorio+'" class="estilosSi" href="javascript:;"><i class="fa fa-font"></i></a><a id="'+aleatorio+'" class="estilosNo" href="javascript:;"><i class="fa fa-font"></i></a><a id="'+aleatorio+'" class="eliminar" href="javascript:;"><i class="fa fa-close"></i></a><div id="'+aleatorio+'" class="textoTamano"></div><div id="'+aleatorio+'" class="textoColor"></div></span></div>';

		$("#contenido-texto").append(TextoContenido);

		//OCULTAR BOTONES
		$(".editarNo").hide(); //DE EDICION
		$(".editarSi").show(); //DE EDICION
		$(".estilosNo").hide(); //DE ESTILOS
		$(".estilosSi").show(); //DE ESTILOS
		$(".textoTamano").hide(); //TAMAÑO DE TEXTO
		$(".textoColor").hide(); //COLOR DE TEXTO

		//ARRASTRAR
		$('.texto').draggable({disabled:false});

		//EDITAR TEXTO
		$(".editarSi").on("click", function(){
			var id = $(this).attr("id");
			$(this).hide();
			$("#"+id+".editarNo").show().addClass("activado");
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
			$("#"+id+".estilosNo").show().addClass("activado");
			$("#estilos-texto").show();
			$("#estilos-texto").removeClass().addClass(id);

			$( "#texto-tamano-slide" ).slider({
				range: "min",
				value: 16,
				min: 12,
				max: 120,
				slide: function( event, ui ) {
					$("div#"+id+" div").css("font-size", ui.value);
					$("div#"+id+".textoTamano").text(ui.value);
				}
		    });

		    $("#colorpicker").spectrum({
				preferredFormat: "hex",
				showInput: true,
				move: function(cM) {
				    $("div#"+id+" div").css('color', cM.toHexString());
					$("div#"+id+".textoColor").text(cM.toHex());
				},
				hide: function(cH){ 
					$("div#"+id+" div").css('color', cH.toHexString());
					$("div#"+id+".textoColor").text(cH.toHex());
				}	
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
				"texto":valor.firstChild.innerText,
				"tamano": valor.childNodes[1].childNodes[5].innerText,
				"color": valor.childNodes[1].childNodes[6].innerText,
				"x":valor.offsetLeft,
				"y":valor.offsetTop };
	    };

	    $("#enlace").show();
		$("#enlace").attr("target","_blank");
	    $("#enlace").attr("href","slider.php?json="+JSON.stringify(json));

	});

});