![image](https://github.com/minaxijoshi3101/seh-webapp/assets/25228357/e0172ee6-2f78-400c-bacb-1c48c6d035aa)

# SEH-webapp - This is a web application built using Node.js for providing educational resources and services.

## Features

- **Enrollment**: Enroll in courses and track progress. Students can enroll themselves for a demo or join a new batch using the 'Enroll Now' button conveniently located on the homepage.
- **About Us**: About SEH and Brief description of Instructors.
- **Subjects**: Description of subjects
- **Videos**: Access the comprehensive collection of educational videos covering various topics of SEH.

## Installation

1. **Clone the repository:**

   ```bash
   https://github.com/minaxijoshi3101/seh-webapp.git

   ```

2. **Install dependencies:**

   ```bash
   cd seh-webapp
   npm install

   ```

3. **Start the server:**

   ```bash
   npm start
   ```

## Using Docker

Dockerfile is available with source code.
To start the application as a container - nginx web server is used

1. create and image out of Dockerfile
   docker build -t seh-webapp:1.0.0 .
2. Spin up a container out of it:
   docker run -dt --name seh-webapp-container -p 80:80 seh-webapp:1.0.0

Access using IP:80

## \*\*\*\*Technologies Used

#Frontend: HTML, CSS, JavaScript, Bootstrap
#Backend: Node.js

\*\*\*To automate the deployment process - ` https://github.com/minaxijoshi3101/devops_automation_mas.git repo` has been created.
\*\*\*To Deploy a React WebApp in NGINX - ` https://medium.com/@minaxijoshi3101/deploy-a-react-webapp-in-nginx-webserver-19c31168fa0a `.
