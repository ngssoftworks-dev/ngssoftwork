const fs = require('fs');
const filePath = 'src/components/Solutions.jsx';
let content = fs.readFileSync(filePath, 'utf-8');

content = content.replace(/<button type="button" className="btn btn-glass btn-premium booking-modal-trigger" data-service="Premium - (.*?)">Premium<\/button>/g, (match, p1) => {
    const encodedService = encodeURIComponent(p1);
    return `<a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20a%20Premium%20appointment%20for%20${encodedService}" target="_blank" rel="noreferrer" className="btn btn-glass btn-premium">Premium</a>`;
});

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Replaced all premium modal buttons with WhatsApp links.');
