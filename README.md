# Recruitment App

A full-stack web application for managing recruitment stages and statuses. Built with **React** for the frontend, **Node.js + Express** for the backend, and **MySQL** for the database.

---

## Features

1. **Stages Management**:
   - Create, update, and delete stages.
   - Each stage represents a phase in the recruitment process (e.g., "Requirement Creation", "Sourcing and Screening").

2. **Statuses Management**:
   - Create, update, and delete statuses under each stage.
   - Each status represents a step within a stage (e.g., "Requirement Created", "Resumes Received").

3. **User-Friendly Interface**:
   - Add stages and statuses using forms.
   - View all stages and their associated statuses in a structured list.

4. **CRUD Operations**:
   - Full CRUD (Create, Read, Update, Delete) functionality for both stages and statuses.

---

## Technologies Used

- **Frontend**:
  - React
  - Axios (for API calls)
  - CSS (for styling)

- **Backend**:
  - Node.js
  - Express.js
  - MySQL (for database)

- **Tools**:
  - Postman (for API testing)
  - MySQL Workbench (for database management)

---

## Prerequisites

Before running the project, ensure you have the following installed:

1. **Node.js** (v16 or higher)
2. **MySQL** (v8.0 or higher)
3. **npm** (Node Package Manager)

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/recruitment-app.git
cd recruitment-app
```

### 2. Set Up the Backend

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the MySQL database:
   - Create a database named `recruitment_db`.
   - Run the following SQL queries to create the required tables:
     ```sql
     CREATE TABLE stages (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL
     );

     CREATE TABLE statuses (
       id INT AUTO_INCREMENT PRIMARY KEY,
       stage_id INT,
       name VARCHAR(255) NOT NULL,
       FOREIGN KEY (stage_id) REFERENCES stages(id) ON DELETE CASCADE
     );
     ```

4. Update the database configuration in `backend/config/db.js`:
   ```javascript
   const pool = mysql.createPool({
     host: 'localhost',
     user: 'root', // Replace with your MySQL username
     password: 'password', // Replace with your MySQL password
     database: 'recruitment_db',
     waitForConnections: true,
     connectionLimit: 10,
     queueLimit: 0
   });
   ```

5. Start the backend server:
   ```bash
   npm start
   ```
   The backend will run on `http://localhost:5000`.

---

### 3. Set Up the Frontend

1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3000`.

---

## API Endpoints

### Stages
- **GET /api/stages**: Get all stages.
- **POST /api/stages**: Create a new stage.
- **PUT /api/stages/:id**: Update a stage.
- **DELETE /api/stages/:id**: Delete a stage.

### Statuses
- **GET /api/stages/:stageId/statuses**: Get all statuses under a stage.
- **POST /api/stages/:stageId/statuses**: Create a new status under a stage.
- **PUT /api/statuses/:id**: Update a status.
- **DELETE /api/statuses/:id**: Delete a status.

---

## Folder Structure

```
recruitment-app/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── stageController.js
│   ├── models/
│   │   └── Stage.js
│   ├── routes/
│   │   └── stageRoutes.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── StageForm.js
│   │   │   ├── StageList.js
│   │   │   ├── StatusForm.js
│   │   │   ├── UpdateStageForm.js
│   │   │   └── UpdateStatusForm.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── App.css
│   ├── package.json
│   └── .env
└── README.md
```

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For any questions or feedback, feel free to reach out:

- **Email**: princethk787@gmail.com
- **GitHub**: [princethk](https://github.com/princethk)

---

Enjoy using the Recruitment App! 🚀

--- 

Let me know if you need further customization or additional sections!