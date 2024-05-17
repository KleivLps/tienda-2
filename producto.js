class producto {
    constructor(id,titulo,precio,imagenes,stock,descuento,cantidad){
        this._id = id;
        this._titulo = titulo;
        this._precio = precio;
        this._imagenes = imagenes;
        this._stock = stock;
        this._descuento = descuento;
        this._cantidad = cantidad;
    }

    get getId(){
        return this._id;
    }
    set setId(newname){
        this._id;
    }
}

const prod1 = new producto("202122","caramelo",2000,"foto.jpg",true,20);
const prod2 = new producto("202123","chocolate",2001,"foto.jpg",true,10);
const prod3 = new producto("202124","dulce",2002,"foto.jpg",false,5);
const prod4 = new producto("202125","galleta",2003,"foto.jpg",true,2);

console.log(prod4)
console.log(prod2)
