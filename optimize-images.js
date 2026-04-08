const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/images';
const outputDir = './public/images';

fs.readdirSync(inputDir).forEach(file => {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    const outputFile = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    if (fs.existsSync(outputFile)) {
      console.log(`⏭️ ${file} ya existe, saltando...`);
      return;
    }
    sharp(path.join(inputDir, file))
      .webp({ quality: 80 })
      .toFile(outputFile)
      .then(() => console.log(`✅ ${file} → WebP`))
      .catch(err => console.error(`❌ ${file}:`, err));
  }
});