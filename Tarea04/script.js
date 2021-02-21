
//creamos la clase trabajador para crear trabajadores
class Trabajador{
    constructor(dni, nombre, apellidos, fecha_inc, puesto, sueldo, poblacion) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fecha_inc = fecha_inc;
        this.puesto = puesto;
        this.sueldo = sueldo;
        this.poblacion = poblacion; 
        
        this.modificarPuesto = modificarPuesto; 
    }
}
function modificarPuesto(puesto){
    this.puesto = puesto;
}

class Empresa {
    constructor(nombre_comercial, cif, direccion, telefono, admin) {
     
        this.nombre_comercial = nombre_comercial;
        this.cif = cif;
        this.direccion = direccion;
        this.telefono = telefono;
        this.admin = admin;

        this.trabajadores = [];//añadimos el array para almacenar los trabajores que añadamos
    }
    //creamos un método para añadir trabajadores a las empresas
    addTrabajador(dni, nombre, apellidos, fecha_inc, puesto, sueldo, poblacion){
        var trabajador = new Trabajador(dni, nombre, apellidos, fecha_inc, puesto, sueldo, poblacion);
        this.trabajadores.push(trabajador);
    }
    //validamos DNI
    comDNI(pide_dni){
        var encontrado = false;
        for(var i=0; i < this.trabajadores.length; i++){
            if(this.trabajadores[i].dni == pide_dni){
                encontrado = true;
            }
        } return encontrado;
    }

}

//función para dar de baja y convertir la fecha_inc a Date para sacar los años en la empresa.
function ceseTrabajador(){
    for (e=0; e < emp.trabajadores.length;e++){

        var fecha = emp.trabajadores[e].fecha_inc; 
        var dia = fecha.substr(0, 2); 
        var mes = fecha.substr(3, 2); 
        var año = fecha.substr(6, 4); 
        var fechaTotal = new Date (año,mes,dia);
        var años_en_empresa = hoy - fechaTotal;
        var conversion = 1000 * 60 * 60 * 24 * 365;
        años_en_empresa = Math.trunc( años_en_empresa / conversion);

        if (años_en_empresa < 10 && (dni == emp.trabajadores[e].dni)){
            alert('Paga del 10%: ' + (emp.trabajadores[e].sueldo * 10/100))
            emp.trabajadores.splice(e,1);
        }if ((años_en_empresa > 10 && años_en_empresa < 20) && (dni == emp.trabajadores[e].dni)){
            alert('Paga del 15%: ' + (emp.trabajadores[e].sueldo * 15/100))
            emp.trabajadores.splice(e,1);
        }if(años_en_empresa > 20  && (dni == emp.trabajadores[e].dni)) {
            alert('Paga del 18%: ' + (emp.trabajadores[e].sueldo * 18/100))
            emp.trabajadores.splice(e,1);
        }       
    }
}

//Abrir nueva ventana con la lista de trabajadores y años trabajados en la empresa
function abrirVentana(){
    var nueva = window.open("","ventana","width=800,height=700,menubar=no");
    nueva.document.write('<h1>La empresa : "' + emp.nombre_comercial + '"</h1>');
        for (e=0; e < emp.trabajadores.length;e++){

            var fecha = emp.trabajadores[e].fecha_inc; 
            var dia = fecha.substr(0, 2); 
            var mes = fecha.substr(3, 2); 
            var año = fecha.substr(6, 4); 
            var fechaTotal = new Date (año,mes,dia);
            var años_en_empresa = hoy - fechaTotal;
            var conversion = 1000 * 60 * 60 * 24 * 365;
            años_en_empresa = Math.trunc( años_en_empresa / conversion);

            nueva.document.write('<h2>Trabajador '+ (e+1) +': </h2>'+'<br>'+ '<b>Nombre: </b>'+ emp.trabajadores[e].nombre +'<b> DNI: </b>'+emp.trabajadores[e].dni+'<b> Apellidos: </b>'+emp.trabajadores[e].apellidos+'<b> Se incorporó el día: </b>'+emp.trabajadores[e].fecha_inc+'<b> En el puesto: </b>'+emp.trabajadores[e].puesto+'<b> Recibiendo un sueldo de: </b>'+emp.trabajadores[e].sueldo+'<b> Población: </b>'+emp.trabajadores[e].poblacion +' <b>Años en la empresa: </b>'+ años_en_empresa +'<br>'+'<br>' );           
        }
}


function verificarFecha(fecha){
        if (fecha.length == 10 && fecha.charAt(2) == "/" && fecha.charAt(5) == '/'){ // vemos que mide 10 caracteres y que tiene los '/' en su sitio correspondiente
            var dia = fecha.substr(0, 2); 
            var mes = fecha.substr(3, 2); 
            var año = fecha.substr(6, 4); 
            // comprobamos que los datos de dias meses y años están dentro de parametros normales
                //que los meses tienen solo 12 y que dependiendo del mes tienen 30 o 31
            if ((dia <= 31 && dia > 0) && (mes <= 12 && mes > 0) && (año <= 2021 && año > 0) && 
                (((dia <= 31 && dia > 0) && (mes == "01") || (mes == "03") || (mes == "05") || (mes == "07") || (mes == "08") || (mes == "10") || (mes == "12")) ||
                ((dia <= 30 && dia > 0) && (mes == "02") || (mes == "04") || (mes == "06") || (mes == "09") || (mes == "11"))) ){

                return  true; 

            }else{
                return  false; 
            }
        }else{
            return  false;
        }           
}


function mostrarEmpresas(){
    console.log(listEmpresas);
}