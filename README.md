
# authentication


Project aimed at learning about Docker and Git actions.



## Stack used

**Backend:** node, fastify, prisma, zod

**Database:** postgres

**DevOps:**  docker


## Install Guide

### Execute the project `docker`

- Create a container postgres

```bash
docker run --name "radom" -p 5432:5432 -e DEFAULT_ENCODING="UTF8" -e POSTGRES_USER="user" -e POSTGRES_PASSWORD="pass" -e POSTGRES_DB="db" -d postgres
```

- Change `env_file`

DATABASE_URL="postgresql://user:pass@postgres:5432/db?schema=public"

POSTGRES_DB='db'  
POSTGRES_USER='user'  
POSTGRES_PASSWORD='pass'

### Clone this repository
```bash
  git clone https://github.com/1uri-silva/authentication.git
```
### Enter the directory and install dependencies
```bash
  cd authentication && npm install
``` 

### Execute the project `dev`
```bash
  npx prisma migrate dev && npm start dev
```

### Execute the project `docker`

```bash
  docker compose up --build
``` 
## API documentation

#### Create a new user

```http
  POST /user/new
```

|   body   |   type   |
| :---------- | :--------- | 
| `email` | `string`
| `password` | `string`

#### Authenticate user

```http
  POST /user/authenticate
```

|   body   |   type   |
| :---------- | :--------- | 
| `email` | `string`
| `password` | `string`

#### Return all data users

```http
  GET /user/list
```

|   header   |   type   | 
| :---------- | :--------- | 
| `Authorization` | `string jwt`


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://deploy-portfolio-8vdl.onrender.com)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/iuri-rodrigues/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/silva_3131)

