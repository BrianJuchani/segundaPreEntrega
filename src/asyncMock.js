const productos = [
    {
        id:'1',
        name:'Remera Oversize',
        price:3000,
        category:'Remera',
        img:'https://deliverind.com.ar/wp-content/uploads/2021/09/REMERA-OVERSIZE-22-PORTADA-36-scaled.jpg',
        stock:25,
        desription:'descripcion'
    },
    {
        id:'2',
        name:'pantalon',
        price:2500,
        category:'Pantalon',
        img:'https://http2.mlstatic.com/D_NQ_NP_756328-MPE54721379842_032023-O.webp',
        stock:20,
        desription:'descripcion'

    },
    {
        id:'3',
        name:'straps',
        price:1500,
        category:'asesorios',
        img:'https://images.fravega.com/f500/38df97614c94ab206b48a8b9776eff2c.jpg',
        stock:30,
        desription:'descripcion'
    }
]
//arrays de productos en venta e disponible

export const getProductos = ()=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        },500)
        //sirve para emular retraso en la red     
    })
}
export const getProductById= (productoId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos.find(prod=> prod.id === productoId))
        },1000)
    })
}

export const getProductosByCategory = (categoryId) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(productos.filter(prod => prod.category.toLowerCase() === categoryId.toLowerCase()))

        }, 500)

    })

};