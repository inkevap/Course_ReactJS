# Course_ReactJS

🇪🇸 [Español](#-español) | 🇬🇧 [English](#-english)

---

## 🇪🇸 Español

Proyecto de práctica del curso de **ReactJS**: una aplicación de lista de contactos con formularios de inicio de sesión y registro.

### 🚀 Funcionalidades

- 🔐 Formularios de inicio de sesión y registro (`Loginform.jsx`, `Registerform.jsx`).
- 📇 Listado de contactos (`contact_list.jsx`, `contact.jsx`).
- ➕ Creación de nuevos contactos (`newContact.jsx`).
- 🧭 Navegación entre páginas: Login, Registro, Contactos, y página 404 (`NotFoundPage.jsx`).
- 🧱 Separación entre componentes "puros" (presentación) y "contenedor" (lógica).

### 🔧 Tecnologías

- React (Create React App)
- JSX
- SCSS

### 🏗️ Estructura del proyecto

```
src/
├── Components/
│   ├── container/       # Componentes con lógica (ej. contact_list)
│   └── pure/             # Componentes de presentación (ej. contact, forms/)
├── Pages/                 # Páginas: Login, Register, Contact, NotFound
├── models/                 # Clases de dominio (contact, users)
└── styles/                 # Estilos SCSS
```

### 🚀 Cómo ejecutar

```bash
npm install
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 🧪 Pruebas

```bash
npm test
```

### 📄 Licencia

Proyecto académico.

---

## 🇬🇧 English

A practice project from the **ReactJS** course: a contact list application with login and registration forms.

### 🚀 Features

- 🔐 Login and registration forms (`Loginform.jsx`, `Registerform.jsx`).
- 📇 Contact listing (`contact_list.jsx`, `contact.jsx`).
- ➕ Creating new contacts (`newContact.jsx`).
- 🧭 Page navigation: Login, Register, Contacts, and a 404 page (`NotFoundPage.jsx`).
- 🧱 Separation between "pure" (presentation) components and "container" (logic) components.

### 🔧 Technologies

- React (Create React App)
- JSX
- SCSS

### 🏗️ Project Structure

```
src/
├── Components/
│   ├── container/       # Components with logic (e.g. contact_list)
│   └── pure/             # Presentation components (e.g. contact, forms/)
├── Pages/                 # Pages: Login, Register, Contact, NotFound
├── models/                 # Domain classes (contact, users)
└── styles/                 # SCSS styles
```

### 🚀 How to Run

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 🧪 Testing

```bash
npm test
```

### 📄 License

Academic project.
