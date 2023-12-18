# Chat-ARGXP2-App

## Overview

Chat-ARGXP2-App is a real-time chat application enabling authenticated users to engage in conversations. The application is built using Node.js, Express, Socket.IO, and MongoDB, and is containerized using Docker for easy setup and deployment.

## Prerequisites

- Node.js
- npm
- Docker
- MongoDB

## Installation and Setup

1. Clone the repository
2. Navigate to the project directory
3. Set up environment variables:

- Create a `.env` file in the project root.
- Add the following variables:
  ```
  DB_URI=mongodb://mongo:27017/chatapp
  JWT_SECRET=jwt-secret
  PORT=3000
  ```

4. Ensure Docker is installed and running on your machine.
5. Build the Docker images: docker-compose build
6. Run the application using Docker Compose: docker-compose up
7. Use this link in your browser to test the application: http://localhost:3000/
