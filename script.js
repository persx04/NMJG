let angle = 0;
const radius = 150;
const centerX = 200;  // La mitad del tamaño del contenedor (#flower-bouquet)
const centerY = 200;  // La mitad del tamaño del contenedor (#flower-bouquet)
let flowerCount = 0;

function addFlower() {
    const flowerBouquet = document.getElementById('flower-bouquet');
    const flower = document.createElement('img');
    flower.src = 'peonia.png';  // Asegúrate de tener una imagen 'flower.png' en la raíz del proyecto
    flower.classList.add('flower');

    // Calcular la posición en el círculo
    const x = centerX + radius * Math.cos(angle * (Math.PI / 180));
    const y = centerY + radius * Math.sin(angle * (Math.PI / 180));
    flower.style.left = `${x}px`;
    flower.style.top = `${y}px`;

    flowerBouquet.appendChild(flower);
// Forzar el reflujo para asegurar que la transición se aplique
    // eslint-disable-next-line no-unused-expressions
    flower.offsetWidth;

    // Cambiar la opacidad para mostrar la flor
    flower.style.opacity = '1';
    // Incrementar el ángulo para la siguiente flor
    angle += 30;  // Ajusta este valor para más o menos flores en el círculo
    flowerCount += 1;

    // Mostrar la imagen central si hay 12 flores
    if (flowerCount === 12) {
        const centralFlower = document.getElementById('central-flower');
        const button = document.getElementById('button-add');
        centralFlower.style.opacity = 1;
        button.style.display = 'none';
    }
}
