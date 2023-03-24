# Prueba Técnica - Carrito de Compras

Esta prueba técnica tiene como objetivo implementar un carrito de compras simple que muestre la información de un API local. El carrito debe contar con las siguientes secciones:

-   Una lista de ítems que muestre el catálogo de productos (Product List Page).
-   Una página de producto que muestre el detalle del producto (Product Display Page).
-   Un carrito de compras que contenga todos los ítems que serán comprados por el usuario (Cart Page).
-   Un espacio donde se muestre la sincronización de los ítems añadidos al carrito (Mini Cart).

## Instalación

1.  Clonar el repositorio en su máquina local:
    
    `git clone https://github.com/ARAUJOVILLASMIL/Prueba-t-cnica-Ecomsur.-` 
    
2.  Acceder al directorio del proyecto:
        
    `cd .\Prueba-t-cnica-Ecomsur.-\` 
    
3.  Instalar las dependencias necesarias:
    
    `npm install` 
    
4.  Acceder al directorio front:

`cd .\front\`

5. Instalar dependencias necesarias

    `npm install` 
    
6.  Iniciar el servidor:
      
    `npm run dev` 
    
7.  Acceder a `http://localhost:3000` en su navegador para visualizar la aplicación.


## Dependencias

El proyecto utiliza las siguientes dependencias de terceros:

-   `react` y `react-dom` para construir la interfaz de usuario de la aplicación.
-   `react-router-dom` para manejar la navegación entre las diferentes páginas.

## Resolución del problema

1.  Obtener los datos del API: se uso una la API de `fetch` para el manejo de peticiones HTTP,  para obtener los datos del API local y almacenarlos en el estado de la aplicación. 
    
2.  Crear la lista de ítems: se creo una página llamada `PageProducts` que muestre todos los productos disponibles en la base de datos. Cada producto debe tener una imagen, un título, precio y un botón "Agregar al carrito". Al hacer clic en este botón, se debe agregar el producto al carrito de compras.
    
4.  Crear el carrito de compras: se creo página llamada `ProductList` que muestre todos los productos que se han agregado al carrito de compras. Cada producto debe mostrar la imagen, el título, la cantidad y el precio 
    
5.  Crear el espacio para la sincronización de los ítems añadidos al carrito: se creo un componente llamado `DataContext` que muestre el número de productos que se han agregado al carrito de compras. Este componente debe actualizarse automáticamente cada vez que se agrega un producto al carrito y se comparte su estado con los demás componentes

## Consideraciones

-   La aplicación asume que el API local proporciona la información necesaria para construir el catálogo de productos 
-   El Mini Cart muestra la cantidad de ítems que se han agregado al carrito 
-   La aplicación no implementa un proceso de pago real, solo simula la adición de ítems en el carrito.

