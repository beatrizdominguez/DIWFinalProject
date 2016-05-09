
function config() {
    alert("set configuration");
}
;

function info() {
    alert("set info");
}
;

function add() {
    BootstrapDialog.show({
        message: 'Hi Apple!'
    });
    // alert("add");
}
;



function addCat() {


    $(".alert-success").alert();
    $(".alert-success").show()
    window.setTimeout(function () {
        $(".alert-success").alert('close');
    }, 3000);

    //$(".alert-danger").alert();
    //$(".alert-danger").show()
    //window.setTimeout(function() { $(".alert-danger").alert('close'); }, 3000);	

}



function getUserCatalogs(userName) {

//cambiamos el titulo
    $("#tienda").html(userName);

    //cambiamos el contenido de la tabla
    $.ajax({
        data: {"usuario": userName},
        type: "POST",
        dataType: "json",
        url: "getCatalogFromId.php"
    })
            .done(function (data) {



                $("#tabla").empty();
                if (data == "undefined") {
                    console.log("no muestra resultados");
                }

                if ($.isEmptyObject(data)) {
                    console.log("no muestra resultados");
                    $("#tabla").append("No hay catálogos asociados.");
                } else {

                    $.each(data, function (index, value) {

                        console.log("value:: " + value.cod);

                        var tableRow = "<tr>" +
                                "<td >" + value.cod + "</td>" +
                                "<td>" + value.familia + "</td>" +
                                "<td>" + value.numPaginas + " páginas</td>" +
                                "<td>" + "<input  class='visible' type='checkbox' name='visible' value='" + value.cod + "'/>" + "</td>" +
                                "</tr>";
                        $("#tabla").append(tableRow);

                    });
                }


            })
            .fail(function () {
                alert("Ajax failed to fetch data")
            });


}


function getUserCatalogsAsAdmin(userName) {

//cambiamos el titulo
    $("#tienda").html(userName);

    //cambiamos el contenido de la tabla
    $.ajax({
        data: {"usuario": userName},
        type: "POST",
        dataType: "json",
        url: "getCatalogUser.php"
    })
            .done(function (data) {

                $("#tabla").empty();
                if (data == "undefined") {
                    console.log("no muestra resultados");
                }

                if ($.isEmptyObject(data)) {
                    console.log("no muestra resultados");
                    $("#tabla").append("No hay catálogos asociados.");
                } else {

                    $.each(data, function (index, value) {



                        console.log("value:: " + value.cod);

                        var tableRow = "<tr>" +
                                "<td >" + value.cod + "</td>" +
                                "<td>" + value.familia + "</td>" +
                                "<td>" + value.numPaginas + " páginas</td>" +
                                "<td>" + "<input  class='permisos' type='checkbox' name='permisos' value='" + value.cod + "'/>" + "</td>" +
                                "<td>" + "<input  class='visible' type='checkbox' name='visible' value='" + value.cod + "'/>" + "</td>" +
                                "</tr>";
                        $("#tabla").append(tableRow);

                    });
                }




            })
            .fail(function () {
                alert("Ajax failed to fetch data")
            });

}

function showAll() {

    $("#tienda").html("Catalogo de muebles");
    console.log("show all catalogs");
    $("#tabla").empty();


    $.ajax({
        type: "POST",
        dataType: "json",
        url: "allCatalogos.php"
    })
            .done(function (data) {

                $("#tabla").empty();
                if (data == "undefined") {
                    console.log("no muestra resultados");
                }

                //mo hay información que mostrar
                if ($.isEmptyObject(data)) {

                    $("#tabla").append("<div class='error'> No hay catálogos asociados.</div>");
                } else {

                    $.each(data, function (index, value) {

                        var tableRow = "<tr>" +
                                "<td >" + value.cod + "</td>" +
                                "<td>" + value.familia + "</td>" +
                                "<td>" + value.numPaginas + " páginas</td>" +
                                "<td>" + "<input  class='permisos' type='checkbox' name='permisos' value='" + value.cod + "'/>" + "</td>" +
                                "<td>" + "<input  class='visible' type='checkbox' name='visible' value='" + value.cod + "'/>" + "</td>" +
                                "</tr>";
                        $("#tabla").append(tableRow);

                    });
                }




            })
            .fail(function () {
                alert("Ajax failed to fetch data")
            });


}

$(document).ready(function () {


//guardamos la información de la sesion
    var user = $("#userName").val();
    var rol = $("#userRole").val();

    console.log("sesion iniciada :: " + user + "  " + rol);

    if (rol == "admin") {

        showAll();
    } else {

        getUserCatalogs(user);
    }

//de primeras mostramos todos los catálogos
    //showAll();




//cambiamos la tienda a mostrar
    $(".dropdown-menu li a").click(function () {
        event.preventDefault();

        var tienda = $(this).text();

        if (tienda == "Catalogo de muebles") {

            showAll();
        } else {
            console.log("tienda seleccionada: " + tienda);
            //mostramos todos, pero solo checkeamos como visibles los que tiene visibles
            showAll();
            //getUserCatalogsAsAdmin(tienda);
        }

    });

    //cambio valor checkbox
    $("input.permisos").change(function () {

        console.log("do something 2");


        //libreria datatable

        var catalogo_id = $(this).val();

        console.log("status changed for : " + catalogo_id);
        if ($(this).is(":checked")) {

            //añadir a la base de datos
            //si estaba como visible añadirlo a la base de datos


        } else {
            //elimiar de la base de datos
            //asegurarse que no esté en la base de datos de catalogos visibles de usuario
        }

    });


    $("input.visible").change(function () {

        var catalogo_id = $(this).val();
        console.log("status changed for : " + catalogo_id);

        if ($(this).is(":checked")) {

            //añadir a la base de datos
        } else {
            //elimiar de la base de datos

        }

    });
});
