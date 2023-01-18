## Idea Principal

En un CSV se encuentran todos los proyectos, los cuales contienen una lista de SKU y un video final.
Cada SKU tiene relacionado un nombre, una imagen(link) y un link

La idea es poder generar un script que dado un proyecto, genere un carrusel de manera dinamica
mostrando todos los productos del proyecto en cada slide del carrusel, y al final un video 

### How To

- Pasar el CSV a Json
- A partir del Json, generar un arreglo de items para mapear el contenido de todos los SKU
- Agregar el video final en un ultimo `<item>`


### API???

La idea es poder enviar un request con el nombre del proyecto (o identificador)
para luego buscar en el CSV el proyecto tal y entregar un IFRAME (Html body) a Watson Assistant.

