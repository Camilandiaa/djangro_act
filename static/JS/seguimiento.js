var ordenes= [
    {nombre:"Tercera compra" , estado:"Enviado", clase:"estadoVerde"},

    {nombre:"Segunda compra" , estado:"En camino",clase:"estadoAzul"},

    {nombre:"Primera compra" , estado:"Entregado",clase:"estadoPurpura"},
  ]
  
  
  var acomulador_texto=""
  
  ordenes.forEach((element, index) => {
  
      var html_producto = `
      <tr>
        <th scope="row">${index}</th>
        <td>${element.nombre}</td>
        <td class="${element.clase}">${element.estado}</td>
        
      </tr>`
      
      acomulador_texto += html_producto
      $("#seguimiento").html( acomulador_texto )
  });