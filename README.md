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
```

## Uso
### Endpoints del Backend

#### Gastos
* GET /api/expenses: Obtiene todos los gastos
* POST /api/expenses: Crea un nuevo gasto

#### Ingresos
* GET /api/incomes: Obtiene todos los ingresos
* POST /api/incomes: Crea un nuevo ingreso

#### Compras
* GET /api/purchases: Obtiene todas las compras
* POST /api/purchases: Crea una nueva compra

#### Ventas
* GET /api/sales: Obtiene todas las ventas
* POST /api/sales: Crea una nueva venta

#### Stock
* GET /api/stock: Obtiene el stock actual
* POST /api/stock: Actualiza el stock


## Estructura del proyecto
foodtruck-app/
│
├── server/
│   ├── controllers/
│   │   ├── expenseController.js
│   │   ├── incomeController.js
│   │   ├── purchaseController.js
│   │   ├── saleController.js
│   │   └── stockController.js
│   ├── models/
│   │   ├── Expense.js
│   │   ├── Income.js
│   │   ├── Purchase.js
│   │   ├── Sale.js
│   │   └── Stock.js
│   ├── routes/
│   │   ├── expenseRoutes.js
│   │   ├── incomeRoutes.js
│   │   ├── purchaseRoutes.js
│   │   ├── saleRoutes.js
│   │   └── stockRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── client/
    ├── src/
    │   ├── components/
    │   │   ├── Expenses.js
    │   │   ├── Incomes.js
    │   │   ├── Purchases.js
    │   │   ├── Sales.js
    │   │   └── Stock.js
    │   ├── services/
    │   │   └── api.js
    │   ├── App.js
    │   └── index.js
    ├── public/
    ├── package.json
    └── .env

