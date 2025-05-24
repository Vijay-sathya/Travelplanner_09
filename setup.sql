CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL, -- In real app, this would be hashed
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

