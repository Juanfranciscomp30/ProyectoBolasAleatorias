class Bola {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radio = 10;
        this.dirX = (Math.random() * 2) - 1;
        this.dirY = (Math.random() * 2) - 1;
        this.velocidad = 5;
    }

    dibujar() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.closePath();
    }

    mover() {
        this.x += this.dirX * this.velocidad;
        this.y += this.dirY * this.velocidad;

        /* SI chocan con las paredes ponemos -1 para que reboten */
        if (this.x - this.radio < 0 || this.x + this.radio > canvas.width) {
            this.dirX *= -1;
        }
        if (this.y - this.radio < 0 || this.y + this.radio > canvas.height) {
            this.dirY *= -1;
        }
    }
}
