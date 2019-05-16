class Food {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.size = canvas.width / 60;
    }
    show() {
        ctx.fillStyle = 'rgb(0,255,255)';
	    ctx.fillRect(this.x+1, this.y+1, this.size-1, this.size-1);
    }    



}