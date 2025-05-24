            const backupInfo = {
                created: new Date().toISOString(),
                files: filesToBackup,
                note: 'Automatic backup of travel planner data'
            };
            
            fs.writeFileSync(
                path.join(backupPath, 'backup-info.json'),
                JSON.stringify(backupInfo, null, 2)
            );
            
            console.log(`✅ Backup created successfully: ${backupName}`);
            return backupName;
            
        } catch (error) {
            console.error('❌ Backup failed:', error.message);
            throw error;
        }
    }

