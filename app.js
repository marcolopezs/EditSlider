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


function calcCaptionResponsive(nc,opt) {
	if (nc.data('fsize') == undefined) nc.data('fsize',parseInt(nc.css('font-size'),0) || 0);
	if (nc.data('pt') == undefined) nc.data('pt',parseInt(nc.css('paddingTop'),0) || 0);
	if (nc.data('pb') == undefined) nc.data('pb',parseInt(nc.css('paddingBottom'),0) || 0);
	if (nc.data('pl') == undefined) nc.data('pl',parseInt(nc.css('paddingLeft'),0) || 0);
	if (nc.data('pr') == undefined) nc.data('pr',parseInt(nc.css('paddingRight'),0) || 0);

	if (nc.data('mt') == undefined) nc.data('mt',parseInt(nc.css('marginTop'),0) || 0);
	if (nc.data('mb') == undefined) nc.data('mb',parseInt(nc.css('marginBottom'),0) || 0);
	if (nc.data('ml') == undefined) nc.data('ml',parseInt(nc.css('marginLeft'),0) || 0);
	if (nc.data('mr') == undefined) nc.data('mr',parseInt(nc.css('marginRight'),0) || 0);

	if (nc.data('bt') == undefined) nc.data('bt',parseInt(nc.css('borderTopWidth'),0) || 0);
	if (nc.data('bb') == undefined) nc.data('bb',parseInt(nc.css('borderBottomWidth'),0) || 0);
	if (nc.data('bl') == undefined) nc.data('bl',parseInt(nc.css('borderLeftWidth'),0) || 0);
	if (nc.data('br') == undefined) nc.data('br',parseInt(nc.css('borderRightWidth'),0) || 0);

	if (nc.data('ls') == undefined) nc.data('ls',parseInt(nc.css('letterSpacing'),0) || 0);

	if (nc.data('lh') == undefined) nc.data('lh',parseInt(nc.css('lineHeight'),0) || "auto");
	if (nc.data('minwidth') == undefined) nc.data('minwidth',parseInt(nc.css('minWidth'),0) || 0);
	if (nc.data('minheight') == undefined) nc.data('minheight',parseInt(nc.css('minHeight'),0) || 0);
	if (nc.data('maxwidth') == undefined) nc.data('maxwidth',parseInt(nc.css('maxWidth'),0) || "none");
	if (nc.data('maxheight') == undefined) nc.data('maxheight',parseInt(nc.css('maxHeight'),0) || "none");
	if (nc.data('wii') == undefined) nc.data('wii',parseInt(nc.css('width'),0) || 0);
	if (nc.data('hii') == undefined) nc.data('hii',parseInt(nc.css('height'),0) || 0);

	if (nc.data('wan') == undefined) nc.data('wan',nc.css("-webkit-transition"));
	if (nc.data('moan') == undefined) nc.data('moan',nc.css("-moz-animation-transition"));
	if (nc.data('man') == undefined) nc.data('man',nc.css("-ms-animation-transition"));
	if (nc.data('ani') == undefined) nc.data('ani',nc.css("transition"));
	
	if (!nc.hasClass("tp-splitted")) {
		nc.css("-webkit-transition", "none");
	    nc.css("-moz-transition", "none");
	    nc.css("-ms-transition", "none");
	    nc.css("transition", "none");

		punchgs.TweenLite.set(nc,{
			fontSize: Math.round((nc.data('fsize') * opt.bw))+"px",

			letterSpacing:Math.floor((nc.data('ls') * opt.bw))+"px",

			paddingTop: Math.round((nc.data('pt') * opt.bh)) + "px",
			paddingBottom: Math.round((nc.data('pb') * opt.bh)) + "px",
			paddingLeft: Math.round((nc.data('pl') * opt.bw)) + "px",
			paddingRight: Math.round((nc.data('pr') * opt.bw)) + "px",

			marginTop: (nc.data('mt') * opt.bh) + "px",
			marginBottom: (nc.data('mb') * opt.bh) + "px",
			marginLeft: (nc.data('ml') * opt.bw) + "px",
			marginRight: (nc.data('mr') * opt.bw) + "px",

			borderTopWidth: Math.round((nc.data('bt') * opt.bh)) + "px",
			borderBottomWidth: Math.round((nc.data('bb') * opt.bh)) + "px",
			borderLeftWidth: Math.round((nc.data('bl') * opt.bw)) + "px",
			borderRightWidth: Math.round((nc.data('br') * opt.bw)) + "px",

			lineHeight: Math.round((nc.data('lh') * opt.bh)) + "px",
			minWidth:(nc.data('minwidth') * opt.bw) + "px",
			minHeight:(nc.data('minheight') * opt.bh) + "px",

			/* width:(nc.data('wii') * opt.bw) + "px",
			height:(nc.data('hii') * opt.bh) + "px",														 */

			overwrite:"auto"
		});
		setTimeout(function() {
			nc.css("-webkit-transition", nc.data('wan'));
		    nc.css("-moz-transition", nc.data('moan'));
		    nc.css("-ms-transition", nc.data('man'));
		    nc.css("transition", nc.data('ani'));

		},30);

		//konsole.log(nc.data('maxwidth')+"  "+nc.data('maxheight'));
		if (nc.data('maxheight')!='none')
			nc.css({'maxHeight':(nc.data('maxheight') * opt.bh) + "px"});


		if (nc.data('maxwidth')!='none')
			nc.css({'maxWidth':(nc.data('maxwidth') * opt.bw) + "px"});
	}
}