import fs from 'fs';
import path from 'path';

function buildDataJs() {
  const jsonPath = './public/alkitab_db.json';
  if (!fs.existsSync(jsonPath)) return;

  const data = fs.readFileSync(jsonPath, 'utf8');
  const jsContent = `window.LOCAL_ALKITAB_DB = ${data};`;
  
  fs.writeFileSync('./alkitab_data.js', jsContent, 'utf8');
  fs.writeFileSync('./public/alkitab_data.js', jsContent, 'utf8');
  fs.writeFileSync('./alkitab_db.json', data, 'utf8');
  console.log(`Updated alkitab_data.js (${(data.length / 1024).toFixed(1)} KB)`);
}

buildDataJs();
