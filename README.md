# Sweeft-Assignment

## Usage

Create .env and add your MONGO_URI,PORT and JWT_SECRET.

### Install dependencies

```
# Backend deps
npm install

# Frontend deps
cd frontend
npm install
```

## Frontend

- **src/**

   - **/app/** - store used for managing global state
  - **/components/** - JSX components (LoginInput & RegisterInput etc.)
  - **/features/auth/** - State management.
  - **/pages/** - pages (Login & Register pages,etc.)
  
  ## Backend
  
     - **/config/** - connection to the database
  - **/controllers/** - user&call controllers.
  - **/middleware/** - authentication and error middleware
  - **/models/** - call&user schemas
  - **/routes/** - call&user routes.
  
  
