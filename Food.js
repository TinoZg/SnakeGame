class Food {
    constructor() {
        this.x = 300;
        this.y = 300;
        this.size = canvas.width / 60;
    }
    show() {
        ctx.fillStyle = 'rgb(0,255,255)';
	    ctx.fillRect(this.x, this.y, this.size, this.size);
    }    



}