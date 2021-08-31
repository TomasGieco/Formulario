"use strict"

window.addEventListener("load", () => {
    var form = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    form.addEventListener("submit", () => {

        var name = document.querySelector("#nombre").value;
        var lastName = document.querySelector("#apellidos").value;
        var age = document.querySelector("#edad").value;
        var data = [name, lastName, age];

        var indice;
        for (indice in data) {
            var parrafo = document.createElement("p");
            parrafo.append(data[indice]);
            box_dashed.append(parrafo);
        }

        box_dashed.style.display = "block";
    });
});