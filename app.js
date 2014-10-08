$(function(){
	$("#enlace").hide();
	$("#editarNo").hide();
	$("#editarSi").show();
	
	$("#estilos-texto a").on("click", function(){
		var estilo = $(this).attr("id");
		$(".texto div").removeClass();
		$(".texto div").addClass("tp-caption "+estilo);
	});

	$("#agregar").on("click", function(){
		var aleatorio = Math.floor(Math.random() * 999985) + 15;

		var TextoContenido = '<div id="'+aleatorio+'" class="texto"><div>Texto</div><a class="candado unlock" href="javascript:;"><i class="fa fa-unlock"></i></a><a id="'+aleatorio+'" class="editarSi" href="javascript:;"><i class="fa fa-pencil"></i> EditarSi</a><a id="'+aleatorio+'" class="editarNo" href="javascript:;"><i class="fa fa-pencil"></i> EditarNo</a></div>';

		$("#contenido-texto").append(TextoContenido);

		//OCULTAR BOTONES
		$(".editarNo").hide();
		$(".editarSi").show();

		//ARRASTRAR
		$('.texto').draggable({disabled:false});

		//EDITAR TEXTO
		$(".editarSi").on("click", function(){
			var id = $(this).attr("id");
			$(this).hide();
			$("#"+id+".editarNo").show();
			$('div#'+id).draggable({disabled:true});
			$("#"+id+" div").attr("contenteditable", "true");
		});

		//NO EDITAR TEXTO
		$(".editarNo").on("click", function(){
			var id = $(this).attr("id");
			$(this).hide();
			$("#"+id+".editarSi").show();
			$("#editarSi").show();
			$('div#'+id).draggable({disabled:false});
			$("#"+id+" div").attr("contenteditable", "false");
		});

	});

	//CANDADO
	$("a.candado").on("click", function(){
		alert("hola");
		//$(this).addClass("unlock");
		//$(this).addClass("lock");
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