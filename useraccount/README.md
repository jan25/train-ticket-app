## useraccount service

### Endpoints

- `POST /api/register`

  - Creates new user account

- `POST /api/login`

  - Verifies email, password combination
  - Returns error for invalid combination
  - Returns user ID for valid combination

- `GET /api/users/{userID}/profile`

  - Returns user details for userID

- `POST /api/users/{userID}/profile`

  - Modifies and returns user details for userID
