var doc;
doc = $(document);
doc.ready(iniciar);

function iniciar() {
    var boton = $("#azul");
    boton.click(mueveAzul);
    boton = $("#rosa");
    boton.click(mueveRosa);
    boton = $("#melon");
    boton.click(mueveMelon);
    boton = $("#verde");
    boton.click(mueveVerde);



}

function mueveAzul() {
    var lienzo;
    lienzo = $(".lienzo");
    lienzo.mousemove(pintaAzul);
}

function pintaAzul() {
    var x = event.clientX;
    var y = event.clientY;
    var z = $(".lienzo");
    z.append('<div style="position:absolute;width:10px;height:10px;background:#74b9ff;border-radius:5px;-webkit-transform:translate(' + x + 'px, ' + y + 'px)"</div>');



}

function mueveRosa() {
    var lienzo;
    lienzo = $(".lienzo");
    lienzo.mousemove(pintaRosa);

}

function pintaRosa() {
    var x = event.clientX;
    var y = event.clientY;
    var z = $(".lienzo");
    z.append('<div style="position:absolute;width:10px;height:10px;background:#ff7675;border-radius:5px;-webkit-transform:translate(' + x + 'px, ' + y + 'px)"</div>');

}

function mueveMelon() {
    var lienzo;
    lienzo = $(".lienzo");
    lienzo.mousemove(pintaMelon);

}

function pintaMelon() {
    var x = event.clientX;
    var y = event.clientY;
    var z = $(".lienzo");
    z.append('<div style="position:absolute;width:10px;height:10px;background:#ffeaa7;border-radius:5px;-webkit-transform:translate(' + x + 'px, ' + y + 'px)"</div>');
}

function mueveVerde() {
    var lienzo;
    lienzo = $(".lienzo");
    lienzo.mousemove(pintaVerde);

}

function pintaVerde() {
    var x = event.clientX;
    var y = event.clientY;
    var z = $(".lienzo");
    z.append('<div style="position:absolute;width:10px;height:10px;background:#55efc4;border-radius:5px;-webkit-transform:translate(' + x + 'px, ' + y + 'px)"</div>');
}