document.addEventListener('DOMContentLoaded', () => {
    const simulationForm = document.getElementById('simulation-form');
    const resetButton = document.getElementById('reset-button');
    const animationCanvas = document.getElementById('animation-canvas');
    const ctx = animationCanvas.getContext('2d');

    let numberOfFeet = 2;
    let gaitType = 'alternating';
    let terrainType = 'soft-mud';
    let speed = 1;
    let size = 1;

    function drawDinosaur() {
        ctx.clearRect(0, 0, animationCanvas.width, animationCanvas.height);
        ctx.save();
        ctx.scale(size, size);

        // Draw dinosaur based on parameters
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(150, 50);
        ctx.lineTo(150, 100);
        ctx.lineTo(50, 100);
        ctx.closePath();
        ctx.fillStyle = 'green';
        ctx.fill();

        // Draw feet
        for (let i = 0; i < numberOfFeet; i++) {
            ctx.beginPath();
            ctx.arc(50 + i * 100, 100, 10, 0, Math.PI * 2);
            ctx.fillStyle = 'brown';
            ctx.fill();
        }

        ctx.restore();
    }

    function updateParameters(event) {
        event.preventDefault();
        numberOfFeet = parseInt(document.getElementById('feet-count').value, 10);
        gaitType = document.getElementById('gait-type').value;
        terrainType = document.getElementById('terrain-type').value;
        speed = parseFloat(document.getElementById('speed').value);
        size = parseFloat(document.getElementById('size').value);
        drawDinosaur();
    }

    function resetParameters() {
        simulationForm.reset();
        numberOfFeet = 2;
        gaitType = 'alternating';
        terrainType = 'soft-mud';
        speed = 1;
        size = 1;
        drawDinosaur();
    }

    simulationForm.addEventListener('submit', updateParameters);
    resetButton.addEventListener('click', resetParameters);

    drawDinosaur();
});