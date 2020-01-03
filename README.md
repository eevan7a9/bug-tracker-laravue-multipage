# bug-tracker-system

> A FullStack application that manages and keeps track of all the bugs/issue reported on a project, a multi role application with \"Admin\", \"Developer\" & \"Tester\", allow tester to enter bug reports. & Developer to take care of the bug.

## Backend Quick Start

> inside voting-backend/

```
copy .env.example
paste as .env
```

```


# Install Dependencies
composer install

# Run Migrations
php artisan migrate

# Add database dummies
php artisan db:seed

# Install Laravel Passport
php  artisan passport:install

# key
php artisan key:generate
```

### Add database connection and info

    ```
     DB_CONNECTION=mysql
     DB_HOST=127.0.0.1
     DB_PORT=3306
     DB_DATABASE=database_name
     DB_USERNAME=root
     DB_PASSWORD=database_password
    ```

\*\* Frontend Quick start

```
# install npm dependencies
 npm install

# set base url of you're backend
    resource/js/app.js
    axios.defaults.baseURL = "http://localhost:8000/api/";
```
