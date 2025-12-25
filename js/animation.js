function animateDinosaur(dinosaur) {
    const canvas = document.getElementById('simulationCanvas');
    const ctx = canvas.getContext('2d');
    let frame = 0;

    function drawFrame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        dinosaur.updatePosition();
        dinosaur.draw(ctx);
        frame++;
        if (frame < dinosaur.totalFrames) {
            requestAnimationFrame(drawFrame);
        }
    }

    drawFrame();
}

Dinosaur.prototype.updatePosition = function() {
    this.x += this.speed * Math.cos(this.angle);
    this.y += this.speed * Math.sin(this.angle);
    this.angle += this.gaitAngleChange;
};

Dinosaur.prototype.draw = function(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.drawImage(this.image, -this.size / 2, -this.size / 2, this.size, this.size);
    ctx.restore();
};