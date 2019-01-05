<!--
			/* wording of your error and thank you messages */
			var obrigado = "Sua mensagem foi enviada. Obrigado por entrar em contato!";

			function contato(thisform) {
				$("#enviar, #resposta").hide();
				// Hide the buttom and the message
				$("#carregando").show();
				// show the loading image.
				params = $("#classe").serialize();
				$.post("php/contato.php", params, function(response) {
					//alert(response); //may need to activate this line for debugging.
					$("#carregando").hide();
					$("#resposta").html(obrigado);
					//Writes the "Thank you" message that comes from optIn.php and styles it.
					$('#resposta').css({
						display : 'inline',
						color : 'green'
					})
					$("#enviar").show();
					$("#nome, #email, #telefone, #assunto, #mensagem").val("");
				})
				return false;
			}

			//-->