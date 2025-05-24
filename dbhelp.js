javascript
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

class DatabaseHelper {
    constructor() {
        this.dbPath = path.join(__dirname, 'database.db');
        this.db = null;
    }

