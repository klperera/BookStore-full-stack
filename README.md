# 📚 Book Management System

A full-stack web application to manage books using Angular (frontend) and ASP.NET Core (backend). Users can:

- 🔍 View all books
- 🆔 Search a book by ID
- ➕ Add a new book
- ✏️ Update book details
- 🗑️ Delete a book

---

## 🧩 Technologies Used

### 🖥️ Frontend
- [Angular 17+](https://angular.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
- Standalone component architecture (no NgModules)

### 🌐 Backend
- ASP.NET Core Web API
- CORS-enabled
- RESTful endpoints

---

## 🚀 Getting Started

```bash
BookStore-full-stack/
├── BookStore.API/                # ASP.NET Core Web API
│   ├── Controllers/
│   ├── Models/
│   └── Program.cs
└── book-management/               # Angular app
    ├── src/app/
    │   ├── components/
    │   ├── services/
    │   ├── models/
    └── tailwind.config.js
```


### 📁 Installation

####  Backend (ASP.NET Core)

```bash
cd BookStore.API
dotnet restore
dotnet build
dotnet run
```

#### Frontend (Angular + Tailwind CSS)


```bash
cd book-management
npm install
ng serve
```

### 🔗 API Endpoints

| **HTTP Method** | **Endpoint**            | **Description**         |
|-----------------|-------------------------|-------------------------|
| `GET`           | `/api/books`            | Retrieve all books      |
| `GET`           | `/api/books/{id}`       | Retrieve a book by ID   |
| `POST`          | `/api/books`            | Add a new book          |
| `PUT`           | `/api/books/{id}`       | Update an existing book |
| `DELETE`        | `/api/books/{id}`       | Delete a book by ID     |

