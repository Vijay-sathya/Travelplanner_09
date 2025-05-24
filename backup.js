javascript
const fs = require('fs');
const path = require('path');

class BackupRestore {
    constructor() {
        this.dataFolder = path.join(__dirname, '../json-storage');
        this.backupFolder = path.join(__dirname, 'backups');
        
        // Create backup folder if it doesn't exist
        if (!fs.existsSync(this.backupFolder)) {
            fs.mkdirSync(this.backupFolder);
        }
    }


