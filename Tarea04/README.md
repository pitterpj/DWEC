# DWEC / 
Curso Desarrollo Web Entorno Cliente / 
Estudiante y Autor: Pedro.J / 
Calificación: 10 / 
Observaciones: Algunos comentarios redundantes.
 
//************************************************************************************************************
                                               TAREA 04
************************************************************************************************************//

//***************** Unidad 4.- Estructuras definidas por el usuario en JavaScript **************************//

Enunciado.
Queremos hacer una aplicación en JavaScript para gestionar los empleados de varias empresas. Para ello queremos almacenar la siguiente información de cada empresa:

Nombre comercial

C:I:F

Dirección.

Teléfono.

Nombre del administrador.

Para cada trabajador asociado a una empresa, almacenaremos los siguientes valores: DNI, nombre, apellidos, fecha de incorporación a la empresa, puesto, sueldo anual y población(es la ciudad en la que reside)

Se pide:

Crear un objeto que nos permita instanciar empresas. Cada vez que instanciemos una empresa le pasaremos los datos de la misma como parámetros. Se pide además crear los siguientes métodos para el objeto Empresa.

AgregarTrabajador(parámetros) .Se le pasará todos los datos relativos al nuevo trabajador que ha contratado la empresa.

Listado de trabajadores. Debe generar todos los datos de todos los trabajadores de una empresa

Cesetrabajador. Dará de baja al trabajador en cuestión, si el usuario pone un dni incorrecto se mostrará el error en una ventana.

Cambiopuestodetrabajo. Como parámetro el dni del trabajador, así como el nuevo puesto que ocupa en la empresa.

Insertar o agregar nuevo trabajador. Insertaremos el nombre de la empresa y a continuación los datos del trabajador mediante prompt. Antes de agregarlo, debe comprobar que ese trabajador no está dado de alta ya en la empresa.

Listado trabajadores de una empresa. Me lanzará un prompt para pedirme el nombre de la empresa y abrirá una ventana nueva con los datos completos de la empresa y todos los datos de los trabajadores que pertenecen a la misma. En este listado debe de aparecer también un dato que calcularemos y es el número de años que lleva trabajando para dicha empresa

Cesetrabajador. Insertaremos mediante prompts el nombre de la empresa , así como el D.N.I del trabajador. Hay que controlar que el dni es correcto, de no ser así informaremos que ese trabajador no está dado de alta en dicha empresa. La empresa gratificará al empleado con una paga que por cese y que será calculada  de la siguiente forma:10% de su sueldo para trabajadores que lleven menos de 10 años. 15% si llevan entre 10 y 20 años y 18% para el resto de trabajadores. Esta paga debe de mostrarse al cesar al trabajador.

Cambio de puesto de trabajo. Insertaremos mediante promt el nombre de la empresa , así como el DNI del trabajador y el puesto que va a ocupar en la empresa a partir de este momento.

Insertar datos automaticamente.- La aplicación debe de disponer de una opción que inserte de forma automática datos en los objetos para de esta manera realizar mas fácil la fase de pruebas de la misma. Los datos a insertar serán los que a continuación se detallan en mayúsculas:

EMPRESA1. B06653940. AVENIDA EUROPA 5 MADRID.912323234. LUIS GOMEZ.

EMPRESA2. B06653941. AVENIDA EUROPA 7 MADRID.912323232. LAURA SIMOES.

En la empresa 1 daremos de alta a los siguientes trabajadores:

09186167S JUAN JOSE GARCÍA CARRIÓN 01/01/1989 COMERCIAL 30000(sueldo en euros) MADRID.

09186168S MARTA ARRIBAS DERECHA 01/01/2008 DIRECTORA 40000 MOSTOLES.

09186169S FELIPE GONZÁLEZ PEREZ 01/01/2019 TECNICO 15000 PARLA.

En la empresa 2 daremos de alta a los siguientes trabajadores:

08186167S BARTOLOME GARCÍA CARRIÓN 01/01/1987 COMERCIAL 30000 MADRID.

08186168S JIMENA ARRIBAS DERECHA 01/01/2007 DIRECTORA 40000 MOSTOLES.

08186169S LUISA GONZÁLEZ PEREZ 01/01/2018 TECNICO 15000 PARLA.

Todos los objetos y métodos descritos anteriormente deben estar en un archivo .js. El proyecto debe disponer de un archivo html que de la posibilidad al usuario de realizar las siguientes operaciones: Insertar datos automáticamente, Insertar empresa, Alta de trabajador,Mostrar trabajadores, baja o cese trabajador y Cambio de puesto.

//***************************************************************************************
                                     A tener en cuenta
***************************************************************************************//                                     

Todos los objetos deberán implementar un método constructor.
