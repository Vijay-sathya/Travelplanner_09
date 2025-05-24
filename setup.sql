sql
-- Create destinations table
CREATE TABLE destinations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    country TEXT NOT NULL,
    description TEXT,
    price_range TEXT CHECK(price_range IN ('budget', 'moderate', 'expensive')),
    best_season TEXT,
    activities TEXT, -- JSON string for simplicity
    image_url TEXT,
    rating REAL CHECK(rating >= 0 AND rating <= 5),
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP
);


