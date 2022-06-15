
const productos = [

    {
        url:
         "https://sodimac.scene7.com/is/image/SodimacCL/164488?fmt=jpg&fit=fit,1&wid=300&hei=300",
        descripcion: "Ficus Benjamina",
        precio: "$ 6.000" 
   },
    {
        url:
         "https://sodimac.scene7.com/is/image/SodimacCL/398057X?fmt=jpg&fit=fit,1&wid=300&hei=300",
        descripcion: "Lavanda",
        precio: "$ 2.500"

    },
    {
        url:
         "https://sodimac.scene7.com/is/image/SodimacCL/753203?fmt=jpg&fit=fit,1&wid=300&hei=300",
        descripcion: "Hypoestes sanguinolenta",
        precio:"$ 3.000",    
    },
    {
        url:
         "https://sodimac.scene7.com/is/image/SodimacCL/6581714?fmt=jpg&fit=fit,1&wid=200&hei=200",
         descripcion: "Dólar negro",
         precio: "$ 4.500"
    },
    {
        url:
         "https://sodimac.scene7.com/is/image/SodimacCL/2852128?fmt=jpg&fit=fit,1&wid=300&hei=300",
        descripcion: "Boj bola 0,30m",
        precio: "$ 2.500"
    },
    {
        url:
         "https://sodimac.scene7.com/is/image/SodimacCL/2050862?fmt=jpg&fit=fit,1&wid=300&hei=300",
         descripcion: "Arreglo invierno pensamiento",
         precio: "$ 2.500"
    },
    {
        url:
         "https://sodimac.scene7.com/is/image/SodimacCL/6632580?fmt=jpg&fit=fit,1&wid=300&hei=300",
         descripcion: "Boldo ramificado",
         precio: "$ 4.500"

    },
    {
        url:
         "https://sodimac.scene7.com/is/image/SodimacCL/4216938?fmt=jpg&fit=fit,1&wid=300&hei=300",
        descripcion: "Suculenta mix",
        precio: "$ 3.500" 
        }

]

var texto_iterable= ""

productos.forEach((element) => {

    var tarjetita_html = `<div class="col">
    <div class="card" style="width: 18rem;">
        <img src="{% static '${element.url}' %}" class="card-img-top" alt="foto">
        <div class="card-body">
          <h5 class="card-title">Plantas</h5>
          <p class="card-text">${element.descripcion}</p>
          <p class ="card-text">${element.precio}</p>
          <a href="#" class="btn btn-primary">Agregar al carrito</a>
        </div>
      </div>
    </div>`
    
    texto_iterable += tarjetita_html
    $("#productos").html( texto_iterable )

});


const carritodecompras =[
    {
        url:
         "https://sodimac.scene7.com/is/image/SodimacCL/164488?fmt=jpg&fit=fit,1&wid=300&hei=300",
        descripcion: "Ficus Benjamina",
        precio: "$ 6.000"
    },
    {
        url:
         "https://sodimac.scene7.com/is/image/SodimacCL/398057X?fmt=jpg&fit=fit,1&wid=300&hei=300",
        descripcion: "Lavanda",
        precio: "$ 2.500"

    },
    {
        url:
         "https://sodimac.scene7.com/is/image/SodimacCL/753203?fmt=jpg&fit=fit,1&wid=300&hei=300",
        descripcion: "Hypoestes sanguinolenta",
        precio:"$ 3.000",    
    },
]


/*carrito*/
var texto_iterable2 = ""
carritodecompras.forEach((element) => {

    var tarjetas_html = `<div class="col>
    <div class="card" style="width: 15rem;">
        <img src="${element.url}" class="card-img-top" alt="foto">
        <div class="card-body">
          <h5 class="card-title">Producto agregado al carrito</h5>
          <p class="card-text">${element.descripcion}</p>
          <p class ="card-text">${element.precio}</p>
          <a href="#" class="btn btn-primary">Eliminar del carrito</a>
       </div>
      </div>
    </div>`

    
    texto_iterable2 += tarjetas_html
    $("#carritodecompras").html( texto_iterable2 )

});


const seguimiento =[
    {
        url:
         "https://sodimac.scene7.com/is/image/SodimacCL/164488?fmt=jpg&fit=fit,1&wid=300&hei=300",
        nombre: "Ficus Benjamina",
        precio: "$ 6.000",
        estado: "Enviado",
        clase: "estadoVerde"
    },
    {
        url:
         "https://sodimac.scene7.com/is/image/SodimacCL/398057X?fmt=jpg&fit=fit,1&wid=300&hei=300",
        nombre: "Lavanda",
        precio: "$ 2.500",
        estado:"En camino",
        clase:"estadoAzul"

    },
    {
        url:
         "https://sodimac.scene7.com/is/image/SodimacCL/753203?fmt=jpg&fit=fit,1&wid=300&hei=300",
        nombre: "Hypoestes sanguinolenta",
        precio:"$ 3.000",   
        estado:"En proceso",
        clase: "estadoPurpura"
    },
]

/*seguimiento*/
var texto_iterable3= ""

seguimiento.forEach((element) => {

    var seguimiento_html = `<div class="col">
    <div class="card" style="width: 25rem;">
        <img src="${element.url}" class="card-img-top" alt="foto">
        <div class="card-body">
          <h5 class="card-title">Estado del producto</h5>
          <p class="card-text">${element.nombre}</p>
          <p class ="card-text">${element.precio}</p>
          <p class ="card-text">${element.estado}</p>
          <p class="card-text">${element.clase}</p>
            </div>
      </div>
    </div>`
    
    texto_iterable3 += seguimiento_html
    $("#seguimiento").html( texto_iterable3 )

});


