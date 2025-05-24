
getAllDestinations() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM destinations ORDER BY rating DESC';
            this.db.all(sql, [], (err, rows) => {

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

    getDestinationById(id) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM destinations WHERE id = ?';
            this.db.get(sql, [id], (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row)

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


