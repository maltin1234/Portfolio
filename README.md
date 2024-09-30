#API Endpoints for portfolioapi (Todos)
List and Create Todos

URL: /api/todos/todos/
Method: GET (list all todos) / POST (create a new todo)
Description:
GET: Retrieves a list of all todos.
POST: Creates a new todo.
View: TodoListApiView
Example:

json
Copy code
GET /api/todos/todos/
json
Copy code
POST /api/todos/todos/
{
  "title": "Buy groceries",
  "project_description": "Shopping for the weekend",
  "completed": false,
  "user": 1
}
Retrieve, Update, Delete Todo by ID

URL: /api/todos/tod/<pk>/
Method: GET (retrieve) / PUT (update) / DELETE (delete)
Description:
GET: Retrieves the details of a todo by primary key (ID).
PUT: Updates the details of a todo by primary key (ID).
DELETE: Deletes a todo by primary key (ID).
View: TodoDetailApiView
Example:

json
Copy code
GET /api/todos/tod/1/
json
Copy code
PUT /api/todos/tod/1/
{
  "title": "Buy groceries",
  "project_description": "Shopping for the weekend",
  "completed": true
}
json
Copy code
DELETE /api/todos/tod/1/
Search Todos by Username

URL: /api/todos/todotitle
Method: GET
Description: Searches for todos based on a query parameter (username) in the request URL.
View: UserTodosSearchApiView
Example:

json
Copy code
GET /api/todos/todotitle?user=johndoe
API Endpoints for users (User Management)
Register a New User

URL: /api/users/register/
Method: POST
Description: Registers a new user.
View: RegisterView
Example:

json
Copy code
POST /api/users/register/
{
  "username": "johndoe",
  "password": "password123",
  "email": "john@example.com"
}
Get Profile Details

URL: /api/users/profile/
Method: GET
Description: Retrieves the profile details of the currently logged-in user.
View: ProfileDetailView
Example:

json
Copy code
GET /api/users/profile/
Get User Info

URL: /api/users/userinfo/
Method: GET
Description: Retrieves user information.
View: UserInfoApiView
Example:

json
Copy code
GET /api/users/userinfo/
Authentication Endpoints (JWT)
Obtain JWT Token

URL: /api/token/
Method: POST
Description: Obtain a JWT token for authentication.
View: TokenObtainPairView
Example:

json
Copy code
POST /api/token/
{
  "username": "johndoe",
  "password": "password123"
}
Refresh JWT Token

URL: /api/token/refresh/
Method: POST
Description: Refresh the JWT token.
View: TokenRefreshView
Example:

json
Copy code
POST /api/token/refresh/
{
  "refresh": "your_refresh_token"
}
Static Files and Media Handling
Media Files: If the project is running in debug mode, media files are served via:
URL: /media/
Configured in: settings.MEDIA_URL and settings.MEDIA_ROOT
By following the URLs and method conventions, you can easily interact with the API endpoints for both user management and todo operations in the portfolioapi project.






