const checkNivel = document.getElementById("checkNivel");
$(document).ready(function () {

            $("#botonBuscar").on("click", function () {
                if (!checkNivel.checked) {
                    if ($("#digimonName").val() === "") {
                        alert("Debe ingresar un nombre");
                        return
                    }
                    $.ajax({
                        url: "https://digimon-api.vercel.app/api/digimon/name/" + $("#digimonName").val(),
                        type: "GET",
                        dataType: "json",
                        success: function (data) {
                            $("#digimon").removeClass("d-none");
                            $("#digimons").addClass("d-none");
                            let html = "";
                            html += `
                    <div class="col-12 col-md-4 col-lg-3 col-xl-2 text-center">
                    <div class="card mt-4">
                        <div class="card-header">
                            <h3>${data[0].name}</h3>
                        </div>
                        <div class="card-body">
                            <img src="${data[0].img}" class="img-fluid">
                            <h2>${data[0].level}</h2>
                        </div>
                    </div>
                </div>
             `;
                            $("#digimon").html(html);
                        },
                        error: function () {
                            alert("Error al buscar el digimon");
                        }
                    });
                } else {
                    $.ajax({
                        url: "https://digimon-api.vercel.app/api/digimon/level/" + $("#selectNivel").val(),
                        type: "GET",
                        dataType: "json",
                        success: function (data) {
                            $("#digimon").addClass("d-none");
                            $("#digimons").removeClass("d-none");
                            let html = "";
                            data.forEach(digimon => {
                                html += `
                        <div class="col-12 col-md-4 col-lg-3 col-xl-2 text-center">
                            <div class="card mt-4">
                                <div class="card-header">
                                    <h3>${digimon.name}</h3>
                                </div>
                                <div class="card-body">
                                    <img src="${digimon.img}" class="img-fluid">
                                    <p>${digimon.level}</p>
                                </div>
                            </div>
                        </div>
                        `;
                            });
                            $("#digimons").html(html);
                        },
                        error: function () {
                            if ($("#selectNivel").val() === "0") {
                                alert("Debe seleccionar un nivel");
                            } else {
                                alert("Error al buscar los digimon de ese nivel");
                            }
                        }
                    });
                }
            });
            $("#checkNivel").on("change", function () {
                if ($(this).prop("checked")) {
                    $("#digimonName").addClass("d-none");
                    $("#selectNivel").removeClass("d-none");
                } else {
                    $("#digimonName").removeClass("d-none");
                    $("#selectNivel").addClass("d-none");
                }
            });