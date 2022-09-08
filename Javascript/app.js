// CREACION DE PRODUCTOS : AGREGO PRODUCTOS Y LOS ENVIA//
class Product {
  constructor(accountName, clientName,tableNumber, amount, productos,clarification){
   this.accountName = accountName;
   this.clientName = clientName;
   this.tableNumber = tableNumber;
   this.amount = amount;
   this.productos = productos;
   this.clarification = clarification;
   
 }
 
}
// METODOS DENTRO DE LOS OBJETOS //
// FUNCION PARA AGREGAR ELEMENTOS - CREO UN INNER HTML//

class Ui{
  addProduct(product){
    const productList = document.getElementById ("product-list");
    const element = document.createElement (`div`);
    element.innerHTML = `
    <div class= "card text-center mb-4">
          <div class = "card-body">
            <strong>Cuenta de:</strong>:${product.accountName}<br>
            <strong>Nombre del solicitante</strong>:${product.clientName}<br>
            <strong>Numero de Mesa</strong>:${product.tableNumber}<br>
            <strong>Producto</strong>:${product.productos}<br>
            <strong>Cantidad</strong>:${product.amount}<br>
            <strong>Aclaracion</strong>:${product.clarification}<br> 
            <button name ="close" type="button" class="btn-close text-center" aria-label="Close"></button> 
          </div>
    </div>
    `;
    productList.appendChild(element);
   
  }
   // FUNCION PARA RESETEAR FORMULARIO //

  resetForm () {
    document.getElementById ("product-form").reset ();
  }

  // MENSAJE CUANDO CIERRO EL PEDIDO ENVIADO CON SUGAR SYNTAX //
  deleteProduct(element){
  element.name === "close" && element.parentElement.parentElement.parentElement.remove();
  this.showMessageDelete();
  }

 // FUNCION PARA MOSTRAR MENSAJE //

showMessageOk(){
  Swal.fire(
    'Producto agregado satisfactoriamente!',
    'Agrega mas productos',
    'success'
  )
}
showMessageDelete(){
  Swal.fire('Producto eliminado correctamente')
}


 

 // FUNCION LOCAL STORAGE //
 accountNameLocal(){
 localStorage.setItem("Cuenta de:", document.getElementById("accountName").value);
 

  }

}

document.getElementById("accountName").value =  localStorage.getItem("Cuenta de:"); 


// EVENTOS DOM //

document.getElementById ("product-form")
.addEventListener("submit", function (e){
  const accountName = document.getElementById("accountName").value ;
  const clientName= document.getElementById("clientName").value ;
  const amount = document.getElementById("amount").value;
  const tableNumber = document.getElementById("tableNumber").value;
  const productos = document.getElementById("productos").value;
  const clarification = document.getElementById("textarea").value;
  
 
  //Productos Nuevos llamando al metodo UI (interfaz de usuario) //
   
   const product = new Product(accountName,clientName, amount,tableNumber,productos,clarification);
   
    const ui = new Ui();

   ui.addProduct (product);
   ui.accountNameLocal();
   ui.resetForm();
   ui.showMessageOk();
   
   
   

  //Cancelar refresco de Pagina //
  e.preventDefault();
  
  
});



// Evento para boton de CLOSE "X"//
document.getElementById("product-list").addEventListener("click", function(e){
  const ui = new Ui();
  ui.deleteProduct(e.target);

})

const tabla = document.querySelector("#productos");

// FUNCION PARA CARGAR PRODUCTOS DESDE EL JASON
function cargarProducto(){
  fetch("./Javascript/data.json") //selecciono la carpeta donde se encuentra la data json
      .then(res=>res.json()) //selecciono como quiero que se vea el json
      // CREO UN SELECT PARA QUE EL USUARIO SELECCIONES LOS PRODUCTOS QUE SE ENCUENTRAN EN EL JSON
      .then(listaProductos=> {
         listaProductos.forEach(listaProductos=> {
          const select = document.createElement("option");
          select.innerHTML = `
          <option>${listaProductos.name}</option>

          `;
          tabla.appendChild(select);
        })
      }) 
}
cargarProducto();










