# NEXO Frontend - Angular Application

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── app/
│   │   ├── modules/
│   │   │   ├── login/              # Módulo de Login (TÚ)
│   │   │   │   ├── login.module.ts
│   │   │   │   ├── login-routing.module.ts
│   │   │   │   └── components/
│   │   │   ├── eventos/            # Módulo de Eventos (BRAYAN)
│   │   │   │   ├── eventos.module.ts
│   │   │   │   ├── eventos-routing.module.ts
│   │   │   │   └── components/
│   │   │   └── comunidades/        # Módulo de Comunidades (SANTIAGO)
│   │   │       ├── comunidades.module.ts
│   │   │       ├── comunidades-routing.module.ts
│   │   │       └── components/
│   │   ├── shared/                 # Módulo Compartido (BRAYAN)
│   │   │   ├── shared.module.ts
│   │   │   └── components/
│   │   │       ├── button/
│   │   │       ├── modal/
│   │   │       ├── loader/
│   │   │       ├── navbar/         (SANTIAGO)
│   │   │       ├── sidebar/        (SANTIAGO)
│   │   │       └── footer/         (SANTIAGO)
│   │   ├── services/               # Servicios (TÚ - Auth)
│   │   │   ├── http-interceptor.service.ts
│   │   │   ├── auth.service.ts     (TÚ)
│   │   │   ├── eventos.service.ts  (BRAYAN)
│   │   │   └── comunidades.service.ts (SANTIAGO)
│   │   ├── app.module.ts           ✅ LISTO
│   │   ├── app-routing.module.ts   ✅ LISTO
│   │   ├── app.component.ts        ✅ LISTO
│   │   ├── app.component.html      ✅ LISTO
│   │   └── app.component.css       ✅ LISTO
│   ├── environments/
│   │   ├── environment.ts          ✅ LISTO (desarrollo)
│   │   └── environment.prod.ts     ✅ LISTO (producción)
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── tsconfig.json
├── package.json                    ✅ LISTO
└── README.md

```

## 🚀 Instalación y Configuración

### 1. Crear el proyecto Angular (si no existe)
```bash
cd frontend
ng new nexo-frontend
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar el servidor
```bash
npm start
# O equivalentemente: ng serve
```

La aplicación estará disponible en `http://localhost:4200`

## 📋 Configuración del Backend

El archivo `environment.ts` está configurado para conectarse al backend:

**Desarrollo:**
- API URL: `http://localhost:3000`
- Archivo: `src/environments/environment.ts`

**Producción:**
- API URL: `https://api.nexo.com`
- Archivo: `src/environments/environment.prod.ts`

### Cambiar la URL del API

Si tu backend corre en otro puerto/URL, edita:
- `src/environments/environment.ts` (desarrollo)
- `src/environments/environment.prod.ts` (producción)

## 🔐 Autenticación

El proyecto incluye un **HttpInterceptor** que:
- ✅ Agrega automáticamente el token Bearer a todos los requests
- ✅ Maneja errores 401/403 (token expirado)
- ✅ Guarda el token en localStorage

## 📦 Módulos

### LoginModule (TÚ)
- Componentes: Login, Registro
- Servicio: AuthService
- Rutas: /login, /register

### EventosModule (BRAYAN)
- Componentes: ListaEventos, CrearEvento, EditarEvento, DetalleEvento
- Servicio: EventosService
- Rutas: /eventos, /eventos/crear, /eventos/:id

### ComunidadesModule (SANTIAGO)
- Componentes: ListaComunidades, CrearComunidad, EditarComunidad, DetalleComunidad
- Servicio: ComunidadesService
- Rutas: /comunidades, /comunidades/crear, /comunidades/:id

## 🔄 Flujo de Routing

```
/ (raíz)
├── /login → LoginModule (pública)
├── /register → LoginModule (pública)
├── /eventos → EventosModule (protegida)
├── /comunidades → ComunidadesModule (pública)
└── ** → Redirige a /login
```

## 📝 Próximos Pasos

1. **TÚ:** Implementar módulo de Login + servicios de autenticación
2. **BRAYAN:** Crear SharedModule + Componentes reutilizables
3. **SANTIAGO:** Crear Layout principal (Navbar, Sidebar, Footer)
4. Luego: Cada uno en su módulo específico

## 🧪 Testing

Para ejecutar tests:
```bash
npm test
```

Para build de producción:
```bash
npm run build
```

---

**Última actualización:** 20 de Mayo de 2026
