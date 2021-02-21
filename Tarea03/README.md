# DWEC / 
Curso Desarrollo Web Entorno Cliente / 
Estudiante y Autor: Pedro.J / 
Calificación: 8,5. / 
Observaciones: Hay un fallo a la hora de poner las fechas que están al límite de calcular los años del trabajador.
  La tarea se ajusta a lo que pide el enunciado.
 
//************************************************************************************************************
                                               TAREA 03
************************************************************************************************************//

//******************* Unidad 3. Modelo de Objetos predefinidos en Javascript *******************************//

Enunciado
Vamos a implementar un pequeño script que simule el registro de un usuario en un sitio web de una empresa. Debe seguir los siguientes pasos:

Se creará la página login.html, cuyo título será “Tarea de la Unidad 3 DWEC curso 20/21” y cuyo contenido será el texto “Registro del trabajador”. Esta página contendrá un script que realice lo siguiente:

Solicitará al usuario que introduzca su Nombre y Apellidos a través de dos prompt (Uno para el nombre y el otro para los dos apellidos). Una vez introducido, el script comprobará que consta al menos de un nombre y dos apellidos .

Además, tenemos que chequear que esos tres valores contienen al menos 3 caracteres cada uno y al menos una vocal en cada uno de ellos. El carácter del espacio será el que marque la separación entre los dos apellidos

Si no se cumple esa condición habrá que solicitarlo de nuevo hasta introducir un valor correcto o se pulse Cancelar en la ventana del cuadro de diálogo. En el caso de fallar 3 veces, abrirá una ventana informándonos de que no podemos realizar el registro

Cuando el valor sea correcto se mostrará el Nombre y Apellidos completo en la página en mayúsculas

Solicitará al usuario que introduzca, igualmente a través de un prompt, su fecha de incorporación a la empresa con el formato dd/mm/aaaa. Se deben realizar las siguientes validaciones sobre la fecha introducida:

Que tenga formato correcto (carácter de separación y longitud).

Debemos validar al menos valores menores o iguales a 31 para el día y 12 o menos para el mes.

Una vez introducida una fecha correcta, se creará un objeto de la clase Date y se mostrará su valor en la página.

El script calculará y mostrará el número de años que lleva en la empresa el trabajador. Para dicho cálculo utilizará el objeto Date creado en el punto anterior y otro (que tendrás que declarar) que contendrá la fecha actual del sistema.

El script mostrará en el documento un nombre de usuario que se calculará a partir del nombre y apellidos introducidos en el paso 1. Estará formado por la inicial del nombre en MAY. (suponemos que no es compuesto) seguido del primer apellido completo en minúsculas (*nunca superior a 6 carácteres y suponiendo que no es compuesto) y seguido de la primera letra del segundo apellido. Por ejemplo, para el nombre Juan Palo Seco, el nombre de usuario será Jpalos. * En el caso de que el primer apellido tenga una longitud superior a 6 caracteres, cortaremos esos 6 caracteres para formar el nombre del usuario y no el apellido completo.

Además debemos de mostrar una futura clave que estará formada por un carácter al azar de entre todos los que forman el nombre completo( no son válidos los espacios) y el año de incorporación a la empresa.

A continuación, mostrará una ventana de confirmación con el texto “¿Quiere acceder al sitio?.

Si el usuario pulsar Aceptar, se abrirá una nueva ventana, con el título “Bienvenido al sitio de la empresa X y la fecha de hoy es X”, de tamaño 1024x768, que cargará una segunda página llamada index.html.

Si el usuario pulsar Cancelar, el script terminará.

La página index.html mostrará el mensaje “Bienvenido al sitio TAREA 3 y la fecha de hoy es X” y contendrá un script que realice lo siguiente:

- El alumno debe utilizar y trabajar con los objetos Windows, location, Navigator, document. En esta ventana el alumno tiene libertad para crear los contenidos que considere oportunos y se valorará la creatividad de los mismos.

//****************************************************************************
                               A tener en cuenta:
****************************************************************************//                               

Si en cualquiera de los cuadros de diálogo el usuario pulsa el botón Cancelar, el script terminará.

No es necesario implementar funciones para el desarrollo del script.

No está permitido el uso del método String.split().

No está permitido el uso de expresiones regulares para validar la fecha.

Para las fechas es obligatorio las validaciones anteriormente descritas, pero se valorará si el alumno lleva mas controles de errores con la fecha.

Solo están permitido el uso de cualquier función, objeto... que estén presentes en los contenidos vistos hasta ahora, por lo que no podéis utilizar recursos que aparezcan en temas posteriores.

Para el cálculo del carácter al azar podemos utilizar el método random
