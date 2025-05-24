getAllDestinations() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM destinations ORDER BY rating DESC';
            this.db.all(sql, [], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

