# NEXO - API Backend

Backend de la aplicación NEXO - Sistema de Gestión de Eventos y Comunidades.

## ⚠️ IMPORTANTE

**El frontend Angular ha sido movido a un proyecto separado: `NEXOWEB`**

Este proyecto ahora funciona únicamente como API REST.

## Instalación

1. **Navega a la carpeta del proyecto**
   ```bash
   cd c:\xampp\htdocs\NEXO
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**
   Asegúrate de que el archivo `.env` contenga:
   ```
   PORT=3000
   MONGO_URI=mongodb://FerUba:WSFCiitP4IA8OGX7@ac-6kct58o-shard-00-00.tvyqdim.mongodb.net:27017,ac-6kct58o-shard-00-01.tvyqdim.mongodb.net:27017,ac-6kct58o-shard-00-02.tvyqdim.mongodb.net:27017/?ssl=true&replicaSet=atlas-dlcmti-shard-0&authSource=admin&appName=Cluster0
   NODE_ENV=development
   ```

## Ejecución

Para ejecutar el servidor en modo desarrollo:

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

## Estructura

```
src/
├── app.js                  # Aplicación principal
├── config/
│   └── db.js              # Configuración de MongoDB
├── controllers/
│   ├── authController.js
│   ├── communityController.js
│   └── eventController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── Community.js
│   ├── Event.js
│   └── user.js
└── routes/
    ├── auth.routes.js
    ├── community.routes.js
    └── event.routes.js
```

## Endpoints

### Autenticación
- `POST /api/auth/registro` - Registro de usuario
- `POST /api/auth/login` - Login de usuario

### Eventos
- `GET /api/events` - Listar eventos
- `POST /api/events` - Crear evento
- `PUT /api/events/:id` - Actualizar evento
- `DELETE /api/events/:id` - Eliminar evento

### Comunidades
- `GET /api/communities` - Listar comunidades
- `POST /api/communities` - Crear comunidad
- `PUT /api/communities/:id` - Actualizar comunidad
- `DELETE /api/communities/:id` - Eliminar comunidad

## Frontend

El frontend de Angular se encuentra en: **`c:\xampp\htdocs\NEXOWEB`**

Para instrucciones de instalación y ejecución del frontend, consulta [NEXOWEB README](../NEXOWEB/README_SETUP.md)

## Dependencias

- Express.js - Framework web
- Mongoose - ODM para MongoDB
- JWT - Autenticación
- bcryptjs - Encriptación de contraseñas
- CORS - Control de acceso
- dotenv - Variables de entorno

## Tecnologías

- Node.js
- Express
- MongoDB
- JWT Authentication

## Licencia

ISC
