# amTest
Evalución frontend

## PAGINA EN DONDE SE ENCUENTRA EL DESPLIEGUE FUNCIONAL

La aplicacion se monto sobre Heroku y se puede encontrar accediendo al siguiente link
**https://am-hp.herokuapp.com**

## REPOSITORIO 

La aplicacion se estuvo trabajando con versiones, las cuales se pueden ver desplegadas sobre este mismo repositorio o accediendo al siguiente link.
**https://github.com/braulio-flores/AM-TEST.git**

Hubo un punto en el que se generaron ciertos comits extra y de prueba, ya que se estaba teniendo problemas al montar la aplicacion en el servidor.

## Instrucciones para levantar el proyecto y correr pruebas unitarias.

    ###### Para ejecutar la aplicacion en un servidor local
    **1.** Descargar o clonar el repositorio perteneciente a este readme o descargralo del siguiente link **https://github.com/braulio-flores/AM-TEST.git** 
    **2.** Entrar a la carpeta del proyecto en la terminal y ejecutar **npm install** para reconstruir los modulos de node.
    **3.** Ejecutar el comando **npm run start** para poder ver la aplicacion corriendo en el puerto 5000 y la aplicacion se correra automaticamente.
    ###### Para ejecutar las pruebas
    **1.** Habiendo completado los pasos 1 y 2 del punto anterior y manteniendonos en la misma ruta dentro de la terminal, ejecutar el comando **npm run test** y las pruebas comenzaran a correr.   

## Lo que mas me gusto del desarrollo

Fue un desarrollo bastante interesante, trabajar con REACT  siempre me parece muy agradable y comodo, y me genera satisfaccion el ir viendo la construccion de la aplicacion y la experiencia que le puede ofrecer al usuario. El ir generando una interfaz bastante comoda, amigable y rapida, me gusta mucho. 

La parte que mas me gusto trabajar, si tuviera que escoger entre estructura y estilos, logica o pruebas, fue la parte de la logica en donde se implementan los hooks, la parte de REDUX, y la mayor parte de JS, seguido de esta parte, la que mas me gusto fue la de los estilos y la estructura, el generar un orden dentro de mi aplicacion e ir viendo los cambios reflejados de lo que estoy contruyendo es muy satisfactorio.

Otra parte que me gusto, fue que trabaje con personajes de HP, y son personajes que conozco e iba encontrando datos curiosos que desconocia como el hecho de que personajes ya estaban muertos o de que personajes pertenecian a casas que no me imaginaba.

Otra cosa que me parecio bastante interesante fue usar json-server, no lo habia usado, pero montar el back y el front sobre el mismo servidor en un puerto similar, me parecio interasante, aunque los prefiero separados.

## Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?

Me huebiera gustado implementar las validaciones del formulario, ya que solo implememte un simple required en los campos. 
Me hubiera gustado implementar quizas un modal que se pudiera abrir al darle click sobre las tarjetas de cada personaje para que mostrara más informacion con la que cuenta el personaje. 
Hhubiera implementado un inicio de sesion, ya que cuenta con personajes favoritos y eso genera la necesidad de tener sesiones para que estos no se combinen. 
Hubiera ampliado el formulario, para que indicara de que casa es, si esta vivo o muerto, entre otras cosas mas especificas para en caso de que se abriera el modal.
Hubiera implemtado la funcionalidad de modificar el personaje y tambien eliminarlo, sobre todo el eliminar. 
Hubiera implementado mas filtros, como lo es por casa, o por si esta vivo o muerto. 

## Descríbenos un pain point o bug con el que te hayas encontrado y como lo solucionaste

Uno de estos fue que, como los personajes no tenian un id, al momento de tratar de agregar o eliminar de favoritos, si tenia dos con el mismo nombre, se elimanaban ambos o se agregan ambos. Esto lo solucione comparando mas de un argumento, sin embargo, si dos personajes son exactamete iguales, pasara la misma situacion. Haria falta implementar un id a cada personaje. Se lo implemente usando un Date () a manera de ejemplificacion, pero solo seria a los nuevos personajes, y como los anteriores no lo tenian no quise modificarlos manualemnte. Preferiria que este id ya viniera desde el back. 

Otro detalle que se me presento fue al momento de realiar el despliegue al servidor, ya que, desde un inicio tuve detalles con la instalacion de json-server, sin embargo cuando lo vi en la docuemntacion olvide que lo habia instalado con dependencias para desarrollo, porque las tenia, sin embargo esta dependencia no permitia que heroku instalara json-server y no se encontraba el modulo, tarde bastante para darme cuenta de este pequeño detalle. 

Y el ultimo detalle que se me presento fue al momento de subir las imagenes, no logre detectar si podia subir imagenes a json-server, o de que manera hacerlo, intente de lo mas basico, solo subiendo el url local, pero no se puede leer archivos locales, sin embargo obte, por generarle su url en cloudinary y pasarse este mismo como propiedad en su archivo y que funcionara de la misma manera que los que ya teniamos.