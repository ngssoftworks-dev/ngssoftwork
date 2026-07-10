import fs from 'fs';
import path from 'path';

const componentsDir = path.join(process.cwd(), 'src', 'components');

fs.readdirSync(componentsDir).forEach(file => {
    if (file.endsWith('.jsx')) {
        const filePath = path.join(componentsDir, file);
        let content = fs.readFileSync(filePath, 'utf-8');
        
        let modified = false;
        if (content.includes('src="/logo/')) {
            content = content.replace(/src="\/logo\//g, 'src="./logo/');
            modified = true;
        }
        if (content.includes('src="/profile/')) {
            content = content.replace(/src="\/profile\//g, 'src="./profile/');
            modified = true;
        }
        
        if (modified) {
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`Updated image paths in ${file}`);
        }
    }
});

console.log('Finished updating image paths.');
