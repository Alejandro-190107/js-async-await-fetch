/* let registros = [
    {
        "nombre": "Victor",
        "apellido": "Pinedo",
        "telefono": 7712428567
    },

    {
        "nombre": "Dulce",
        "apellido": "Badillo",
        "telefono": 7714428568
    },

    {
        "nombre": "Lourdes",
        "apellido": "Rojas",
        "telefono": 77124382886
    },
    
    {
        "nombre": "Esmeralda",
        "apellido": "Aguilar",
        "telefono": 7711458669
    }

];

function leeRegistros() {
    return "Tu nombre es: " + nombre;
}
console.log(registros); */

 let RegistrosHTML = document.getElementById('RegistrosHTML'); //* La variable "RegistrosHTML" apunta al id del span en el archivo index.html

 let arrayRegistros = [];


 //* Comunicaciòn con el servidor.
 async function leeRegistros() {

    //!const respuesta = await fetch("http://api-back-end-global.futuretecware.com/?nombre=Alejandro&apellido=Lopez");

    const respuesta = await fetch("data/registros.json");

    const registros = await respuesta.json(); //* El valor se codifica en Json.

    return registros; 
    //* Retorna los valores de la variable "Registros".
 }


 async function muestraRegistros(){

    try {

    arrayRegistros = await leeRegistros();

    }

   catch(e) {

    console.log("Error generado:" + e);

    }

   console.log(arrayRegistros);

    arrayRegistros.forEach(function (item, index) {
        
    RegistrosHTML.innerHTML = RegistrosHTML.innerHTML + item.nombre + " | " + item.apellido + " | " + item.telefono + "<br>";//* Imprime los valores  
    
    });

    //! RegistrosHTML.innerHTML = RegistrosHTML.innerHTML + arrayRegistros.nombre + " " + arrayRegistros.apellido;  
 }

 muestraRegistros();
