
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



CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL, -- In real app, this would be hashed
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP
);



    {
      "id": 4,
      "name": "Cairo, Egypt",
      "country": "Egypt",
      "description": "Ancient history and pyramids",
      "price_range": "budget",
      "best_season": "winter",
      "activities": ["pyramids", "museums", "nile cruise", "history"],
      "image_url": "cairo.jpg",
      "rating": 4.5
    }
  ]
}

CREATE -- Create favorites table
TABLE favorites (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    destination_id INTEGER,
    added_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (destination_id) REFERENCES destinations (id),
    UNIQUE(user_id, destination_id)
);

-- Insert sample data
INSERT INTO destinations (name, country, description, price_range, best_season, activities, image_url, rating) VALUES
('Paris, France', 'France', 'City of lights with amazing architecture', 'expensive', 'spring', '["museums", "cafes", "shopping", "monuments"]', 'paris.jpg', 4.8),
'Bali, Indonesia', 'Indonesia', 'Tropical paradise with beaches and culture', 'moderate', 'dry season', '["beaches", "temples", "surfing", "yoga"]', 'bali.jpg', 4.7),
('Tokyo, Japan', 'Japan', 'Modern city with traditional culture', 'expensive', 'spring', '["technology", "food", "temples", "shopping"]', 'tokyo.jpg', 4.9),
('Cairo, Egypt', 'Egypt', 'Ancient history and pyramids', 'budget', 'winter', '["pyramids", "museums", "nile cruise", "history"]', 'cairo.jpg', 4.5);

INSERT INTO users (username, email, password) VALUES
('traveler123', 'john@example.com', 'password123'),
('wanderlust', 'sarah@example.com', 'mypassword');

INSERT INTO trips (user_id, destination_id, trip_name, start_date, end_date, budget, notes, status) VALUES
(1, 1, 'Paris Adventure', '2024-05-15', '2024-05-22', 2000, 'Visit Eiffel Tower and Louvre', 'planned'),
(2, 2, 'Bali Relaxation', '2024-07-10', '2024-07-20', 1500, 'Beach time and temple visits', 'booked');

INSERT INTO favorites (user_id, destination_id) VALUES
(1, 1), (1, 3), (2, 2), (2, 4);
INSERT INTO favorites (user_id, destination_id) VALUES
(1, 4), (4, 3), (2, 1), (3, 4);

