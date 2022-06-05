let contar = 0;
let sumar = 0;
let cortar = 0;

function convertir(){
    let nombre = $("#ingreso").val();
    let dinero = $("#numero").val();
    contar += 1;

    distribute(nombre, dinero, contar);

    let mostrarNombre = `<h4> ${nombre}: </h4>`
    let mostrarDinero = `<h4> $ ${dinero}: </h4>`

    $("#borderDark").append(mostrarNombre);
    $("#money").append(mostrarDinero);
}

function distribute(persan, spent, c){
    sumar += parseInt(spent);
    $("#resultado").text("$" + sumar);

    cortar = sumar / c;
    $("#pagar").text("$" + (Math.round(cortar)));
}
