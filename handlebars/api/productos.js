class ProductosApi {
    constructor() {
        this.productos = []
        this.id = 0
    }

    listar(id) {

        const productById = this.productos.find(p => p.id == id);
        if (productById == undefined){
            return { error : 'producto no encontrado' }

        } else {
            return productById;
        }
        
        
    }

    listarAll() {
        
            return this.productos;
    
        }
        
    

    guardar(prod) {
        if (this.productos.length == 0){
            prod.id = 1 ;
        } else {
            const lastProd =  this.productos[this.productos.length - 1]
        prod.id = lastProd.id + 1;
        }
        this.productos.push(prod);
        return prod.id
    }

    actualizar(prod, id) {
        let productoIndex = this.productos.findIndex(p => p.id == id);
        prod.id = id
        this.productos[productoIndex] = prod ;
        return prod

    }

    borrar(id) {
        let productoIndex = this.productos.findIndex(p => p.id == id);
        if (productoIndex >= 0) {
           this.productos.splice(productoIndex,1);
          }
          else {return { error : 'producto no encontrado' }}
    }
}

 module.exports = ProductosApi;

