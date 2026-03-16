// Node.js Backend Server for Dynamic Gallery Loading
// Install required packages: npm install express cors fs path

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const os = require('os');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files

// Get Downloads folder path
const downloadsPath = path.join(os.homedir(), 'Downloads');

// API endpoint to get today's images and videos from Downloads
app.get('/api/gallery', (req, res) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Read Downloads folder
        const files = fs.readdirSync(downloadsPath);
        
        const mediaFiles = {
            images: [],
            videos: []
        };

        files.forEach(file => {
            const filePath = path.join(downloadsPath, file);
            const stats = fs.statSync(filePath);
            
            // Check if file was modified today
            const fileDate = new Date(stats.mtime);
            fileDate.setHours(0, 0, 0, 0);
            
            if (fileDate.getTime() === today.getTime()) {
                const ext = path.extname(file).toLowerCase();
                
                // Image files
                if (['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext)) {
                    mediaFiles.images.push({
                        name: file,
                        path: filePath,
                        url: `/api/file/${encodeURIComponent(file)}`,
                        type: 'image'
                    });
                }
                
                // Video files
                if (['.mp4', '.webm', '.mov', '.avi'].includes(ext)) {
                    mediaFiles.videos.push({
                        name: file,
                        path: filePath,
                        url: `/api/file/${encodeURIComponent(file)}`,
                        type: 'video'
                    });
                }
            }
        });

        res.json(mediaFiles);
    } catch (error) {
        console.error('Error reading Downloads folder:', error);
        res.status(500).json({ error: 'Failed to read Downloads folder' });
    }
});

// Serve individual files from Downloads
app.get('/api/file/:filename', (req, res) => {
    try {
        const filename = decodeURIComponent(req.params.filename);
        const filePath = path.join(downloadsPath, filename);
        
        if (fs.existsSync(filePath)) {
            res.sendFile(filePath);
        } else {
            res.status(404).json({ error: 'File not found' });
        }
    } catch (error) {
        console.error('Error serving file:', error);
        res.status(500).json({ error: 'Failed to serve file' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Gallery API available at http://localhost:${PORT}/api/gallery`);
});
