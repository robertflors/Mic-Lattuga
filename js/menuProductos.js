const menu = [];

class Producto{
    constructor(nombre){
        this.nombre = nombre;
    }    
}

function productos() {
    $.getJSON("./data/menuProductos.json",
        function (productos) {
            for (const producto of productos) {
                menu.push(new Producto(producto.nombre));
            }
            renderCard(menu);
        }
    );
}

function renderCard(listado) {
    for (const producto of listado) {
        $("#productos").append(`<div class="menuComida__producto">${producto.nombre}</div>`);
    }
}

productos();