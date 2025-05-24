    searchDestinations(searchTerm) {
        return new Promise((resolve, reject) => {
            const sql = `
                SELECT * FROM destinations 
                WHERE name LIKE ? OR country LIKE ? OR description LIKE ?
                ORDER BY rating DESC
            `;
            const term = `%${searchTerm}%`;
            this.db.all(sql, [term, term, term], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    // Close database connection
    close() {
        return new Promise((resolve, reject) => {
            this.db.close((err) => {
                if (err) {
                    reject(err);
                } else {
                    console.log('Database connection closed');
                    resolve();
                }
            });
        });
    }
}

module.exports = DatabaseHelper;


