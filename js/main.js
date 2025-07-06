$(document).ready(function () {

  $("#cargarDatos").click(function () {
    const tipo = $("#selector").val();
    const url = `https://jsonplaceholder.typicode.com/${tipo}`;

    $.get(url, function (data) {
      let columnas = Object.keys(data[0]).map(key => ({
        title: key.charAt(0).toUpperCase() + key.slice(1),
        data: key
      }));

      $("#tablaDatos").DataTable({
        destroy: true,
        data: data,
        columns: columnas
      });
    });
  });


  if ($("#formUsuario").length) {
    $("#formUsuario").submit(function (e) {
      e.preventDefault();
      let errores = 0;

      function validarCampo(id, condicion, mensaje) {
        const campo = $(`#${id}`);
        campo.removeClass("error");
        campo.next(".error-message").remove();

        if (!condicion) {
          campo.addClass("error").after(`<div class="error-message">${mensaje}</div>`);
          errores++;
        }
      }

      validarCampo("nombre", $("#nombre").val() !== "", "El nombre es obligatorio.");
      validarCampo("usuario", $("#usuario").val() !== "", "El usuario es obligatorio.");
      validarCampo("fecha", /^\d{2}\/\d{2}\/\d{4}$/.test($("#fecha").val()), "Formato de fecha inválido (dd/MM/yyyy).");
      validarCampo("email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($("#email").val()), "Email inválido.");

      if (errores === 0) {
        alert("Usuario creado correctamente");
        $("#formUsuario")[0].reset();
      }
    });

    $("#cancelarUsuario").click(function () {
      $("#formUsuario")[0].reset();
      $(".error").removeClass("error");
      $(".error-message").remove();
    });
  }

  if ($("#formOtro").length) {
    $("#formOtro").submit(function (e) {
      e.preventDefault();
      let errores = 0;

      function validarCampo(id, condicion, mensaje) {
        const campo = $(`#${id}`);
        campo.removeClass("error");
        campo.next(".error-message").remove();

        if (!condicion) {
          campo.addClass("error").after(`<div class="error-message">${mensaje}</div>`);
          errores++;
        }
      }

      validarCampo("titulo", $("#titulo").val().trim() !== "", "El título es obligatorio.");

      if (errores === 0) {
        alert("Objeto creado correctamente");
        $("#formOtro")[0].reset();
      }
    });

    $("#cancelarOtro").click(function () {
      $("#formOtro")[0].reset();
      $(".error").removeClass("error");
      $(".error-message").remove();
    });
  }


  if ($("#formPublicacion").length) {
    $("#formPublicacion").submit(function (e) {
      e.preventDefault();
      let errores = 0;

      function validarCampo(id, condicion, mensaje) {
        const campo = $(`#${id}`);
        campo.removeClass("error");
        campo.next(".error-message").remove();

        if (!condicion) {
          campo.addClass("error").after(`<div class="error-message">${mensaje}</div>`);
          errores++;
        }
      }

      validarCampo("titulo", $("#titulo").val().trim() !== "", "El título es obligatorio.");
      validarCampo("contenido", $("#contenido").val().trim() !== "", "El contenido es obligatorio.");

      if (errores === 0) {
        alert("Publicación creada correctamente");
        $("#formPublicacion")[0].reset();
      }
    });

    $("#cancelarPublicacion").click(function () {
      $("#formPublicacion")[0].reset();
      $(".error").removeClass("error");
      $(".error-message").remove();
    });
  }
});
