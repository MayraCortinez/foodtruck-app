# Food Truck Management Application

## Descripción

Esta aplicación permite gestionar un food truck, facilitando el registro y seguimiento de gastos, ingresos, compras, ventas y stock. La aplicación está construida utilizando la stack MERN (MongoDB, Express, React, Node.js).

## Características

- Registro de Gastos
- Registro de Ingresos
- Gestión de Compras
- Gestión de Ventas
- Gestión del Stock

## Tecnologías Utilizadas

- MongoDB
- Express.js
- React.js
- Node.js

## Requisitos

- Node.js (versión 12 o superior)
- MongoDB Atlas (o una instancia local de MongoDB)
- npm (Node Package Manager)

## Instalación

### Backend

1. Clona el repositorio
   ```bash
   git clone https://github.com/tu-usuario/foodtruck-management.git
   cd foodtruck-management/backend

2. Instala las dependencias:
   ```bash
   npm install

3.Configura las variables de entorno:
Crea un archivo .env en la carpeta backend con el siguiente contenido, reemplazando <username>, <password> y <cluster-url> con tus propias credenciales de MongoDB Atlas:
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/foodtruck?retryWrites=true&w=majority
PORT=5000

4. Inicia el servidor:
 ```bash
  npm start
