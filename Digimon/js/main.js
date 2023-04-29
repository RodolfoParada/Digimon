$(document).ready(function () {
    //consumir api de digimon
    $.ajax({
        url: "https://digimon-api.vercel.app/api/digimon",
        type: "GET",
        dataType: "json",
        success: function (data) {
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
                                    <p>Nivel: ${digimon.level}</p>
                                    <button type="button" class="btn btn-info detalles" data-bs-toggle="modal" data-bs-target="#modalDetalles" data-name="${digimon.name}" data-img="${digimon.img}" data-level="${digimon.level}">Detalles</button>
                                </div>
                            </div>
                        </div>
                    `;
            });
            $("#digimons").html(html);
            $(".detalles").on("click", function () {
                mostrarDetalles($(this).data());
            });
        },
        error: function () {
            alert("Error al consumir la API de Digimon");
        }
    });
    const mostrarDetalles = (digimon) => {
        $("#digimonImg").attr("src", digimon.img);
        $("#digimonName").text(digimon.name);
        $("#digimonLevel").text(`Nivel: ${digimon.level}`);
    };
});