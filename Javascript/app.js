// CREACION DE PRODUCTOS : AGREGO PRODUCTOS Y LOS ENVIA//
class Product {
  constructor(accountName, amount, tableNumber,productos,clarification){
   this.accountName = accountName;
   this.amount = amount;
   this.tableNumber = tableNumber;
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
            <strong>Cuenta de:</strong>:${product.accountName}
            <strong>Producto</strong>:${product.productos}
            <strong>Cantidad</strong>:${product.amount}
            <strong>Numero de Mesa</strong>:${product.tableNumber}
            <strong>Aclaracion</strong>:${product.clarification} 
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


 



/*
  showMessage(message, cssClass){
   const div = document.createElement (`div`);
   div.className = `alert alert-${cssClass} mt-5` ;
   div.appendChild(document.createTextNode(message));
   // mostrando en el html //
   const container = document.querySelector (`.container`);
   const app = document.querySelector (`#aplicacion`);
   container.insertBefore (div, app);
   setTimeout (function(){
    document.querySelector (`.alert`).remove();

   },3000)
   
  }
*/

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
  const amount = document.getElementById("amount").value;
  const tableNumber = document.getElementById("tableNumber").value;
  const productos = document.getElementById("productos").value;
  const clarification = document.getElementById("textarea").value;
  
 
  //Productos Nuevos llamando al metodo UI (interfaz de usuario) //
   
   const product = new Product(accountName,amount,tableNumber,productos,clarification);
   
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
  ui.deleteProduct(e.target)
})






