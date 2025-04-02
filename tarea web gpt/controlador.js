let inputCorreo=document.getElementById("correo")
let inputContraseña=document.getElementById("contraseña")
let boton=document.getElementById("boton")
 
 
boton.addEventListener("click"), function(evento){
     evento.preventDefault()

     Swal.fire({
         title: "Good job!",
         text: "You clicked the button!",
         icon: "success"
       });
 
 
     let correo=inputCorreo.value
     let contraseña=inputContraseña.value
     let correoBaseDatos="kiut.2025@gmail.com"
     let contraseñaBaseDatos="00000"

}
 
 
if(nombre== nombreBaseDatos && contraseña==contraseñaBaseDatos){
    swall.fire({
       
    })
     }else{
        Swall.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          
          });
    }


    
    
    
    