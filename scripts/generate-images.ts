import { generateAllImages } from '../src/utils/generateProjectImages';

console.log('Generando imágenes de proyectos...');
generateAllImages()
  .then(() => {
    console.log('¡Imágenes generadas exitosamente!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error al generar las imágenes:', error);
    process.exit(1);
  }); 