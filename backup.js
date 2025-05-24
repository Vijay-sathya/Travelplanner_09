        try {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const backupName = `backup-${timestamp}`;
            const backupPath = path.join(this.backupFolder, backupName);
            
            // Create backup folder
            fs.mkdirSync(backupPath);
            
            // List of files to backup
            const filesToBackup = ['places.json', 'trips.json', 'users.json'];
            
            filesToBackup.forEach(filename => {
                const sourcePath = path.join(this.dataFolder, filename);
                const backupFilePath = path.join(backupPath, filename);
                
                if (fs.existsSync(sourcePath)) {
                    fs.copyFileSync(sourcePath, backupFilePath);
                    console.log(`✓ Backed up ${filename}`);
                } else {
                    console.log(`⚠ Warning: ${filename} not found`);
                }
            });

