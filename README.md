# Cards-CRUD
Challenge cards.

Crear una sencilla aplicación en js/react que nos permita añadir, editar o eliminar
“tarjetas” con una información muy básica (título, descripción e imagen).
Dicha aplicación ha de cumplir los siguientes requisitos:
● Botón que muestra un modal con un sencillo formulario para introducir los datos de
la nueva tarjeta:
○ Título (obligatorio)
○ Descripción (obligatorio)
○ Imagen (opcional y solamente la url, no es necesario que permita subir
imágenes)
● Cada tarjeta a mostrar ha de visualizar la imagen en la parte superior, en caso de no
haber indicado ninguna, ha de mostrar una imagen predeterminada por nosotros,
justo debajo el título y descripción y al pasar el ratón sobre la tarjeta ha de mostrar
unos botones que permitan editar o borrar la etiqueta.
● Tal como vayamos añadiendo tarjetas se han de ir visualizando directamente en la
aplicación.

Bonus :
● Almacenar las tarjetas en localstorage para que no se pierdan si cerramos o
recargamos la aplicación.
● Añadir botones que nos permitan ordenar las tarjetas por título asc/desc o bien por
creación asc/desc
● Que se visualice correctamente en mobile y desktop.



INICIAR:


Using boilerplate: https://github.com/diegofernandezfontana/reactBoiler

How to start? 

1- Clone repo.

2a- run npm install in ./front

2b- run npm install in ./back.

3- In ./back run npm start (Will start the server on port 3000)

4- In ./front run npm start (Will build webpack)

5- Open http://localhost:3000/

6- Try the App.

En caso de que no funcione se necesita tener instalado Nodemon 
instalarlo en ./front con npm install --save nodemon
instalarlo en ./back con npm install --save nodemon

