var jApp = jQuery.noConflict();

jApp(function(){

	jApp(document).on("ready", function(){
		calcCaptionResponsive(".tp-resizeme");
	});	

	jApp("#enlace").hide();
	jApp("#editarNo").hide();
	jApp("#editarSi").show();
	jApp("#estilos-texto").hide();
	jApp("#fondoSi").hide();
	jApp("#fondoNo").show();
	
	jApp("#agregar").on("click", function(){

		jApp("#estilos-texto").removeClass().hide();

		var aleatorio = Math.floor(Math.random() * 999985) + 15;

		var TextoContenido = '<div id="'+aleatorio+'" class="texto"><div class="tp-resizeme">Texto</div><span class="opciones"><a id="'+aleatorio+'" class="editarSi" href="javascript:;"><i class="fa fa-pencil"></i></a><a id="'+aleatorio+'" class="editarNo" href="javascript:;"><i class="fa fa-pencil"></i></a><a id="'+aleatorio+'" class="estilosSi" href="javascript:;"><i class="fa fa-font"></i></a><a id="'+aleatorio+'" class="estilosNo" href="javascript:;"><i class="fa fa-font"></i></a><a id="'+aleatorio+'" class="eliminar" href="javascript:;"><i class="fa fa-close"></i></a><div id="'+aleatorio+'" class="textoTamano"></div><div id="'+aleatorio+'" class="textoColor"></div></span></div>';

		jApp("#contenido-texto").append(TextoContenido);

		//OCULTAR BOTONES
		jApp(".editarNo").hide(); //DE EDICION
		jApp(".editarSi").show(); //DE EDICION
		jApp(".estilosNo").hide(); //DE ESTILOS
		jApp(".estilosSi").show(); //DE ESTILOS
		jApp(".textoTamano").hide(); //TAMAÑO DE TEXTO
		jApp(".textoColor").hide(); //COLOR DE TEXTO

		//ARRASTRAR
		jApp('.texto').draggable({disabled:false});

		//EDITAR TEXTO
		jApp(".editarSi").on("click", function(){
			var id = jApp(this).attr("id");
			jApp(this).hide();
			jApp("#"+id+".editarNo").show().addClass("activado");
			jApp("div#"+id).draggable({disabled:true});
			jApp("#"+id+" div").attr("contenteditable", "true");
		});

		//NO EDITAR TEXTO
		jApp(".editarNo").on("click", function(){
			var id = jApp(this).attr("id");
			jApp(this).hide();
			jApp("#"+id+".editarSi").show();
			jApp("#editarSi").show();
			jApp("div#"+id).draggable({disabled:false});
			jApp("#"+id+" div").attr("contenteditable", "false");
		});

		//SELECCIONAR ESTILO DE LETRA
		jApp(".estilosSi").on("click", function(){
			var id = jApp(this).attr("id");
			jApp(this).hide();
			jApp("#"+id+".estilosNo").show().addClass("activado");
			jApp("#estilos-texto").show();
			jApp("#estilos-texto").removeClass().addClass(id);

			jApp( "#texto-tamano-slide" ).slider({
				range: "min",
				value: 16,
				min: 12,
				max: 120,
				slide: function( event, ui ) {
					jApp("div#"+id+" div").css("font-size", ui.value);
					jApp("div#"+id+".textoTamano").text(ui.value);
				}
		    });

		    jApp("#colorpicker").spectrum({
				preferredFormat: "hex",
				showInput: true,
				move: function(cM) {
				    jApp("div#"+id+" div").css('color', cM.toHexString());
					jApp("div#"+id+".textoColor").text(cM.toHex());
				},
				hide: function(cH){ 
					jApp("div#"+id+" div").css('color', cH.toHexString());
					jApp("div#"+id+".textoColor").text(cH.toHex());
				}	
			});
		});

		//OCULTAR SELECCION DE ESTILOS
		jApp(".estilosNo").on("click", function(){
			var id = jApp(this).attr("id");
			jApp(this).hide();
			jApp("#"+id+".estilosSi").show();
			jApp("#estilos-texto").removeClass().hide();
		});

		//ELIMINAR DIV
		jApp(".eliminar").on("click", function(){
			var id = jApp(this).attr("id");
			jApp("div#"+id).remove();
		});

	});

	jApp("#fondoNo").on("click", function(){
		jApp(this).hide();
		jApp("#fondoSi").show();
		jApp("#contenido-texto").css("background", "none");		
	});

	jApp("#fondoSi").on("click", function(){
		jApp(this).hide();
		jApp("#fondoNo").show();
		jApp("#contenido-texto").css("background", "rgba(0,0,0,0.5)");		
	});

	jApp("#enviar").on("click", function(){

	    var get = jApp("#contenido-texto").get(0);
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

	    jApp("#enlace").show();
		jApp("#enlace").attr("target","_blank");
	    jApp("#enlace").attr("href","slider.php?json="+JSON.stringify(json));

	});

});