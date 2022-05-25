mystorage= windows.localstorage;
function recojer_datos(){

    console.log(document.getElementById("nombre").value)
    console.log(document.getElementById("correo").value)
    console.log(document.getElementById("usuario").value)
    console.log(document.getElementById("contraseña").value)

    var nombre = document.getElementById("nombre").value;
    var correo=  document.getElementById("correo").value;
    var usuario  = document.getElementById("usuario").value;
    var contraseña= document.getElementById("contraseña").value;

localStorage.setItem("nombre",nombre);
localStorage.setItem("correo",correo);
localStorage.setItem("usuario",usuario);
localStorage.setItem("contraseña",contraseña);
} 

    
        
        
        
        
    

