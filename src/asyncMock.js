const products = [
{ id: 1, name: 'Cerveza Corona', 
price: 350, category: 'Cervezas', 
img: 'https://club23.com.ar/wp-content/uploads/2021/08/CoronaPorron-600x774.jpg', 
stock: 100,
description: 'Cerveza tipo pilsner, de origen mexicano. Con un sabor suave y refrescante.'
 
},
 {id: 2, name: 'Vodka Smirnoff', price: 2000, category: 'Destilados', img: 'http://d2r9epyceweg5n.cloudfront.net/stores/001/107/356/products/vodka-smirnoff-botella-de-750-ml-1-21-73ad137d7122c3a00816260585951637-640-0.png',stock: 50,
   description: 'Vodka destilado tres veces y filtrado diez veces, con un sabor suave y limpio.'
},
 { id: 3, name: 'Ron Bacardi', price: 4575, category: 'Destilados', img: 'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3070090_f.jpg', stock: 30,
   description: 'Ron blanco de origen cubano, ideal para cócteles o para tomar solo con hielo.'
 },
{ id: 4, name: 'Ginebra Hendricks', price: 2750, category: 'Destilados', img: 'https://st4.depositphotos.com/7783230/26527/i/600/depositphotos_265270718-stock-photo-fonte-venice-italy-may-2019.jpg',  stock: 20,
  description: 'Ginebra premium con una mezcla de 11 botánicos, con un sabor suave y refrescante.'
},
{id: 6, name: "Whisky Macallan", price: 15000, category: "Destilados",img: "https://www.smartbites.net/Files/109575/Img/09/macallan-classic-cut-2.jpg", stock: 10,
  description: "Whisky escocés de malta con sabor a caramelo y notas de vainilla y jengibre."
},
{ id: 7, name: "Lata Cerveza Heineken", price: 350, category: "Cervezas", img: "https://i.pinimg.com/564x/d2/e7/4f/d2e74f1e15276d42db9f02a4c93af026.jpg", stock: 100,
  description: "Cerveza de origen holandés con sabor refrescante y notas de malta."
},
{ id: 8, name: "Grafficna Vino tinto Malbec", price: 2500, category: "Vinos", img: "https://i.pinimg.com/564x/61/81/26/618126ae967e3aa8825db8a14f3a1b7f.jpg", stock: 20,
  description: "Vino de uvas malbec de origen argentino con notas de frutos rojos y especias."
},
{ id: 9, name: "Gin Bombay Sapphire", price: 4000, category: "Destilados", img: "https://i.pinimg.com/564x/73/ee/57/73ee5751acbeb81ef93bcfe9d4d69f8a.jpg", stock: 15,
  description: "Gin inglés con sabor a bayas de enebro y notas cítricas."
},
{ id: 10, name: "Tequila Jose Cuervo", price: 3500,  category: "Destilados",  img: "https://i.pinimg.com/564x/b5/10/80/b5108076ec2009ab83dd1ec1a41e4cbb.jpg", stock: 12,
  description: "Tequila de origen mexicano con sabor a agave y notas de cítricos."
},
{ id: 11, name: "Ron Zacapa Centenario", price: 7500, category: "Destilados", img: "https://i.pinimg.com/736x/96/4b/ff/964bff6d4f66811788e8b02565cebf47.jpg", stock: 8,
  description: "Ron de origen guatemalteco envejecido en barricas de roble con notas de vainilla y caramelo."
},
{ id: 12, name: "Vodka Absolut", price: 3000, category: "Destilados", img: "https://i.pinimg.com/564x/ed/6b/ca/ed6bca3f6979a983761f6a91544fd3c9.jpg", stock: 25,
  description: "Vodka sueco destilado a partir de trigo de invierno con sabor suave y notas de cereal."
},
{ id: 13, name: "Champagne Moët & Chandon", price: 10000, category: "Vinos", img: "https://via.placeholder.com/150", stock: 5,
  description: "Champagne francés con sabor afrutado y burbujas finas y persistentes."
},
{ id: 14, name: "Whiskey Jameson", price: 7500, category: "Destilados", img: "https://i.pinimg.com/564x/76/cd/5e/76cd5e9b5d4a84608ce5a69d5b19c015.jpg", stock: 18,
  description: "Whiskey irlandés suave y equilibrado con notas de miel y especias."
},
{ id: 15, name: "Tequila Patron Silver", price: 6000, category: "Destilados", img: "https://i.pinimg.com/564x/d1/c6/f9/d1c6f9cade05156618d5e69a90e8b3c7.jpg", stock: 10,
  description: "Tequila blanco de origen mexicano con sabor a agave y notas cítricas."
}
]
export const getProducts = () =>{
  return new Promise ((resolve) => {
    setTimeout(()=> {
      resolve(products)
    }, 0)
  })
}
export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.filter(prod => prod.category == categoryId))
      }, 0)
  })
}

export const getProductsById = (productId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.find(prod => prod.id == productId))
      }, 0)
  })
}
