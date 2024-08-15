# Axtra Digital Agency Studio

Welcome to Axtra Digital Agency Studio! This is the frontend for the project, built with React. It provides a user interface to interact with the backend services, including user authentication and profile management.




## Live Demo Client

You can view the live client application here: [Axtra Digital Agency Live](https://axtra-digital-agency-studio.vercel.app//)

## Live Demo Server

The server for this application can be found here: [Axtra Digital Agency Server](https://kormo-bazar-server1.vercel.app/)

## Git Repository Client

You can view the client-side code here: [Axtra Digital Agency Client Repository](https://github.com/Mostafizur-Pro/kormoBazar/)

## Git Repository Server

You can view the server-side code here: [Axtra Digital Agency Server Repository](https://github.com/Mostafizur-Pro/kormoBazarServer1/)

## Features

- **View Job Posts**: Browse through a list of available job posts.
- **Filter Jobs**: Filter job posts by category.
- **Edit Jobs**: Edit job details if you are the owner of the job post.
- **Delete Jobs**: Delete job posts if you are the owner of the job post.

## Setup Instructions

### Frontend

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Mostafizur-Pro/kormoBazar.git
   ```

2. **Navigate to the frontend directory:**

   ```bash
   cd kormoBazar
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run start
   ```

### Backend

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Mostafizur-Pro/kormoBazarServer1.git
   ```

2. **Navigate to the backend directory:**

   ```bash
   cd kormoBazarServer1
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the server:**

   ```bash
   npm run dev
   ```

## API Endpoints

1. **Job Post API:**

   - **GET /api/v1/jobs**: Retrieve all job posts.
   - **GET /api/v1/jobs?category={category}**: Retrieve job posts filtered by category.
   - **PUT /api/v1/jobs/update/:id**: Update a specific job post.
   - **DELETE /api/v1/jobs/delete/:id**: Delete a specific job post.

2. **User API:**

   - **POST /api/v1/users/signup**: Register a new user.
   - **GET /api/v1/users/email/:email**: Retrieve user information by email.

3. **Auth API:**
   - **POST /api/v1/auth/login**: Login user.
   - **GET /api/v1/auth/userinfo**: Find user by token.

## Contributing

1. **Fork the repository**.
2. **Create a new branch** for your feature or bug fix.
3. **Commit your changes**.
4. **Push your branch** to GitHub.
5. **Open a pull request**.

## Contact

If you have any questions, feel free to reach out at [mostafizur0195@gmail.com](mailto:mostafizur0195@gmail.com) or call me at [01950165017](tel:01950165017).

You can also connect with me on:

- **WhatsApp:** [Click to chat](https://wa.me/01950165017)
- **Facebook:** [Mostafizur Rahman](https://www.facebook.com/mostafizur.proo/)
- **LinkedIn:** [Mostafizur Rahman](https://www.linkedin.com/in/mostafizur-pro/)
