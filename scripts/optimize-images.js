// scripts/optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageSizes = {
  hero: { width: 1200, height: 800 },
  slide: { width: 800, height: 600 },
  feature: { width: 400, height: 300 },
  logo: { width: 200, height: 200 }
};

const sourceDir = 'src/assets/images';
const outputDir = 'public/images';

// Créer le dossier de sortie s'il n'existe pas
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(inputPath, fileName, type) {
  const size = imageSizes[type];
  
  try {
    await sharp(inputPath)
      .resize(size.width, size.height, {
        fit: 'cover',
        withoutEnlargement: true
      })
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, `${fileName}-${type}.webp`));

    console.log(`✅ Optimized: ${fileName}-${type}.webp`);
  } catch (error) {
    console.error(`❌ Error optimizing ${fileName}:`, error);
  }
}

async function processImages() {
  const files = fs.readdirSync(sourceDir);

  for (const file of files) {
    const inputPath = path.join(sourceDir, file);
    const fileName = path.parse(file).name;

    // Images du slider principal
    if (fileName.includes('zyro')) {
      await optimizeImage(inputPath, fileName, 'hero');
    }
    // Images des caractéristiques
    else if (fileName.includes('gt') || fileName.includes('spider') || fileName.includes('superfast')) {
      await optimizeImage(inputPath, fileName, 'feature');
    }
    // Logos
    else if (fileName.includes('logo') || fileName.includes('search') || fileName.includes('user')) {
      await optimizeImage(inputPath, fileName, 'logo');
    }
    // Autres images
    else {
      await optimizeImage(inputPath, fileName, 'slide');
    }
  }
}

processImages().then(() => {
  console.log('🎉 Image optimization complete!');
});