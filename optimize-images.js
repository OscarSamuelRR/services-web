// const sharp = require('sharp');
// const fs = require('fs');
// const path = require('path');

// const inputDir = './public/images';
// const outputDir = './public/images';

// fs.readdirSync(inputDir).forEach(file => {
//   if (file.match(/\.(jpg|jpeg|png)$/i)) {
//     const outputFile = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
//     if (fs.existsSync(outputFile)) {
//       console.log(`⏭️ ${file} ya existe, saltando...`);
//       return;
//     }
//     sharp(path.join(inputDir, file))
//       .webp({ quality: 80 })
//       .toFile(outputFile)
//       .then(() => console.log(`✅ ${file} → WebP`))
//       .catch(err => console.error(`❌ ${file}:`, err));
//   }
// });

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/images';
const outputDir = './public/images';

fs.readdirSync(inputDir).forEach(file => {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {

    const originalPath = path.join(inputDir, file);
    const webpPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

    if (fs.existsSync(webpPath)) {
      console.log(`⏭️ ${file} ya existe, saltando...`);
      return;
    }

    sharp(originalPath)
      .webp({ quality: 65, effort: 6 })
      .withMetadata(false)
      .toFile(webpPath)
      .then(() => {
        const originalSize = fs.statSync(originalPath).size;
        const webpSize = fs.statSync(webpPath).size;

        if (webpSize >= originalSize) {
          fs.unlinkSync(webpPath);
          console.log(`⚠️ ${file} WebP más pesado, se conserva original`);
        } else {
          console.log(`✅ ${file} optimizado correctamente`);
        }
      })
      .catch(err => console.error(`❌ ${file}:`, err));
  }
});